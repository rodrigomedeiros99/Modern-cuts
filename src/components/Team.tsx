export default function Team() {
  const team = [
    {
      name: "John Smith",
      role: "Master Barber",
      image: "barber-1.webp",
      specialty: "Classic Cuts",
      experience: "10 years",
    },
    {
      name: "Mike Johnson",
      role: "Senior Barber",
      image: "barber-2.webp",
      specialty: "Modern Styles",
      experience: "8 years",
    },
    {
      name: "David Wilson",
      role: "Expert Barber",
      image: "barber-3.webp",
      specialty: "Beard Grooming",
      experience: "12 years",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl text-gray-800 font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600">
            Expert barbers with years of experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl text-gray-800 font-bold mb-1">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-500">
                Specialty: {member.specialty}
              </p>
              <p className="text-sm text-gray-500">
                Experience: {member.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
