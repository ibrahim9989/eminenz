import React from 'react';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
};

const ProjectCard = ({ title, description, image, category }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover-scale">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-sm font-semibold">{category}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <span className="text-sm text-blue-600 font-semibold animate-fadeInUp">{category}</span>
        <h3 className="text-xl font-bold text-gray-900 mt-2 animate-fadeInUp">{title}</h3>
        <p className="text-gray-600 mt-2 animate-fadeInUp">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;