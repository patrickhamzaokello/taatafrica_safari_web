import {
    MapPin,
    Phone,
    Mail,
  } from "lucide-react";

export function ContactSection() {
    return (
        <section className="py-20 px-4 md:px-8 bg-stone-50">
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
                  <span>+254 (0) 123-4567</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-amber-600" />
                  <span>safari@africanluxury.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-amber-600" />
                  <span>Karen Road, Nairobi, Kenya</span>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your dream safari"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                ></textarea>
              </div>
              <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    )
}