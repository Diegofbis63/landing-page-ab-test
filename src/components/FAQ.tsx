'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { HelpCircle, Clock, Shield, Zap } from 'lucide-react'

const faqs = [
  {
    question: '¿Cuánto tiempo toma ver resultados?',
    answer: 'La mayoría de nuestros clientes comienzan a ver resultados medibles en las primeras 2-3 semanas. Sin embargo, para campañas completas con SEO, recomendamos un mínimo de 90 días para obtener resultados óptimos y sostenibles.',
    icon: Clock,
    badge: 'Popular'
  },
  {
    question: '¿Qué garantías ofrecen?',
    answer: 'Ofrecemos una garantía de satisfacción de 30 días. Si no ves mejoras medibles en tus métricas clave durante el primer mes, te reembolsamos el 100% sin preguntas. Además, garantizamos un mínimo ROI de 2x en 6 meses.',
    icon: Shield,
    badge: null
  },
  {
    question: '¿¿Cómo funciona el proceso de onboarding?',
    answer: 'Nuestro proceso es simple: 1) Llamada inicial de 30 minutos para entender tus objetivos, 2) Auditoría gratuita de tu situación actual, 3) Presentación de estrategia personalizada, 4) Implementación en 48-72 horas, 5) Seguimiento semanal y optimización continua.',
    icon: Zap,
    badge: null
  },
  {
    question: '¿Qué industrias han trabajado?',
    answer: 'Tenemos experiencia en más de 25 industrias incluyendo: E-commerce, SaaS, servicios profesionales, salud, educación, bienes raíces, manufactura y retail. Adaptamos nuestras estrategias a las particularidades de cada sector.',
    icon: HelpCircle,
    badge: null
  },
  {
    question: '¿¿Necesito tener conocimientos técnicos?',
    answer: 'No necesitas experiencia técnica. Nuestro equipo maneja toda la parte técnica mientras tú te enfocas en tu negocio. Proporcionamos reportes sencillos de entender y reuniones regulares para explicarte el progreso.',
    icon: HelpCircle,
    badge: null
  },
  {
    question: '¿¿Qué incluyen sus servicios?',
    answer: 'Nuestros servicios incluyen: estrategia digital completa, gestión de campañas publicitarias, optimización SEO, creación de contenido, email marketing, análisis y reportes, soporte 24/7, y acceso a nuestra plataforma de automatización.',
    icon: HelpCircle,
    badge: null
  },
  {
    question: '¿¿Cómo miden el éxito?',
    answer: 'Medimos el éxito a través de KPIs específicos: aumento en tráfico web, tasa de conversión, costo por adquisición (CPA), retorno de inversión (ROI), posicionamiento en buscadores, y crecimiento en ingresos generados digitalmente.',
    icon: HelpCircle,
    badge: null
  },
  {
    question: '¿¿Puedo cancelar en cualquier momento?',
    answer: 'Sí, nuestros contratos son flexibles. Puedes cancelar en cualquier momento con 30 días de aviso. No hay penalizaciones ocultas. Creemos en mantener clientes por resultados, no por ataduras contractuales.',
    icon: HelpCircle,
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
              Todo lo que necesitas saber sobre nuestros servicios
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Resuelve tus dudas
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

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-6 p-6 bg-muted/50 rounded-lg">
              <div className="text-left">
                <h3 className="font-semibold mb-2">¿Aún tienes dudas?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Habla directamente con uno de nuestros expertos
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Respuesta en 2h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>100% Gratuito</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}