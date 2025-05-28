import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Wifi, Music, Utensils } from 'lucide-react';

const halls = [
  {
    id: 1,
    name: 'Grand Ballroom',
    description: 'Elegant venue perfect for weddings and large corporate events.',
    capacity: 500,
    price: 2500,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Stage', 'Dance Floor', 'Premium Sound System', 'Customizable Lighting'],
  },
  {
    id: 2,
    name: 'Crystal Room',
    description: 'Intimate setting ideal for private parties and small gatherings.',
    capacity: 150,
    price: 1200,
    image: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Chandelier Lighting', 'Private Bar', 'Lounge Area', 'AV Equipment'],
  },
  {
    id: 3,
    name: 'Garden Pavilion',
    description: 'Beautiful outdoor venue surrounded by landscaped gardens.',
    capacity: 300,
    price: 1800,
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    features: ['Garden Access', 'Weather Protection', 'Outdoor Lighting', 'BBQ Area'],
  },
];

export function BanquetHalls() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Banquet Halls & Event Spaces
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Perfect venues for your special occasions and corporate events
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex gap-4">
            <select className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500">
              <option>All Venues</option>
              <option>Indoor Halls</option>
              <option>Outdoor Venues</option>
              <option>Conference Rooms</option>
            </select>
            <select className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500">
              <option>Any Capacity</option>
              <option>Up to 100 guests</option>
              <option>101-300 guests</option>
              <option>301+ guests</option>
            </select>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Check Availability
          </button>
        </div>

        {/* Halls Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {halls.map((hall) => (
            <Link
              key={hall.id}
              to={`/banquet-halls/${hall.id}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={hall.image}
                  alt={hall.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                  ${hall.price}/day
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{hall.name}</h3>
                <p className="mt-2 text-gray-500">{hall.description}</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center text-gray-500">
                    <Users className="h-5 w-5" />
                    <span className="ml-1 text-sm">Up to {hall.capacity} guests</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {hall.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200">
                  Book Venue
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}