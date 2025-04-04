import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
  return (
    <Layout>
      <Seo 
        title="About" 
        description="Learn more about Will Herrmann - Engineering Manager at Ro, leading data infrastructure and former data science leader at InVision and BuzzFeed"
      />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Me
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Engineering Manager & Data Science Leader
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Background</h2>
                <p className="mt-4 text-gray-500">
                  I'm an Engineering Manager at Ro, where I lead the data infrastructure team. 
                  With a strong background in data science and engineering, I've previously led 
                  product data science at BuzzFeed and worked as a data scientist at InVision. 
                  My journey in technology has been driven by a passion for building scalable 
                  data solutions and leading high-performing teams.
                </p>
              </div>

              <div className="flex justify-center items-start">
                <div className="w-48 h-48 rounded-full overflow-hidden">
                  <StaticImage
                    src="../images/profile.jpg"
                    alt="Will Herrmann"
                    placeholder="blurred"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
              <div className="mt-4 space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900">Ro</h3>
                  <p className="text-indigo-600">Engineering Manager - Data Infrastructure</p>
                  <p className="mt-2 text-gray-500">Leading the data infrastructure team, building scalable data solutions.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900">InVision</h3>
                  <p className="text-indigo-600">Data Scientist</p>
                  <p className="mt-2 text-gray-500">Worked on data science initiatives and analytics.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900">BuzzFeed</h3>
                  <p className="text-indigo-600">Lead Product Data Science</p>
                  <p className="mt-2 text-gray-500">Led product data science initiatives and team.</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
              <div className="mt-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900">Brown University</h3>
                  <p className="mt-2 text-gray-500">Bachelor's Degree</p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900">Professional Links</h2>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://github.com/wherrmann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/wherrmann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/wherrmann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage 