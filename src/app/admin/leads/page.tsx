'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import { Download, Search, Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

type Lead = {
    id: string
    name: string
    email: string
    company: string | null
    message: string | null
    created_at: string
}

export default function LeadsPage() {
    const [leads, setLeads] = useState<Lead[]>([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        async function fetchLeads() {
            try {
                const { data, error } = await supabase
                    .from('leads')
                    .select('*')
                    .order('created_at', { ascending: false })

                if (error) throw error
                if (data) setLeads(data)
            } catch (error) {
                console.error('Error fetching leads:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchLeads()
    }, [])

    const filteredLeads = leads.filter(lead =>
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (lead.company && lead.company.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-white mb-1">
                        Lead <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Database</span>
                    </h1>
                    <p className="text-slate-400">High-value prospects captured from the A/B test funnels.</p>
                </div>

                <Button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all h-10 px-4 rounded-xl">
                    <Download className="w-4 h-4 mr-2" /> Export CSV
                </Button>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="bg-slate-900/50 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Toolbar */}
                    <div className="p-4 border-b border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="relative w-full sm:max-w-sm">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <Input
                                placeholder="Search leads by name, email or company..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-9 bg-slate-950/50 border-white/10 text-white focus-visible:ring-indigo-500/50 rounded-xl h-10 w-full"
                            />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-400 w-full sm:w-auto justify-end">
                            <Badge variant="outline" className="bg-indigo-500/10 text-indigo-400 border-indigo-500/20 py-1 px-3">
                                {filteredLeads.length} Prospects Total
                            </Badge>
                        </div>
                    </div>

                    {/* Data Table */}
                    <div className="relative w-full overflow-auto">
                        {loading ? (
                            <div className="h-[400px] flex flex-col items-center justify-center text-slate-400">
                                <Loader2 className="w-8 h-8 animate-spin text-indigo-500 mb-4" />
                                <p className="font-medium tracking-wide">Decrypting database records...</p>
                            </div>
                        ) : filteredLeads.length === 0 ? (
                            <div className="h-[400px] flex flex-col items-center justify-center text-slate-500">
                                <div className="w-16 h-16 rounded-2xl bg-slate-800/50 border border-white/5 flex items-center justify-center mb-4">
                                    <Search className="w-8 h-8 text-slate-600" />
                                </div>
                                <p className="font-medium">No leads found matching your criteria.</p>
                            </div>
                        ) : (
                            <Table>
                                <TableHeader className="bg-slate-950/80 sticky top-0 z-10">
                                    <TableRow className="border-white/5 hover:bg-transparent">
                                        <TableHead className="text-slate-400 font-medium py-4 px-6">Contact Info</TableHead>
                                        <TableHead className="text-slate-400 font-medium py-4 px-6">Company</TableHead>
                                        <TableHead className="text-slate-400 font-medium py-4 px-6 w-[350px]">Message</TableHead>
                                        <TableHead className="text-slate-400 font-medium py-4 px-6 text-right">Captured At</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredLeads.map((lead) => (
                                        <TableRow
                                            key={lead.id}
                                            className="border-white/5 hover:bg-white/5 transition-colors group cursor-default"
                                        >
                                            <TableCell className="py-4 px-6">
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-bold text-slate-200 group-hover:text-white transition-colors">{lead.name}</span>
                                                    <span className="text-xs text-indigo-400/80 font-medium">{lead.email}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-4 px-6 text-slate-300">
                                                {lead.company ? (
                                                    <span className="inline-flex items-center px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium">
                                                        {lead.company}
                                                    </span>
                                                ) : (
                                                    <span className="text-slate-600 italic text-sm">Not provided</span>
                                                )}
                                            </TableCell>
                                            <TableCell className="py-4 px-6 max-w-[350px]">
                                                {lead.message ? (
                                                    <p className="truncate text-slate-400 text-sm" title={lead.message}>
                                                        {lead.message}
                                                    </p>
                                                ) : (
                                                    <span className="text-slate-600 italic text-sm">No message</span>
                                                )}
                                            </TableCell>
                                            <TableCell className="py-4 px-6 text-right text-slate-400 text-sm font-medium">
                                                {format(new Date(lead.created_at), 'MMM dd, yyyy')}
                                                <div className="text-xs text-slate-500 mt-0.5">{format(new Date(lead.created_at), 'HH:mm')}</div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
