"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { Clock, User, Scissors } from "lucide-react";
import "react-day-picker/dist/style.css";
import { clsx } from "clsx";

const BARBERS = [
  {
    id: 1,
    name: "John Smith",
    specialty: "Classic Cuts",
    experience: "10 years",
  },
  {
    id: 2,
    name: "Mike Johnson",
    specialty: "Modern Styles",
    experience: "8 years",
  },
  {
    id: 3,
    name: "David Wilson",
    specialty: "Beard Grooming",
    experience: "12 years",
  },
];

const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

export default function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [selectedBarber, setSelectedBarber] = useState<number>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the appointment submission
    console.log({
      name,
      email,
      date: selectedDate,
      time: selectedTime,
      barber: BARBERS.find((b) => b.id === selectedBarber)?.name,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
      <h2 className="text-2xl text-gray-800 font-bold mb-6">
        Schedule Your Appointment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Select a Barber
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {BARBERS.map((barber) => (
              <button
                key={barber.id}
                type="button"
                onClick={() => setSelectedBarber(barber.id)}
                className={clsx(
                  "p-4 border rounded-lg text-left transition-colors",
                  selectedBarber === barber.id
                    ? "border-black bg-black text-white"
                    : "border-gray-600 text-gray-800 hover:border-gray-300"
                )}
              >
                <Scissors className="mb-2 text-gray-800" />
                <div className="font-medium">{barber.name}</div>
                <div className="text-sm opacity-80">{barber.specialty}</div>
                <div className="text-sm opacity-80">{barber.experience}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Date
            </label>
            <div className="border rounded-lg p-4">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                fromDate={new Date()}
                className="mx-auto text-gray-800"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Time
            </label>
            <div className="grid grid-cols-2 gap-2">
              {TIME_SLOTS.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={clsx(
                    "p-2 border text-gray-800 rounded-md flex items-center justify-center transition-colors",
                    selectedTime === time
                      ? "border-black bg-black text-white"
                      : "border-gray-200 hover:border-gray-300"
                  )}
                >
                  <Clock className="w-4 h-4 mr-2 text-gray-800" />
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 w-full border border-gray-400 rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-400 rounded-md"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}
