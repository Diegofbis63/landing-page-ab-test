'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Rocket, Target, BarChart3, Users, Globe, Zap, CheckCircle, TrendingUp, Clock, Shield, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: Rocket,
    title: 'Lanzamiento Rápido',
    description: 'Configura tu campaña en menos de 48 horas y empieza a ver resultados desde la primera semana.',
    badge: 'Popular',
    features: [
      'Setup guiado paso a paso',
      'Plantillas pre-diseñadas',
      'Integración automática',
      'Asistente personal IA'
    ],
    stats: { value: '48h', label: 'Tiempo promedio de setup' },
    progress: 95,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Target,
    title: 'Segmentación Precisa',
    description: 'Alcanza a tu público ideal con nuestra tecnología de IA que analiza patrones de comportamiento.',
    badge: null,
    features: [
      'Análisis demográfico avanzado',
      'Segmentación por comportamiento',
      'Lookalike audiences',
      'Retargeting inteligente'
    ],
    stats: { value: '92%', label: 'Precisión de segmentación' },
    progress: 92,
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: BarChart3,
    title: 'Análisis en Tiempo Real',
    description: 'Monitorea tus campañas con dashboards interactivos y recibe alertas de optimización automática.',
    badge: null,
    features: [
      'Dashboard en vivo',
      'Alertas automáticas',
      'Predicciones de rendimiento',
      'Reportes personalizados'
    ],
    stats: { value: '24/7', label: 'Monitoreo continuo' },
    progress: 88,
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Users,
    title: 'Soporte Experto 24/7',
    description: 'Equipo de especialistas disponibles para ayudarte a maximizar tu ROI en cualquier momento.',
    badge: null,
    features: [
      'Chat en vivo instantáneo',
      'Llamadas programadas',
      'Base de conocimientos',
      'Comunidad exclusiva'
    ],
    stats: { value: '<2min', label: 'Tiempo de respuesta' },
    progress: 98,
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Globe,
    title: 'Expansión Global',
    description: 'Llega a mercados internacionales con campañas adaptadas culturalmente a cada región.',
    badge: 'Nuevo',
    features: [
      'Multi-idioma automático',
      'Adaptación cultural',
      'Pagos locales',
      'Cumplimiento internacional'
    ],
    stats: { value: '50+', label: 'Países disponibles' },
    progress: 75,
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Zap,
    title: 'Automatización Inteligente',
    description: 'Deja que nuestra IA optimice tus presupuestos automáticamente para maximizar resultados.',
    badge: null,
    features: [
      'Optimización de presupuesto',
      'A/B testing automático',
      'Segmentación dinámica',
      'Predicción de tendencias'
    ],
    stats: { value: '300%', label: 'ROI promedio' },
    progress: 94,
    color: 'from-yellow-500 to-orange-500'
  }
]

export function Benefits() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Beneficios que Transforman tu Negocio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No solo aumentamos tu visibilidad, creamos una máquina de crecimiento 
            que trabaja para ti 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isExpanded = expandedCard === index
            
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-500 cursor-pointer ${
                  isExpanded 
                    ? 'shadow-2xl scale-105 border-primary' 
                    : 'hover:shadow-lg hover:scale-102'
                }`}
                onClick={() => toggleCard(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 ${isExpanded ? 'opacity-5' : ''} transition-opacity duration-300`}></div>
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 bg-gradient-to-br ${benefit.color} rounded-lg text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    {benefit.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {benefit.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  {/* Stats principales */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                        {benefit.stats.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{benefit.stats.label}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={benefit.progress} className="w-20" />
                      <span className="text-sm font-medium">{benefit.progress}%</span>
                    </div>
                  </div>

                  {/* Features expandibles */}
                  <div className={`space-y-2 overflow-hidden transition-all duration-500 ${
                    isExpanded ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 border-t">
                      <h4 className="font-semibold mb-3 text-sm">Características incluidas:</h4>
                      <div className="space-y-2">
                        {benefit.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Botón de acción */}
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 group"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleCard(index)
                    }}
                  >
                    {isExpanded ? 'Ver menos' : 'Ver más detalles'}
                    <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                      isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`} />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-muted/50 rounded-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">300%</div>
              <div className="text-sm text-muted-foreground">Crecimiento Promedio</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">Primeros Resultados</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}