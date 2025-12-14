import { Link } from 'lucide-react'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">MarketingPro</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformamos negocios con estrategias digitales que generan resultados reales y medibles.
            </p>
            <div className="flex items-center gap-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">SEO & Posicionamiento</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Publicidad Digital</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Email Marketing</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Content Marketing</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Analytics & ROI</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Sobre Nosotros</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Casos de Éxito</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Carreras</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Partners</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hola@marketingpro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Av. Principal 123, Ciudad</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 MarketingPro. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="hover:text-primary cursor-pointer transition-colors">Política de Privacidad</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Términos de Servicio</span>
              <span className="hover:text-primary cursor-pointer transition-colors">Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}