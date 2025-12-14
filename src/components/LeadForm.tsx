'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Loader2, CheckCircle, Mail, User, MessageSquare } from 'lucide-react'
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

    try {
      // Track form submission attempt
      track('lead_form_submit_attempt', {
        hasCompany: !!formData.company,
        hasMessage: !!formData.message
      })

      const { data, error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            message: formData.message || null,
            created_at: new Date().toISOString()
          }
        ])

      if (error) {
        throw error
      }

      // Track successful submission
      track('lead_form_submit_success', {
        email: formData.email
      })

      setIsSubmitted(true)
      toast.success('¡Gracias! Nos pondremos en contacto contigo pronto.')
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '' })
        setIsSubmitted(false)
      }, 3000)

    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Hubo un error. Por favor, inténtalo de nuevo.')
      
      // Track form submission error
      track('lead_form_submit_error', {
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="lead-form" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="p-12">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">¡Gracias por tu interés!</h3>
              <p className="text-muted-foreground">
                Nos pondremos en contacto contigo en las próximas 24 horas.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="lead-form" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Comienza tu Transformación Digital
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Únete a más de 500 empresas que ya están creciendo con nuestras soluciones.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Solicita una Consulta Gratuita</CardTitle>
              <CardDescription>
                Completa el formulario y uno de nuestros expertos te contactará en menos de 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Nombre completo *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Juan Pérez"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email profesional *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="juan@empresa.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa (opcional)</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Mi Empresa S.A."
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    ¿Qué te gustaría lograr? (opcional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Quiero aumentar mis ventas online, mejorar mi posicionamiento SEO..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full text-lg py-6" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Solicitar Consulta Gratuita'
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario, aceptas nuestra política de privacidad. 
                  No compartimos tu información con terceros.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}