# 🎨 Bild-Generierung für Cannabis-Profis.de

## Übersicht

Dieser Ordner enthält alle Prompts für die Bildgenerierung mit **nano banana 2**.

## Struktur

```
assets/
├── prompts/           # JSON Prompt-Dateien
│   ├── index.json           # Master-Index
│   ├── style_guide.json     # Design-Richtlinien
│   ├── hero_prompts.json    # 5 Hero-Banner
│   ├── category_prompts.json # 5 Kategorie-Icons
│   ├── article_prompts.json # 6 Artikel-Thumbnails
│   └── icon_list.json       # 10 UI-Icons
│
└── images/            # Ausgabe-Ordner (hier kommen die Bilder rein)
    ├── hero/
    ├── categories/
    ├── articles/
    └── icons/
```

## Anleitung

### 1. Hero-Bilder generieren
```bash
# Lade hero_prompts.json in nano banana 2
# Generiere alle 5 Hero-Bilder (1920x1080)
```

### 2. Kategorie-Icons generieren
```bash
# Lade category_prompts.json in nano banana 2
# Generiere alle 5 Kategorie-Icons (800x800)
```

### 3. Artikel-Thumbnails generieren
```bash
# Lade article_prompts.json in nano banana 2
# Generiere alle 6 Thumbnails (1200x630)
```

### 4. Icons erstellen
```bash
# Die Icons werden als SVG erstellt (nicht generiert)
# Siehe icon_list.json für Liste
```

## Wichtige Hinweise

- **Style Guide beachten**: Siehe `style_guide.json` für Farben und Stil
- **Negative Prompts**: In jedem Prompt definiert - unbedingt beachten!
- **Aspect Ratios**: Nicht ändern - passen zu Website-Layout
- **Dateinamen**: Genau wie in JSON definiert speichern

## Farbpalette

| Farbe | Hex | Verwendung |
|-------|-----|------------|
| Primary | #166534 | Hauptfarbe (dunkelgrün) |
| Secondary | #facc15 | Akzentfarbe (gelb) |
| Accent | #dcfce7 | Hintergründe (hellgrün) |
| Background | #ffffff | Weiß |
| Text | #111827 | Dunkelgrau |

## Workflow

1. Sergej generiert Bilder mit nano banana 2
2. Bilder werden in `assets/images/` entsprechenden Ordner gespeichert
3. Kimi Claw integriert Bilder in die Website
4. Git commit und push

---

**Status**: Bereit für Generierung
