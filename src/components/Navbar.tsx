'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LayoutDashboard, Lock } from 'lucide-react'

export function Navbar() {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-fit"
        >
            <div className="flex items-center justify-between gap-8 px-6 py-3 rounded-full bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">

                {/* Brand Logo */}
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                        <span className="text-white font-black text-xs tracking-tighter">A/B</span>
                    </div>
                    <span className="text-white font-bold tracking-tight text-sm hidden sm:block">A/B Engine</span>
                </div>

                {/* Action Button */}
                <Link href="/login">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 transition-colors group"
                    >
                        <Lock className="w-3.5 h-3.5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                        <span className="text-xs font-black uppercase tracking-widest text-indigo-300 group-hover:text-indigo-200 transition-colors">
                            Acceso Admin
                        </span>
                    </motion.button>
                </Link>

            </div>
        </motion.div>
    )
}
