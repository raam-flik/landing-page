#!/bin/sh
# Cloudflare Pages build: copy the public site into dist/, leaving out what never goes live
# (the archive, copy docs, scripts, notes and the Vercel settings). Build command: sh scripts/cf-build.sh
# Output directory: dist
set -e
rm -rf dist
mkdir dist
tar --exclude=./dist --exclude=./.git --exclude=./.github --exclude=./archive --exclude=./scripts --exclude=./content \
    --exclude='./*.md' --exclude=./vercel.json --exclude=./.vercelignore --exclude=./wrangler.jsonc --exclude=./.gitignore --exclude=./node_modules \
    -cf - . | tar -xf - -C dist
echo "dist ready: $(find dist -name index.html | wc -l) pages"
