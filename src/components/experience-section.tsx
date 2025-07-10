"use client"

import { Star, Heart, Users, Map, ArrowRight, Clock, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const experiences = [
  {
    icon: Star,
    title: "Big Five Sightings",
    subtitle: "The Ultimate Wildlife Encounter",
    desc: "Encounter lions, elephants, buffalo, leopards, and rhinos in their natural habitat with our expert trackers who know every trail and watering hole.",
    highlights: ["Expert local guides", "Prime viewing locations", "Photography support"],
    duration: "Full day experience",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
    badge: "Most Popular",
  },
  {
    icon: Heart,
    title: "Cultural Immersion",
    subtitle: "Connect with Local Communities",
    desc: "Engage with local communities, learn traditional crafts, and participate in authentic cultural ceremonies that have been passed down for generations.",
    highlights: ["Traditional craft workshops", "Community visits", "Cultural ceremonies"],
    duration: "Half day experience",
    image: "https://images.unsplash.com/photo-1534476478164-b15fec4f091c?q=80&w=800&auto=format&fit=crop",
    badge: "Authentic",
  },
  {
    icon: Users,
    title: "Small Groups",
    subtitle: "Intimate Safari Experience",
    desc: "Travel in groups of no more than 8 guests, ensuring personalized attention and minimal environmental impact while maximizing wildlife encounters.",
    highlights: ["Maximum 8 guests", "Personal attention", "Flexible itinerary"],
    duration: "All experiences",
    image: "https://images.unsplash.com/photo-1527073655851-770661160114?q=80&w=800&auto=format&fit=crop",
    badge: "Exclusive",
  },
  {
    icon: Map,
    title: "Remote Locations",
    subtitle: "Off the Beaten Path",
    desc: "Access exclusive wilderness areas far from tourist crowds, where wildlife roams freely across vast landscapes untouched by mass tourism.",
    highlights: ["Private conservancies", "Untouched wilderness", "Rare wildlife sightings"],
    duration: "Multi-day expeditions",
    image: "https://images.unsplash.com/photo-1518459384564-ecfd8e80721f?q=80&w=800&auto=format&fit=crop",
    badge: "Premium",
  },
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="Experiences" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Curated Experiences
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
            Unforgettable Safari
            <span className="block text-amber-600">Experiences</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Each experience is thoughtfully designed to create lasting memories while respecting wildlife and local
            communities
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {experiences.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Badge */}
              {item.badge && (
                <div className="absolute top-4 left-4 z-20 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {item.badge}
                </div>
              )}

              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-stone-700" />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-amber-600 text-sm font-medium mb-2">
                  <Clock className="w-4 h-4" />
                  {item.duration}
                </div>

                <h3 className="text-2xl font-serif text-stone-900 mb-2">{item.title}</h3>
                <p className="text-amber-600 font-medium mb-4">{item.subtitle}</p>
                <p className="text-stone-600 leading-relaxed mb-6">{item.desc}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-stone-900 mb-3 uppercase tracking-wide">What's Included</h4>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-stone-600">
                        <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button className="group/btn inline-flex items-center text-stone-900 font-medium hover:text-amber-600 transition-colors duration-200">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Hover Effect Border */}
              <div
                className={`absolute inset-0 border-2 border-transparent rounded-2xl transition-colors duration-300 ${activeCard === index ? "border-amber-200" : ""}`}
              ></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-sm">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-stone-900 mb-2">2</div>
              <div className="text-stone-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-stone-900 mb-2">100+</div>
              <div className="text-stone-600">Happy Travelers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-stone-900 mb-2">98%</div>
              <div className="text-stone-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-stone-900 mb-2">25+</div>
              <div className="text-stone-600">Wildlife Species</div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-serif mb-4">Ready to Begin Your Adventure?</h3>
            <p className="text-stone-300 mb-6 max-w-2xl mx-auto">
              Let us create a personalized safari experience that matches your interests and exceeds your expectations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Plan Your Safari
              </button>
              <button className="border border-stone-600 hover:border-stone-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                View Sample Itineraries
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
