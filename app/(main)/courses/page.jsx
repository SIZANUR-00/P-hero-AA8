'use client'
import { useState, useEffect } from 'react'
import CourseCard from '@/components/CourseCard'
import Loader from '@/components/Loader'
import coursesData from '@/data/courses.json'

export default function CoursesPage() {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredCourses, setFilteredCourses] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setFilteredCourses(coursesData)
      setLoading(false)
    }, 1000)
  }, [])

  useEffect(() => {
    const filtered = coursesData.filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilteredCourses(filtered)
  }, [searchTerm])

  if (loading) return <Loader />

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">All Courses</h1>
        <div className="flex justify-center">
          <div className="form-control w-full max-w-md">
            <div className="relative">
              <input type="text" placeholder="Search courses by title..." className="input input-bordered w-full pl-10" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
        </div>
      </div>
      {filteredCourses.length === 0 ? <div className="text-center py-12"><p className="text-gray-500 text-lg">No courses found matching "{searchTerm}"</p></div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{filteredCourses.map(course => <CourseCard key={course.id} course={course} />)}</div>}
    </div>
  )
}
