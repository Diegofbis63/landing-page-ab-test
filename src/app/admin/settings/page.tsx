'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Settings2, Save, Power, Activity } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import { supabase } from '@/lib/supabase'

const fakeFirstNames = ["Sofia", "Mateo", "Valentina", "Santiago", "Camila", "Leonardo", "Isabella", "Lucas", "Valeria", "Diego", "Victoria", "Gabriel", "Martina", "Daniel", "Lucia"]
const fakeLastNames = ["Gomez", "Rodriguez", "Fernandez", "Lopez", "Martinez", "Gonzalez", "Perez", "Sanchez", "Romero", "Sosa", "Torres", "Ruiz", "Ramirez", "Flores", "Acosta"]
const fakeCompanies = ["Acme Corp", "TechNova", "Globalix", "FintechAR", "CloudSync", "DataMinds", "PixelPerfect", "GrowthLab", "NextGen", "ScaleUp io"]


export default function SettingsPage() {
    const [isEngineActive, setIsEngineActive] = useState(true)
    const [trafficSplit, setTrafficSplit] = useState([50])
    const [isSaving, setIsSaving] = useState(false)

    const handleSave = () => {
        setIsSaving(true)
        setTimeout(() => {
            setIsSaving(false)
            toast.success('Configuración guardada exitosamente.', {
                className: 'bg-emerald-950 border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]',
                icon: <Save className="w-5 h-5" />,
            })
        }, 800)
    }

    const [isSeeding, setIsSeeding] = useState(false)

    const handleSeedData = async () => {
        setIsSeeding(true)
        const leadsToInsert: any[] = []

        for (let i = 0; i < 50; i++) {
            const firstName = fakeFirstNames[Math.floor(Math.random() * fakeFirstNames.length)]
            const lastName = fakeLastNames[Math.floor(Math.random() * fakeLastNames.length)]
            const company = Math.random() > 0.3 ? fakeCompanies[Math.floor(Math.random() * fakeCompanies.length)] : null
            const variant = Math.random() > 0.5 ? 'Variante A' : 'Variante B'

            // Random date within the last 7 days
            const date = new Date()
            date.setDate(date.getDate() - Math.floor(Math.random() * 7))
            date.setHours(date.getHours() - Math.floor(Math.random() * 24))

            leadsToInsert.push({
                name: `${firstName} ${lastName}`,
                email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${company ? company.toLowerCase().replace(' ', '') + '.com' : 'email.com'}`,
                company: company,
                message: Math.random() > 0.5 ? 'Interesado en una demostración corporativa.' : 'Me gustaría conocer los precios por volumen.',
                source: variant,
                created_at: date.toISOString()
            })
        }

        try {
            const { error } = await supabase.from('leads').insert(leadsToInsert)
            if (error) throw error
            toast.success('50 leads generados exitosamente en la base de datos.', {
                className: 'bg-indigo-950 border-indigo-500/30 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.2)]'
            })
        } catch (error) {
            console.error('Seed error:', error)
            toast.error('Error al generar leads de prueba.')
        } finally {
            setIsSeeding(false)
        }
    }

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div>
                <h1 className="text-3xl font-black tracking-tight text-white flex items-center gap-3">
                    <Settings2 className="w-8 h-8 text-indigo-400" />
                    Configuración del Motor A/B
                </h1>
                <p className="text-slate-400 mt-2">Controla las reglas de enrutamiento y el estado del testeo en tiempo real.</p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-8"
            >
                {/* Engine Status Card */}
                <Card className="bg-slate-900/50 backdrop-blur-xl border-white/5 overflow-hidden">
                    <CardHeader className="border-b border-white/5 pb-6">
                        <CardTitle className="text-white text-xl flex items-center justify-between">
                            Estado del Test
                            <Badge variant={isEngineActive ? "default" : "secondary"} className={isEngineActive ? "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border-emerald-500/50" : "bg-slate-800 text-slate-400"}>
                                {isEngineActive ? 'ACTIVO' : 'PAUSADO'}
                            </Badge>
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            Pausar el motor redirigirá el 100% del tráfico a la Variante A (Control).
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-full ${isEngineActive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'} border ${isEngineActive ? 'border-emerald-500/20' : 'border-rose-500/20'}`}>
                                <Power className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white">Motor de Enrutamiento</h4>
                                <p className="text-sm text-slate-500">Afecta inmediatamente a los nuevos visitantes.</p>
                            </div>
                        </div>
                        <Switch
                            checked={isEngineActive}
                            onCheckedChange={setIsEngineActive}
                            className="data-[state=checked]:bg-emerald-500"
                        />
                    </CardContent>
                </Card>

                {/* Traffic Split Card */}
                <Card className="bg-slate-900/50 backdrop-blur-xl border-white/5 overflow-hidden">
                    <CardHeader className="border-b border-white/5 pb-6">
                        <CardTitle className="text-white text-xl flex items-center gap-2">
                            <Activity className="w-5 h-5 text-indigo-400" />
                            Distribución de Tráfico
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                            Ajusta el porcentaje de visitantes que verán cada variante.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pb-2 space-y-8">
                        <div className="flex justify-between text-sm font-bold">
                            <span className="text-indigo-400">Variante A: {trafficSplit[0]}%</span>
                            <span className="text-emerald-400">Variante B: {100 - trafficSplit[0]}%</span>
                        </div>

                        <Slider
                            value={trafficSplit}
                            onValueChange={setTrafficSplit}
                            max={100}
                            step={5}
                            className="w-full"
                            disabled={!isEngineActive}
                        />

                        <div className="h-12 w-full rounded-xl overflow-hidden flex border border-white/5">
                            <motion.div
                                className="h-full bg-indigo-500/20 flex items-center justify-center border-r border-indigo-500/30"
                                style={{ width: `${trafficSplit[0]}%` }}
                            >
                                <span className={trafficSplit[0] > 10 ? 'text-indigo-300 font-bold text-xs' : 'hidden'}>A</span>
                            </motion.div>
                            <motion.div
                                className="h-full bg-emerald-500/20 flex items-center justify-center"
                                style={{ width: `${100 - trafficSplit[0]}%` }}
                            >
                                <span className={100 - trafficSplit[0] > 10 ? 'text-emerald-300 font-bold text-xs' : 'hidden'}>B</span>
                            </motion.div>
                        </div>
                    </CardContent>
                    <CardFooter className="bg-slate-950/50 p-6 flex justify-end border-t border-white/5">
                        <Button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold tracking-wide rounded-xl px-8"
                        >
                            {isSaving ? 'Guardando...' : 'Aplicar Cambios'}
                        </Button>
                    </CardFooter>
                </Card>

                {/* Developer Tools (Hidden Feature) */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="pt-10 flex justify-center">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleSeedData}
                        disabled={isSeeding}
                        className="text-slate-600 hover:text-indigo-400 hover:bg-indigo-500/10 text-xs border border-transparent hover:border-indigo-500/20 rounded-full transition-all"
                    >
                        {isSeeding ? 'Inyectando Leads...' : '🔧 Generar 50 Leads de Prueba (Dev)'}
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    )
}
