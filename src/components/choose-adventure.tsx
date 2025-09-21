export function SafariPackages(){
    return (
        <section id="Experiences" className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-16">
                    <p className="cursive text-amber-600 text-2xl mb-2">
                      Choose Your Adventure
                    </p>
                    <h2 className="text-4xl font-serif">Curated Safari Experiences</h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        title: "Wildlife Explorer",
                        image:
                          "https://images.unsplash.com/photo-1557446125-1407c9264ff0?auto=format&fit=crop&q=80",
                        features: [
                          "7 Days Big Five Safari",
                          "Luxury Lodge Stay",
                          "Professional Guide",
                          "All-Inclusive",
                        ],
                      },
                      {
                        title: "Cultural Immersion",
                        image:
                          "https://plus.unsplash.com/premium_photo-1667688835293-4bbff8107069?auto=format&fit=crop&q=80",
                        features: [
                          "10 Days Combined Tour",
                          "Maasai Village Stay",
                          "Traditional Ceremonies",
                          "Authentic Cuisine",
                        ],
                      },
                      {
                        title: "Ultimate Africa",
                        image:
                          "https://images.unsplash.com/photo-1536328105599-b20961f76903?auto=format&fit=crop&q=80",
                        features: [
                          "14 Days Exclusive Tour",
                          "Private Air Transfers",
                          "Cultural Workshops",
                          "Premium Lodging",
                        ],
                      },
                    ].map((pkg, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                      >
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-2xl font-serif mb-4">{pkg.title}</h3>
                          <ul className="space-y-3">
                            {pkg.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                      
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
    )
}