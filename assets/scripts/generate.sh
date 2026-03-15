#!/bin/bash
# Nano Banana Image Generator - Quick Start

cd "$(dirname "$0")"

echo "🎨 Nano Banana 2 - Bildgenerator"
echo "================================"

# Prüfe Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 nicht gefunden"
    exit 1
fi

# Installiere Abhängigkeiten falls nötig
pip3 install requests -q 2>/dev/null

echo ""
echo "Wähle Kategorie:"
echo "  1) Hero Banner (5 Bilder)"
echo "  2) Kategorie Icons (5 Bilder)"
echo "  3) Artikel Thumbnails (6 Bilder)"
echo "  4) ALLE Bilder (16 Bilder)"
echo ""

read -p "Auswahl (1-4): " choice

python3 generate_images.py "$choice"
