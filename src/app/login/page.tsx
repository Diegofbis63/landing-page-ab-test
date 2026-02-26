'use client'

import { Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'
import { Loader2, Lock, Mail, ArrowRight, Sparkles } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function LoginForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('diegofbisquerra@gmail.com')
    const [password, setPassword] = useState('admin123')
    const router = useRouter()
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/admin/dashboard'

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })

            if (res.ok) {
                toast.success('Acceso autorizado. Iniciando secuencia...')
                router.push(callbackUrl)
                router.refresh()
            } else {
                toast.error('Credenciales inválidas. Acceso denegado.')
            }
        } catch (error) {
            toast.error('Error de conexión. Inténtalo de nuevo.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.1),transparent_50%)]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-full max-w-md"
            >
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.2)] mb-6"
                    >
                        <Lock className="w-8 h-8 text-indigo-400" />
                    </motion.div>
                    <h1 className="text-3xl font-black tracking-tight text-white mb-2">
                        Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Access</span>
                    </h1>
                    <p className="text-slate-400">Portal de administración restringido</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative"
                >
                    {/* Subtle glow behind the card */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-md -z-10" />

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-slate-300 ml-1">Email Corporation</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="diegofbisquerra@gmail.com"
                                    className="pl-10 bg-slate-950/50 border-white/10 text-white placeholder:text-slate-600 h-12 rounded-xl focus-visible:ring-indigo-500/50"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-slate-300 ml-1">Master Password</Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    className="pl-10 bg-slate-950/50 border-white/10 text-white placeholder:text-slate-600 h-12 rounded-xl focus-visible:ring-indigo-500/50"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-4 pt-2">
                            <Button
                                type="button"
                                onClick={handleLogin}
                                className="w-full h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold tracking-wide shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:scale-[1.02] group"
                                disabled={isLoading}
                            >
                                <span className="flex items-center gap-2 text-lg">
                                    <Sparkles className="w-5 h-5 text-indigo-200 group-hover:text-white group-hover:scale-110 transition-all" />
                                    Ingresar rápido como Admin Demo
                                </span>
                            </Button>

                            <div className="relative flex items-center py-2">
                                <div className="flex-grow border-t border-white/5"></div>
                                <span className="flex-shrink-0 mx-4 text-xs font-medium text-slate-500 uppercase tracking-widest">O ingreso manual</span>
                                <div className="flex-grow border-t border-white/5"></div>
                            </div>

                            <Button
                                type="submit"
                                variant="outline"
                                className="w-full h-12 rounded-xl bg-transparent hover:bg-white/5 border-white/10 text-slate-300 font-medium tracking-wide transition-all group"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Authenticate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform opacity-70" />
                                    </span>
                                )}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-8 text-center">
                        <div className="text-xs text-slate-500 font-mono flex items-center justify-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            System Encryption Active
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default function LoginPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
            </div>
        }>
            <LoginForm />
        </Suspense>
    )
}
