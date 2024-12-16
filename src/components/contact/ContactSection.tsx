import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600">
            Let's discuss how we can help transform your business
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;