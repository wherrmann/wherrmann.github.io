import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <StaticImage
                src="../images/profile.jpg"
                alt="Will Herrmann"
                placeholder="blurred"
                className="w-full h-full"
                style={{
                  objectFit: 'cover',
                  transform: 'scale(1.4) translateX(3%)'
                }}
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-site-text">
                Will Herrmann
              </h1>
              <p className="text-site-muted mt-1">Software Engineer and Data Scientist</p>
              <div className="flex space-x-4 mt-2">
                <a href="https://github.com/wherrmann" className="text-site-muted hover:text-site-text">GitHub</a>
                <a href="https://www.linkedin.com/in/herrmannwh/" className="text-site-muted hover:text-site-text">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-3xl mx-auto px-4">
        <section className="py-12">
          <div className="prose prose-sm max-w-none">
            <p className="text-lg leading-relaxed">
              Hi, I'm Will. I lead the data infrastructure team at <strong><a href="https://ro.co" className="text-site-accent hover:underline">Ro</a></strong>, where I focus on building scalable systems 
              that power our healthcare platform. Previously, I led the product data science team at <strong>BuzzFeed</strong> and was 
              a staff data scientist at <strong>InVision</strong>. I studied applied math 
              at <strong>Brown</strong>.
            </p>
          </div>
        </section>

        {/* Projects section commented out for now
        <section className="py-12">
          <h2 className="text-xl font-semibold mb-6">Projects</h2>
          <div className="space-y-8">
            <div className="border border-site-accent/20 p-6 rounded">
              <h3 className="text-lg font-semibold mb-2">Personal Portfolio</h3>
              <p className="text-site-muted mb-3">A responsive personal website built with Gatsby and Tailwind CSS.</p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-0.5 bg-site-accent/10 rounded text-site-text text-xs">Gatsby</span>
                <span className="px-2 py-0.5 bg-site-accent/10 rounded text-site-text text-xs">React</span>
                <span className="px-2 py-0.5 bg-site-accent/10 rounded text-site-text text-xs">Tailwind CSS</span>
              </div>
              <a href="https://github.com/wherrmann/portfolio" className="text-site-accent hover:underline text-sm">View on GitHub →</a>
            </div>
            <div className="border border-site-accent/20 p-6 rounded">
              <h3 className="text-lg font-semibold mb-2">Project Two</h3>
              <p className="text-site-muted mb-3">A web application that solves a specific problem or provides a useful service.</p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-0.5 bg-site-accent/10 rounded text-site-text text-xs">Node.js</span>
                <span className="px-2 py-0.5 bg-site-accent/10 rounded text-site-text text-xs">Express</span>
                <span className="px-2 py-0.5 bg-site-accent/10 rounded text-site-text text-xs">MongoDB</span>
              </div>
              <a href="#" className="text-site-accent hover:underline text-sm">View project →</a>
            </div>
          </div>
        </section>
        */}
      </main>

      <footer>
        <div className="max-w-3xl mx-auto px-4 py-6">
          <div className="text-center text-site-muted text-sm">
            <p>© {new Date().getFullYear()} Will Herrmann</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout 