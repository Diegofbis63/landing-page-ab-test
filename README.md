# Landing Page A/B Test Demo

A professional marketing landing page built with Next.js 16, featuring A/B testing capabilities and lead capture functionality.

![GitHub stars](https://img.shields.io/github/stars/Diegofbis63/landing-page-ab-test-demo?style=social)
![GitHub forks](https://img.shields.io/github/forks/Diegofbis63/landing-page-ab-test-demo?style=social)
![GitHub license](https://img.shields.io/github/license/Diegofbis63/landing-page-ab-test-demo)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)

## Live Demo

👉 **[View Live Demo](https://landing-page-ab-test-demo.vercel.app)**

## Features

### Design & UX
- Fully responsive landing page with mobile-first approach
- Modern hero section with animated statistics
- Interactive benefits cards with expandable details
- Customer testimonials with ratings
- FAQ section with smooth accordion animations
- Professional footer with contact information

### A/B Testing
- Automatic 50/50 split testing for CTA buttons
- Variant A: "Prueba Gratis" (default style)
- Variant B: "Comienza Ahora" (destructive style)
- Real-time performance tracking with Vercel Analytics
- Conversion rate optimization insights

### Lead Generation
- Functional contact form with real-time validation
- Supabase integration for data storage
- Toast notifications for user feedback
- Loading states and error handling

### Performance & SEO
- 100% SEO optimized with meta tags and Open Graph
- JSON-LD structured data for search engines
- Lighthouse performance score > 90
- Core Web Vitals optimization
- Fast loading times with optimized images

## Tech Stack

| Technology | Version | Purpose |
|-------------|----------|----------|
| Next.js | 16 | React framework with App Router |
| TypeScript | 5+ | Type-safe development |
| Tailwind CSS | 4+ | Utility-first styling |
| shadcn/ui | Latest | Professional UI components |
| Supabase | Latest | Database and backend services |
| Vercel Analytics | Latest | A/B testing and analytics |
| Lucide React | Latest | Modern icon library |

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Diegofbis63/landing-page-ab-test-demo.git
cd landing-page-ab-test-demo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

1. Create a new project at [Supabase](https://supabase.com)
2. Run the SQL schema from `supabase-schema.sql`
3. Get your credentials from Settings > API

### 4. Configure Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

### 5. Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000`

## Deployment

### ⚠️ Important: Configure Environment Variables First

Before deploying, you must set up environment variables in Vercel:

#### 1. Set Up Supabase
1. Go to [Supabase](https://supabase.com) → Create project
2. Go to Settings → API → Copy:
   - `Project URL`
   - `anon public key`

#### 2. Configure Vercel Variables
1. Go to your Vercel project
2. Settings → Environment Variables
3. Add these variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

### 1. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import the `landing-page-ab-test-demo` repository

### 2. Enable Analytics

1. Go to the "Analytics" tab
2. Enable Vercel Analytics (free)
3. Set up custom event tracking

### 3. Deploy!

> Note: If you get a "supabaseUrl is required" error, make sure you've configured the environment variables before deployment.

## A/B Testing Metrics

### Tracked Events

| Event | Description | Parameters |
|--------|-------------|------------|
| `hero_variant_shown` | Variant impression | `{ variant: 'A' \| 'B' }` |
| `cta_click` | CTA button click | `{ variant, buttonText }` |
| `lead_form_submit_success` | Form submission | `{ email }` |
| `lead_form_submit_error` | Form error | `{ error }` |

### View Results

1. Go to Vercel Dashboard > Analytics
2. Filter by "Custom Events"
3. Compare performance between variants
4. Analyze conversion rates

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # SEO-optimized layout
│   └── page.tsx            # Main landing page
├── components/
│   ├── Hero.tsx            # Hero with A/B testing
│   ├── Benefits.tsx        # Interactive benefits
│   ├── Testimonials.tsx    # Customer testimonials
│   ├── LeadForm.tsx        # Contact form with Supabase
│   ├── FAQ.tsx             # FAQ accordion
│   └── Footer.tsx          # Footer section
├── lib/
│   └── supabase.ts         # Supabase client
└── ui/                     # shadcn/ui components
```

## Customization

### Change Content

Edit files in `src/components/`:
- `Hero.tsx`: Headlines, CTAs, statistics
- `Benefits.tsx`: Benefits and features
- `Testimonials.tsx`: Customer reviews
- `FAQ.tsx`: Frequently asked questions

### Customize A/B Testing

```typescript
// In Hero.tsx
const variants = {
  A: { text: 'Your Text A', style: 'default' },
  B: { text: 'Your Text B', style: 'secondary' }
}
```

### Change Colors and Styles

Edit `tailwind.config.js` or use CSS classes in components.

## Performance

### Lighthouse Scores (Target)
- Performance: > 95
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Optimizations
- Next.js Image optimization for all images
- Critical CSS inlining
- Lazy loading for components
- Minimal JavaScript bundle
- Font optimization

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- GitHub: [@Diegofbis63](https://github.com/Diegofbis63)
- Email: diegofbisquerra@gmail.com

---

If this project helps you, give it a ⭐