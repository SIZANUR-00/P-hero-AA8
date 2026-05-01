# SkillSphere - Online Learning Platform

## Project Overview

SkillSphere is a modern online learning platform developed as part of Assignment A8-Orange. The platform allows users to explore courses, view detailed course information, enroll in skill-based programs, and manage their profile. The application features user authentication, course search functionality, and protected routes for secure access to course details.

## Live URL

Example: https://skillsphere-roan.vercel.app/

## Key Features

User Authentication
- Email and password based login and registration
- Google social login integration
- Protected routes for course details page
- Redirect back to requested page after login

Course Management
- Browse all available courses
- Search courses by title
- View popular courses on homepage (top 3 rated)
- Detailed course view with curriculum
- Trending courses section

User Profile
- View profile information
- Update name and photo URL
- Persistent user session using localStorage

Responsive Design
- Mobile friendly layout
- Tablet and desktop optimized
- Collapsible navigation menu on mobile

Technical Features
- Loading states for data fetching
- Toast notifications for user actions
- Not found page for invalid routes
- Environment variables for configuration

## NPM Packages Used
- next - React framework for routing and server-side rendering
- react - UI library for building components
- react-dom - DOM rendering for React components
- tailwindcss - Utility-first CSS framework for styling
- daisyui - Tailwind CSS component library for UI elements
- react-hot-toast - Toast notification system for user feedback
- swiper - Touch slider component for hero carousel
- axios - HTTP client for API requests

## Demo Credentials
For testing the application, you can use the following demo account:
- Email: admin@example.com
- Password: password123

## Browser Support

- Chrome (latest version)
- Firefox (latest version)
- Safari (latest version)
- Edge (latest version)

## Known Issues

No major issues reported. The application handles page reloads correctly without breaking due to proper Next.js routing configuration.

## Author

Sizanur

## License

This project is developed for educational purposes.