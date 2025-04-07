'use client'

import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { loginAdmin } from '@/app/actions/admin'
import { useActionState } from "react"
import { useEffect } from 'react'

const initialState = {
  success: false,
  error: null,
}

export default function AdminLogin() {
  const router = useRouter()
  const [state, formAction] = useActionState(loginAdmin, initialState)

  useEffect(() => {
    if (state.success) {
      router.push('/tataadmin/dashboard')
    }
  }, [state.success, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Login
          </h2>
        </div>
        <form action={formAction} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <Input
                type="text"
                name="username"
                required
                placeholder="Username"
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="password"
                name="password"
                required
                placeholder="Password"
                className="w-full"
              />
            </div>
          </div>

          {state.error && (
            <div className="text-red-500 text-sm text-center">{state.error}</div>
          )}

          <div>
            <Button
              type="submit"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 