import React from 'react';
import { Battery, Droplets, Building2, Wrench, Factory, Settings } from 'lucide-react';
import ScrollReveal from '../animation/ScrollReveal';

const Services = () => {
  const services = [
    {
      icon: <Battery className="h-12 w-12 text-blue-600" />,
      title: 'Energy Solutions',
      description: 'Advanced equipment and sustainable solutions for oil, gas, and renewable energy sectors.',
    },
    {
      icon: <Droplets className="h-12 w-12 text-blue-600" />,
      title: 'Water Solutions',
      description: 'Innovative water treatment and management systems for industrial applications.',
    },
    {
      icon: <Building2 className="h-12 w-12 text-blue-600" />,
      title: 'Smart Infrastructure',
      description: 'Cutting-edge automation, control systems, and IoT-enabled infrastructure solutions.',
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-600" />,
      title: 'Turnkey Project Management',
      description: 'End-to-end solutions from concept to execution, ensuring seamless project delivery.',
    },
    {
      icon: <Factory className="h-12 w-12 text-blue-600" />,
      title: 'Industrial Solutions',
      description: 'Tailored systems for power, oil & gas, and manufacturing sectors.',
    },
    {
      icon: <Settings className="h-12 w-12 text-blue-600" />,
      title: 'Maintenance & Support',
      description: 'Proactive and reactive maintenance services for optimal operations.',
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover-scale">
                <div className="mb-6 animate-float">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;