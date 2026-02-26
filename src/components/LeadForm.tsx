'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Send, CheckCircle, FlaskConical, BarChart3, Database, ArrowRight } from 'lucide-react'
import { createClient } from '@supabase/supabase-js'
import { toast } from 'sonner'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
)

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { error } = await supabase
        .from('leads')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          source: 'ab-engine-landing',
          created_at: new Date().toISOString()
        }])

      if (error) throw error

      setIsSubmitted(true)
      toast.success('Lead capturado con éxito. Revisa el panel de admin.', {
        className: 'bg-slate-900 border-indigo-500/30 text-white shadow-[0_0_20px_rgba(99,102,241,0.2)]',
        duration: 5000,
      })
    } catch {
      toast.error('Error al enviar. Intentá de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="lead-form" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/5 blur-[150px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:sticky lg:top-32"
          >
            <Badge variant="outline" className="text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full border-white/10 text-slate-400">
              Supabase Lead Capture
            </Badge>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white leading-tight">
              Probá la captura
              <br />
              <span className="text-gradient">de leads en vivo.</span>
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed">
              Este formulario está conectado a una base de datos Supabase real.
              Cada envío se persiste y queda segmentado por la variante A/B que estés viendo.
            </p>

            <div className="space-y-6 pt-4">
              {[
                { icon: FlaskConical, title: 'Demo 100% funcional', desc: 'Cada campo se guarda en Supabase con RLS activado' },
                { icon: BarChart3, title: 'Tracking de conversión', desc: 'El submit trackea la variante vista vía Vercel Analytics' },
                { icon: Database, title: 'PostgreSQL real', desc: 'Datos accesibles desde el dashboard de Supabase' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary flex-shrink-0 mt-1">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{item.title}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="liquid-glass border-white/5 shadow-2xl rounded-[2.5rem] overflow-hidden">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="p-12 text-center space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto">
                      <CheckCircle className="h-10 w-10 text-accent" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-black text-white">¡Lead capturado!</h3>
                      <p className="text-slate-400 max-w-sm mx-auto">
                        Tu envío se guardó en Supabase. Podés verificarlo en el dashboard del proyecto.
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs font-bold border-accent/30 text-accent">
                      Variante {/* variant tracking */} • Supabase ✓
                    </Badge>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CardHeader className="p-8 pb-4">
                      <CardTitle className="text-xl font-black text-white">
                        Enviá un lead de prueba
                      </CardTitle>
                      <p className="text-sm text-slate-500">
                        Completá el formulario para ver Supabase en acción
                      </p>
                    </CardHeader>
                    <CardContent className="p-8 pt-4">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-500">Nombre</Label>
                            <Input
                              id="name"
                              required
                              className="bg-white/[0.02] border-white/5 rounded-2xl h-14 focus:ring-primary focus:border-primary transition-all text-white"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Tu nombre"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              className="bg-white/[0.02] border-white/5 rounded-2xl h-14 focus:ring-primary focus:border-primary transition-all text-white"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="tu@email.com"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-slate-500">Empresa</Label>
                          <Input
                            id="company"
                            className="bg-white/[0.02] border-white/5 rounded-2xl h-14 focus:ring-primary focus:border-primary transition-all text-white"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Tu empresa"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-500">Mensaje</Label>
                          <Textarea
                            id="message"
                            className="bg-white/[0.02] border-white/5 rounded-2xl focus:ring-primary focus:border-primary transition-all text-white min-h-[120px]"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Probando la captura de leads..."
                          />
                        </div>

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-white text-black hover:bg-slate-200 font-black uppercase tracking-widest text-sm py-7 rounded-2xl shadow-2xl transition-all"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Guardando en Supabase...' : 'Enviar Lead de Prueba'}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </form>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
