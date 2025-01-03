import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Get in touch with our team for personalized solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-emerald-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Office</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-emerald-600 mt-1 mr-3" />
                <p className="text-gray-600">
                  123 Business Park, Sector 5<br />
                  Gurugram, Haryana 122001<br />
                  India
                </p>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-emerald-600 mr-3" />
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-emerald-600 mr-3" />
                <p className="text-gray-600">contact@ecosorbindia.com</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;