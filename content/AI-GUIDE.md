# AI guide: applying content edits to the pages

You are updating the FLIK landing page with text edits made in the Markdown files in `content/`. Change **text only**: never layout, styles, scripts, links or images, unless a `> Note:` explicitly asks for it.

## Files

| Content file | Page file |
|---|---|
| `content/00-menu-and-footer.md` | The `MENU` array and the footer script. They are duplicated in **all four** page files, so update every copy identically. |
| `content/01-homepage.md` | `index.html` |
| `content/02-checkout.md` | `checkout/index.html` |
| `content/03-shipping.md` | `shipping/index.html` |
| `content/04-merchant-cash-advance.md` | `funding/merchant-cash-advance/index.html` |

## How to find what changed

The edited Markdown is the new text. The **original** text is the version of the same file in this repository before the edit:

- If you have the git history, run `git diff` on `content/` (or compare with the last commit that touched the file).
- If you were only given the edited files, fetch the originals from `https://github.com/raam-flik/landing-page/tree/main/content`.

Compare line by line. Each line is `- **Label:** text`. A changed text means: find the old text in the page file and replace it with the new text.

## How to find the text in the page file

- Sections follow the page order. Each section has a hidden marker such as `<!-- html: Hero ... -->`. It matches an HTML comment `<!-- ===== Hero ... ===== -->` in the page file.
- Some text is in the HTML. Some is in JavaScript arrays near the end of the file (FAQ, steps, menu, tabs, cards). Search for the exact old string.
- **Grey part** is the `<span class="soft">` inside the heading above it.
- `Stat: 10M+ — shoppers …`: the part before `—` is the big number, the part after it is the caption.
- `A — B — C` on one line means several pieces of text inside one element (for example a step number, title and description). Keep the same number of parts.
- Text may contain HTML entities (`&amp;`, `&nbsp;`) or a `<br>`. Keep that markup and change only the words.
- A few lines are built by JavaScript from smaller parts, for example the city pairs `Jakarta – Denpasar` in the Shipping rate checker (`[['Jakarta','Denpasar'],…]`). Edit the parts.
- If the same text appears more than once, change only the one in the matching section, unless it is the shared menu or footer.

## Notes, new items and deletions

- A line starting with `> Note:` is an instruction from the editor. Follow it if you can. If it needs a design decision, list it in your summary instead of guessing.
- A **new line** in a list: add it using the same markup as its neighbours.
- A **deleted line**: remove that text and its element. Leave a list or grid at least as long as its design needs. If deleting would break the layout, say so instead.
- **Things to confirm:** the answers are information for you and the team. They are not page text, unless the answer gives new wording.

## After applying

1. Check that each page still loads with no errors in the browser console, at 1440px and 375px wide.
2. Check that page titles and descriptions (`<title>`, `<meta name="description">`) match the **Search results (SEO)** section. Also update the `canonical` and JSON-LD text if they repeat it.
3. Update the Markdown files so they match the pages again. That way the next round of edits starts from the right text.
4. Summarise what changed, page by page, and list any notes you couldn't apply.

## House style

English, calm and plain (stripe.com tone). Money `Rp1.250.000`, dates `12 Oct 2026`, phone `+62 812-3456-7890`. The brand colours and logo are fixed; never change them for a text edit. `product-facts.md` lists what each product does and which claims can be made.
