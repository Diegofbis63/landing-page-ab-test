'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDownRight, Users, TrendingUp, SplitSquareVertical } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

// Simulated data
const metrics = [
    {
        title: 'Total Traffic',
        value: '124,500',
        change: '+14.5%',
        trend: 'up',
        icon: Users,
    },
    {
        title: 'Variant A Traffic',
        value: '62,100',
        change: '+5.2%',
        trend: 'up',
        icon: SplitSquareVertical,
    },
    {
        title: 'Variant B Traffic',
        value: '62,400',
        change: '+22.4%',
        trend: 'up',
        icon: SplitSquareVertical,
    },
    {
        title: 'Global Conv. Rate',
        value: '4.8%',
        change: '-0.4%',
        trend: 'down',
        icon: TrendingUp,
    }
]

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-black tracking-tight text-white">
                    A/B Engine <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Overview</span>
                </h1>
                <p className="text-slate-400 mt-1">Real-time performance metrics and variant comparison.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, index) => {
                    const Icon = metric.icon
                    const isPositive = metric.trend === 'up'

                    return (
                        <motion.div
                            key={metric.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="bg-slate-900/50 backdrop-blur-xl border-white/5 overflow-hidden relative group hover:border-indigo-500/30 transition-colors">
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
                                        {metric.change} from last month
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )
                })}
            </div>

            {/* Detail Area Simulation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <Card className="bg-slate-900/50 backdrop-blur-xl border-white/5 overflow-hidden">
                    <CardHeader className="border-b border-white/5 pb-4">
                        <CardTitle className="text-white text-lg">Active Experiments Trajectory</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="h-[350px] w-full flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-slate-950/50 relative overflow-hidden group">
                            {/* Fake Grid lines */}
                            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                            <div className="z-10 text-center">
                                <TrendingUp className="w-12 h-12 text-indigo-500/30 mx-auto mb-4 group-hover:text-indigo-400/60 transition-colors duration-500" />
                                <p className="text-slate-400 font-medium tracking-wide">Chart Visualization Engine Loading...</p>
                                <p className="text-slate-500 text-sm mt-2">Connect to analytics provider for live rendering</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}
