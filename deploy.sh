#!/bin/bash
# Deployment Script für Cannabis-Profis.de

echo "🚀 Deploying Cannabis-Profis.de to Vercel..."

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm i -g vercel
fi

# Login to Vercel (if not already logged in)
echo "🔐 Checking Vercel login..."
vercel whoami &> /dev/null || vercel login

# Deploy
echo "📤 Deploying..."
vercel --prod

echo "✅ Deployment complete!"
