# 🚀 Deployment-Anleitung für Cannabis-Profis.de

## Schnell-Deploy (Empfohlen)

### Option 1: Vercel Web Interface (5 Minuten)

1. **Gehe zu [vercel.com](https://vercel.com)**
2. **Klicke "Add New Project"**
3. **Importiere von GitHub:**
   - Wähle: `JasminK11/Cannabis-Profis.de`
   - Klicke "Import"

4. **Konfiguriere das Projekt:**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

5. **Klicke "Deploy"**

6. **Fertig!** 🎉
   Deine Website ist live unter:
   ```
   https://cannabis-profis-de.vercel.app
   ```

---

### Option 2: Vercel CLI (Terminal)

```bash
# 1. Repository klonen (falls noch nicht geschehen)
git clone https://github.com/JasminK11/Cannabis-Profis.de.git
cd Cannabis-Profis.de

# 2. Vercel CLI installieren
npm i -g vercel

# 3. Bei Vercel einloggen
vercel login
# → Öffnet Browser zur Authentifizierung

# 4. Deployen
vercel --prod
```

---

### Option 3: Netlify (Alternative)

1. Gehe zu [netlify.com](https://netlify.com)
2. "Add new site" → "Import an existing project"
3. Wähle GitHub: `JasminK11/Cannabis-Profis.de`
4. **Build settings:**
   ```
   Build command: npm run build
   Publish directory: dist
   ```
5. "Deploy site"

---

## 🔧 Nach dem ersten Deploy

### 1. Domain einrichten (optional)

In Vercel:
- Settings → Domains
- "Add" → Deine Domain eingeben
- DNS-Einträge konfigurieren

### 2. Environment Variables (falls nötig)

Falls du API-Keys brauchst:
- Settings → Environment Variables
- Füge hinzu:
  ```
  OPENAI_API_KEY=...
  AIRTABLE_TOKEN=...
  ```

### 3. Auto-Deploy aktivieren

Standardmäßig deployed Vercel automatisch bei jedem Push auf `main`.

---

## 📋 Troubleshooting

### "Build failed"
```bash
# Lokal testen
npm install
npm run build
```

### "Module not found"
```bash
# Dependencies neu installieren
rm -rf node_modules package-lock.json
npm install
```

### "dist folder not found"
- Stelle sicher, dass `vite.config.ts` existiert
- Prüfe, ob `vercel.json` korrekt ist

---

## 🎯 Erfolgskontrolle

Nach dem Deploy solltest du sehen:
- ✅ Homepage mit Hero-Bild
- ✅ 5 Hauptseiten (Recht, Anbau, CSC, Medizinisch, Produkte)
- ✅ Alle SVG-Bilder laden korrekt
- ✅ Mobile-Version funktioniert

---

**Brauchst du Hilfe bei einem bestimmten Schritt?** 🤖❤️‍🔥
