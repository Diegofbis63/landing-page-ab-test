import { Sidebar } from '@/components/admin/sidebar'

export const metadata = {
    title: 'Admin Dashboard | A/B Engine',
    description: 'Control Panel for A/B Engine Landing Pages',
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen bg-[#020617] text-slate-200 overflow-hidden font-sans selection:bg-indigo-500/30">
            <Sidebar />
            <main className="flex-1 overflow-y-auto relative scroll-smooth focus:scroll-auto">
                {/* Deep Space Background Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.06),transparent_60%)] pointer-events-none -z-10" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.04),transparent_60%)] pointer-events-none -z-10" />

                <div className="relative z-10 h-full p-8 lg:p-12">
                    {children}
                </div>
            </main>
        </div>
    )
}
