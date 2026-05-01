'use client'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/profile', label: 'My Profile', protected: true },
  ]

  const isActive = (href) => pathname === href

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary">SkillSphere</Link>
          
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              if (link.protected && !user) return null
              return (
                <Link key={link.href} href={link.href} className={`hover:text-primary transition-colors ${isActive(link.href) ? 'text-primary font-semibold' : 'text-gray-700 dark:text-gray-300'}`}>
                  {link.label}
                </Link>
              )
            })}
            
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="flex items-center gap-2 cursor-pointer">
                    <div className="avatar">
                      <div className="w-8 h-8 rounded-full">
                        <img src={user.photoUrl || `https://ui-avatars.com/api/?name=${user.name}`} alt={user.name} />
                      </div>
                    </div>
                    <span className="text-sm hidden md:inline">{user.name}</span>
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href="/profile">Profile</Link></li>
                    <li><button onClick={() => { logout(); router.push('/') }}>Logout</button></li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="space-x-2">
                <Link href="/login" className="btn btn-ghost background-green-900 dark:bg-gray-700">Login</Link>
                <Link href="/register" className="btn btn-primary">Register</Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {navLinks.map((link) => {
              if (link.protected && !user) return null
              return (
                <Link key={link.href} href={link.href} className="block py-2 hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              )
            })}
            {user ? (
              <button onClick={() => { logout(); router.push('/'); setIsMenuOpen(false) }} className="block w-full text-left py-2 text-red-600">
                Logout
              </button>
            ) : (
              <div className="space-y-2 mt-4">
                <Link href="/login" className="block btn btn-ghost w-full" onClick={() => setIsMenuOpen(false)}>Login</Link>
                <Link href="/register" className="block btn btn-primary w-full" onClick={() => setIsMenuOpen(false)}>Register</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
