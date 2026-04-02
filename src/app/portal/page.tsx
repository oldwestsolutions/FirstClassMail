'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Plus, 
  Settings, 
  Bell, 
  Search,
  Filter,
  Download,
  Eye,
  Trash2,
  Edit,
  CheckCircle,
  Clock,
  Package,
  FileText,
  User,
  LogOut,
  Menu,
  X
} from 'lucide-react'
import Link from 'next/link'
import MobileMenu from '@/components/MobileMenu'
import { useAuth } from '@/contexts/AuthContext'

const portalInput =
  'flex h-11 w-full min-h-[44px] rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50'
const portalCard = 'rounded-3xl border border-neutral-200 bg-white text-neutral-900 shadow-sm'
const portalShell =
  'min-h-screen bg-neutral-50 text-neutral-900 [color-scheme:light] [&_h1]:!text-neutral-900 [&_h2]:!text-neutral-900 [&_h3]:!text-neutral-900'

export default function ClientPortalPage() {
  const { user, isAuthenticated, login, logout, loading } = useAuth()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [loginError, setLoginError] = useState('')
  const [mailboxes, setMailboxes] = useState([
    {
      id: 1,
      address: 'john@firstclassmail.com',
      name: 'John Smith Mailbox',
      status: 'active',
      unreadCount: 3,
      totalMail: 24,
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      address: 'business@firstclassmail.com',
      name: 'Business Mailbox',
      status: 'active',
      unreadCount: 0,
      totalMail: 156,
      lastActivity: '1 day ago'
    }
  ])
  const [recentMail, setRecentMail] = useState([
    {
      id: 1,
      from: 'Amazon',
      subject: 'Your order has shipped',
      receivedAt: '2 hours ago',
      isRead: false,
      type: 'package'
    },
    {
      id: 2,
      from: 'Bank of America',
      subject: 'Monthly statement available',
      receivedAt: '1 day ago',
      isRead: true,
      type: 'document'
    },
    {
      id: 3,
      from: 'IRS',
      subject: 'Tax document notification',
      receivedAt: '2 days ago',
      isRead: false,
      type: 'important'
    }
  ])

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Mail },
    { id: 'mailboxes', label: 'My Mailboxes', icon: Package },
    { id: 'mail', label: 'Mail', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  const stats = [
    { label: 'Total Mailboxes', value: '2', icon: Package, color: 'text-blue-600' },
    { label: 'Unread Messages', value: '3', icon: Mail, color: 'text-red-600' },
    { label: 'Packages Received', value: '12', icon: Package, color: 'text-green-600' },
    { label: 'Documents Scanned', value: '45', icon: FileText, color: 'text-purple-600' }
  ]

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')
    
    const success = await login(loginForm.email, loginForm.password)
    if (!success) {
      setLoginError('Invalid email or password')
    }
  }

  const handleLogout = () => {
    logout()
  }

  if (loading) {
    return (
      <div className={`${portalShell} flex flex-col`}>
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-2 border-neutral-200 border-t-neutral-800" />
            <p className="text-neutral-600">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className={`${portalShell} flex min-h-screen flex-col`}>
        <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3 text-neutral-900 transition hover:opacity-90">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50">
                <Mail className="h-4 w-4" strokeWidth={1.25} />
              </div>
              <div>
                <span className="font-serif text-lg tracking-wide">FirstClassMail</span>
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-neutral-500">Client Portal</p>
              </div>
            </Link>
          </div>
        </header>
        <div className="flex flex-1 items-center justify-center px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.12)]`}
          >
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50">
                <Mail className="h-8 w-8 text-neutral-800" strokeWidth={1.25} />
              </div>
              <h1 className="font-serif text-2xl font-medium text-neutral-900">Sign in</h1>
              <p className="mt-2 text-neutral-600">Access your virtual mailboxes</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {loginError && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{loginError}</div>
              )}
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">Email</label>
                <input
                  type="email"
                  className={portalInput}
                  placeholder="your@email.com"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">Password</label>
                <input
                  type="password"
                  className={portalInput}
                  placeholder="••••••••"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-full border border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800">
                Sign In
              </button>
              <div className="text-center">
                <Link href="/signup" className="text-sm text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline">
                  Don&apos;t have an account? Sign up
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className={portalShell}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 rounded-xl pr-2 transition hover:bg-neutral-100/80">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50">
                <Mail className="h-4 w-4 text-neutral-900" strokeWidth={1.25} />
              </div>
              <div>
                <span className="font-serif text-lg font-medium text-neutral-900">FirstClassMail</span>
                <p className="-mt-0.5 text-xs text-neutral-500">Client Portal</p>
              </div>
            </Link>
            
            <div className="hidden items-center space-x-4 md:flex">
              <button type="button" className="relative p-2 text-neutral-600 hover:text-neutral-900">
                <Bell className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  3
                </span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200/80">
                  <User className="h-4 w-4 text-neutral-800" />
                </div>
                <span className="text-sm font-medium text-neutral-800">{user?.name}</span>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md p-2 text-neutral-600 hover:text-neutral-900 md:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center rounded-lg px-4 py-3 text-left transition-colors ${
                    activeTab === tab.id
                      ? 'border border-neutral-200 bg-neutral-100 text-neutral-900'
                      : 'text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-3" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
                  <button type="button" className="btn btn-primary border border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800">
                    <Plus className="h-4 w-4 mr-2" />
                    New Mailbox
                  </button>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`${portalCard} p-6`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                        <stat.icon className={`h-8 w-8 ${stat.color}`} />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Mail */}
                <div className={`${portalCard} mb-8 p-6`}>
                  <h2 className="mb-4 text-lg font-semibold text-neutral-900">Recent Mail</h2>
                  <div className="space-y-4">
                    {recentMail.map((mail) => (
                      <div key={mail.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className={`w-3 h-3 rounded-full ${
                          mail.type === 'package' ? 'bg-green-500' : 
                          mail.type === 'important' ? 'bg-red-500' : 'bg-blue-500'
                        }`} />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{mail.from}</p>
                          <p className="text-xs text-gray-500">{mail.subject}</p>
                        </div>
                        <div className="text-xs text-gray-500">{mail.receivedAt}</div>
                        {!mail.isRead && <div className="w-2 h-2 bg-red-500 rounded-full" />}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'mailboxes' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">My Mailboxes</h1>
                  <button className="btn btn-primary">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Mailbox
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mailboxes.map((mailbox) => (
                    <div key={mailbox.id} className={`${portalCard} p-6`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <Package className="h-8 w-8 text-navy-600" />
                          <div>
                            <h3 className="font-semibold text-gray-900">{mailbox.name}</h3>
                            <p className="text-sm text-gray-600">{mailbox.address}</p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          mailbox.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {mailbox.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Unread</p>
                          <p className="text-lg font-semibold text-gray-900">{mailbox.unreadCount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Total Mail</p>
                          <p className="text-lg font-semibold text-gray-900">{mailbox.totalMail}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Last activity: {mailbox.lastActivity}</span>
                        <div className="flex space-x-2">
                          <button className="btn btn-secondary text-xs">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </button>
                          <button className="btn btn-secondary text-xs">
                            <Settings className="h-3 w-3 mr-1" />
                            Settings
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'mail' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">Mail</h1>
                  <div className="flex space-x-2">
                    <button className="btn btn-secondary">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </button>
                    <button className="btn btn-secondary">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </button>
                  </div>
                </div>
                
                <div className={`${portalCard} overflow-hidden`}>
                  <div className="border-b border-neutral-200 p-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <input
                          type="text"
                          placeholder="Search mail..."
                          className={portalInput}
                        />
                      </div>
                      <button className="btn btn-secondary">
                        <Search className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gray-200">
                    {recentMail.map((mail) => (
                      <div key={mail.id} className="p-4 hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${
                            mail.type === 'package' ? 'bg-green-500' : 
                            mail.type === 'important' ? 'bg-red-500' : 'bg-blue-500'
                          }`} />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <p className="font-medium text-gray-900">{mail.from}</p>
                              {!mail.isRead && <div className="w-2 h-2 bg-red-500 rounded-full" />}
                            </div>
                            <p className="text-sm text-gray-600">{mail.subject}</p>
                          </div>
                          <div className="text-xs text-gray-500">{mail.receivedAt}</div>
                          <div className="flex space-x-1">
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
                
                <div className="space-y-6">
                  <div className={`${portalCard} p-6`}>
                    <h2 className="mb-4 text-lg font-semibold text-neutral-900">Account Settings</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input type="text" className={portalInput} defaultValue="John Smith" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" className={portalInput} defaultValue="john@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input type="tel" className={portalInput} defaultValue="+1 (555) 123-4567" />
                      </div>
                      <button className="btn btn-primary">Save Changes</button>
                    </div>
                  </div>

                  <div className={`${portalCard} p-6`}>
                    <h2 className="mb-4 text-lg font-semibold text-neutral-900">Notification Preferences</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Email Notifications</p>
                          <p className="text-sm text-gray-600">Receive notifications about new mail</p>
                        </div>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">SMS Notifications</p>
                          <p className="text-sm text-gray-600">Receive SMS alerts for important mail</p>
                        </div>
                        <input type="checkbox" className="rounded" />
                      </div>
                      <button className="btn btn-primary">Update Preferences</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
