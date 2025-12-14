import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'María González',
    role: 'CEO de TechStart',
    company: 'TechStart S.A.',
    avatar: '/avatars/maria.jpg',
    content: 'Increíble la transformación que lograron en solo 3 meses. Nuestras ventas aumentaron un 250% y el ROI fue visible desde la primera semana.',
    rating: 5,
    result: '+250% Ventas',
    badge: 'Verificado'
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Director de Marketing',
    company: 'RetailPro',
    avatar: '/avatars/carlos.jpg',
    content: 'El equipo es excepcional. No solo nos dieron herramientas, nos enseñaron a usarlas estratégicamente. El mejor inversion que hemos hecho.',
    rating: 5,
    result: 'ROI 4.5x',
    badge: null
  },
  {
    name: 'Ana Martínez',
    role: 'Fundadora',
    company: 'EcoStyle',
    avatar: '/avatars/ana.jpg',
    content: 'Llevábamos años estancados hasta que encontramos esta solución. Ahora somos líderes en nuestro nicho y nuestra marca tiene reconocimiento internacional.',
    rating: 5,
    result: '+400% Tráfico',
    badge: 'Verificado'
  },
  {
    name: 'Diego Fernández',
    role: 'Gerente Comercial',
    company: 'BuildCorp',
    avatar: '/avatars/diego.jpg',
    content: 'La automatización nos ahorró 20 horas semanales y aumentó la calidad de nuestros leads. Ahora podemos enfocarnos en cerrar ventas.',
    rating: 5,
    result: '-20h/semana',
    badge: null
  },
  {
    name: 'Laura Silva',
    role: 'Head of Growth',
    company: 'FoodTech',
    avatar: '/avatars/laura.jpg',
    content: 'Su enfoque basado en datos nos permitió entender mejor a nuestros clientes. Las conversiones mejoraron un 180% en el primer mes.',
    rating: 5,
    result: '+180% Conversión',
    badge: 'Verificado'
  },
  {
    name: 'Roberto Morales',
    role: 'Presidente',
    company: 'LogisticsPlus',
    avatar: '/avatars/roberto.jpg',
    content: 'Contratamos a 3 agencias antes, ninguna se compara. La transparencia en los reportes y los resultados reales hacen toda la diferencia.',
    rating: 5,
    result: 'Retorno 6 meses',
    badge: null
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Historias de Éxito Reales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo empresas como la tuya están transformando su crecimiento 
            con nuestras estrategias probadas.
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
              <span className="text-primary font-bold">500+</span> empresas confían en nosotros
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}