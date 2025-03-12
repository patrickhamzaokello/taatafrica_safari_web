"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  // Smooth scroll function
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=1920"
          alt="African Safari"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <p className="italic text-amber-400 text-xl sm:text-2xl hero-fade-in">Discover Africa</p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif text-white font-light tracking-wide hero-fade-in hero-delay-1">
            Wild Beauty <span className="text-amber-400">&</span> Rich Culture
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto hero-fade-in hero-delay-2">
            Immerse yourself in authentic African safaris and cultural experiences
          </p>

          <div className="pt-4 hero-fade-in hero-delay-3">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
              Begin Your Journey
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToContent}>
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white text-sm">Explore</span>
            <ChevronDown className="text-amber-400 animate-bounce" size={24} />
          </div>
        </div>
      </div>
    </div>
  )
}

