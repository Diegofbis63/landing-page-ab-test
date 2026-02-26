'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { FlaskConical, BarChart3, Database, Code, Gauge, Shield, GitBranch, Layers } from 'lucide-react'

const faqs = [
  {
    question: '¿Cómo funciona el split testing A/B?',
    answer: 'El motor asigna aleatoriamente a cada visitante una variante (A o B) usando Math.random() del lado del cliente. La asignación ocurre en el primer render y se trackea con Vercel Analytics. Cada interacción posterior (clicks en CTA, scroll, envío de formulario) queda asociada a la variante asignada.',
    icon: FlaskConical,
    badge: 'Core'
  },
  {
    question: '¿Qué métricas se trackean con Vercel Analytics?',
    answer: 'Se trackean eventos custom: hero_variant_shown (qué variante ve el usuario), cta_click (con qué variante y texto del botón), y cualquier interacción adicional que quieras medir. Vercel Analytics es edge-native, no impacta performance y no requiere consentimiento de cookies.',
    icon: BarChart3,
    badge: 'Popular'
  },
  {
    question: '¿Cómo se integra Supabase para captura de leads?',
    answer: 'El formulario de contacto se conecta directamente a Supabase usando @supabase/supabase-js. Cada lead se inserta en una tabla con nombre, email, empresa, mensaje, y la fuente (ab-engine-landing). Row Level Security (RLS) está habilitado para proteger los datos.',
    icon: Database,
    badge: null
  },
  {
    question: '¿Qué stack tecnológico usa este proyecto?',
    answer: 'Next.js 16 con App Router y Turbopack, React 19, Tailwind CSS 4, Framer Motion 12 para animaciones, Vercel Analytics para tracking de eventos, Supabase como backend (PostgreSQL), y ShadCN UI para componentes. TypeScript end-to-end.',
    icon: Code,
    badge: null
  },
  {
    question: '¿Cómo se determina la variante ganadora?',
    answer: 'El dashboard visual del hero muestra las métricas comparativas: tasa de conversión (CVR) de cada variante, lift porcentual, y confianza estadística. En producción, se recomienda al menos 1,000 visitantes por variante para alcanzar significancia del 95%.',
    icon: Gauge,
    badge: null
  },
  {
    question: '¿Es segura la integración con Supabase?',
    answer: 'Sí. Se usa la clave anon (pública) con Row Level Security habilitado. Solo se permiten inserciones en la tabla de leads. La lectura y eliminación están bloqueadas desde el cliente. Las variables de entorno se manejan con .env.local.',
    icon: Shield,
    badge: null
  },
  {
    question: '¿Puedo agregar más variantes (A/B/C/n)?',
    answer: 'El motor actual soporta 2 variantes (A/B). Para tests multivariados, podés extender la lógica de asignación dividiendo Math.random() en N segmentos iguales. Cada variante necesita su propio tracking event y métricas asociadas.',
    icon: GitBranch,
    badge: null
  },
  {
    question: '¿Cómo se estructura el proyecto?',
    answer: 'El proyecto usa App Router de Next.js con componentes en /src/components (Hero, Benefits, Testimonials, LeadForm, FAQ, Footer). Los estilos usan Tailwind CSS 4 con un design system custom (Liquid Luxury). Los componentes UI vienen de ShadCN.',
    icon: Layers,
    badge: null
  }
]

export function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Todo sobre el motor A/B, la arquitectura y las integraciones
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Documentación Técnica
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => {
                  const Icon = faq.icon
                  return (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="font-medium">{faq.question}</span>
                          {faq.badge && (
                            <Badge variant="secondary" className="text-xs ml-2">
                              {faq.badge}
                            </Badge>
                          )}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            </CardContent>
          </Card>


        </div>
      </div>
    </section>
  )
}