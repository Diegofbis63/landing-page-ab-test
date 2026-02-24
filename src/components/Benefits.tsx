'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Rocket, Target, BarChart3, Users, Globe, Zap, CheckCircle, TrendingUp, Sparkles, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: Rocket,
    title: 'Lanzamiento Rápido',
    description: 'Configura tu campaña en menos de 48 horas y empieza a ver resultados desde la primera semana.',
    badge: 'Elite Performance',
    features: [
      'Setup guiado paso a paso',
      'Plantillas Premium 2026',
      'Integración One-Click',
      'Asistente GPT-4o Integrado'
    ],
    stats: { value: '48h', label: 'Setup Time' },
    progress: 95,
  },
  {
    icon: Target,
    title: 'Segmentación Precisa',
    description: 'Alcanza a tu público ideal con nuestra tecnología de IA que analiza patrones de comportamiento.',
    badge: 'Neural Engine',
    features: [
      'Análisis demográfico avanzado',
      'Behavioral Tracking',
      'Lookalike Audiences Pro',
      'Smart Retargeting'
    ],
    stats: { value: '92%', label: 'Precision' },
    progress: 92,
  },
  {
    icon: BarChart3,
    title: 'Análisis en Tiempo Real',
    description: 'Monitorea tus campañas con dashboards interactivos y recibe alertas de optimización automática.',
    badge: 'Live Insight',
    features: [
      'Dashboard 4K Interactivo',
      'Alertas Predictivas',
      'Performance Forecast',
      'Reportes de Grado Ejecutivo'
    ],
    stats: { value: '24/7', label: 'Monitor' },
    progress: 88,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export function Benefits() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-24 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Ventaja Competitiva</span>
          </motion.div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-white">
            Beneficios de <span className="text-gradient">Grado Élite.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            No solo aumentamos tu visibilidad; construimos un ecosistema de escalabilidad
            diseñado para dominar tu mercado.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isExpanded = expandedCard === index

            return (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`liquid-glass group relative overflow-hidden transition-all duration-500 cursor-pointer border-white/5 hover:border-primary/30 ${isExpanded ? 'ring-2 ring-primary/50' : ''
                    }`}
                  onClick={() => setExpandedCard(isExpanded ? null : index)}
                >
                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20 text-primary group-hover:neon-pulse transition-all">
                        <Icon className="h-6 w-6" />
                      </div>
                      {benefit.badge && (
                        <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-widest bg-white/5 border-white/10 text-slate-400">
                          {benefit.badge}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl font-black text-white">{benefit.title}</CardTitle>
                    <CardDescription className="text-sm text-slate-400 leading-relaxed font-medium">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{benefit.stats.label}</p>
                        <p className="text-2xl font-black text-white">{benefit.stats.value}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-xs font-bold text-slate-400">{benefit.progress}%</span>
                        <Progress value={benefit.progress} className="w-24 h-1.5 bg-white/5" />
                      </div>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-6 border-t border-white/5 space-y-4"
                        >
                          <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Features Incluidas:</h4>
                          <div className="grid gap-3">
                            {benefit.features.map((feature, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-3">
                                <CheckCircle className="h-4 w-4 text-emerald-500 fill-emerald-500/10" />
                                <span className="text-xs font-medium text-slate-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Button
                      variant="ghost"
                      className="w-full text-[10px] font-black uppercase tracking-widest hover:bg-white/[0.03] text-slate-400 hover:text-white group/btn"
                    >
                      {isExpanded ? 'Ocultar Detalles' : 'Ver más detalles'}
                      <ArrowRight className={`ml-2 h-3 w-3 transition-transform duration-300 ${isExpanded ? '-rotate-90' : 'group-hover/btn:translate-x-1'}`} />
                    </Button>
                  </CardContent>

                  {/* Corner glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-2xl rounded-full -mr-12 -mt-12 transition-colors group-hover:bg-primary/20" />
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Global Impact Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-1 px-1 rounded-[2.5rem] bg-gradient-to-r from-primary/20 via-white/5 to-secondary/20"
        >
          <div className="liquid-glass rounded-[2.4rem] px-12 py-10 flex flex-wrap justify-between items-center gap-12">
            {[
              { label: "Crecimiento Promedio", value: "300%", icon: TrendingUp },
              { label: "Primeros Resultados", value: "24h", icon: Zap },
              { label: "Clientes Satisfechos", value: "98%", icon: Users }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="h-14 w-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-primary group">
                  <stat.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                </div>
                <div className="space-y-1">
                  <p className="text-4xl font-black text-white">{stat.value}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</p>
                </div>
              </div>
            ))}
            <div className="flex-1 lg:flex justify-end hidden">
              <Button className="bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest text-xs px-8 py-6 rounded-2xl">
                Empieza Ahora
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
