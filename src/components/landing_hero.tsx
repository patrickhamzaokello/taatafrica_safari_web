"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Array of background images for shuffling
  const backgroundImages = [
    {
      src: "https://images.unsplash.com/photo-1531570325967-4b8fcb7e120d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "African Safari Elephants",
    },
    {
      src: "https://images.unsplash.com/photo-1534476478164-b15fec4f091c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "African Savanna Landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1527073655851-770661160114?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Lions in African Wilderness",
    },
    {
      src: "https://images.unsplash.com/photo-1518459384564-ecfd8e80721f?q=80&w=1148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "African Sunset Safari",
    },
    {
      src: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Giraffe in African Landscape",
    },
  ]

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true)

    // Handle scroll for parallax effect and navbar transparency
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const heroImages = document.querySelectorAll(".hero-image")

      // Update navbar transparency based on scroll position
      setIsScrolled(scrollPosition > 50)

      heroImages.forEach((heroImage) => {
        if (heroImage instanceof HTMLElement) {
          // Subtle parallax effect
          heroImage.style.transform = `translateY(${scrollPosition * 0.15}px)`
        }
      })
    }

    // Image shuffle interval
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000) // Change image every 5 seconds

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(imageInterval)
    }
  }, [backgroundImages.length])

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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-stone-950/90 backdrop-blur-sm" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex items-center justify-between h-20 border-b border-amber-800/20">
            {/* Logo */}
            <div className={`transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
              <div className="flex items-center">
                <span className="text-white font-serif text-xl tracking-wider">
                  TATA AFRICA <span className="text-amber-500">SAFARIS</span>
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
              <ul className="flex space-x-8">
                {["Featured", "Experiences", "Testimonies", "Charity", "About", "FAQ", "Contact"].map((item, index) => (
                  <li
                    key={index}
                    className={`transition-all duration-700 delay-${index * 100} ${isLoaded ? "opacity-100" : "opacity-0 translate-y-2"}`}
                  >
                    <a
                      href={`#${item}`}
                      className="text-stone-300 hover:text-amber-500 text-sm uppercase tracking-widest transition-colors duration-300"
                    >
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
        <div
          className={`md:hidden fixed inset-0 bg-stone-950/95 backdrop-blur-sm z-40 transition-all duration-500 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col items-center space-y-6">
              {["Featured", "Experiences", "Testimonies", "Charity", "About", "FAQ", "Contact"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item}`}
                    className="text-stone-300 hover:text-amber-500 text-lg uppercase tracking-widest transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault()
                      const section = document.getElementById(item)
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" })
                      }
                      toggleMenu() // close menu after scroll
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

      {/* Shuffling Background Images */}
      <div className="absolute inset-0 md:inset-y-[10%] md:h-[80%] overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`hero-image absolute inset-0 transition-all duration-1000 ease-in-out scale-[1.03] ${
              index === currentImageIndex ? "opacity-80 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-transparent to-stone-950/80"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-950/60"></div>
          </div>
        ))}
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-amber-500 w-8" : "bg-amber-500/30 hover:bg-amber-500/60"
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Horizontal Lines - Luxury Detail */}
      <div className="absolute top-0 left-0 right-0 h-px bg-amber-800/30 z-20"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-amber-800/30 z-20"></div>

      {/* Hero Content - Minimalist Luxury Approach */}
      <div className="relative h-full flex flex-col items-center justify-center px-6 sm:px-10 z-20">
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
            <Button
              className="bg-transparent hover:bg-gray-100 text-white hover:text-black border border-gray-100 px-10 py-6 rounded-none text-sm uppercase tracking-widest transition-all duration-300 hover:border-transparent"
              onClick={scrollToContent}
            >
              Get Started Now
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
