import React from 'react';
import { useParams } from 'react-router-dom';
import { Bath, BedDouble, Calendar, Check, Coffee, MapPin, Star, Tv, Users, Wifi } from 'lucide-react';

const amenities = [
  { name: 'Free WiFi', icon: Wifi },
  { name: 'Smart TV', icon: Tv },
  { name: 'Coffee Maker', icon: Coffee },
  { name: 'Luxury Bathroom', icon: Bath },
  { name: 'King Size Bed', icon: BedDouble },
  { name: 'Max 2 Guests', icon: Users },
];

export function RoomDetails() {
  const { id } = useParams();

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Images */}
          <div className="relative">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Room main view"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Room detail"
                className="h-24 w-full object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Room detail"
                className="h-24 w-full object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Room detail"
                className="h-24 w-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Room Info */}
          <div className="mt-10 lg:mt-0 lg:ml-8">
            <h1 className="text-3xl font-bold text-gray-900">Deluxe Ocean View Suite</h1>
            
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">128 reviews</span>
            </div>

            <div className="mt-4 flex items-center text-gray-500">
              <MapPin className="h-5 w-5" />
              <span className="ml-2">Ocean Wing, Floor 15</span>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-900">Description</h2>
              <p className="mt-2 text-gray-500">
                Experience luxury living in our Deluxe Ocean View Suite. This spacious 55 m² suite offers breathtaking panoramic views of the ocean, premium amenities, and elegant furnishings designed for your ultimate comfort.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Amenities</h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {amenities.map((amenity) => (
                  <div key={amenity.name} className="flex items-center">
                    <amenity.icon className="h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-500">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-gray-900">$450</span>
                  <span className="text-gray-500">/night</span>
                </div>
                <button className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-medium text-gray-900">Policies</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900">Check-in/Check-out</h3>
              <ul className="mt-2 space-y-2 text-gray-500">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Check-in from 3:00 PM
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Check-out until 12:00 PM
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Cancellation</h3>
              <ul className="mt-2 space-y-2 text-gray-500">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Free cancellation up to 24 hours before check-in
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Full refund for eligible cancellations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}