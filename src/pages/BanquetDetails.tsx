import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Check, MapPin, Music, Star, Users, Utensils, Wifi } from 'lucide-react';

const features = [
  { name: 'High-Speed WiFi', icon: Wifi },
  { name: 'Premium Sound System', icon: Music },
  { name: 'Catering Services', icon: Utensils },
  { name: 'Up to 500 Guests', icon: Users },
];

export function BanquetDetails() {
  const { id } = useParams();

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Images */}
          <div className="relative">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Banquet hall main view"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <img
                src="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Hall detail"
                className="h-24 w-full object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Hall detail"
                className="h-24 w-full object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Hall detail"
                className="h-24 w-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Hall Info */}
          <div className="mt-10 lg:mt-0 lg:ml-8">
            <h1 className="text-3xl font-bold text-gray-900">Grand Ballroom</h1>
            
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">92 reviews</span>
            </div>

            <div className="mt-4 flex items-center text-gray-500">
              <MapPin className="h-5 w-5" />
              <span className="ml-2">Main Building, Ground Floor</span>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-medium text-gray-900">Description</h2>
              <p className="mt-2 text-gray-500">
                Our Grand Ballroom is an elegant venue perfect for weddings, corporate events, and large celebrations. With its stunning chandeliers, state-of-the-art sound system, and flexible space configuration, it can accommodate up to 500 guests in various setups.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Features</h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature.name} className="flex items-center">
                    <feature.icon className="h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-500">{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Available Configurations</h2>
              <div className="mt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Theater Style</span>
                  <span className="text-gray-900">Up to 500 guests</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Banquet Style</span>
                  <span className="text-gray-900">Up to 300 guests</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Classroom Style</span>
                  <span className="text-gray-900">Up to 250 guests</span>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-gray-900">$2,500</span>
                  <span className="text-gray-500">/day</span>
                </div>
                <button className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  <Calendar className="h-5 w-5 mr-2" />
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <h2 className="text-lg font-medium text-gray-900">Additional Services</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-medium text-gray-900">Catering</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-500">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Multiple cuisine options
                </li>
                <li className="flex items-center text-gray-500">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Customizable menus
                </li>
                <li className="flex items-center text-gray-500">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Professional service staff
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-medium text-gray-900">Decoration</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-500">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Theme-based decoration
                </li>
                <li className="flex items-center text-gray-500">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Floral arrangements
                </li>
                <li className="flex items-center text-gray-500">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Lighting setup
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-medium text-gray-900">Technical Support</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-500">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  AV equipment
                </li>
                <li className="flex items-center text-gray-500">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  Technical staff
                </li>
                <li className="flex items-center text-gray-500">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  WiFi access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}