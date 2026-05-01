'use client'
import { useAuth } from '../context/AuthContext'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Loader from './Loader'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!loading && !user) {
      localStorage.setItem('redirectAfterLogin', pathname)
      router.push('/login')
    }
  }, [user, loading, router, pathname])

  if (loading) return <Loader />
  if (!user) return null
  return children
}
