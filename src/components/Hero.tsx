'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, SplitSquareVertical, BarChart3, TrendingUp, Sparkles, FlaskConical, Lock } from 'lucide-react'
import { track } from '@vercel/analytics'
import Link from 'next/link'

export function Hero() {
  const [variant, setVariant] = useState<'A' | 'B'>('A')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const random = Math.random()
    const selectedVariant = random < 0.5 ? 'A' : 'B'
    setVariant(selectedVariant)
    try { track('hero_variant_shown', { variant: selectedVariant }) } catch { }
  }, [])

  const handleCTAClick = () => {
    try {
      track('cta_click', {
        variant,
        buttonText: variant === 'A' ? 'Probar Motor A/B' : 'Empezar Split Test'
      })
    } catch { }
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!mounted) return null

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Top Navigation for Admin Access */}
      <div className="absolute top-0 w-full p-6 flex justify-end z-50">
        <Link href="/login">
          <Button variant="ghost" className="text-slate-400 hover:text-white font-medium gap-2">
            <Lock className="w-4 h-4" />
            Admin Demo
          </Button>
        </Link>
      </div>

      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[10%] left-[10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md"
              >
                <FlaskConical className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  A/B Testing Engine &bull; 2026
                </span>
              </motion.div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                <span className="block text-gradient">
                  Optimizá tus
                </span>
                <span className="block opacity-90">
                  Conversiones.
                </span>
              </h1>

              <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
                Testeo A/B en tiempo real con <span className="text-white">Vercel Analytics</span>.
                Elegí la variante ganadora con datos, no suposiciones.
              </p>
            </div>

            {/* A/B Variant Badge - Live indicator */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                Estás viendo la Variante {variant} — este botón cambia en vivo
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className={`font-black uppercase tracking-widest text-sm px-10 py-7 rounded-2xl shadow-2xl transition-all w-full sm:w-auto ${variant === 'A'
                    ? 'bg-white text-black hover:bg-slate-200'
                    : 'bg-primary text-white hover:bg-primary/90'
                    }`}
                  onClick={handleCTAClick}
                >
                  {variant === 'A' ? 'Probar Motor A/B' : 'Empezar Split Test'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/10 text-white hover:bg-white/[0.03] font-black uppercase tracking-widest text-sm px-10 py-7 rounded-2xl transition-all w-full sm:w-auto"
                  onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Cómo Funciona
                </Button>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-6 pt-4 border-t border-white/5">
              {[
                { icon: SplitSquareVertical, text: "Split Testing" },
                { icon: BarChart3, text: "Vercel Analytics" },
                { icon: Sparkles, text: "Supabase Leads" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="text-xs font-black uppercase tracking-widest text-slate-500">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Performance Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative perspective-1000 hidden lg:block"
          >
            <div className="liquid-glass rounded-[2.5rem] p-10 space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/40 transition-colors" />

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Dashboard en Vivo</p>
                  <h3 className="text-2xl font-black text-white">Split Test Results</h3>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 neon-pulse">
                  <SplitSquareVertical className="h-6 w-6 text-primary" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Variante A</p>
                  <p className="text-4xl font-black text-primary">4.2%</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">CVR</p>
                </div>
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-emerald-500/10 space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Variante B</p>
                  <p className="text-4xl font-black text-emerald-400">5.8%</p>
                  <div className="flex items-center gap-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">CVR</p>
                    <span className="text-[10px] font-bold text-emerald-400">↑ GANADORA</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-3xl font-black text-white">+32%</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Conversion Lift</p>
                  </div>
                  <div className="text-emerald-500 font-black text-xs px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                    Significativo
                  </div>
                </div>
                <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "82%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="bg-gradient-to-r from-primary to-emerald-400 h-full rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                  />
                </div>
                <p className="text-[10px] text-slate-500 font-medium">Confianza estadística: 95% • 12,847 visitantes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
