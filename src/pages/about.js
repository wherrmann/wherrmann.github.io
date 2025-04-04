import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <Seo 
        title="About" 
        description="Learn more about Will Herrmann - Software Developer and Technology Enthusiast"
      />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Me
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Software Developer with a passion for creating innovative solutions
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Background</h2>
                <p className="mt-4 text-gray-500">
                  I am a software developer with a strong foundation in web development
                  and a passion for creating elegant, efficient solutions. My journey in
                  technology has been driven by curiosity and a desire to solve complex
                  problems.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900">Frontend</h3>
                    <ul className="mt-2 text-gray-500">
                      <li>React</li>
                      <li>JavaScript/TypeScript</li>
                      <li>HTML/CSS</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-900">Backend</h3>
                    <ul className="mt-2 text-gray-500">
                      <li>Node.js</li>
                      <li>Python</li>
                      <li>SQL</li>
                      <li>REST APIs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage 