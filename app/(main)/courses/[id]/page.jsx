'use client'
import { useParams, notFound } from 'next/navigation'
import { useEffect, useState } from 'react'
import ProtectedRoute from '@/components/ProtectedRoute'
import Loader from '@/components/Loader'
import coursesData from '@/data/courses.json'
import Link from 'next/link'

function CourseDetailsContent() {
  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [course, setCourse] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      const found = coursesData.find(c => c.id === parseInt(id))
      if (found) setCourse(found)
      setLoading(false)
    }, 500)
  }, [id])

  if (loading) return <Loader />
  if (!course) return notFound()

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/courses" className="btn btn-ghost mb-4">← Back to Courses</Link>
      <div className="card bg-white dark:bg-gray-800 shadow-xl">
        <figure className="relative h-96"><img src={course.image} alt={course.title} className="w-full h-full object-cover" /></figure>
        <div className="card-body">
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-gray-600">By {course.instructor}</span>
            <span className="badge badge-primary">{course.level}</span>
            <div className="flex items-center"><span className="text-yellow-500">★</span><span className="ml-1 font-semibold">{course.rating}</span></div>
            <span className="text-gray-500">{course.duration}</span>
          </div>
          <div className="mt-6"><h2 className="text-2xl font-semibold mb-3">Description</h2><p className="text-gray-700 dark:text-gray-300">{course.description}</p></div>
          <div className="mt-6"><h2 className="text-2xl font-semibold mb-3">Course Curriculum</h2><ul className="space-y-2">{course.curriculum.map((item, index) => (<li key={index} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-700 rounded"><svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>{item}</li>))}</ul></div>
          <div className="mt-6"><button className="btn btn-primary w-full">Enroll Now - ${(course.duration.split(' ')[0] * 10)}</button></div>
        </div>
      </div>
    </div>
  )
}

export default function CourseDetailsPage() {
  return <ProtectedRoute><CourseDetailsContent /></ProtectedRoute>
}
