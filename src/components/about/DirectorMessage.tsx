import React from 'react';

const DirectorMessage = () => {
  const directors = [
    {
      name: "Mirza Amjad Baig",
      position: "Managing Director",
      message: "At Eminenz, we're committed to pioneering sustainable solutions that shape the future of industries. Our innovative approach and dedication to excellence drive us to create lasting positive impact across sectors.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Syed Mukram",
      position: "Technical Director",
      message: "Innovation is at the heart of everything we do. By combining cutting-edge technology with sustainable practices, we're not just solving today's challenges – we're anticipating tomorrow's needs.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="mb-20">
      <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Leadership Insights</h3>
      <div className="space-y-8 md:space-y-12">
        {directors.map((director, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 md:p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <img 
                src={director.image} 
                alt={director.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
              />
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{director.name}</h4>
                <p className="text-blue-600 mb-4">{director.position}</p>
                <p className="text-gray-600 italic">{director.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectorMessage;