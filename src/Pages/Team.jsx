import React from 'react'

const Team = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 font-pixelf">Our Team</h2>
          <p className="mt-4 text-lg text-gray-500">Meet the amazing people behind Hack4Maha</p>
        </div>
        
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "John Doe", role: "Event Director", image: "/img/placeholder.jpg" },
            { name: "Jane Smith", role: "Technical Lead", image: "/img/placeholder.jpg" },
            { name: "Mike Johnson", role: "Marketing Head", image: "/img/placeholder.jpg" },
            { name: "Sarah Wilson", role: "Sponsorship Coordinator", image: "/img/placeholder.jpg" },
            { name: "Tom Brown", role: "Operations Manager", image: "/img/placeholder.jpg" },
            { name: "Lisa Davis", role: "Community Manager", image: "/img/placeholder.jpg" }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200">
                {/* Add team member image here */}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
