import React from 'react';
import ProjectCard from './ProjectCard';
import ScrollReveal from '../animation/ScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: 'Solar Power Plant Installation',
      description: 'Implementation of a 50MW solar power plant with advanced tracking systems.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Energy',
    },
    {
      title: 'Smart Water Treatment Facility',
      description: 'State-of-the-art water treatment facility with IoT-enabled monitoring.',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Water',
    },
    {
      title: 'Industrial Automation System',
      description: 'Complete automation solution for a manufacturing plant.',
      image: 'https://images.unsplash.com/photo-1565515267698-06eb6cd42795?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      category: 'Infrastructure',
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Discover how we've helped businesses transform their operations
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 200} direction="up">
              <ProjectCard {...project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;