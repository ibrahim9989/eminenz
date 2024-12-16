import React from 'react';
import { useEmailForm } from '../../hooks/useEmailForm';

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleSubmit,
    handleChange,
  } = useEmailForm({ emailSubject: 'New Contact Form Submission' });

  return (
    <form onSubmit={handleSubmit} className={`bg-white p-8 rounded-xl shadow-lg ${className}`}>
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {submitStatus === 'success' && (
          <p className="text-green-600 text-sm text-center">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600 text-sm text-center">Failed to send message. Please try again.</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;