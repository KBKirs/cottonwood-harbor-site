from pathlib import Path
import shutil

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
PREVIEW_DIR = ROOT / "assets" / "sample-previews"
PDF_DIR = ROOT / "sample-resources" / "pdf"
SHEET_DIR = ROOT / "sample-resources" / "spreadsheets"


def resize_to_width(src, dest, width=1100):
    image = Image.open(src).convert("RGB")
    ratio = width / image.width
    height = int(image.height * ratio)
    image = image.resize((width, height), Image.Resampling.LANCZOS)
    image.save(dest, quality=92, optimize=True)


def crop_dashboard(src, dest):
    image = Image.open(src).convert("RGB")
    # Remove the spreadsheet row/column chrome from the rendered preview.
    cropped = image.crop((39, 21, image.width, image.height))
    cropped.save(dest, quality=92, optimize=True)


def main():
    PREVIEW_DIR.mkdir(parents=True, exist_ok=True)

    previews = [
        ("daily-startup-checklist-preview.png", "daily-startup-checklist.png"),
        ("new-hire-onboarding-checklist-preview.png", "new-hire-onboarding-checklist.png"),
        ("customer-complaint-handling-script-preview.png", "customer-complaint-handling-script.png"),
    ]

    for source, target in previews:
        resize_to_width(PDF_DIR / source, PREVIEW_DIR / target)

    crop_dashboard(SHEET_DIR / "owner-dashboard-preview.png", PREVIEW_DIR / "owner-dashboard.png")

    # Keep downloadable source files in one predictable public folder.
    download_dir = ROOT / "assets" / "sample-downloads"
    download_dir.mkdir(parents=True, exist_ok=True)
    for pdf in PDF_DIR.glob("*.pdf"):
        shutil.copy2(pdf, download_dir / pdf.name)
    shutil.copy2(
        SHEET_DIR / "harbor-vault-sample-business-dashboard.xlsx",
        download_dir / "harbor-vault-sample-business-dashboard.xlsx",
    )


if __name__ == "__main__":
    main()
