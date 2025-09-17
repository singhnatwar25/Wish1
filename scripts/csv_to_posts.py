import csv
import os
import re
import sys
from datetime import datetime

# Usage: python scripts/csv_to_posts.py posts.csv
# CSV expected columns (header names):
# title,slug,date,author,category,tags,image,excerpt,content
# - date format: YYYY-MM-DD or any parseable format; will be normalized to YYYY-MM-DD
# - tags: semicolon or comma separated
# - content: Markdown supported

REQUIRED_COLUMNS = ["title", "slug", "date", "content"]


def slugify(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^a-z0-9\-\s]", "", value)
    value = re.sub(r"\s+", "-", value)
    value = re.sub(r"-+", "-", value)
    return value


def normalize_date(value: str) -> str:
    value = value.strip()
    # Try multiple formats; default to today if fails
    fmts = [
        "%Y-%m-%d",
        "%d-%m-%Y",
        "%m/%d/%Y",
        "%d/%m/%Y",
        "%Y/%m/%d",
        "%b %d, %Y",
        "%B %d, %Y",
    ]
    for fmt in fmts:
        try:
            return datetime.strptime(value, fmt).strftime("%Y-%m-%d")
        except Exception:
            pass
    try:
        # Last resort: parse with fromisoformat
        return datetime.fromisoformat(value).strftime("%Y-%m-%d")
    except Exception:
        return datetime.utcnow().strftime("%Y-%m-%d")


def ensure_dir(path: str):
    if not os.path.exists(path):
        os.makedirs(path, exist_ok=True)


def write_post(row: dict):
    title = row.get("title", "").strip()
    slug = slugify(row.get("slug") or title)
    date = normalize_date(row.get("date", ""))
    author = (row.get("author") or "WishCowork Editorial").strip()
    category = (row.get("category") or "Blog").strip()
    tags = (row.get("tags") or "").replace(";", ",")
    image = (row.get("image") or "/resource/blog-images/Blog-GoWork-KITAS.jpg").strip()
    excerpt = (row.get("excerpt") or "").strip()
    content = (row.get("content") or "").strip()

    # Build filename in _posts/YYYY-MM-DD-slug.md
    filename = f"{date}-{slug}.md"
    posts_dir = os.path.join("_posts")
    ensure_dir(posts_dir)
    path = os.path.join(posts_dir, filename)

    front_matter = [
        "---",
        f"layout: post",
        f"title: \"{title.replace('"', '\\"')}\"",
        f"date: {date}",
        f"author: {author}",
        f"category: {category}",
        f"image: {image}",
        f"permalink: /blog/{slug}/",
    ]
    if excerpt:
        front_matter.append(f"excerpt: \"{excerpt.replace('"', '\\"')}\"")
    if tags:
        # write tags as array
        tag_list = [t.strip() for t in tags.split(",") if t.strip()]
        if tag_list:
            front_matter.append("tags:")
            for t in tag_list:
                front_matter.append(f"  - {t}")
    front_matter.append("---\n")

    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(front_matter))
        f.write(content + "\n")

    return path


def main():
    if len(sys.argv) < 2:
        print("Usage: python scripts/csv_to_posts.py posts.csv")
        sys.exit(1)

    csv_path = sys.argv[1]
    if not os.path.exists(csv_path):
        print(f"CSV file not found: {csv_path}")
        sys.exit(1)

    created = []
    updated = []

    with open(csv_path, newline="", encoding="utf-8") as csvfile:
        reader = csv.DictReader(csvfile)
        headers = [h.strip().lower() for h in reader.fieldnames or []]
        missing = [c for c in REQUIRED_COLUMNS if c not in headers]
        if missing:
            print("ERROR: Missing required columns:", ", ".join(missing))
            print("Found columns:", ", ".join(headers))
            sys.exit(1)
        for row in reader:
            # Normalize keys to lowercase
            r = { (k or '').strip().lower(): (v or '') for k, v in row.items() }
            path = write_post(r)
            created.append(path)

    print(f"Generated/updated {len(created)} posts.")


if __name__ == "__main__":
    main()
