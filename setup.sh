#!/bin/bash

echo "🚀 Setup Automático - Landing Page A/B Test Demo"
echo "=============================================="

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js 18+"
    exit 1
fi

# Verificar npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm no está instalado."
    exit 1
fi

echo "✅ Node.js y npm están instalados"

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# Copiar archivo de entorno
if [ ! -f .env.local ]; then
    echo "📝 Creando archivo .env.local..."
    cp .env.local.example .env.local
    echo "⚠️  Por favor edita .env.local con tus credenciales de Supabase"
else
    echo "✅ .env.local ya existe"
fi

# Verificar instalación
echo "🔍 Verificando instalación..."
npm run lint

echo ""
echo "🎉 Setup completado!"
echo ""
echo "📋 Próximos pasos:"
echo "1. Configura Supabase: https://supabase.com"
echo "2. Ejecuta el schema SQL (supabase-schema.sql)"
echo "3. Edita .env.local con tus credenciales"
echo "4. Ejecuta 'npm run dev' para probar localmente"
echo "5. Sigue las instrucciones del README para despliegue"
echo ""
echo "📚 Documentación completa: README.md"