#!/usr/bin/env python3
"""
Nano Banana 2 Image Generator
Generiert Bilder für Cannabis-Profis.de
"""

import json
import requests
import os
import sys
from pathlib import Path

API_KEY = "AIzaSyDY6DCEZ0CuBIOAdK16Twlgl4socJMDjjw"
API_URL = "https://api.nano-banana.ai/v2/generate"

OUTPUT_DIR = Path(__file__).parent.parent / "images"

def load_prompts(filename):
    """Lade Prompts aus JSON-Datei"""
    filepath = Path(__file__).parent / filename
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def generate_image(prompt_data):
    """Generiere ein einzelnes Bild"""
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "prompt": prompt_data["prompt"],
        "negative_prompt": prompt_data.get("negative_prompt", ""),
        "width": int(prompt_data["size"].split("x")[0]),
        "height": int(prompt_data["size"].split("x")[1]),
        "num_images": 1,
        "guidance_scale": 7.5,
        "steps": 50
    }
    
    try:
        response = requests.post(API_URL, json=payload, headers=headers, timeout=300)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"❌ Fehler bei {prompt_data['id']}: {e}")
        return None

def save_image(image_data, output_path):
    """Speichere generiertes Bild"""
    if "images" in image_data and len(image_data["images"]) > 0:
        img_base64 = image_data["images"][0]
        import base64
        img_bytes = base64.b64decode(img_base64)
        
        output_path.parent.mkdir(parents=True, exist_ok=True)
        with open(output_path, 'wb') as f:
            f.write(img_bytes)
        return True
    return False

def generate_category(category_name, prompts_file):
    """Generiere alle Bilder einer Kategorie"""
    print(f"\n{'='*60}")
    print(f"🎨 Generiere: {category_name}")
    print(f"{'='*60}")
    
    prompts = load_prompts(prompts_file)
    
    for prompt_data in prompts:
        print(f"\n📷 {prompt_data['id']} - {prompt_data['filename']}")
        
        # Bestimme Ausgabeordner
        category = prompt_data.get("category", "misc")
        output_path = OUTPUT_DIR / category / prompt_data["filename"]
        
        if output_path.exists():
            print(f"   ⏭️  Überspringe (existiert bereits)")
            continue
        
        # Generiere Bild
        result = generate_image(prompt_data)
        
        if result and save_image(result, output_path):
            print(f"   ✅ Gespeichert: {output_path}")
        else:
            print(f"   ❌ Fehlgeschlagen")

def main():
    """Hauptfunktion"""
    print("🚀 Nano Banana 2 - Bildgenerator für Cannabis-Profis.de")
    print(f"💾 Ausgabe: {OUTPUT_DIR}")
    
    # Erstelle Ordnerstruktur
    for subdir in ["hero", "categories", "articles", "icons"]:
        (OUTPUT_DIR / subdir).mkdir(parents=True, exist_ok=True)
    
    # Zeige verfügbare Kategorien
    print("\n📂 Verfügbare Kategorien:")
    print("  1. hero         - Hero Banner (5 Bilder)")
    print("  2. categories   - Kategorie Icons (5 Bilder)")
    print("  3. articles     - Artikel Thumbnails (6 Bilder)")
    print("  4. all          - Alle Bilder (16 Bilder)")
    
    # Kommandozeilen-Argument
    if len(sys.argv) > 1:
        choice = sys.argv[1]
    else:
        choice = input("\nWähle Kategorie (1-4): ").strip()
    
    # Generiere basierend auf Auswahl
    if choice in ["1", "hero"]:
        generate_category("Hero Banner", "hero_prompts.json")
    
    elif choice in ["2", "categories"]:
        generate_category("Kategorie Icons", "category_prompts.json")
    
    elif choice in ["3", "articles"]:
        generate_category("Artikel Thumbnails", "article_prompts.json")
    
    elif choice in ["4", "all"]:
        generate_category("Hero Banner", "hero_prompts.json")
        generate_category("Kategorie Icons", "category_prompts.json")
        generate_category("Artikel Thumbnails", "article_prompts.json")
    
    else:
        print("❌ Ungültige Auswahl")
        return
    
    print(f"\n{'='*60}")
    print("✅ Fertig! Bilder gespeichert unter assets/images/")
    print(f"{'='*60}")

if __name__ == "__main__":
    main()
