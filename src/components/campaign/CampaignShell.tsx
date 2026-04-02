'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CampaignSidebar } from '@/components/campaign/Sidebar'
import { CampaignTopBar } from '@/components/campaign/TopBar'
import { hrefForCampaignSegment, useCampaignPaths } from '@/components/campaign/CampaignPathContext'
import { motion } from 'framer-motion'

const SESSION_KEY = 'fcm_campaign_session'

export function CampaignShell({ title, children }: { title: string; children: React.ReactNode }) {
  const router = useRouter()
  const [ok, setOk] = useState(false)
  const { shortPaths } = useCampaignPaths()

  const loginPath = hrefForCampaignSegment(shortPaths, '/')

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (localStorage.getItem(SESSION_KEY) !== '1') {
      router.replace(loginPath)
      return
    }
    setOk(true)
  }, [router, loginPath])

  const onSignOut = () => {
    localStorage.removeItem(SESSION_KEY)
    router.push(loginPath)
  }

  if (!ok) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-neutral-400">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-neutral-900" />
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-neutral-50/50 text-neutral-600">
      <CampaignSidebar onSignOut={onSignOut} />
      <div className="lg:pl-64">
        <CampaignTopBar title={title} />
        <main className="p-4 pb-16 pt-20 md:p-8 md:pt-8">{children}</main>
      </div>
    </motion.div>
  )
}
