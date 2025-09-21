"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Star, 
  ChevronLeft,
  Phone,
  Mail,
  Share2,
  Heart,
  Download
} from "lucide-react"

// This component would receive package data as props or fetch it based on ID
interface PackageData {
  title: string;
  duration: string;
  location: string;
  startingPrice: number;
  currency: string;
  images: {
    featured: string;
    gallery: string[];
  };
  styles: string[];
  fullDescription: string;
  groupSize: string;
  season: string;
  difficulty?: string;
  highlights?: string[];
  itinerary?: { time: string; activities: string[] }[];
  inclusions?: string[];
  exclusions?: string[];
}

interface PackageDetailPageProps {
  packageData: PackageData;
  onBack: () => void;
}

export function PackageDetailPage({ packageData, onBack }: PackageDetailPageProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-stone-900 mb-2">Package Not Found</h2>
          <p className="text-stone-600 mb-4">The requested package could not be found.</p>
          <Button onClick={onBack} variant="outline">
            <ChevronLeft size={16} className="mr-2" />
            Back to Packages
          </Button>
        </div>
      </div>
    )
  }

  const pkg = packageData

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-stone-200 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="text-stone-600 hover:text-stone-900"
            >
              <ChevronLeft size={20} className="mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-lg font-serif text-stone-900 truncate max-w-md">
                {pkg.title}
              </h1>
              <p className="text-sm text-stone-600">
                {pkg.duration} • {pkg.location.split(',')[0]}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Share2 size={16} />
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsWishlisted(!isWishlisted)}
            >
              <Heart size={16} className={isWishlisted ? "fill-red-500 text-red-500" : ""} />
            </Button>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <Image
            src={pkg.images.gallery[activeImageIndex] || pkg.images.featured}
            alt={pkg.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
          
          {/* Price overlay */}
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 max-w-sm">
            <div className="text-2xl font-bold text-stone-900">
              ${pkg.startingPrice}
              <span className="text-base font-normal text-stone-600"> per person</span>
            </div>
            <p className="text-sm text-stone-600">Starting price • {pkg.currency}</p>
          </div>
        </div>

        {/* Image Gallery Thumbnails */}
        {pkg.images.gallery && pkg.images.gallery.length > 1 && (
          <div className="absolute bottom-6 right-6 flex gap-2 max-w-md overflow-x-auto">
            {pkg.images.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`relative h-16 w-16 flex-shrink-0 overflow-hidden border-2 transition-colors ${
                  index === activeImageIndex 
                    ? 'border-white' 
                    : 'border-white/50 hover:border-white/80'
                }`}
              >
                <Image
                  src={image}
                  alt={`${pkg.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Package Overview */}
            <section>
              <div className="flex flex-wrap gap-2 mb-4">
                {pkg.styles.map((style, index) => (
                  <Badge key={index} variant="outline" className="border-amber-600 text-amber-700">
                    {style}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
                {pkg.title}
              </h1>
              
              <p className="text-stone-600 leading-relaxed text-lg mb-6">
                {pkg.fullDescription}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-stone-50">
                <div className="text-center">
                  <Clock className="mx-auto mb-2 text-amber-600" size={24} />
                  <p className="font-semibold text-stone-900">{pkg.duration}</p>
                  <p className="text-sm text-stone-600">Duration</p>
                </div>
                <div className="text-center">
                  <Users className="mx-auto mb-2 text-amber-600" size={24} />
                  <p className="font-semibold text-stone-900">{pkg.groupSize}</p>
                  <p className="text-sm text-stone-600">Group Size</p>
                </div>
                <div className="text-center">
                  <Calendar className="mx-auto mb-2 text-amber-600" size={24} />
                  <p className="font-semibold text-stone-900">{pkg.season}</p>
                  <p className="text-sm text-stone-600">Best Season</p>
                </div>
                <div className="text-center">
                  <MapPin className="mx-auto mb-2 text-amber-600" size={24} />
                  <p className="font-semibold text-stone-900">
                    {pkg.difficulty || "Various"}
                  </p>
                  <p className="text-sm text-stone-600">Difficulty</p>
                </div>
              </div>
            </section>

            {/* Highlights */}
            {pkg.highlights && (
              <section>
                <h2 className="text-2xl font-serif text-stone-900 mb-6">Experience Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {pkg.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star size={20} className="text-amber-600 mt-1 flex-shrink-0" />
                      <p className="text-stone-600">{highlight}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Detailed Itinerary */}
            {pkg.itinerary && (
              <section>
                <h2 className="text-2xl font-serif text-stone-900 mb-6">Detailed Itinerary</h2>
                <div className="space-y-6">
                  {pkg.itinerary.map((item, index) => (
                    <Card key={index} className="border-stone-200">
                      <CardHeader className="bg-stone-50">
                        <CardTitle className="text-lg text-stone-900 flex items-center gap-3">
                          <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          {item.time}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <ul className="space-y-2">
                          {item.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start gap-2 text-stone-600">
                              <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 flex-shrink-0" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Inclusions & Exclusions */}
            <section className="grid md:grid-cols-2 gap-8">
              {pkg.inclusions && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-stone-900 flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      What's Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.inclusions.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-stone-600">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {pkg.exclusions && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-stone-900 flex items-center gap-2">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600 text-sm">✗</span>
                      </div>
                      Not Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.exclusions.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 text-stone-600">
                          <span className="text-red-600 mt-1">✗</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Booking Card */}
              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <p className="text-sm text-stone-600 mb-1">Starting from</p>
                    <p className="text-4xl font-bold text-stone-900">
                      ${pkg.startingPrice}
                    </p>
                    <p className="text-sm text-stone-600">per person • {pkg.currency}</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg">
                      Book This Experience
                    </Button>
                    <Button variant="outline" className="w-full">
                      Request Custom Quote
                    </Button>
                  </div>
                  
                  <div className="text-center text-sm text-stone-600 space-y-2">
                    <p>📞 Instant confirmation available</p>
                    <p>✓ Free cancellation up to 48 hours</p>
                    <p>🌟 Best price guaranteed</p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="border-stone-200">
                <CardHeader>
                  <CardTitle className="text-lg text-stone-900">Need Help Planning?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-stone-600">
                    Speak with our travel experts to customize this experience or ask questions.
                  </p>
                  
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone size={16} className="mr-2" />
                      +256 (0) 766 274 001
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail size={16} className="mr-2" />
                      info@tataafricasafaris.com
                    </Button>
                  </div>
                </CardContent>
              </Card>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}