import {
    Compass,
    Camera,
    Shield,
    Coffee,
  } from "lucide-react";

export function CulturalExperience() {
    return (
        <section id="Cult_Experiences" className="py-20 px-4 md:px-8 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="cursive text-amber-600 text-2xl mb-2">
                Cultural Heritage
              </p>
              <h2 className="text-4xl font-serif mb-6">
                Connect with African Traditions
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Immerse yourself in the rich tapestry of Ugandan culture. Our
                journeys go beyond wildlife viewing to offer authentic
                interactions with local communities. Experience traditional
                ceremonies, learn ancient customs, and share moments with the
                Uganda people who have called these lands home for generations.
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
                src="https://images.unsplash.com/photo-1537706388178-55c10865b82e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Ugandan Culture"
                className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="cursive text-amber-600 text-xl">
                  Authentic Experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}