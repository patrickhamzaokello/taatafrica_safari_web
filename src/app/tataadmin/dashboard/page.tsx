'use client'

import { useEffect, useState } from 'react'
import { prisma } from '@/lib/prisma'

type DashboardStats = {
  totalContacts: number
  totalSubscribers: number
  recentContacts: any[]
  recentSubscribers: any[]
}

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/stats')
        const data = await response.json()
        setStats(data)
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Contact Messages</h2>
          <p className="text-3xl font-bold text-amber-600">{stats?.totalContacts}</p>
          <p className="text-gray-500">Total messages received</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Newsletter Subscribers</h2>
          <p className="text-3xl font-bold text-amber-600">{stats?.totalSubscribers}</p>
          <p className="text-gray-500">Active subscribers</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Contact Messages</h2>
          <div className="space-y-4">
            {stats?.recentContacts.map((contact) => (
              <div key={contact.id} className="border-b pb-4">
                <p className="font-medium">{contact.name}</p>
                <p className="text-gray-600">{contact.email}</p>
                <p className="text-sm text-gray-500">{contact.message}</p>
                <p className="text-xs text-gray-400">
                  {new Date(contact.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Subscribers</h2>
          <div className="space-y-4">
            {stats?.recentSubscribers.map((subscriber) => (
              <div key={subscriber.id} className="border-b pb-4">
                <p className="font-medium">{subscriber.email}</p>
                <p className="text-xs text-gray-400">
                  Subscribed on {new Date(subscriber.createdAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 