import React from 'react';

const Timeline = () => {
  const milestones = [
    {
      year: "2015",
      title: "Foundation",
      description: "Establishment of Eminenz International LLP with a vision to transform industrial solutions."
    },
    {
      year: "2017",
      title: "Global Expansion",
      description: "Expanded operations to Asia and Middle East markets."
    },
    {
      year: "2019",
      title: "Innovation Hub",
      description: "Launched our state-of-the-art R&D facility focused on sustainable technologies."
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description: "Received multiple awards for our innovative water treatment solutions."
    },
    {
      year: "2023",
      title: "Sustainable Future",
      description: "Initiated our net-zero emissions program and renewable energy projects."
    }
  ];

  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Our Journey</h3>
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
        
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative">
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                {/* Mobile view date */}
                <div className="md:hidden mb-4">
                  <span className="text-blue-600 font-bold">{milestone.year}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 w-full md:w-auto px-4">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    {/* Desktop view date */}
                    <span className="hidden md:block text-blue-600 font-bold">{milestone.year}</span>
                    <h4 className="text-xl font-semibold text-gray-900 mt-2">{milestone.title}</h4>
                    <p className="text-gray-600 mt-2">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;