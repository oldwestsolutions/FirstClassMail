'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
import { AdminTopBar } from '@/components/admin/AdminTopBar'
import { hrefForAdminSegment, useAdminPaths } from '@/components/admin/AdminPathContext'
import { motion, AnimatePresence } from 'framer-motion'

const SESSION_KEY = 'fcm_admin_session'

export function AdminShell({ title, children }: { title: string; children: React.ReactNode }) {
  const router = useRouter()
  const [ok, setOk] = useState(false)
  const [showLogout, setShowLogout] = useState(false)
  const { shortPaths } = useAdminPaths()
  const loginPath = hrefForAdminSegment(shortPaths, '/')

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (localStorage.getItem(SESSION_KEY) !== '1') {
      router.replace(loginPath)
      return
    }
    setOk(true)
  }, [router, loginPath])

  const onSignOut = () => setShowLogout(true)

  const doLogout = () => {
    localStorage.removeItem(SESSION_KEY)
    if (typeof window !== 'undefined') {
      window.location.href = 'https://admin.firstclassmail.xyz'
    }
  }

  if (!ok) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-neutral-400">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-blue-600" />
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen bg-neutral-50/50 text-neutral-600">
      <AdminSidebar onSignOut={onSignOut} />
      <div className="lg:pl-64">
        <AdminTopBar title={title} onLogout={onSignOut} />
        <main className="p-4 pb-16 pt-20 md:p-8 md:pt-8">{children}</main>
      </div>

      {/* Logout Modal */}
      <AnimatePresence>
        {showLogout && (
          <>
            <motion.button type="button" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-neutral-900/30 backdrop-blur-sm" onClick={() => setShowLogout(false)} aria-label="Close" />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="pointer-events-auto w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-6 shadow-2xl">
                <h3 className="font-serif text-lg text-neutral-900">Confirm Logout</h3>
                <p className="mt-2 text-sm text-neutral-500">Are you sure you want to sign out? You will be redirected to the login page.</p>
                <div className="mt-6 flex gap-3">
                  <button type="button" onClick={() => setShowLogout(false)} className="flex-1 rounded-lg border border-neutral-200 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50">Cancel</button>
                  <button type="button" onClick={doLogout} className="flex-1 rounded-lg bg-red-600 py-2.5 text-sm font-medium text-white hover:bg-red-700">Logout</button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
