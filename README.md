# 🚀 Landing Page A/B Test Demo - MarketingPro

[![GitHub stars](https://img.shields.io/github/stars/Diegofbis63/landing-page-ab-test-demo?style=social)](https://github.com/Diegofbis63/landing-page-ab-test-demo)
[![GitHub forks](https://img.shields.io/github/forks/Diegofbis63/landing-page-ab-test-demo?style=social)](https://github.com/Diegofbis63/landing-page-ab-test-demo)
[![GitHub license](https://img.shields.io/github/license/Diegofbis63/landing-page-ab-test-demo)](https://github.com/Diegofbis63/landing-page-ab-test-demo/blob/main/LICENSE)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://vercel.com)

> **Landing page profesional de alto impacto con A/B testing integrado, optimizada para conversiones y lista para producción.**

## 🎯 **Demo en Vivo**

👉 **[Ver Demo](https://landing-page-ab-test-demo.vercel.app)** *(Reemplaza con tu URL de Vercel)*

## ✨ **Características Principales**

### 🎨 **Diseño Profesional**
- ✅ **Landing Page Completa** con todas las secciones estándar
- ✅ **Hero Section** con gradientes y estadísticas animadas
- ✅ **Beneficios Interactivos** con cards expandibles y progress bars
- ✅ **Testimonios Sociales** con ratings y resultados reales
- ✅ **FAQ Interactivo** con acordeón animado
- ✅ **Footer Completo** con información de contacto

### 🧪 **A/B Testing Avanzado**
- ✅ **Test Automático** 50/50 para botones CTA
- ✅ **Variant A**: "Prueba Gratis" (estilo default)
- ✅ **Variant B**: "Comienza Ahora" (estilo destructive)
- ✅ **Tracking Completo** con Vercel Analytics
- ✅ **Métricas en Tiempo Real** de rendimiento

### 💾 **Captura de Leads**
- ✅ **Formulario Funcional** con validación en tiempo real
- ✅ **Integración Supabase** para base de datos
- ✅ **Toast Notifications** para feedback
- ✅ **Estados de Carga** y manejo de errores

### 📈 **SEO y Rendimiento**
- ✅ **100% SEO Optimizado** con metaetiquetas Open Graph
- ✅ **JSON-LD Schema** para motores de búsqueda
- ✅ **Lighthouse Score** > 90
- ✅ **Core Web Vitals** optimizado
- ✅ **Responsive Design** mobile-first

## 🛠️ **Stack Tecnológico**

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Next.js** | 16 | Framework principal con App Router |
| **TypeScript** | 5+ | Tipado seguro y desarrollo robusto |
| **Tailwind CSS** | 4+ | Estilos modernos y responsive |
| **shadcn/ui** | Latest | Componentes UI profesionales |
| **Supabase** | Latest | Base de datos y backend-as-a-service |
| **Vercel Analytics** | Latest | A/B testing y métricas |
| **Lucide React** | Latest | Iconos modernos |

## 🚀 **Quick Start**

### 1. **Clonar el Repositorio**

```bash
git clone https://github.com/Diegofbis63/landing-page-ab-test-demo.git
cd landing-page-ab-test-demo
```

### 2. **Instalar Dependencias**

```bash
npm install
```

### 3. **Configurar Supabase**

1. **Crear cuenta en [Supabase](https://supabase.com)**
2. **Crear nuevo proyecto**
3. **Ejecutar el schema SQL**:
   ```sql
   -- Copia y pega el contenido de supabase-schema.sql
   ```
4. **Obtener credenciales** en Settings > API

### 4. **Configurar Variables de Entorno**

```bash
cp .env.local.example .env.local
```

Edita `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=tu_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
NEXT_PUBLIC_APP_URL=https://tu-dominio.vercel.app
```

### 5. **Ejecutar Localmente**

```bash
npm run dev
```

Visita `http://localhost:3000`

## 🌐 **Despliegue en Vercel**

### 1. **Conectar a Vercel**

1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu cuenta de GitHub
3. Importa el repositorio `landing-page-ab-test-demo`

### 2. **Configurar Variables de Entorno**

En Vercel dashboard > Settings > Environment Variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_APP_URL`

### 3. **Habilitar Analytics**

1. Ve a la pestaña "Analytics"
2. Habilita Vercel Analytics (gratis)
3. Configura el tracking personalizado

### 4. **Deploy!** 🎉

## 📊 **A/B Testing - Métricas**

### Eventos Rastreados

| Evento | Descripción | Parámetros |
|--------|-------------|------------|
| `hero_variant_shown` | Visualización de variante | `{ variant: 'A' \| 'B' }` |
| `cta_click` | Click en botón CTA | `{ variant, buttonText }` |
| `lead_form_submit_success` | Formulario enviado | `{ email }` |
| `lead_form_submit_error` | Error en formulario | `{ error }` |

### Ver Resultados

1. Dashboard de Vercel > Analytics
2. Filtrar por "Custom Events"
3. Comparar rendimiento entre variantes
4. Analizar tasas de conversión

## 🎯 **Componentes Principales**

### 📁 **Estructura del Proyecto**

```
src/
├── app/
│   ├── layout.tsx          # Layout con SEO optimizado
│   └── page.tsx            # Página principal
├── components/
│   ├── Hero.tsx            # Hero con A/B testing
│   ├── Benefits.tsx        # Benefits interactivos
│   ├── Testimonials.tsx    # Testimonios sociales
│   ├── LeadForm.tsx        # Formulario con Supabase
│   ├── FAQ.tsx             # FAQ con acordeón
│   └── Footer.tsx          # Footer completo
├── lib/
│   └── supabase.ts         # Cliente Supabase
└── ui/                     # Componentes shadcn/ui
```

### 🔧 **Personalización**

#### Cambiar Textos y Contenido

Edita los archivos en `src/components/`:
- `Hero.tsx`: Títulos, CTA, estadísticas
- `Benefits.tsx`: Beneficios y características
- `Testimonials.tsx`: Testimonios y resultados
- `FAQ.tsx`: Preguntas frecuentes

#### Personalizar A/B Testing

```typescript
// En Hero.tsx
const variants = {
  A: { text: 'Tu Texto A', style: 'default' },
  B: { text: 'Tu Texto B', style: 'secondary' }
}
```

#### Cambiar Colores y Estilos

Edita `tailwind.config.js` o las clases CSS en los componentes.

## 📈 **Rendimiento y Optimización**

### Lighthouse Scores (Objetivos)
- ✅ **Performance**: > 95
- ✅ **Accessibility**: 100
- ✅ **Best Practices**: 100
- ✅ **SEO**: 100

### Optimizaciones Implementadas
- ✅ **Next.js Image** para todas las imágenes
- ✅ **Critical CSS** inline
- ✅ **Lazy loading** para componentes
- ✅ **Minimal JavaScript** bundle
- ✅ **Font optimization**

## 🤝 **Contribuir**

1. Fork el repositorio
2. Crear feature branch: `git checkout -b feature/amazing-feature`
3. Commit cambios: `git commit -m 'Add amazing feature'`
4. Push al branch: `git push origin feature/amazing-feature`
5. Abrir Pull Request

## 📄 **Licencia**

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 👨‍💻 **Sobre el Desarrollador**

> **Proyecto demo para portafolio freelance** - Desarrollado con ❤️ para demostrar capacidades en:
> - Desarrollo web moderno con Next.js 16
> - Diseño UX/UI profesional y responsive
> - Integración de APIs y servicios cloud
> - A/B testing y analítica web
> - Optimización SEO y rendimiento

### 📧 **Contacto**
- **GitHub**: [@Diegofbis63](https://github.com/Diegofbis63)
- **Email**: diegofbis63@users.noreply.github.com

---

⭐ **Si este proyecto te ayuda, dale una estrella!** ⭐