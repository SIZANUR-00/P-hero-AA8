'use client'
import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import ProtectedRoute from '@/components/ProtectedRoute'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function EditProfileContent() {
  const { user, updateProfile } = useAuth()
  const router = useRouter()
  const [name, setName] = useState(user?.name || '')
  const [photoUrl, setPhotoUrl] = useState(user?.photoUrl || '')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const success = updateProfile(name, photoUrl)
    if (success) setTimeout(() => router.push('/profile'), 1500)
    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto">
      <Link href="/profile" className="btn btn-ghost mb-4">← Back to Profile</Link>
      <div className="card bg-white dark:bg-gray-800 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">Update Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-control mb-4"><label className="label"><span className="label-text">Name</span></label><input type="text" placeholder="Enter your name" className="input input-bordered" value={name} onChange={(e) => setName(e.target.value)} required /></div>
            <div className="form-control mb-6"><label className="label"><span className="label-text">Photo URL</span></label><input type="url" placeholder="https://example.com/photo.jpg" className="input input-bordered" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} /><label className="label"><span className="label-text-alt text-gray-500">Leave empty for auto-generated avatar</span></label></div>
            <button type="submit" className="btn btn-primary w-full" disabled={loading}>{loading ? <><span className="loading loading-spinner"></span> Updating...</> : 'Update Information'}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function EditProfilePage() {
  return <ProtectedRoute><EditProfileContent /></ProtectedRoute>
}
