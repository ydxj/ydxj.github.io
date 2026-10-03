"""
Generate responsive WebP versions of the WorldSkills photos.

Originals live in  src/assets/Worldskills/   (drop new photos here)
Output goes to     src/assets/gallery/<slug>-<width>.webp
Metadata goes to   src/data/gallery-manifest.json  (width/height per photo,
                   used to reserve the right aspect ratio and avoid layout shift)

Usage:  npm run images      (or: python scripts/optimize-images.py)
Requires Pillow:  pip install pillow
"""

import json
import re
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "src" / "assets" / "Worldskills"
OUTPUT = ROOT / "src" / "assets" / "gallery"
MANIFEST = ROOT / "src" / "data" / "gallery-manifest.json"
OG_IMAGE = ROOT / "public" / "og-image.jpg"
OG_SOURCE = "competition-day"

WIDTHS = (640, 1280, 2000)
QUALITY = 80
EXTENSIONS = {".jpg", ".jpeg", ".jfif", ".png", ".webp"}


def slugify(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def main():
    OUTPUT.mkdir(parents=True, exist_ok=True)
    manifest = {}

    for path in sorted(SOURCE.iterdir()):
        if path.suffix.lower() not in EXTENSIONS:
            continue

        slug = slugify(path.stem)
        image = ImageOps.exif_transpose(Image.open(path)).convert("RGB")
        width, height = image.size
        widths = sorted({min(w, width) for w in WIDTHS})

        for target in widths:
            out = OUTPUT / f"{slug}-{target}.webp"
            if out.exists() and out.stat().st_mtime > path.stat().st_mtime:
                continue
            resized = image.resize((target, round(height * target / width)), Image.LANCZOS)
            resized.save(out, "WEBP", quality=QUALITY, method=6)

        manifest[slug] = {"width": width, "height": height, "widths": widths}
        print(f"{slug}: {width}x{height} -> {widths}")

        if slug == OG_SOURCE:
            og = ImageOps.fit(image, (1200, 630), Image.LANCZOS, centering=(0.5, 0.4))
            og.save(OG_IMAGE, "JPEG", quality=82, optimize=True, progressive=True)

    MANIFEST.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
    print(f"\n{len(manifest)} photos -> {MANIFEST.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
