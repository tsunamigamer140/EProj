import React from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-600">Ecosorb India</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-emerald-600">Products</a>
            <a href="#applications" className="text-gray-700 hover:text-emerald-600">Applications</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600">Contact</a>
            <a href="tel:+919876543210" className="flex items-center text-emerald-600">
              <Phone className="w-4 h-4 mr-2" />
              +91 98765 43210
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Products</a>
            <a href="#applications" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Applications</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Contact</a>
            <a href="tel:+919876543210" className="block px-3 py-2 text-emerald-600">
              <Phone className="w-4 h-4 inline mr-2" />
              +91 98765 43210
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;