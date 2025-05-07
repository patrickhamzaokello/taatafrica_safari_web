"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true)

    // Handle scroll for parallax effect and navbar transparency
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroImage = document.querySelector(".hero-image") as HTMLElement
      
      // Update navbar transparency based on scroll position
      setIsScrolled(scrollPosition > 50)
      
      if (heroImage) {
        // Subtle parallax effect
        heroImage.style.transform = `translateY(${scrollPosition * 0.15}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll function
  const scrollToContent = () => {
    const nextSection = document.getElementById("featured-safaris") || document.querySelector("section:nth-of-type(2)")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-stone-950">
      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-950/90 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex items-center justify-between h-20 border-b border-amber-800/20">
            {/* Logo */}
            <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
              <div className="flex items-center">
                <span className="text-white font-serif text-xl tracking-wider">TATA AFRICA <span className="text-amber-500">SAFARIS</span></span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-8">
                {['Featured', 'Experiences', 'Testimonies', 'Charity', 'About', 'Contact'].map((item, index) => (
                  <li key={index} className={`transition-all duration-700 delay-${index * 100} ${isLoaded ? "opacity-100" : "opacity-0 translate-y-2"}`}>
                    <a href="#" className="text-stone-300 hover:text-amber-500 text-sm uppercase tracking-widest transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-stone-300 hover:text-amber-500 transition-colors duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-stone-950/95 backdrop-blur-sm z-40 transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-6">
              {['Destinations', 'Experiences', 'Wildlife', 'Luxury Camps', 'About', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-stone-300 hover:text-amber-500 text-lg uppercase tracking-widest transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleMenu();
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Letterboxed Hero Image with Luxury Treatment */}
      <div className="absolute inset-0 md:inset-y-[10%] md:h-[80%] overflow-hidden">
        <div className="hero-image absolute inset-0 transition-transform duration-700 ease-out scale-[1.03]">
          <Image
            src="https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="African Safari"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-950/60"></div>
        </div>
      </div>

      {/* Horizontal Lines - Luxury Detail */}
      <div className="absolute top-0 left-0 right-0 h-px bg-amber-800/30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-amber-800/30"></div>

      {/* Hero Content - Minimalist Luxury Approach */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 sm:px-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Subtle Divider */}
          <div
            className={`flex items-center justify-center mb-4 transition-all duration-1000 ease-out ${isLoaded ? "opacity-100" : "opacity-0 translate-y-6"}`}
          >
            <div className="h-px w-12 bg-amber-600"></div>
            <p className="mx-4 text-amber-600 uppercase tracking-widest text-xs font-medium">
              Tailored Moments, Timeless Memories
            </p>
            <div className="h-px w-12 bg-amber-600"></div>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-serif text-white font-light tracking-wide transition-all duration-1000 delay-300 ease-out ${isLoaded ? "opacity-100" : "opacity-0 translate-y-6"}`}
          >
            <span className="block mb-2">Explore Uganda</span>
            <span className="text-amber-400">With a touch of Elegance</span>
          </h1>

          <p
            className={`text-base sm:text-lg text-stone-300 max-w-xl mx-auto transition-all duration-1000 delay-500 ease-out ${isLoaded ? "opacity-100" : "opacity-0 translate-y-6"}`}
          >
            Curated safari journeys that blend luxury with authentic wildlife encounters and cultural immersion
          </p>

          <div
            className={`pt-6 transition-all duration-1000 delay-700 ease-out ${isLoaded ? "opacity-100" : "opacity-0 translate-y-6"}`}
          >
            <Button className="bg-transparent hover:bg-gray-100 text-white hover:text-black border border-gray-100 px-10 py-6 rounded-none text-sm uppercase tracking-widest transition-all duration-300 hover:border-transparent">
              Curate Your Journey
            </Button>
          </div>
        </div>

        {/* Minimal Scroll Indicator */}
        <div
          className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer transition-all duration-1000 delay-1000 ease-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onClick={scrollToContent}
        >
          <div className="flex flex-col items-center space-y-3">
            <span className="text-amber-500 text-xs uppercase tracking-widest">Explore</span>
            <ChevronDown className="text-amber-500 animate-pulse" size={18} />
          </div>
        </div>
      </div>
    </div>
  )
}