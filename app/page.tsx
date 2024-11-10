"use client"

// app/page.tsx

import React, { useState } from 'react';
import { Search, MapPin, Star, Plus } from 'lucide-react';

// Define the Experience interface
interface Experience {
  id: number;
  title: string;
  category: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
}

// Sample data with direct Unsplash URLs
const experiences: Experience[] = [
  {
    id: 1,
    title: 'Hidden Rooftop Garden',
    category: 'Nature',
    location: 'Downtown District',
    rating: 4.8,
    reviews: 124,
    image:
      'https://images.unsplash.com/photo-1598367817142-ec807128e5bb?auto=format&fit=crop&w=800&q=80',
    description: 'A peaceful urban oasis with stunning city views',
  },
  {
    id: 2,
    title: 'Historic Food Market Tour',
    category: 'Food & Drink',
    location: 'Old Town',
    rating: 4.9,
    reviews: 89,
    image:
      'https://images.unsplash.com/photo-1595123550441-d377e017de6a?auto=format&fit=crop&w=800&q=80',
    description: 'Explore local delicacies and cultural heritage',
  },
  {
    id: 3,
    title: 'Sunset Kayak Adventure',
    category: 'Activities',
    location: 'Bay Area',
    rating: 4.7,
    reviews: 156,
    image:
      'https://images.unsplash.com/photo-1542992015-4a0b729b1385?auto=format&fit=crop&w=800&q=80',
    description: 'Paddle through scenic waterways at dusk',
  },
  {
    id: 4,
    title: 'Jazz & Blues Club',
    category: 'Nightlife',
    location: 'Music District',
    rating: 4.6,
    reviews: 203,
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    description: 'Live music venue featuring local talent',
  },
  {
    id: 5,
    title: 'Artisan Coffee Workshop',
    category: 'Food & Drink',
    location: 'Cultural Quarter',
    rating: 4.9,
    reviews: 167,
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    description: 'Learn coffee brewing from master baristas',
  },
  {
    id: 6,
    title: 'Urban Rock Climbing',
    category: 'Activities',
    location: 'Sports Complex',
    rating: 4.8,
    reviews: 142,
    image:
      'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80',
    description: 'Indoor climbing for all skill levels',
  },
];

// Define the ExperienceCard component before using it
const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={experience.image}
          alt={experience.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full shadow flex items-center">
          <Star className="text-yellow-400 w-4 h-4 fill-current" />
          <span className="ml-1 text-sm font-medium text-gray-800">
            {experience.rating}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {experience.title}
        </h3>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          {experience.location}
        </div>
        <p className="text-sm text-gray-600 mb-4">{experience.description}</p>
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full">
            {experience.category}
          </span>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center group">
            View Details
            <svg
              className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const CityExperiencesApp = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Activities', 'Food & Drink', 'Nature', 'Nightlife'];

  const filteredExperiences =
    activeFilter === 'All'
      ? experiences
      : experiences.filter((exp) => exp.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Unsplash background */}
      <header
        className="relative bg-cover bg-center text-white py-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                url("https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1920&q=80")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <MapPin className="mr-2" />
            <h2 className="text-2xl font-semibold">San Francisco</h2>
          </div>

          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search experiences..."
              className="w-full py-3 px-12 rounded-lg text-gray-800 shadow-lg"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Filter Buttons */}
        <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full transition-all duration-200 flex-shrink-0 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Add Experience Button */}
        <div className="mb-8">
          <button className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
            <Plus className="mr-2" size={20} />
            Add Your Experience
          </button>
        </div>

        {/* Experience Cards with Loading State */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">
            © 2024 City Experiences. Photos by various photographers on Unsplash.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CityExperiencesApp;
