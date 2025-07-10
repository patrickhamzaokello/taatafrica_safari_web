export function TestimonialsSection () {
    return (
        <section id="Testimonies" className="py-20 px-4 md:px-8 bg-stone-50">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-12">
                    <p className="cursive text-amber-600 text-2xl mb-2">
                      What Our Guests Say
                    </p>
                    <h2 className="text-4xl font-serif mb-8">Customer Testimonials</h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        name: "Sarah & James",
                        review:
                          "An unforgettable experience! The guides were knowledgeable, and the lodges were luxurious. We saw the Big Five up close!",
                        location: "New York, USA",
                      },
                      {
                        name: "Emma Johnson",
                        review:
                          "The cultural immersion was incredible. We learned so much about Ugandan traditions and felt truly welcomed.",
                        location: "London, UK",
                      },
                      {
                        name: "Carlos & Maria",
                        review:
                          "The Ultimate Africa package was worth every penny. Private transfers and premium lodging made it seamless.",
                        location: "Madrid, Spain",
                      },
                    ].map((testimonial, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-600 mb-4 italic">
                          "{testimonial.review}"
                        </p>
                        <p className="font-serif text-lg">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
    )
}