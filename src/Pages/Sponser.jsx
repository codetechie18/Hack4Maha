import React from 'react'

const Sponser = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 font-pixelf">Our Sponsors</h2>
        <div className="mt-10">
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-center text-gray-900">Platinum Sponsors</h3>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-3">
                {/* Add sponsor logos here */}
                <div className="col-span-1 flex justify-center items-center bg-gray-50 p-8 rounded-lg">
                  <span className="text-gray-400">Sponsor 1</span>
                </div>
                <div className="col-span-1 flex justify-center items-center bg-gray-50 p-8 rounded-lg">
                  <span className="text-gray-400">Sponsor 2</span>
                </div>
                <div className="col-span-1 flex justify-center items-center bg-gray-50 p-8 rounded-lg">
                  <span className="text-gray-400">Sponsor 3</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-center text-gray-900">Gold Sponsors</h3>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4">
                {/* Add sponsor logos here */}
                <div className="col-span-1 flex justify-center items-center bg-gray-50 p-6 rounded-lg">
                  <span className="text-gray-400">Sponsor 4</span>
                </div>
                <div className="col-span-1 flex justify-center items-center bg-gray-50 p-6 rounded-lg">
                  <span className="text-gray-400">Sponsor 5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponser
