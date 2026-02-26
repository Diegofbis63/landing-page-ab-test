'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { LayoutDashboard, Users, Settings, LogOut, Activity } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Leads', href: '/admin/leads', icon: Users },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="w-72 h-screen bg-slate-950/80 backdrop-blur-2xl border-r border-white/5 flex flex-col p-6 relative overflow-hidden shrink-0">
            {/* Subtle Glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.05),transparent_70%)] pointer-events-none" />

            {/* Logo Area */}
            <div className="flex items-center gap-4 mb-12 z-10 px-2 mt-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                    <Activity className="text-white w-6 h-6" />
                </div>
                <div>
                    <h2 className="text-white font-black tracking-tighter text-lg leading-tight">A/B Engine</h2>
                    <p className="text-xs text-indigo-400 font-medium tracking-wide">LIQUID CONTROL</p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 space-y-2 z-10">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/')
                    const Icon = item.icon

                    return (
                        <Link key={item.name} href={item.href}>
                            <motion.div
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.98 }}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
                                    isActive
                                        ? "bg-gradient-to-r from-indigo-500/10 to-purple-500/5 text-white border border-indigo-500/20 shadow-[inset_0_0_20px_rgba(99,102,241,0.1)]"
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-nav"
                                        className="absolute left-0 w-1 h-8 bg-gradient-to-b from-indigo-400 to-purple-500 rounded-r-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                                    />
                                )}
                                <Icon className={cn("w-5 h-5", isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-indigo-400/70")} />
                                <span className="font-medium">{item.name}</span>
                            </motion.div>
                        </Link>
                    )
                })}
            </nav>

            {/* User Profile Footer */}
            <div className="mt-auto pt-6 border-t border-white/5 z-10">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center overflow-hidden relative shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 group-hover:opacity-100 transition-opacity" />
                        <span className="text-white text-sm font-bold z-10">DB</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-200 truncate group-hover:text-white transition-colors">Diego Bisquerra</p>
                        <p className="text-xs text-slate-500 truncate">System Architect</p>
                    </div>
                    <Link href="/login" onClick={(e) => {
                        // Simplified logout for demo: usually handled via an API route returning clearing cookies
                        document.cookie = 'admin_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
                    }}>
                        <LogOut className="w-4 h-4 text-slate-500 hover:text-red-400 transition-colors" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
