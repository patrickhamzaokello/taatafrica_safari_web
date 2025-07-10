"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

// Impact statistics
const impactStats = [
  { value: 250, label: "Girls Educated" },
  { value: 12, label: "Schools Supported" },
  { value: 5, label: "Communities Impacted" },
];

export function CharitySection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe elements
    if (sectionRef.current) {
      const elements =
        sectionRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

 

  return (
    <section
      ref={sectionRef}
      className="py-28 bg-stone-100 relative overflow-hidden"
      id="Charity"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 animate-on-scroll opacity-0">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-8 bg-amber-600"></div>
              <p className="mx-4 text-amber-600 uppercase tracking-widest text-sm font-medium">
                Our Purpose
              </p>
              <div className="h-px w-8 bg-amber-600"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-stone-900">
              Empowering Through Education
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              A portion of every safari experience funds education for girls in
              local communities.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image Side - Minimalistic Approach */}
            <div className="relative animate-on-scroll opacity-0">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                  We believe that true luxury includes making a meaningful
                  difference. With every safari booked, you contribute to our
                  education initiative that provides opportunities for girls in
                  the communities you'll visit.
                </p>
                <p className="text-stone-700 leading-relaxed">
                  <span className="text-amber-600 font-medium">
                    5% of every booking
                  </span>{" "}
                  is directed to scholarships, learning materials, and school
                  infrastructure, creating lasting impact beyond your journey.
                </p>
              </div>

              

              {/* Testimonial - Minimalist Quote */}
              <div className="animate-on-scroll opacity-0">
                <p className="text-lg italic text-stone-600 mb-4">
                  "The scholarship changed my life. Now I can pursue my dream of
                  becoming a wildlife conservationist."
                </p>
                <p className="text-amber-600 font-medium">
                  — Amara, Scholarship Recipient
                </p>
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
  );
}
