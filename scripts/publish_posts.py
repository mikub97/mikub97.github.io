#!/usr/bin/env python3
"""
Publish post markdown as plain static assets.

  python3 scripts/publish_posts.py            # _posts/*.md → assets/posts/*.md
  python3 scripts/publish_posts.py --check    # report what would change, write nothing
  python3 scripts/publish_posts.py --prune    # also delete posts no longer visible

Only slugs listed in _data/posts.yml with `hidden` unset/false are published —
that file is the single source of truth for what the site shows. Posts marked
hidden, and .md files with no entry at all, are skipped and never leave the
machine.

YAML front matter is stripped on the way out. Two reasons: the browser reads
these files raw (post.html fetches and renders them with marked.js, metadata
comes from _data/posts.yml), and a file carrying front matter would be treated
by Jekyll as a page to render rather than a static file to copy.

Workflow: write in _posts/, run this, commit assets/posts/.
"""
import re
import sys
from pathlib import Path

import yaml

ROOT       = Path(__file__).resolve().parent.parent
POSTS_DIR  = ROOT / "_posts"
OUT_DIR    = ROOT / "assets" / "posts"
DATA_FILE  = ROOT / "_data" / "posts.yml"

# "2026-06-07-from-center-to-circle copy 2.md" → "2026-06-07-from-center-to-circle"
COPY_SUFFIX = re.compile(r"\s+copy(\s+\d+)?$")


def slug_of(path: Path) -> str:
    return COPY_SUFFIX.sub("", path.stem)


def strip_frontmatter(text: str) -> str:
    if not text.startswith("---"):
        return text
    end = text.find("\n---", 3)
    if end == -1:
        return text
    return text[end + 4:].lstrip("\n")


def visible_slugs() -> list:
    entries = yaml.safe_load(DATA_FILE.read_text(encoding="utf-8")) or []
    return [e["slug"] for e in entries if not e.get("hidden")]


def main():
    check = "--check" in sys.argv[1:]
    prune = "--prune" in sys.argv[1:]
    wanted = visible_slugs()
    sources = {slug_of(p): p for p in sorted(POSTS_DIR.glob("*.md"))}

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    written, missing = [], []

    for slug in wanted:
        src = sources.get(slug)
        if src is None:
            missing.append(slug)
            continue
        body = strip_frontmatter(src.read_text(encoding="utf-8"))
        dst = OUT_DIR / f"{slug}.md"
        unchanged = dst.exists() and dst.read_text(encoding="utf-8") == body
        if not unchanged and not check:
            dst.write_text(body, encoding="utf-8")
        written.append((slug, "unchanged" if unchanged else "updated"))

    # Anything in assets/posts/ no longer listed as visible must not stay published.
    stale = [p for p in OUT_DIR.glob("*.md") if p.stem not in wanted]

    for slug, state in written:
        print(f"  {'·' if state == 'unchanged' else '✓'}  {slug}  ({state})")
    for slug in missing:
        print(f"  ✗  {slug} — listed in _data/posts.yml but no _posts/{slug}.md")
    for p in stale:
        if prune and not check:
            p.unlink()
            print(f"  ✗  {p.relative_to(ROOT)} — no longer visible, deleted")
        else:
            print(f"  !  {p.relative_to(ROOT)} — no longer visible, still published."
                  f"  Re-run with --prune to delete it.")

    skipped = sorted(set(sources) - set(wanted))
    if skipped:
        print(f"\nNot published (hidden or unlisted): {', '.join(skipped)}")
    if missing:
        sys.exit(1)
    print(f"\n{'Would publish' if check else 'Published'} {len(written)} post(s) to assets/posts/")


if __name__ == "__main__":
    main()
