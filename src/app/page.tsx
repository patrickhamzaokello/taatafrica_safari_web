import Image from "next/image";
import { Compass, MapPin, Phone, Mail, Camera, Shield, Coffee, Star, Calendar, Users, Map, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80"
          alt="African Safari Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-4">
          <p className="cursive text-amber-400 text-3xl mb-4 animate-fade-in-up">Discover Africa</p>
          <h1 className="text-6xl md:text-7xl font-serif text-white mb-6 animate-fade-in-up animate-delay-100">
            Wild Beauty & Rich Culture
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Immerse yourself in authentic African safaris and cultural experiences
          </p>
          <button className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg hover:bg-amber-700 transition-all hover:scale-105 animate-fade-in-up animate-delay-300">
            Begin Your African Journey
          </button>
        </div>
      </div>
    </div>

    {/* Cultural Highlights */}
    <section className="py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="cursive text-amber-600 text-2xl mb-2 animate-fade-in-up">Experience Africa</p>
          <h2 className="text-4xl font-serif mb-4">Where Wildlife Meets Culture</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Star, title: "Big Five Sightings", desc: "Witness Africa's most magnificent wildlife" },
            { icon: Heart, title: "Cultural Immersion", desc: "Connect with local Maasai communities" },
            { icon: Users, title: "Small Groups", desc: "Intimate safari experiences" },
            { icon: Map, title: "Remote Locations", desc: "Access to pristine wilderness" }
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <item.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-serif mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Wildlife Gallery */}
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="cursive text-amber-600 text-2xl mb-2">Wildlife Gallery</p>
          <h2 className="text-4xl font-serif mb-8">Capture Nature's Finest Moments</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&q=80"
              alt="Lions"
              className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-serif text-xl">Majestic Lions</h3>
                <p className="text-sm">Serengeti Plains</p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80"
              alt="Elephants"
              className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-serif text-xl">Gentle Giants</h3>
                <p className="text-sm">Amboseli National Park</p>
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80"
              alt="Giraffes"
              className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-serif text-xl">Graceful Giraffes</h3>
                <p className="text-sm">Maasai Mara</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Cultural Experiences */}
    <section className="py-20 px-4 md:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <p className="cursive text-amber-600 text-2xl mb-2">Cultural Heritage</p>
            <h2 className="text-4xl font-serif mb-6">Connect with African Traditions</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Immerse yourself in the rich tapestry of African culture. Our journeys go beyond wildlife viewing to offer authentic 
              interactions with local communities. Experience traditional ceremonies, learn ancient customs, and share moments with 
              the Maasai people who have called these lands home for generations.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3 hover:text-amber-600 transition-colors">
                <Shield className="w-6 h-6" />
                <span>Village Visits</span>
              </div>
              <div className="flex items-center gap-3 hover:text-amber-600 transition-colors">
                <Coffee className="w-6 h-6" />
                <span>Local Cuisine</span>
              </div>
              <div className="flex items-center gap-3 hover:text-amber-600 transition-colors">
                <Camera className="w-6 h-6" />
                <span>Cultural Shows</span>
              </div>
              <div className="flex items-center gap-3 hover:text-amber-600 transition-colors">
                <Compass className="w-6 h-6" />
                <span>Tribal Markets</span>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-in-right">
            <img
              src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80"
              alt="Maasai Culture"
              className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="cursive text-amber-600 text-xl">Authentic Experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Safari Packages */}
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="cursive text-amber-600 text-2xl mb-2">Choose Your Adventure</p>
          <h2 className="text-4xl font-serif">Curated Safari Experiences</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Wildlife Explorer",
              price: "5,900",
              image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80",
              features: ["7 Days Big Five Safari", "Luxury Lodge Stay", "Professional Guide", "All-Inclusive"]
            },
            {
              title: "Cultural Immersion",
              price: "8,500",
              image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80",
              features: ["10 Days Combined Tour", "Maasai Village Stay", "Traditional Ceremonies", "Authentic Cuisine"]
            },
            {
              title: "Ultimate Africa",
              price: "12,900",
              image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80",
              features: ["14 Days Exclusive Tour", "Private Air Transfers", "Cultural Workshops", "Premium Lodging"]
            }
          ].map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-4">{pkg.title}</h3>
                <p className="text-3xl text-amber-600 mb-6">${pkg.price}</p>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-amber-600 text-white py-3 rounded hover:bg-amber-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section className="py-20 px-4 md:px-8 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="cursive text-amber-600 text-2xl mb-2">Get in Touch</p>
            <h2 className="text-4xl font-serif mb-6">Start Your African Journey</h2>
            <p className="text-gray-600 mb-8">
              Let us help you plan your perfect African adventure. Our team of local experts is ready to create 
              your dream safari experience.
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

    {/* Footer */}
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-serif mb-4">African Safari Adventures</h3>
          <p className="cursive text-amber-400 text-xl">Where Wildlife Meets Culture</p>
        </div>
      </div>
    </footer>
  </div>
  );
}
