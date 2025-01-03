import React from 'react';
import { Droplets, Factory, Leaf } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: <Droplets className="h-8 w-8 text-emerald-600" />,
      name: "Ecosorb® 606",
      description: "Our flagship product for industrial odour control, perfect for waste management facilities."
    },
    {
      icon: <Factory className="h-8 w-8 text-emerald-600" />,
      name: "Ecosorb® 303",
      description: "Specialized solution for manufacturing and processing industries."
    },
    {
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      name: "Ecosorb® Natural",
      description: "Eco-friendly formulation for organic and food processing facilities."
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-lg text-gray-600">
            Industry-leading solutions for effective odour control
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-emerald-500 transition-colors">
              <div className="mb-4">{product.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;