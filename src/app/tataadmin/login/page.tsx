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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-md shadow-sm border border-gray-100">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">TATA AFRICA SAFARIS</h2>
          <p className="text-gray-500 text-sm mt-1">Sign in to your account</p>
        </div>
        
        <form action={formAction} className="space-y-5">
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <Input
                id="username"
                type="text"
                name="username"
                required
                className="w-full bg-white border border-gray-200 focus:border-gray-400 focus:ring-gray-400"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <Input
                id="password"
                type="password"
                name="password"
                required
                className="w-full bg-white border border-gray-200 focus:border-gray-400 focus:ring-gray-400"
              />
            </div>
          </div>

          {state.error && (
            <div className="bg-red-50 p-2 rounded text-red-600 text-sm">
              {state.error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full py-2 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded"
          >
            Sign in
          </Button>
          
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-800">
              Forgot password?
            </a>
          </div>
        </form>
        
        <div className="mt-8 pt-4 border-t border-gray-100 text-center text-xs text-gray-400">
          Safari Administration Portal
        </div>
      </div>
    </div>
  )
}