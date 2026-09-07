#!/usr/bin/env bash

set -euo pipefail

DRIVE_URL="${1:-https://drive.google.com/drive/folders/1M8RkAocSCWyLvvC92iYbZdflfFyNbJmv}"
DESTINATION="${2:-incoming/google-drive}"
VENV_DIR="${DESTINATION}/.download-tools"

mkdir -p "$DESTINATION"

if [[ ! -x "$VENV_DIR/bin/python" ]]; then
  python3 -m venv "$VENV_DIR"
  "$VENV_DIR/bin/python" -m pip install --quiet gdown
fi

"$VENV_DIR/bin/python" - "$DRIVE_URL" "$DESTINATION" <<'PY'
import csv
import hashlib
import os
from pathlib import Path
import sys

import gdown

drive_url = sys.argv[1]
destination = Path(sys.argv[2]).resolve()
originals = destination / "originals"
inventory_path = destination / "inventory.csv"
originals.mkdir(parents=True, exist_ok=True)

entries = gdown.download_folder(
    url=drive_url,
    output=str(originals),
    quiet=False,
    remaining_ok=True,
    skip_download=True,
)

if entries is None:
    raise SystemExit("No se pudo leer la carpeta de Google Drive.")

used_paths = set()
inventory = []
previous_paths = {}

if inventory_path.exists():
    with inventory_path.open(newline="", encoding="utf-8") as previous_inventory:
        for row in csv.DictReader(previous_inventory):
            previous_paths[row["drive_file_id"]] = destination / row["local_path"]


def image_extension(path):
    with path.open("rb") as source_file:
        signature = source_file.read(12)

    if signature.startswith(b"\xff\xd8\xff"):
        return ".jpg"
    if signature.startswith(b"\x89PNG\r\n\x1a\n"):
        return ".png"
    if signature.startswith((b"GIF87a", b"GIF89a")):
        return ".gif"
    if signature.startswith(b"RIFF") and signature[8:12] == b"WEBP":
        return ".webp"
    return ""

for entry in entries:
    relative = Path(entry.path)
    target = originals / relative
    candidate = previous_paths.get(entry.id, target)

    if entry.id not in previous_paths:
        duplicate_number = 2
        while candidate in used_paths or candidate.exists():
            candidate = target.with_name(
                f"{target.stem}--duplicado-{duplicate_number}{target.suffix}"
            )
            duplicate_number += 1

    used_paths.add(candidate)
    candidate.parent.mkdir(parents=True, exist_ok=True)

    if not candidate.exists():
        result = gdown.download(
            id=entry.id,
            output=str(candidate),
            quiet=False,
            use_cookies=False,
        )
        if result is None:
            raise SystemExit(f"Falló la descarga de {entry.path} ({entry.id}).")

    if not candidate.suffix:
        detected_extension = image_extension(candidate)
        if detected_extension:
            corrected_candidate = candidate.with_suffix(detected_extension)
            if corrected_candidate.exists() and corrected_candidate != candidate:
                corrected_candidate.unlink()
            candidate.rename(corrected_candidate)
            candidate = corrected_candidate

    digest = hashlib.sha256()
    with candidate.open("rb") as downloaded_file:
        for chunk in iter(lambda: downloaded_file.read(1024 * 1024), b""):
            digest.update(chunk)

    inventory.append(
        {
            "drive_file_id": entry.id,
            "source_path": entry.path,
            "local_path": candidate.relative_to(destination).as_posix(),
            "bytes": candidate.stat().st_size,
            "sha256": digest.hexdigest(),
        }
    )

with inventory_path.open("w", newline="", encoding="utf-8") as inventory_file:
    writer = csv.DictWriter(
        inventory_file,
        fieldnames=["drive_file_id", "source_path", "local_path", "bytes", "sha256"],
    )
    writer.writeheader()
    writer.writerows(inventory)

print(f"\nDescarga completa: {len(inventory)} archivos")
print(f"Originales: {originals}")
print(f"Inventario: {inventory_path}")
PY
