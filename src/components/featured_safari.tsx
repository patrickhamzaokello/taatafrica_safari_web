"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { useEffect, useRef } from "react"
import HomePage from "./cards"

// Safari experiences data
const safariExperiences = [
  {
    id: 1,
    title: "Gorilla Trekking Adventure",
    description: "Explore Bwindi Impenetrable Forest and witness mountain gorillas in their natural habitat.",
    image: "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "7 Days",
    location: "Bwindi Impenetrable National Park",
    groupSize: "Max 8",
    startingPrice: 2899,
    season: "Jun-Oct",
  },
  {
    id: 2,
    title: "Murchison Falls Safari",
    description: "Experience Uganda's largest national park with thrilling game drives and a boat cruise to the falls.",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=800",
    duration: "5 Days",
    location: "Murchison Falls National Park",
    groupSize: "Max 6",
    startingPrice: 3299,
    season: "Apr-Sep",
  },
  {
    id: 3,
    title: "Queen Elizabeth National",
    description: "Enjoy a classic African safari with tree-climbing lions and boat cruises on the Kazinga Channel.",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=800",
    duration: "6 Days",
    location: "Queen Elizabeth National Park",
    groupSize: "Max 6",
    startingPrice: 2499,
    season: "Jul-Oct",
  },
]

export function FeaturedSafaris() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe section title
    if (sectionRef.current) {
      observer.observe(sectionRef.current.querySelector(".section-title") as Element)
    }

    // Observe each card with a delay
    cardRefs.current.forEach((card, index) => {
      if (card) {
        setTimeout(() => {
          observer.observe(card)
        }, index * 100)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="featured-safaris" ref={sectionRef} className="py-20 px-4 sm:px-6 bg-stone-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-title opacity-0">
          <p className="cursive text-amber-600 text-xl mb-2">Unforgettable Experiences</p>
          <h2 className="text-4xl font-serif mb-6 text-stone-900">Featured Safaris</h2>
          <p className="max-w-2xl mx-auto text-stone-600">
            Discover our carefully curated selection of premium safari experiences, each offering a unique perspective
            on Africa's breathtaking landscapes and wildlife.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safariExperiences.map((safari, index) => (
            <div
              key={safari.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="bg-white shadow-sm border border-stone-200 group hover:shadow-md transition-shadow duration-300 opacity-0"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={safari.image || "/placeholder.svg"}
                  alt={safari.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-amber-600 text-white px-3 py-1 text-sm font-medium">
                  From ${safari.startingPrice}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-serif text-stone-900 group-hover:text-amber-600 transition-colors duration-300">
                  {safari.title}
                </h3>

                <p className="text-stone-600">{safari.description}</p>

                <div className="grid grid-cols-2 gap-3 text-sm text-stone-500">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-amber-600" />
                    <span>{safari.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-amber-600" />
                    <span>{safari.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-amber-600" />
                    <span>{safari.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-amber-600" />
                    <span>{safari.season}</span>
                  </div>
                </div>

                <Button className="w-full bg-stone-800 hover:bg-amber-600 text-white transition-colors duration-300 rounded-none mt-2">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 opacity-0" ref={(el) => { cardRefs.current[3] = el; }}>
          <Button
            variant="outline"
            className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-6 rounded-none text-lg"
          >
            View All Safaris
          </Button>
        </div>
      </div>
    </section>
  )
}

