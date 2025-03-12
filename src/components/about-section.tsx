"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export function AboutSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="py-24 md:py-32 bg-stone-950 relative overflow-hidden"
    >
      {/* Background Pattern - Subtle Luxury Detail */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C2963D' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Horizontal Line - Luxury Detail */}
        <div className="h-px w-full bg-amber-800/30 mb-16"></div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Logo and Visual Elements */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto md:mx-0">
              {/* Logo Container with Border */}
              <div className="absolute inset-0 border border-amber-700/20 p-12">
                <div className="h-full w-full flex items-center justify-center bg-stone-950/90  -z-11">
                  {/* Safari Logo */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center h-30 w-30 mb-6 relative">
                      <div className="absolute inset-0 rounded-full border border-amber-600/30"></div>
                      <Image
                        src="/tatafrica_logo.svg"
                        alt="Uganda Safari Logo"
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-serif text-3xl text-white tracking-wider">
                      TATA <span className="text-amber-500">AFRICA SAFARIS</span>
                    </h3>
                    <p className="text-amber-600/70 text-xs uppercase tracking-widest mt-2">
                      Est. 2024
                    </p>
                  </div>
                </div>

                {/* Background Image */}
                <Image
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2036&auto=format&fit=crop"
                  alt="Safari Experience"
                  fill
                  className="object-cover object-center -z-10 opacity-30"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Business Details */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              isInView ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Section Title */}
            <div className="flex items-center">
              <div className="h-px w-12 bg-amber-600"></div>
              <p className="mx-4 text-amber-600 uppercase tracking-widest text-xs font-medium">
                Our Story
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-white font-light leading-tight">
              Crafting <span className="text-amber-400">Unforgettable</span>{" "}
              Ugandan Adventures Since 2024
            </h2>

            <p className="text-stone-300 leading-relaxed">
            Tata Africa Safaris was founded with a vision to showcase the
              breathtaking beauty and rich cultural heritage of Uganda through
              immersive, sustainable luxury experiences. Our intimate knowledge
              of the region allows us to create journeys that reveal the
              country's hidden treasures.
            </p>

            <p className="text-stone-300 leading-relaxed">
              We believe in responsible tourism that preserves Uganda's natural
              wonders while supporting local communities. Each safari is
              meticulously designed to provide unprecedented access to wildlife
              and authentic cultural encounters without compromising on comfort.
            </p>

            {/* Key Facts Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l border-amber-800/30 pl-4">
                <p className="text-amber-500 font-serif text-2xl">12+</p>
                <p className="text-stone-400 text-sm mt-1">
                  Years of Excellence
                </p>
              </div>
              <div className="border-l border-amber-800/30 pl-4">
                <p className="text-amber-500 font-serif text-2xl">10</p>
                <p className="text-stone-400 text-sm mt-1">
                  National Parks Explored
                </p>
              </div>
              <div className="border-l border-amber-800/30 pl-4">
                <p className="text-amber-500 font-serif text-2xl">5000+</p>
                <p className="text-stone-400 text-sm mt-1">
                  Satisfied Adventurers
                </p>
              </div>
              <div className="border-l border-amber-800/30 pl-4">
                <p className="text-amber-500 font-serif text-2xl">24</p>
                <p className="text-stone-400 text-sm mt-1">
                  Expert Safari Guides
                </p>
              </div>
            </div>

            {/* Signature */}
            <div className="pt-4">
              <Image
                src="/signature.png"
                alt="Director's Signature"
                width={160}
                height={60}
                className="object-contain opacity-70"
              />
              <p className="text-stone-400 text-sm mt-2">
               Hannifah Namayega, Founder
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Line - Luxury Detail */}
        <div className="h-px w-full bg-amber-800/30 mt-16"></div>
      </div>
    </section>
  );
}
