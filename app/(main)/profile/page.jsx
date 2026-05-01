'use client'
import { useAuth } from '@/context/AuthContext'
import ProtectedRoute from '@/components/ProtectedRoute'
import Link from 'next/link'

function ProfileContent() {
  const { user } = useAuth()
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      <div className="card bg-white dark:bg-gray-800 shadow-xl">
        <div className="card-body">
          <div className="flex flex-col items-center mb-6">
            <div className="avatar"><div className="w-32 rounded-full ring ring-primary ring-offset-2"><img src={user?.photoUrl || `https://ui-avatars.com/api/?background=0D8F81&color=fff&name=${user?.name}`} alt={user?.name} /></div></div>
            <h2 className="text-2xl font-bold mt-4">{user?.name}</h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>
          <div className="divider"></div>
          <div className="space-y-3"><div className="flex justify-between items-center"><span className="font-semibold">Member Since:</span><span>{new Date(parseInt(user?.id)).toLocaleDateString() || 'N/A'}</span></div><div className="flex justify-between items-center"><span className="font-semibold">Courses Enrolled:</span><span>0</span></div></div>
          <div className="card-actions justify-end mt-6"><Link href="/profile/edit" className="btn btn-primary">Update Profile</Link></div>
        </div>
      </div>
    </div>
  )
}

export default function ProfilePage() {
  return <ProtectedRoute><ProfileContent /></ProtectedRoute>
}
