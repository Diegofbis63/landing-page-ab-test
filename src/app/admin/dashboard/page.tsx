'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDownRight, Users, TrendingUp, SplitSquareVertical } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

// Simulated data
const metrics = [
    {
        title: 'Tráfico Total',
        value: '124,500',
        change: '+14.5%',
        trend: 'up',
        icon: Users,
    },
    {
        title: 'Tasa Conv. Total',
        value: '4.8%',
        change: '-0.4%',
        trend: 'down',
        icon: TrendingUp,
    },
    {
        title: 'Tráfico Variante A',
        value: '62,100',
        change: '+5.2%',
        trend: 'up',
        icon: SplitSquareVertical,
    },
    {
        title: 'Tráfico Variante B',
        value: '62,400',
        change: '+22.4%',
        trend: 'up',
        icon: SplitSquareVertical,
    }
]

const chartData = [
    { name: 'Lun', 'Variante A': 120, 'Variante B': 140 },
    { name: 'Mar', 'Variante A': 130, 'Variante B': 160 },
    { name: 'Mie', 'Variante A': 140, 'Variante B': 210 },
    { name: 'Jue', 'Variante A': 180, 'Variante B': 240 },
    { name: 'Vie', 'Variante A': 200, 'Variante B': 320 },
    { name: 'Sab', 'Variante A': 250, 'Variante B': 380 },
    { name: 'Dom', 'Variante A': 290, 'Variante B': 430 },
]

export default function DashboardPage() {
    const [activeFilter, setActiveFilter] = useState<'ALL' | 'A' | 'B'>('ALL')

    const filteredChartData = chartData.map(data => {
        if (activeFilter === 'A') {
            return { name: data.name, 'Variante A': data['Variante A'], 'Variante B': 0 }
        }
        if (activeFilter === 'B') {
            return { name: data.name, 'Variante A': 0, 'Variante B': data['Variante B'] }
        }
        return data
    })

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-black tracking-tight text-white">
                    A/B Engine <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Overview</span>
                </h1>
                <p className="text-slate-400 mt-1">Métricas de rendimiento en tiempo real y comparación de variantes. <span className="text-indigo-400 font-medium">Haz clic en una variante para aislar datos.</span></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => {
                    const Icon = metric.icon
                    const isPositive = metric.trend === 'up'
                    const isClickable = metric.title.includes('Variante')
                    const variantName = metric.title.includes('A') ? 'A' : metric.title.includes('B') ? 'B' : null

                    const handleCardClick = () => {
                        if (!isClickable || !variantName) return
                        setActiveFilter(prev => prev === variantName ? 'ALL' : variantName)
                    }

                    const isSelected = activeFilter === variantName

                    return (
                        <motion.div
                            key={metric.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={isClickable ? { scale: 1.02, y: -5 } : {}}
                            whileTap={isClickable ? { scale: 0.98 } : {}}
                            onClick={handleCardClick}
                            className={isClickable ? 'cursor-pointer' : ''}
                        >
                            <Card className={cn(
                                "bg-slate-900/50 backdrop-blur-xl border-white/5 overflow-hidden relative group transition-all duration-300",
                                isClickable && "hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
                                isSelected && "border-indigo-500/50 bg-indigo-500/10 shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                            )}>
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium text-slate-400">
                                        {metric.title}
                                    </CardTitle>
                                    <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                                        <Icon className="w-4 h-4 text-indigo-400" />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                                    <div className={cn(
                                        "flex items-center text-xs font-medium",
                                        isPositive ? "text-emerald-400" : "text-rose-400"
                                    )}>
                                        {isPositive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                                        {metric.change} desde el mes pasado
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )
                })}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <Card className="bg-slate-900/50 backdrop-blur-xl border-white/5 overflow-hidden">
                    <CardHeader className="border-b border-white/5 pb-4">
                        <CardTitle className="text-white text-xl font-bold">Conversiones: Variante A vs Variante B</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="h-[400px] w-full pt-4 overflow-x-auto">
                            <div className="min-w-[600px] h-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={filteredChartData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                        <XAxis dataKey="name" stroke="#ffffff50" tick={{ fill: '#ffffff80', fontSize: 12 }} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#ffffff50" tick={{ fill: '#ffffff80', fontSize: 12 }} tickLine={false} axisLine={false} />
                                        <Tooltip
                                            cursor={{ fill: '#ffffff05' }}
                                            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#ffffff10', borderRadius: '12px', color: '#fff' }}
                                        />
                                        <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                        {(activeFilter === 'ALL' || activeFilter === 'A') && (
                                            <Bar dataKey="Variante A" fill="#818cf8" radius={[4, 4, 0, 0]} maxBarSize={50} />
                                        )}
                                        {(activeFilter === 'ALL' || activeFilter === 'B') && (
                                            <Bar dataKey="Variante B" fill="#34d399" radius={[4, 4, 0, 0]} maxBarSize={50} />
                                        )}
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}
