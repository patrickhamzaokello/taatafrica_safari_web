'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { checkAuth, logoutAdmin } from '@/app/actions/admin'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const { success } = await checkAuth()
        if (!success && pathname !== '/tataadmin/login') {
          router.push('/tataadmin/login')
        }
      } catch (error) {
        router.push('/tataadmin/login')
      } finally {
        setIsLoading(false)
      }
    }

    checkAuthStatus()
  }, [pathname, router])

  const handleLogout = async () => {
    await logoutAdmin()
    router.push('/tataadmin/login')
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (pathname === '/tataadmin/login') {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="bg-stone-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/tataadmin/dashboard" className="text-xl font-bold">
            Admin Dashboard
          </Link>
          <div className="space-x-4">
            <Link
              href="/tataadmin/dashboard"
              className={`hover:text-amber-400 ${
                pathname === '/tataadmin/dashboard' ? 'text-amber-400' : ''
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/tataadmin/contacts"
              className={`hover:text-amber-400 ${
                pathname === '/tataadmin/contacts' ? 'text-amber-400' : ''
              }`}
            >
              Contact Messages
            </Link>
            <Link
              href="/tataadmin/newsletter"
              className={`hover:text-amber-400 ${
                pathname === '/tataadmin/newsletter' ? 'text-amber-400' : ''
              }`}
            >
              Newsletter
            </Link>
            <button
              onClick={handleLogout}
              className="hover:text-amber-400"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4">{children}</main>
    </div>
  )
} 