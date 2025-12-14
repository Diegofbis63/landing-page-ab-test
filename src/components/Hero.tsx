'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react'
import { track } from '@vercel/analytics'

export function Hero() {
  const [variant, setVariant] = useState<'A' | 'B'>('A')

  useEffect(() => {
    // A/B testing logic: 50/50 split
    const random = Math.random()
    setVariant(random < 0.5 ? 'A' : 'B')
    
    // Track which variant is shown
    track('hero_variant_shown', { variant: random < 0.5 ? 'A' : 'B' })
  }, [])

  const handleCTAClick = () => {
    // Track CTA click with variant
    track('cta_click', { 
      variant,
      buttonText: variant === 'A' ? 'Prueba Gratis' : 'Comienza Ahora'
    })
    
    // Smooth scroll to lead form
    const element = document.getElementById('lead-form')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Transforma tu Negocio
                </span>
                <br />
                <span className="text-foreground">
                  con Marketing Digital
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Aumenta tus ventas hasta un 300% con estrategias probadas. 
                La única plataforma que combina SEO, publicidad y contenido 
                en una solución integral.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 h-auto"
                onClick={handleCTAClick}
                variant={variant === 'A' ? 'default' : 'destructive'}
              >
                {variant === 'A' ? 'Prueba Gratis' : 'Comienza Ahora'}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 h-auto"
              >
                Ver Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Setup en 5 min</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Garantía 30 días</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">+500 empresas</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-card rounded-3xl p-8 shadow-2xl border">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b">
                  <span className="text-sm font-medium">Crecimiento Mensual</span>
                  <span className="text-sm text-green-600 font-bold">+127%</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">2.5x</div>
                    <div className="text-xs text-muted-foreground">ROI Promedio</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <div className="text-2xl font-bold text-secondary">89%</div>
                    <div className="text-xs text-muted-foreground">Satisfacción</div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Clientes Activos</span>
                    <span className="font-bold">1,247</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
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