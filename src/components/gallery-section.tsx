export function GallerySection() {
    return (
        <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="cursive text-amber-600 text-2xl mb-2">
              Wildlife Gallery
            </p>
            <h2 className="text-4xl font-serif mb-8">
              Capture Nature's Finest Moments
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1667630724436-0b2ddc439ba5?auto=format&fit=crop&q=80"
                alt="Murchison Falls National Park Uganda, Masindi, Uganda"
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif text-xl">
                  Wildlife Sunset</h3>
                  <p className="text-sm">Murchison Falls National Park</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1573075318355-5a639a050b4e?auto=format&fit=crop&q=80"
                alt="Fishing"
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif text-xl">Fishing</h3>
                  <p className="text-sm">Lake Victoria</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1516051713211-b616b2fcf955?auto=format&fit=crop&q=80"
                alt="Giraffes"
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif text-xl">Graceful Giraffes</h3>
                  <p className="text-sm">Murchison Falls National Park</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}