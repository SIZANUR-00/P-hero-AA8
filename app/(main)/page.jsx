'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import CourseCard from '@/components/CourseCard'
import Loader from '@/components/Loader'
import coursesData from '@/data/courses.json'

export default function HomePage() {
  const [loading, setLoading] = useState(true)
  const [popularCourses, setPopularCourses] = useState([])

  useEffect(() => {
    setTimeout(() => {
      const sorted = [...coursesData].sort((a, b) => b.rating - a.rating).slice(0, 3)
      setPopularCourses(sorted)
      setLoading(false)
    }, 1000)
  }, [])

  const instructors = [
    { name: 'John Doe', role: 'Web Dev Expert', image: 'https://randomuser.me/api/portraits/men/1.jpg', courses: 12 },
    { name: 'Sarah Johnson', role: 'UI/UX Designer', image: 'https://randomuser.me/api/portraits/women/2.jpg', courses: 8 },
    { name: 'Mike Williams', role: 'Marketing Guru', image: 'https://randomuser.me/api/portraits/men/3.jpg', courses: 10 },
    { name: 'Emma Davis', role: 'Python Expert', image: 'https://randomuser.me/api/portraits/women/4.jpg', courses: 15 },
  ]

  if (loading) return <Loader />

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="hero min-h-[600px] rounded-xl" style={{ backgroundImage: 'url(https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg)' }}>
        <div className="hero-overlay bg-opacity-60 bg-black rounded-xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-orange-500">Upgrade Your Skills Today 🚀</h1>
            <p className="mb-5 text-gray-300">Join thousands of students learning from industry experts</p>
            <Link href="/courses" className="btn btn-primary bg-red-600 hover:bg-blue-700">Explore Courses</Link>
          </div>
        </div>
      </div>

      {/* Popular Courses */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Popular Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularCourses.map(course => <CourseCard key={course.id} course={course} />)}
        </div>
      </section>

      {/* Learning Tips */}
      <section className="bg-primary/10 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Learning Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-white shadow-md"><div className="card-body"><h3 className="card-title">📚 Effective Study Techniques</h3><p>Use active recall and spaced repetition to retain information better.</p></div></div>
          <div className="card bg-white shadow-md"><div className="card-body"><h3 className="card-title">⏰ Time Management Tips</h3><p>Set specific goals, create a study schedule, eliminate distractions.</p></div></div>
        </div>
      </section>

      {/* Top Instructors */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Top Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <div key={index} className="card bg-white shadow-lg text-center p-6">
              <div className="avatar justify-center"><div className="w-24 rounded-full ring ring-primary ring-offset-2"><img src={instructor.image} alt={instructor.name} /></div></div>
              <div className="mt-4"><h3 className="font-bold text-lg">{instructor.name}</h3><p className="text-gray-600">{instructor.role}</p><p className="text-sm text-primary mt-2">{instructor.courses} Courses</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Courses */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">🔥 Trending Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {coursesData.slice(0, 3).map(course => (
            <div key={course.id} className="bg-white/10 backdrop-blur rounded-lg p-4"><h3 className="font-bold">{course.title}</h3><p className="text-sm mt-2">{course.instructor}</p><div className="flex items-center mt-2"><span className="text-yellow-400">★</span><span className="ml-1">{course.rating}</span></div></div>
          ))}
        </div>
      </section>
    </div>
  )
}
