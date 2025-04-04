import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of your first project. Explain what problems it solves and what technologies you used.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Project 2",
    description: "Description of your second project. Highlight your role and the impact of the project.",
    technologies: ["Python", "Django", "PostgreSQL"],
    link: "#",
  },
  // Add more projects as needed
]

const ProjectsPage = () => {
  return (
    <Layout>
      <Seo 
        title="Projects" 
        description="Explore the projects and work of Will Herrmann - Software Developer"
      />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              My Projects
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              A collection of my recent work and personal projects
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
                >
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {project.description}
                    </p>
                  </div>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-4 py-4 sm:px-6">
                    <a
                      href={project.link}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage 