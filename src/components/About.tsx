import { Scissors, Award, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl text-gray-800 font-bold mb-4">
            About Modern Cuts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            With over 20 years of experience, we provide premium grooming
            services for the modern gentleman who appreciates quality and style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Scissors,
              title: "Expert Stylists",
              description:
                "Our team of skilled barbers brings years of experience and passion to every cut.",
            },
            {
              icon: Award,
              title: "Premium Service",
              description:
                "We use only the finest products and tools to ensure the best results for our clients.",
            },
            {
              icon: Clock,
              title: "Convenient Hours",
              description:
                "Open 7 days a week with flexible hours to accommodate your busy schedule.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-black" />
              <h3 className="text-xl text-gray-800 font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
