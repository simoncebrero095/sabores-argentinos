#!/usr/bin/env bash
set -euo pipefail

PROJECT="sabores-argentinos"
ZIP_NAME="sabores-argentinos.zip"

rm -rf "$PROJECT" "$ZIP_NAME"

mkdir -p "$PROJECT/src/app/components"
mkdir -p "$PROJECT/src/app/pages"
mkdir -p "$PROJECT/src/assets"

cat > "$PROJECT/.gitignore" <<'EOF'
node_modules
dist
.angular
.vscode
coverage
.DS_Store
Thumbs.db
EOF

cat > "$PROJECT/README.md" <<'EOF'
# Sabores Argentinos

Proyecto Angular estático para Sabores Argentinos.

## Requisitos
- Node.js
- npm

## Instalación
```bash
npm install
npm start