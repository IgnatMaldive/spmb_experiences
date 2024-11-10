"use client"
import React, { useState } from 'react';
import { MapPin, Star, Clock, Calendar, Users, ArrowLeft, Heart, Share2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const ExperienceDetail = () => {
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  
  const experience = {
    id: 1,
    title: "Hidden Rooftop Garden",
    category: "Nature",
    location: "Downtown District",
    rating: 4.8,
    reviews: 124,
    price: 25,
    duration: "2 hours",
    groupSize: "1-8 people",
    description: "A peaceful urban oasis with stunning city views. Discover a secret garden nestled above the bustling streets, where local horticulturists have created a sustainable green space featuring native plants, butterfly gardens, and meditation areas.",
    highlights: [
      "Guided tour of rare urban plant species",
      "Sunset viewing from exclusive vantage point",
      "Interactive gardening workshop",
      "Organic tea tasting session",
      "Photography opportunities"
    ],
    availableDates: [
      "Mon, Wed, Fri: 10:00 AM - 4:00 PM",
      "Sat, Sun: 9:00 AM - 6:00 PM"
    ],
    host: {
      name: "Sarah Chen",
      title: "Urban Gardening Expert",
      experience: "8 years",
      bio: "Sarah is a certified horticulturist with a passion for creating green spaces in urban environments."
    },
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ]
  };

  const handleBooking = () => {
    setShowBookingSuccess(true);
    setTimeout(() => setShowBookingSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Experiences
          </button>
        </div>
      </nav>

      {/* Success Alert */}
      {showBookingSuccess && (
        <div className="fixed top-4 right-4 z-50">
          <Alert className="bg-green-50 border-green-200">
            <AlertDescription className="text-green-800">
              Booking confirmed! Check your email for details.
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="col-span-2 md:col-span-1">
            <img 
              src={experience.images[0]} 
              alt="Main view"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="hidden md:grid grid-rows-2 gap-4">
            <img 
              src={experience.images[1]} 
              alt="Secondary view"
              className="w-full h-44 object-cover rounded-lg"
            />
            <img 
              src={experience.images[2]} 
              alt="Third view"
              className="w-full h-44 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">{experience.title}</h1>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{experience.location}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Rating and Category */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 font-medium">{experience.rating}</span>
                  <span className="ml-1 text-gray-600">({experience.reviews} reviews)</span>
                </div>
                <span className="px-3 py-1 bg-gray-100 text-sm text-gray-600 rounded-full">
                  {experience.category}
                </span>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">About this experience</h2>
                <p className="text-gray-600 mb-6">{experience.description}</p>
                
                <h3 className="font-semibold mb-3">Experience Highlights</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  {experience.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>

                <h3 className="font-semibold mb-3">Available Times</h3>
                <ul className="text-gray-600 space-y-2">
                  {experience.availableDates.map((date, index) => (
                    <li key={index}>{date}</li>
                  ))}
                </ul>
              </div>

              {/* Host Information */}
              <div className="border-t pt-6">
                <h2 className="text-xl font-semibold mb-4">About your host</h2>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{experience.host.name}</h3>
                    <p className="text-gray-600">{experience.host.title}</p>
                    <p className="text-gray-600 mt-2">{experience.host.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-4">${experience.price}</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-400 mr-3" />
                  <span>{experience.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-gray-400 mr-3" />
                  <span>{experience.groupSize}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                  <span>Book now for today</span>
                </div>
              </div>

              <button 
                onClick={handleBooking}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Book Experience
              </button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                Free cancellation up to 24 hours before the experience
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">
            © 2024 City Experiences
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ExperienceDetail;