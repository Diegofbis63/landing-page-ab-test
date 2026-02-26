import { Mail, Github, Globe, FlaskConical, BarChart3, Database, Code } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">A/B Engine</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Motor de A/B testing open source construido con Next.js, Vercel Analytics y Supabase. Demo funcional de split testing en producción.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://landing-page-ab-test-demo.vercel.app" target="_blank" rel="noopener noreferrer">
                <Globe className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stack</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Code className="h-3 w-3" /> Next.js 16 + React 19</li>
              <li className="flex items-center gap-2"><FlaskConical className="h-3 w-3" /> Framer Motion 12</li>
              <li className="flex items-center gap-2"><BarChart3 className="h-3 w-3" /> Vercel Analytics</li>
              <li className="flex items-center gap-2"><Database className="h-3 w-3" /> Supabase</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Split Testing A/B</li>
              <li>Event Tracking</li>
              <li>Lead Capture</li>
              <li>Liquid Luxury UI</li>
              <li>Edge-Native Deploy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Proyecto</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="https://dfbportfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Globe className="h-4 w-4" />
                <span>Portfolio completo</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>diegofbisquerra@gmail.com</span>
              </div>
              <a href="/login" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                <Globe className="h-4 w-4" />
                <span>Admin Demo</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 A/B Engine — Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Next.js 16</span>
              <span>•</span>
              <span>Vercel Analytics</span>
              <span>•</span>
              <span>Supabase</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}