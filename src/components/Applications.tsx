import React from 'react';

const Applications = () => {
  const applications = [
    {
      title: "Waste Management",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80",
      description: "Effective odour control for landfills and waste processing facilities."
    },
    {
      title: "Food Processing",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80",
      description: "Maintain clean air quality in food manufacturing facilities."
    },
    {
      title: "Industrial Manufacturer",
      image: "https://images.esi.info/Images/687173_1561709991778_PF.jpg",
      description: "Comprehensive solutions for manufacturing plants."
    }
  ];

  return (
    <section id="applications" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Applications</h2>
          <p className="text-lg text-gray-600">
            Serving diverse industries across India with proven solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={app.image} 
                alt={app.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{app.title}</h3>
                <p className="text-gray-600">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
