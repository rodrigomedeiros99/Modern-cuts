export default function Services() {
  const services = [
    {
      name: "Classic Haircut",
      price: "$30",
      description: "Traditional cut with modern styling",
      duration: "45 mins",
    },
    {
      name: "Beard Trim",
      price: "$20",
      description: "Shape and style your beard",
      duration: "30 mins",
    },
    {
      name: "Hair Cut & Beard Trim",
      price: "$32",
      description: "Hair cut & Beard trim",
      duration: "30 mins",
    },
    {
      name: "Senior",
      price: "$28",
      description: "Strictly for 60 and older gentlemen.",
      duration: "30 mins",
    },
    {
      name: "Hot Towel Shave",
      price: "$35",
      description: "Traditional straight razor shave",
      duration: "45 mins",
    },
    {
      name: "Hot Towel Head Shave",
      price: "$30",
      description: "Traditional hot lather,steam towel & straight razor shave",
      duration: "45 mins",
    },
    {
      name: "Men's Facial",
      price: "$25",
      description:
        "Facial cleaner,black charcoal mask,astringent face moisturizer",
      duration: "45 mins",
    },
    {
      name: "Complete Package",
      price: "$75",
      description: "Haircut, beard trim, and hot towel shave",
      duration: "90 mins",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl text-gray-800 font-bold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Premium grooming services for the modern gentleman
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transition ease-in-out delay-700 hover:-translate-y-2 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-2xl text-gray-800 font-bold mb-2">
                {service.price}
              </div>
              <h3 className="text-xl text-gray-600 font-semibold mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-sm text-gray-500">
                Duration: {service.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
