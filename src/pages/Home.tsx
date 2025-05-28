import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Car, Hotel, Utensils, Waves, Wifi } from 'lucide-react';

const features = [
  {
    name: 'Luxury Rooms',
    description: 'Experience comfort in our carefully curated rooms and suites.',
    icon: Hotel,
    href: '/rooms'
  },
  {
    name: 'Banquet Halls',
    description: 'Perfect venues for your special events and celebrations.',
    icon: Building2,
    href: '/banquet-halls'
  },
  {
    name: 'Travel Services',
    description: 'Explore the city with our premium transportation services.',
    icon: Car,
    href: '/travel'
  },
  {
    name: 'Fine Dining',
    description: 'Savor exquisite cuisine at our world-class restaurants.',
    icon: Utensils,
    href: '/dining'
  },
  {
    name: 'Spa & Wellness',
    description: 'Rejuvenate your body and mind at our luxury spa.',
    icon: Waves,
    href: '/spa'
  },
  {
    name: 'Premium Amenities',
    description: 'Enjoy high-speed WiFi, 24/7 room service, and more.',
    icon: Wifi,
    href: '/amenities'
  }
];

export function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="hero-image h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury hotel exterior"
          />
          <div className="absolute inset-0 bg-gray-900/50 mix-blend-multiply" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to MVR Residency
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-gray-100">
            Experience luxury living with our premium residency services. From elegant rooms to exclusive amenities,
            we ensure your stay is nothing short of extraordinary.
          </p>
          <div className="mt-10 flex gap-x-6">
            <Link
              to="/rooms"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Book Now
            </Link>
            <Link
              to="/about"
              className="text-sm font-semibold leading-6 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Premium Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for a luxurious stay
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover our comprehensive range of services designed to make your stay comfortable and memorable.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <Link key={feature.name} to={feature.href} className="group">
                <div className="flex flex-col transition-all duration-200 ease-in-out transform hover:-translate-y-1">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}