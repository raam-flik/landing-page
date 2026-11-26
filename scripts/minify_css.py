"""Clean the built site (dist/) before it goes live. Run by scripts/cf-build.sh after copying.

Only the live copies change; the source pages keep their readable code and notes.
  1. <style> blocks are minified (PageSpeed "Minify CSS"): comments, line breaks and extra spaces go.
  2. HTML comments go.
  3. Comments inside inline <script> blocks go. Each script is checked with `node --check` afterwards;
     a script that fails the check, or any script when node isn't installed, keeps its original text.

The notes in comments name people (AG, Raam, …) and internal decisions, so they shouldn't be in the
public page source.

    python3 scripts/minify_css.py dist
"""
import glob, os, re, shutil, subprocess, sys, tempfile

NODE = shutil.which('node')


# ---------- CSS ----------
def minify_css(css):
    out, i, n = [], 0, len(css)
    while i < n:
        c = css[i]
        if c in '"\'':                                   # strings stay as they are
            j = i + 1
            while j < n and css[j] != c:
                j += 2 if css[j] == '\\' else 1
            out.append(css[i:j + 1]); i = j + 1; continue
        if css.startswith('/*', i):                      # comments go
            j = css.find('*/', i + 2)
            i = n if j < 0 else j + 2; continue
        if c in ' \t\r\n':                               # runs of whitespace become one space
            while i < n and css[i] in ' \t\r\n':
                i += 1
            out.append(' '); continue
        out.append(c); i += 1
    s = ''.join(out)
    parts = re.split(r'("(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\')', s)
    for k in range(0, len(parts), 2):                    # punctuation, outside strings only
        p = parts[k]
        p = re.sub(r'\s*([{};,])\s*', r'\1', p)
        p = re.sub(r':\s+', ':', p)
        p = p.replace(';}', '}')
        parts[k] = p
    return ''.join(parts).strip()


# ---------- JS comments ----------
REGEX_BEFORE = set('(,=:[!&|?{};+-*%<>~^')
REGEX_WORDS = ('return', 'typeof', 'case', 'do', 'else', 'in', 'of', 'new', 'delete', 'void', 'throw', 'yield', 'await')


def strip_js_comments(js):
    out, i, n = [], 0, len(js)
    stack = []                       # open template literals: brace depth inside each ${ }

    def prev_sig():
        k = len(out) - 1
        while k >= 0 and out[k] in ' \t\r\n':
            k -= 1
        return k

    while i < n:
        c = js[i]
        if stack and c == '}' and stack[-1] == 0:        # end of ${ … } inside a template
            stack.pop(); out.append(c); i += 1
            j = i                                        # continue the template text
            while j < n and js[j] != '`':
                if js[j] == '\\': j += 2; continue
                if js.startswith('${', j): break
                j += 1
            out.append(js[i:j])
            if j < n and js[j] == '`': out.append('`'); i = j + 1
            else: out.append('${'); stack.append(0); i = j + 2
            continue
        if stack and c == '{': stack[-1] += 1
        if stack and c == '}': stack[-1] -= 1
        if c in '"\'':
            j = i + 1
            while j < n and js[j] != c and js[j] != '\n':
                j += 2 if js[j] == '\\' else 1
            out.append(js[i:j + 1]); i = j + 1; continue
        if c == '`':
            j = i + 1
            while j < n and js[j] != '`':
                if js[j] == '\\': j += 2; continue
                if js.startswith('${', j): break
                j += 1
            out.append(js[i:j])
            if j < n and js[j] == '`': out.append('`'); i = j + 1
            else: out.append('${'); stack.append(0); i = j + 2
            continue
        if js.startswith('//', i):
            j = js.find('\n', i)
            i = n if j < 0 else j; continue
        if js.startswith('/*', i):
            j = js.find('*/', i + 2)
            i = n if j < 0 else j + 2
            out.append(' '); continue
        if c == '/':                                     # a regex literal, or division?
            k = prev_sig()
            before = ''.join(out[max(0, k - 7):k + 1]) if k >= 0 else ''
            is_regex = k < 0 or out[k] in REGEX_BEFORE or any(re.search(r'(^|[^\w$])' + w + r'$', before) for w in REGEX_WORDS)
            if is_regex:
                j, cls = i + 1, False
                while j < n and js[j] != '\n':
                    if js[j] == '\\': j += 2; continue
                    if js[j] == '[': cls = True
                    elif js[j] == ']': cls = False
                    elif js[j] == '/' and not cls: break
                    j += 1
                out.append(js[i:j + 1]); i = j + 1; continue
        out.append(c); i += 1
    return ''.join(out)


def node_ok(js):
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False, encoding='utf-8') as t:
        t.write(js); name = t.name
    try:
        return subprocess.run([NODE, '--check', name], capture_output=True).returncode == 0
    finally:
        os.remove(name)


def run(root):
    before = after = 0; kept = 0; checked = 0
    for f in glob.glob(os.path.join(root, '**', '*.html'), recursive=True):
        html = open(f, encoding='utf-8').read()
        new = re.sub(r'(<style[^>]*>)(.*?)(</style>)', lambda m: m.group(1) + minify_css(m.group(2)) + m.group(3), html, flags=re.S)
        new = re.sub(r'<!--(?!\[if).*?-->\n?', '', new, flags=re.S)

        def js(m):
            nonlocal kept, checked
            if not NODE or 'src=' in m.group(1) or 'ld+json' in m.group(1):
                return m.group(0)
            body = m.group(2); stripped = strip_js_comments(body)
            if stripped == body: return m.group(0)
            checked += 1
            if node_ok(stripped): return m.group(1) + stripped + m.group(3)
            kept += 1; return m.group(0)
        new = re.sub(r'(<script[^>]*>)(.*?)(</script>)', js, new, flags=re.S)
        before += len(html.encode()); after += len(new.encode())
        if new != html:
            open(f, 'w', encoding='utf-8').write(new)
    note = f'{checked} scripts cleaned, {kept} kept as they were' if NODE else 'node not found: script comments kept'
    print(f'cleaned {root}: {before - after:,} bytes saved ({before:,} -> {after:,}); {note}')


if __name__ == '__main__':
    run(sys.argv[1] if len(sys.argv) > 1 else 'dist')
