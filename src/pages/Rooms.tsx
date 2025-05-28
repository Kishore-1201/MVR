import React from 'react';
import { Link } from 'react-router-dom';
import { Bath, BedDouble, Coffee, Tv, Users, Wifi } from 'lucide-react';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Ocean View Suite',
    description: 'Luxurious suite with panoramic ocean views and premium amenities.',
    price: 450,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    amenities: ['Ocean View', 'King Bed', 'Balcony', 'Mini Bar'],
    capacity: 2,
    size: '55 m²',
  },
  {
    id: 2,
    name: 'Executive Mountain Suite',
    description: 'Spacious suite with stunning mountain views and modern furnishings.',
    price: 380,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    amenities: ['Mountain View', 'Queen Bed', 'Work Desk', 'Lounge Area'],
    capacity: 2,
    size: '45 m²',
  },
  {
    id: 3,
    name: 'Family Garden Suite',
    description: 'Perfect for families with direct garden access and multiple bedrooms.',
    price: 550,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    amenities: ['Garden Access', '2 Bedrooms', 'Kitchen', 'Living Room'],
    capacity: 4,
    size: '75 m²',
  },
];

const amenityIcons = {
  wifi: Wifi,
  tv: Tv,
  coffee: Coffee,
  bath: Bath,
  bed: BedDouble,
  capacity: Users,
};

export function Rooms() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Luxury Accommodations
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Choose from our selection of premium rooms and suites
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex gap-4">
            <select className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500">
              <option>All Room Types</option>
              <option>Deluxe Rooms</option>
              <option>Suites</option>
              <option>Family Rooms</option>
            </select>
            <select className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500">
              <option>Any Capacity</option>
              <option>1-2 Persons</option>
              <option>3-4 Persons</option>
              <option>5+ Persons</option>
            </select>
          </div>
          <div className="flex gap-4">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Price: Low to High
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Most Popular
            </button>
          </div>
        </div>

        {/* Room Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <Link
              key={room.id}
              to={`/rooms/${room.id}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
                  ${room.price}/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{room.name}</h3>
                <p className="mt-2 text-gray-500">{room.description}</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center text-gray-500">
                    <Users className="h-5 w-5" />
                    <span className="ml-1 text-sm">{room.capacity} guests</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <BedDouble className="h-5 w-5" />
                    <span className="ml-1 text-sm">{room.size}</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {room.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
                <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200">
                  Book Now
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}