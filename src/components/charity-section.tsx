"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

// Impact statistics
const impactStats = [
  { value: 250, label: "Girls Educated" },
  { value: 12, label: "Schools Supported" },
  { value: 5, label: "Communities Impacted" },
]

export function CharitySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [counters, setCounters] = useState<number[]>(impactStats.map(() => 0))

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")

            // If this is the stats container, start the counter animation
            if (entry.target.classList.contains("stats-container")) {
              animateCounters()
            }

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    // Observe elements
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-on-scroll")
      elements.forEach((el) => observer.observe(el))
    }

    return () => observer.disconnect()
  }, [])

  // Counter animation
  const animateCounters = () => {
    const duration = 2000 // 2 seconds
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)

    let frame = 0
    const countTo = impactStats.map((stat) => stat.value)

    const counter = setInterval(() => {
      frame++

      const progress = frame / totalFrames
      const easeOutQuad = progress * (2 - progress) // Easing function

      const newCounters = countTo.map((value) => Math.floor(value * easeOutQuad))
      setCounters(newCounters)

      if (frame === totalFrames) {
        clearInterval(counter)
        setCounters(countTo)
      }
    }, frameDuration)
  }

  return (
    <section ref={sectionRef} className="py-28 bg-stone-100 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-on-scroll opacity-0">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-8 bg-amber-600"></div>
              <p className="mx-4 text-amber-600 uppercase tracking-widest text-sm font-medium">Our Purpose</p>
              <div className="h-px w-8 bg-amber-600"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-stone-900">Empowering Through Education</h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              A portion of every safari experience funds education for girls in local communities.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Side - Minimalistic Approach */}
            <div className="relative animate-on-scroll opacity-0">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000"
                  alt="African girls in school"
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-amber-900/10"></div>
              </div>

              {/* Minimal frame */}
              <div className="absolute inset-0 border border-amber-200 -translate-x-4 -translate-y-4 pointer-events-none"></div>
            </div>

            {/* Content Side - Luxurious Minimalism */}
            <div className="space-y-12">
              <div className="animate-on-scroll opacity-0">
                <p className="text-stone-700 leading-relaxed mb-6">
                  We believe that true luxury includes making a meaningful difference. With every safari booked, you
                  contribute to our education initiative that provides opportunities for girls in the communities you'll
                  visit.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  <span className="text-amber-600 font-medium">5% of every booking</span> is directed to scholarships,
                  learning materials, and school infrastructure, creating lasting impact beyond your journey.
                </p>
              </div>

              {/* Impact Stats - Horizontal Minimalist Layout */}
              <div className="stats-container animate-on-scroll opacity-0 border-t border-b border-stone-200 py-8">
                <div className="flex flex-wrap justify-between">
                  {impactStats.map((stat, index) => (
                    <div key={index} className="text-center px-4">
                      <div className="text-3xl font-serif text-amber-600 mb-1">
                        {counters[index]}
                        <span className="text-xl">+</span>
                      </div>
                      <div className="text-sm text-stone-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial - Minimalist Quote */}
              <div className="animate-on-scroll opacity-0">
                <p className="text-lg italic text-stone-600 mb-4">
                  "The scholarship changed my life. Now I can pursue my dream of becoming a wildlife conservationist."
                </p>
                <p className="text-amber-600 font-medium">— Amara, Scholarship Recipient</p>
              </div>

              {/* CTA - Luxurious Button */}
              <div className="animate-on-scroll opacity-0 pt-4">
                <Button className="bg-stone-900 hover:bg-amber-600 text-white px-8 py-6 rounded-none text-sm uppercase tracking-wider transition-colors duration-300">
                  Learn About Our Initiative
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

