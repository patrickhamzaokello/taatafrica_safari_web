"use client"

import { Star, Heart, Users, Map, ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

const experiences = [
  {
    icon: Star,
    title: "Big Five Sightings",
    desc: "Encounter lions, elephants, buffalo, leopards, and rhinos in their natural habitat with our expert trackers.",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
  },
  {
    icon: Heart,
    title: "Cultural Immersion",
    desc: "Engage with local communities, learn traditional crafts, and participate in authentic cultural ceremonies.",
    color: "bg-stone-50 border-stone-200",
    iconColor: "text-stone-700",
  },
  {
    icon: Users,
    title: "Small Groups",
    desc: "Travel in groups of no more than 8 guests, ensuring personalized attention and minimal environmental impact.",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
  },
  {
    icon: Map,
    title: "Remote Locations",
    desc: "Access exclusive wilderness areas far from tourist crowds, where wildlife roams freely across vast landscapes.",
    color: "bg-stone-50 border-stone-200",
    iconColor: "text-stone-700",
  },
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

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
      const titleElements = sectionRef.current.querySelectorAll(".section-title")
      titleElements.forEach((el) => observer.observe(el))
    }

    // Observe each item with a delay
    itemRefs.current.forEach((item, index) => {
      if (item) {
        setTimeout(() => {
          observer.observe(item)
        }, index * 150)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="Experiences" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Decorative Element */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-1 bg-amber-600"></div>

        <div className="text-center mb-16">
          <p className="italic text-amber-600 text-xl mb-3 section-title opacity-0">Experience Uganda</p>
          <h2 className="text-4xl font-serif mb-6 section-title opacity-0">Where Wildlife Meets Culture</h2>
          <p className="max-w-2xl mx-auto text-stone-600 section-title opacity-0">
            Our safaris offer more than just wildlife viewing. Immerse yourself in the rich tapestry of African
            landscapes, wildlife, and cultural heritage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={`p-8 border ${item.color} rounded-none hover:shadow-md transition-all duration-300 opacity-0 group relative overflow-hidden`}
            >
              {/* Icon Container */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 flex items-center justify-center border border-current rounded-full mb-4">
                  <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                </div>
                <h3 className="text-xl font-serif mb-3">{item.title}</h3>
              </div>

              <p className="text-stone-600 mb-4">{item.desc}</p>

              <a
                href="#"
                className="inline-flex items-center text-sm font-medium group-hover:text-amber-600 transition-colors"
              >
                Learn more
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                <div
                  className={`absolute transform rotate-45 translate-x-6 translate-y-6 w-12 h-1 ${index % 2 === 0 ? "bg-amber-600/30" : "bg-stone-600/20"}`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 opacity-0" ref={(el) => { itemRefs.current[4] = el; }}>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors duration-300 font-medium"
          >
            Explore All Experiences
          </a>
        </div>
      </div>
    </section>
  )
}

