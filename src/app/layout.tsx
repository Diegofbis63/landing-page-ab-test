import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MarketingPro - Transforma tu Negocio con Marketing Digital',
  description: 'Aumenta tus ventas hasta un 300% con estrategias de marketing digital probadas. La única plataforma que combina SEO, publicidad y contenido en una solución integral.',
  keywords: ['marketing digital', 'SEO', 'publicidad online', 'crecimiento empresarial', 'ventas online', 'marketing automation'],
  authors: [{ name: 'MarketingPro Team' }],
  creator: 'MarketingPro',
  publisher: 'MarketingPro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://marketingpro.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://marketingpro.vercel.app',
    title: 'MarketingPro - Transforma tu Negocio con Marketing Digital',
    description: 'Aumenta tus ventas hasta un 300% con estrategias de marketing digital probadas.',
    siteName: 'MarketingPro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MarketingPro - Transformación Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MarketingPro - Transforma tu Negocio con Marketing Digital',
    description: 'Aumenta tus ventas hasta un 300% con estrategias de marketing digital probadas.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MarketingPro",
              "url": "https://marketingpro.vercel.app",
              "logo": "https://marketingpro.vercel.app/logo.png",
              "description": "Transformamos negocios con estrategias digitales que generan resultados reales y medibles.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Principal 123",
                "addressLocality": "Ciudad",
                "addressRegion": "Estado",
                "postalCode": "12345",
                "addressCountry": "MX"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "hola@marketingpro.com"
              },
              "sameAs": [
                "https://facebook.com/marketingpro",
                "https://twitter.com/marketingpro",
                "https://linkedin.com/company/marketingpro"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "247"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}