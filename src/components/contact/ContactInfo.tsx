import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Mail className="h-6 w-6 text-blue-600 mr-3" />
        <div>
          <p className="text-sm text-gray-600">Email</p>
          <a href="mailto:sales@eminenzint.com" className="text-blue-600 hover:text-blue-700">
            sales@eminenzint.com
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <Phone className="h-6 w-6 text-blue-600 mr-3" />
        <div>
          <p className="text-sm text-gray-600">Phone</p>
          <p className="text-gray-900">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="flex items-center">
        <MapPin className="h-6 w-6 text-blue-600 mr-3" />
        <div>
          <p className="text-sm text-gray-600">Address</p>
          <p className="text-gray-900">123 Business Avenue, Tech City, TC 12345</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;