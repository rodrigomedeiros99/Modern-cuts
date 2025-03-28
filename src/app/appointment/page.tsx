import AppointmentForm from "@/components/AppointmentForm";

export default function AppointmentPage() {
  return (
    <main className="pt-16  bg-gradient-to-b from-slate-300 via-gray-300 to-stone-200 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl text-gray-800 font-bold mb-4">
            Book Your Style Session
          </h1>
          <p className="text-xl text-gray-600">
            Choose your preferred barber, date, and time for a premium grooming
            experience
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <AppointmentForm />
        </div>
      </div>
    </main>
  );
}
