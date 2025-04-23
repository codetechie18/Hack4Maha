import React from 'react'

const Prize = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 font-pixelf">Prizes</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-center text-indigo-600">First Place</h3>
              <p className="mt-4 text-4xl font-bold text-center text-gray-900">$5,000</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="text-gray-600">• Premium Swag Pack</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">• Mentorship Program</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-center text-indigo-600">Second Place</h3>
              <p className="mt-4 text-4xl font-bold text-center text-gray-900">$3,000</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="text-gray-600">• Swag Pack</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">• Cloud Credits</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-center text-indigo-600">Third Place</h3>
              <p className="mt-4 text-4xl font-bold text-center text-gray-900">$1,000</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="text-gray-600">• Basic Swag Pack</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">• Digital Certificates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prize
