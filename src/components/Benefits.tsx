'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SplitSquareVertical, BarChart3, Database, ChevronDown, Check, Zap, Globe, Lock } from 'lucide-react'

const features = [
  {
    icon: SplitSquareVertical,
    title: 'Split Testing en Tiempo Real',
    description: 'Creá variantes A/B de tu CTA, copy y diseño. El motor asigna tráfico 50/50 y mide impacto al instante.',
    badge: 'Core',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/20',
    details: [
      'Variantes de CTA (texto, color, posición)',
      'Asignación aleatoria de tráfico',
      'Tracking de clicks por variante',
      'Detección automática de ganador'
    ]
  },
  {
    icon: BarChart3,
    title: 'Vercel Analytics Integrado',
    description: 'Cada interacción se captura con Vercel Analytics. Sin impacto en performance, sin SDK pesados.',
    badge: 'Analytics',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    borderColor: 'border-secondary/20',
    details: [
      'Eventos custom por variante',
      'Métricas de conversión en tiempo real',
      'Zero-config, edge-native',
      'Web Vitals automáticos'
    ]
  },
  {
    icon: Database,
    title: 'Captura de Leads con Supabase',
    description: 'Formulario con persistencia real en Supabase. Cada lead se guarda segmentado por variante A/B.',
    badge: 'Backend',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/20',
    details: [
      'Persistencia en PostgreSQL (Supabase)',
      'Segmentación por variante del test',
      'Validación server-side',
      'Row Level Security habilitado'
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
}

export function Benefits() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section id="benefits" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-6"
        >
          <Badge variant="outline" className="text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full border-white/10 text-slate-400">
            Arquitectura del Motor
          </Badge>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-white">
            Tres pilares.
            <br />
            <span className="text-gradient">Un motor de conversión.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Stack moderno, integración nativa, resultados medibles.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isExpanded = expandedCard === index
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`liquid-glass group relative overflow-hidden transition-all duration-500 cursor-pointer border-white/5 hover:border-primary/30 h-full ${isExpanded ? 'ring-2 ring-primary/50' : ''
                    }`}
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                >
                  <CardHeader className="space-y-6 pb-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-2xl ${feature.bgColor} border ${feature.borderColor} ${feature.color}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest border-white/10 text-slate-500">
                        {feature.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-black text-white tracking-tight">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 border-t border-white/5 space-y-3">
                            {feature.details.map((detail, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-slate-400">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="flex items-center gap-2 pt-2">
                      <ChevronDown className={`h-4 w-4 text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        {isExpanded ? 'Menos' : 'Ver detalles'}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="liquid-glass rounded-3xl p-8 flex flex-wrap justify-center gap-12">
            {[
              { icon: Zap, value: 'Edge-Native', label: 'Vercel Infra' },
              { icon: Globe, value: 'Real-Time', label: 'Analytics' },
              { icon: Lock, value: 'RLS', label: 'Supabase Security' },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <stat.icon className="h-5 w-5 text-primary mx-auto" />
                <p className="text-xl font-black text-white">{stat.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
