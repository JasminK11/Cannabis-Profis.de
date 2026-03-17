# 🌿 Cannabis-Profis.de

**Deine vertrauenswürdige Quelle für Cannabis-Informationen in Deutschland**

[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

---

## 🚀 Schnellstart

### Lokale Entwicklung

```bash
# Repository klonen
git clone https://github.com/JasminK11/Cannabis-Profis.de.git
cd Cannabis-Profis.de

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Website ist dann unter `http://localhost:5173` erreichbar.

### Production Build

```bash
npm run build
```

Der Build wird im `dist/` Ordner erstellt.

---

## 📦 Deployment

### Option 1: Vercel (Empfohlen)

1. **Auf Vercel deployen:**
   ```bash
   # Vercel CLI installieren
   npm i -g vercel
   
   # Einloggen
   vercel login
   
   # Deployen
   vercel --prod
   ```

2. **Oder über Web Interface:**
   - Gehe zu [vercel.com](https://vercel.com)
   - "Add New Project" → Importiere von GitHub
   - Framework: Vite, Build: `npm run build`, Output: `dist`

### Option 2: Netlify

- Connecte dein GitHub-Repo auf [netlify.com](https://netlify.com)
- Build Command: `npm run build`
- Publish Directory: `dist`

### Option 3: GitHub Pages

Siehe `.github/workflows/deploy.yml` für Auto-Deploy Konfiguration.

---

## 🎨 Projekt-Struktur

```
Cannabis-Profis.de/
├── public/              # Statische Assets (Bilder, Icons)
│   └── images/
│       ├── hero/        # Hero-Banner (5 SVGs)
│       ├── categories/  # Kategorie-Karten (5 SVGs)
│       ├── articles/    # Artikel-Thumbnails (6 SVGs)
│       └── icons/       # UI-Icons (4 SVGs)
├── src/
│   ├── components/      # React-Komponenten
│   │   └── ui/          # shadcn/ui Komponenten
│   ├── pages/           # Seiten-Komponenten
│   │   ├── Home.tsx
│   │   ├── Recht.tsx
│   │   ├── Anbau.tsx
│   │   ├── CannabisClubs.tsx
│   │   ├── Medizinisch.tsx
│   │   └── ...
│   ├── data/            # Content-Daten
│   └── lib/             # Utilities
├── dist/                # Build-Output
├── vercel.json          # Vercel-Konfiguration
└── deploy.sh            # Deployment-Skript
```

---

## ✨ Features

- ⚡ **Schnell**: Vite-basiert für schnelle Builds und HMR
- 🎨 **Modern**: React 19 + TypeScript + Tailwind CSS
- 📱 **Responsive**: Mobile-first Design
- 🌙 **Dark Theme**: Optimiert für Cannabis-Content
- 🖼️ **SVG-Assets**: 20 selbst erstellte Vektor-Grafiken
- 🤖 **CMS-Ready**: Integration mit Kimi Claw CMS

---

## 🗺️ Themenbereiche

| Bereich | Inhalt |
|---------|--------|
| **Recht & Gesetze** | KCanG, MedCanG-Reform, CSC-Gesetze |
| **Anbau** | Anleitungen, Equipment, Troubleshooting |
| **Cannabis-Clubs** | CSC finden, gründen, Mitglied werden |
| **Medizinisch** | Rezepte, Ärzte, Apotheken, MedCanG |
| **Produkte** | Equipment, Bücher, Zubehör |

---

## 🔧 Technologien

- **Frontend**: React 19, TypeScript
- **Build**: Vite 7
- **Styling**: Tailwind CSS 3.4, shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router
- **CMS**: Kimi Claw (autonom)

---

## 📝 Lizenz

MIT License - Siehe [LICENSE](LICENSE) für Details.

---

## 🤝 Mitwirken

Beiträge sind willkommen! Öffne ein Issue oder Pull Request.

---

**Erstellt mit ❤️ von Kimi Claw für Cannabis-Profis.de**
