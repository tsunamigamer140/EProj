import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-emerald-500 mb-4">Ecosorb India</h3>
            <p className="text-gray-400">
              Leading provider of industrial odour control solutions across India, 
              committed to creating cleaner and healthier environments.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#products" className="text-gray-400 hover:text-emerald-500">Products</a></li>
              <li><a href="#applications" className="text-gray-400 hover:text-emerald-500">Applications</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-emerald-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>B-2 Sri Sai Nivas, Pai Layout, Bengaluru 560016</li>
              <li>+9194801 09363</li>
              <li>pioneer0709@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ecosorb India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
