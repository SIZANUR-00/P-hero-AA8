'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('skillsphere_user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('skillsphere_users') || '[]')
    const user = users.find(u => u.email === email && u.password === password)
    
    if (user) {
      const loggedInUser = { ...user, password: undefined }
      setUser(loggedInUser)
      localStorage.setItem('skillsphere_user', JSON.stringify(loggedInUser))
      toast.success('Login successful!')
      return true
    }
    toast.error('Invalid email or password')
    return false
  }

  const register = (name, email, photoUrl, password) => {
    const users = JSON.parse(localStorage.getItem('skillsphere_users') || '[]')
    
    if (users.find(u => u.email === email)) {
      toast.error('User already exists!')
      return false
    }
    
    const newUser = { id: Date.now(), name, email, photoUrl, password }
    users.push(newUser)
    localStorage.setItem('skillsphere_users', JSON.stringify(users))
    toast.success('Registration successful! Please login.')
    return true
  }

  const updateProfile = (name, photoUrl) => {
    if (user) {
      const updatedUser = { ...user, name, photoUrl }
      setUser(updatedUser)
      localStorage.setItem('skillsphere_user', JSON.stringify(updatedUser))
      
      const users = JSON.parse(localStorage.getItem('skillsphere_users') || '[]')
      const updatedUsers = users.map(u => 
        u.id === user.id ? { ...u, name, photoUrl } : u
      )
      localStorage.setItem('skillsphere_users', JSON.stringify(updatedUsers))
      toast.success('Profile updated successfully!')
      return true
    }
    return false
  }

  const googleLogin = () => {
    const googleUser = {
      id: 'google_' + Date.now(),
      name: 'Google User',
      email: 'google@example.com',
      photoUrl: 'https://ui-avatars.com/api/?background=0D8F81&color=fff&name=Google+User',
      isGoogle: true
    }
    setUser(googleUser)
    localStorage.setItem('skillsphere_user', JSON.stringify(googleUser))
    toast.success('Google login successful!')
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('skillsphere_user')
    toast.success('Logged out successfully!')
  }

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      register,
      updateProfile,
      googleLogin,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
