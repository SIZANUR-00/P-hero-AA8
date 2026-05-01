'use client'
import Link from 'next/link'

export default function CourseCard({ course }) {
  return (
    <div className="card bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <figure className="relative h-48">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover rounded-t-lg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold line-clamp-1">{course.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">By {course.instructor}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 font-semibold">{course.rating}</span>
            <span className="text-sm text-gray-500 ml-2">{course.duration}</span>
          </div>
          <span className="badge badge-primary">{course.level}</span>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link href={`/courses/${course.id}`} className="btn btn-primary btn-sm w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
