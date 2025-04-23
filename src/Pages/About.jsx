import React from 'react'

const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-pixelf">
            About Hack4Maha
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A 24-hour hackathon bringing together innovators, creators, and problem solvers.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
              <p className="mt-2 text-base text-gray-500">
                To foster innovation and collaboration in solving real-world problems through technology.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900">What to Expect</h3>
              <p className="mt-2 text-base text-gray-500">
                24 hours of coding, workshops, mentorship, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
