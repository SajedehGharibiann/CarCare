import { CalendarCheck, Car, ShieldCheck, Wrench } from 'lucide-react'
import React from 'react'

export default function OurServices() {
  return (
    <>
        <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="/ServiceMan.jpg"
              alt=""
              className="w-full max-w-[500px] h-[380px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-2 md:right-4 bg-white shadow-lg rounded-xl p-4 flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <ShieldCheck className="text-blue-900" size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Reliable Service</p>
                <p className="text-sm text-gray-500">
                  Your car is in safe hands
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-blue-900 font-semibold uppercase text-sm mb-2">
              What we offer
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Our Services
            </h2>
            <p className="text-gray-600 leading-6 max-w-xl mb-8 font-light">
              Everything you need to leep your car running smoothly. Manage
              maintenance, repairs and service schedules all in one convenient
              place.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gray-100 hover:bg-blue-100 transition">
                <Wrench className="text-blue-900 mb-3" size={24} />
                <h3 className="font-semibold mb-1">Car Maintenance</h3>
                <p>Keep your vehicle in perfect condition</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-100 hover:bg-blue-100 transition">
                <CalendarCheck className="text-blue-900 mb-3" size={24} />
                <h3 className="font-semibold mb-1">Service Schedule</h3>
                <p>Never miss your next service</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-100 hover:bg-blue-100 transition">
                <Car className="text-blue-900 mb-3" size={24} />
                <h3 className="font-semibold mb-1">Repair Tracking</h3>
                <p>Track your vehicle repairs easily</p>
              </div>
              <div className="p-4 rounded-xl bg-gray-100 hover:bg-blue-100 transition">
                <ShieldCheck className="text-blue-900 mb-3" size={24} />
                <h3 className="font-semibold mb-1">Car Protection</h3>
                <p>Take better care of your vehicle</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
