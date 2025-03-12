
import {
    Shield,
    Calendar,
    Users,
    Heart,
  } from "lucide-react";

export function WhyChooseUsSection() {
    return (
        <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
          <p className="cursive text-amber-600 text-xl mb-2">Perfect Match For You</p>
          <h2 className="text-4xl font-serif mb-6 text-stone-900">Why Choose US</h2>
            <p className="max-w-2xl mx-auto text-stone-600">
            Exclusive Experiences, Unmatched Expertise, and a Commitment to Excellence – This is Tata Africa Safaris.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Safety First",
                desc: "Certified guides and secure travel protocols",
              },
              {
                icon: Calendar,
                title: "Flexible Booking",
                desc: "Easy rescheduling and cancellation policies",
              },
              {
                icon: Users,
                title: "Expert Guides",
                desc: "Local guides with decades of experience",
              },
              {
                icon: Heart,
                title: "Sustainable Travel",
                desc: "Eco-friendly practices and community support",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <item.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}