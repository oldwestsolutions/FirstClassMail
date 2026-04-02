'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CampaignSidebar } from '@/components/campaign/Sidebar'
import { CampaignTopBar } from '@/components/campaign/TopBar'
import { motion } from 'framer-motion'

const SESSION_KEY = 'fcm_campaign_session'

export function CampaignShell({ title, children }: { title: string; children: React.ReactNode }) {
  const router = useRouter()
  const [ok, setOk] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (localStorage.getItem(SESSION_KEY) !== '1') {
      router.replace('/campaign')
      return
    }
    setOk(true)
  }, [router])

  const onSignOut = () => {
    localStorage.removeItem(SESSION_KEY)
    router.push('/campaign')
  }

  if (!ok) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050508] text-neutral-400">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-teal-400" />
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-[#050508] text-neutral-200">
      <CampaignSidebar onSignOut={onSignOut} />
      <div className="lg:pl-64">
        <CampaignTopBar title={title} />
        <main className="p-4 pb-16 pt-20 md:p-8 md:pt-8">{children}</main>
      </div>
    </motion.div>
  )
}
