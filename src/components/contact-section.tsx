'use client'

import {
    MapPin,
    Phone,
    Mail,
  } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";
import { useActionState } from "react";

const initialState = {
  success: false,
  error: null,
};

export function ContactSection() {
    const [state, formAction] = useActionState(submitContactForm, initialState);

    return (
        <section id="Contact" className="py-20 px-4 md:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="cursive text-amber-600 text-2xl mb-2">
                Get in Touch
              </p>
              <h2 className="text-4xl font-serif mb-6">
                Start Your African Journey
              </h2>
              <p className="text-gray-600 mb-8">
                Let us help you plan your perfect African adventure. Our team of
                local experts is ready to create your dream safari experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="text-amber-600" />
                  <span>+256 (0) 766 274 001</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-amber-600" />
                  <span>info@tataafricasafaris.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-amber-600" />
                  <span>Kampala, Uganda</span>
                </div>
              </div>
            </div>
            <form action={formAction} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                ></textarea>
              </div>
              {state.error && (
                <p className="text-red-500 text-sm">{state.error}</p>
              )}
              {state.success && (
                <p className="text-green-500 text-sm">Message sent successfully!</p>
              )}
              <button 
                type="submit"
                className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    )
}