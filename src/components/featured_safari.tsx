"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
  ChevronRight,
} from "lucide-react";
import { getAllPackages } from "@/lib/packages";
import { SafariPackage } from "@/types/safari-packages";
import { useParams, useRouter } from "next/navigation";

export function FeaturedSafaris() {
  const sectionRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [packageData, setPackageData] = useState<SafariPackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  
  // Load packages data with error handling
  useEffect(() => {
    const loadPackages = async () => {
      try {
        setLoading(true);
        const data = await getAllPackages();
        
        if (data && Array.isArray(data) && data.length > 0) {
          setPackageData(data);
        } else {
          console.warn('No packages found, using fallback data');
        }
      } catch (err) {
        console.error('Error loading packages:', err);
        setError('Error fetching packages data.');
        // Use fallback data on error
      } finally {
        setLoading(false);
      }
    };

    loadPackages();
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate cards with staggered delay
            const cards = cardRefs.current;
            cards.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  card.style.opacity = '1';
                  card.style.transform = 'translateY(0)';
                }, index * 150);
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [packageData]); // Re-run when packageData changes

  if (loading) {
    return (
      <section className="py-20 px-4 sm:px-6 bg-stone-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-stone-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-stone-200 rounded w-96 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 shadow-sm border border-stone-200">
                  <div className="h-64 bg-stone-200 rounded mb-4"></div>
                  <div className="h-6 bg-stone-200 rounded mb-2"></div>
                  <div className="h-4 bg-stone-200 rounded mb-4"></div>
                  <div className="h-10 bg-stone-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 px-4 sm:px-6 bg-stone-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-red-600 mb-4">
            <p>Error loading packages: {error}</p>
            <p className="text-sm text-stone-600 mt-2">Using fallback data...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section
        id="Featured"
        ref={sectionRef}
        className="py-20 px-4 sm:px-6 bg-stone-100"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <p className="text-amber-600 text-xl mb-2 font-script">
              Unforgettable Experiences
            </p>
            <h2 className="text-4xl font-serif mb-6 text-stone-900">
              Featured Safari Packages
            </h2>
            <p className="max-w-2xl mx-auto text-stone-600">
              Discover our carefully curated selection of premium safari
              experiences, each offering a unique perspective on Uganda's
              breathtaking landscapes and wildlife.
            </p>
            <div className="mt-4 text-sm text-stone-500">
              {packageData.length} packages available
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packageData.map((pkg, index) => (
              <div
                key={pkg.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="bg-white shadow-sm border border-stone-200 group hover:shadow-lg transition-all duration-300 opacity-0 translate-y-5"
                style={{
                  transition: 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease'
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.images.featured}
                    alt={pkg.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent"></div>

                  {/* Styles/Categories badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                    {pkg.styles?.slice(0, 2).map((style, styleIndex) => (
                      <Badge
                        key={styleIndex}
                        className="bg-amber-600/90 text-white text-xs"
                      >
                        {style}
                      </Badge>
                    ))}
                  </div>

                  {/* Price badge */}
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded">
                    <span className="text-stone-900 font-bold">
                      ${pkg.startingPrice}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-serif text-stone-900 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                    {pkg.title}
                  </h3>

                  <p className="text-stone-600 text-sm line-clamp-3">
                    {pkg.shortDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-sm text-stone-500">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-amber-600" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-amber-600" />
                      <span className="truncate">
                        {pkg.location?.split(",")[0]}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-amber-600" />
                      <span>{pkg.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-amber-600" />
                      <span>{pkg.season}</span>
                    </div>
                  </div>

                  {/* Highlights preview */}
                  {pkg.highlights && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-stone-900">
                        Key Highlights:
                      </p>
                      <ul className="text-xs text-stone-600 space-y-1">
                        {pkg.highlights.slice(0, 2).map((highlight, index) => (
                          <li key={index} className="flex items-start gap-1">
                            <Star
                              size={12}
                              className="text-amber-600 mt-0.5 flex-shrink-0"
                            />
                            <span className="line-clamp-1">{highlight}</span>
                          </li>
                        ))}
                        {pkg.highlights.length > 2 && (
                          <li className="text-amber-600 text-xs font-medium">
                            +{pkg.highlights.length - 2} more highlights
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button
                      onClick={() => router.push(`/details/${pkg.id}`)}
                      variant="outline"
                      className="flex-1 border-stone-300 text-stone-700 hover:bg-stone-50 text-sm"
                    >
                      View Details
                      <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
        </div>
      </section>
    </>
  );
}