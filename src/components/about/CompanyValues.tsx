import React from 'react';
import { Lightbulb, Shield, Leaf } from 'lucide-react';

const CompanyValues = () => {
  const values = [
    {
      icon: <Lightbulb className="h-12 w-12 text-blue-600" />,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to deliver cutting-edge solutions that address complex industrial challenges.'
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: 'Integrity',
      description: 'Maintaining the highest standards of transparency, ethics, and professional conduct in all our operations.'
    },
    {
      icon: <Leaf className="h-12 w-12 text-blue-600" />,
      title: 'Sustainability',
      description: 'Committed to environmental responsibility and sustainable practices in every project we undertake.'
    }
  ];

  return (
    <div className="mb-20">
      <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="flex justify-center mb-4">{value.icon}</div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyValues;