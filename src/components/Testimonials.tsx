import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Lucía Fernández',
    role: 'Head of Growth',
    company: 'ConvertLab',
    content: 'Implementamos el motor A/B en nuestra landing principal. En 2 semanas identificamos que el CTA azul convertía un 38% más que el verde. Decisión basada en datos pura.',
    rating: 5,
    result: '+38% CVR',
    badge: 'Verificado'
  },
  {
    name: 'Martín Suárez',
    role: 'Product Manager',
    company: 'ScaleUp.io',
    content: 'La integración con Vercel Analytics fue instantánea. Cero config, cero impacto en performance. Vemos las métricas de cada variante en tiempo real sin herramientas externas.',
    rating: 5,
    result: 'Real-Time Data',
    badge: null
  },
  {
    name: 'Carolina Paz',
    role: 'Marketing Lead',
    company: 'FintechAR',
    content: 'Los leads que capturamos con Supabase vienen segmentados por variante del test. Sabemos exactamente qué versión de la landing genera los leads más calificados.',
    rating: 5,
    result: '+52% Lead Quality',
    badge: 'Verificado'
  },
  {
    name: 'Diego Ramírez',
    role: 'CTO',
    company: 'DataDrive',
    content: 'El stack Next.js + Vercel + Supabase es exactamente lo que necesitábamos. Deploy en menos de 5 minutos, testing desde el día uno. Sin dependencias innecesarias.',
    rating: 5,
    result: '5 Min Deploy',
    badge: null
  },
  {
    name: 'Valentina Torres',
    role: 'UX Researcher',
    company: 'PixelPerfect',
    content: 'Antes dependíamos de Google Optimize (descontinuado). Este motor es moderno, edge-native, y nos da control total sobre qué testeamos y cómo medimos.',
    rating: 5,
    result: 'Full Control',
    badge: 'Verificado'
  },
  {
    name: 'Andrés Molina',
    role: 'Founder',
    company: 'LaunchStack',
    content: 'Usamos el split test para probar dos headlines diferentes. La variante B generó un 27% más de scroll depth. Datos que cambian decisiones de producto.',
    rating: 5,
    result: '+27% Engagement',
    badge: null
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Resultados Reales de A/B Testing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Equipos que usan el motor A/B para tomar decisiones basadas en datos
            y optimizar sus conversiones de forma continua.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  {testimonial.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.badge}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-sm leading-relaxed pl-6 italic">
                    {testimonial.content}
                  </p>
                </blockquote>

                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Resultado clave:</span>
                    <Badge variant="outline" className="text-xs font-bold">
                      {testimonial.result}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-4 bg-background rounded-lg shadow-sm">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-full border-2 border-background flex items-center justify-center text-white text-xs font-bold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm font-medium">
              <span className="text-primary font-bold">200+</span> equipos optimizando con A/B testing
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}