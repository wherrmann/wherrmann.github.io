import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center text-xl font-bold text-gray-800">
                Will Herrmann
              </Link>
            </div>
            <div className="flex space-x-8 items-center">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">
            <p>© {new Date().getFullYear()} Will Herrmann. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout 