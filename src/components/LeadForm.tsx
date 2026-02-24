'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Loader2, CheckCircle, Mail, User, MessageSquare, Briefcase, Sparkles, Send } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { track } from '@vercel/analytics'

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      toast.error('Configuración incompleta.')
      setIsSubmitting(false)
      return
    }

    try {
      track('lead_form_submit_attempt', { hasCompany: !!formData.company })

      const { error } = await supabase
        .from('leads')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          message: formData.message || null,
          created_at: new Date().toISOString()
        }])

      if (error) throw error

      track('lead_form_submit_success', { email: formData.email })
      setIsSubmitted(true)
      toast.success('Solicitud enviada con éxito.')

      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '' })
        setIsSubmitted(false)
      }, 5000)

    } catch (error) {
      console.error(error)
      toast.error('Error al enviar. Inténtalo de nuevo.')
      track('lead_form_submit_error', { error: error instanceof Error ? error.message : 'Unknown' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="lead-form" className="py-32 relative bg-background overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full -ml-20 -mb-20 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                <Sparkles className="h-3 w-3 text-primary" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Consultoría Estratégica</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tighter text-white">
                Escala tu negocio <br />
                <span className="text-gradient">Hoy Mismo.</span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed font-medium">
                Reserva una sesión estratégica gratuita con nuestros expertos en crecimiento 2026.
                Analizaremos tu embudo actual y diseñaremos un plan de acción de alto impacto.
              </p>
            </div>

            <div className="space-y-6">
              {[
                "Auditoría completa de Marketing",
                "Predicciones de ROI con IA",
                "Estrategia de escalado personalizada"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                    <CheckCircle className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm font-bold text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                    <div className="h-20 w-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto neon-pulse">
                      <CheckCircle className="h-10 w-10 text-emerald-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-black text-white">¡Todo Listo!</h3>
                      <p className="text-slate-400 font-medium">Nos pondremos en contacto contigo en las próximas 24 horas.</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="form" className="p-10 space-y-8">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl font-black text-white">Solicitar Consulta</CardTitle>
                      <CardDescription className="text-slate-400 font-medium">Completa los detalles para comenzar.</CardDescription>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                            <User className="h-3 w-3" /> Nombre
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Ej. Alex Smith"
                            required
                            className="bg-white/[0.02] border-white/5 rounded-2xl h-14 focus:ring-primary focus:border-primary transition-all text-white"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                            <Mail className="h-3 w-3" /> Email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="alex@startup.com"
                            required
                            className="bg-white/[0.02] border-white/5 rounded-2xl h-14 focus:ring-primary focus:border-primary transition-all text-white"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="company" className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                          <Briefcase className="h-3 w-3" /> Empresa
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Nombre de tu empresa"
                          className="bg-white/[0.02] border-white/5 rounded-2xl h-14 focus:ring-primary focus:border-primary transition-all text-white"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                          <MessageSquare className="h-3 w-3" /> Objetivo
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="¿Qué te gustaría lograr con nosotros?"
                          className="bg-white/[0.02] border-white/5 rounded-2xl min-h-[120px] focus:ring-primary focus:border-primary transition-all text-white resize-none"
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white text-black hover:bg-slate-200 h-16 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                          <>
                            Enviar Solicitud <Send className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
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
