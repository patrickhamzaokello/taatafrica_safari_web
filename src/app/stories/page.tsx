"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Calendar, User, Tag, Share2 } from "lucide-react"

export default function BlogDetailsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="bg-stone-950 min-h-screen">
      {/* Navigation Header - Simplified version */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-950/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="flex items-center justify-between h-20 border-b border-amber-800/20">
            <div className="flex items-center">
              <span className="text-white font-serif text-xl tracking-wider">UGANDA<span className="text-amber-500">SAFARI</span></span>
            </div>
            <nav className="hidden md:flex">
              <ul className="flex space-x-8">
                {['Home', 'Safaris', 'Blog', 'Gallery', 'About', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-stone-300 hover:text-amber-500 text-sm uppercase tracking-widest transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <main className={`pt-28 pb-20 transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-6 sm:px-10 mb-8">
          <Link href="/blog" className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors duration-300 text-sm uppercase tracking-widest">
            <ChevronLeft size={16} className="mr-2" />
            Back to Articles
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[21/9] max-w-6xl mx-auto mb-16 overflow-hidden px-6 sm:px-10">
          <div className="w-full h-full relative">
            <Image
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2036&auto=format&fit=crop"
              alt="Pride of lions resting in the savanna during golden hour"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto px-6 sm:px-10 mb-12">
          {/* Category Tag */}
          <div className="mb-6">
            <span className="bg-amber-900/30 text-amber-500 text-xs uppercase tracking-widest py-1 px-3 font-medium">
              Wildlife Encounters
            </span>
          </div>
          
          {/* Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-8">
            The Majestic Lions of Queen Elizabeth National Park
          </h1>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center text-stone-400 text-sm space-x-6">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-amber-600" />
              <span>October 15, 2024</span>
            </div>
            <div className="flex items-center">
              <User size={16} className="mr-2 text-amber-600" />
              <span>By Jonathan Wambua</span>
            </div>
            <div className="flex items-center">
              <Tag size={16} className="mr-2 text-amber-600" />
              <span>Lions, Safari, Uganda</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-6 sm:px-10">
          {/* Article Body */}
          <div className="prose prose-lg prose-invert prose-amber mx-auto">
            <p className="text-xl text-stone-300 leading-relaxed mb-8">
              Encountering the majestic lion pride in Queen Elizabeth National Park offers a glimpse into the intricate social dynamics of Africa's most iconic predator. As the golden light of dawn breaks over the savanna, these magnificent creatures reveal behaviors rarely witnessed by the casual observer.
            </p>
            
            <p className="text-stone-300 leading-relaxed mb-6">
              The Ishasha sector of Queen Elizabeth National Park is renowned for its unique tree-climbing lions, a behavior not commonly associated with these powerful felines. Our expert guides know precisely where to find these elusive cats as they drape themselves over fig tree branches, seeking respite from the heat and biting insects that plague the ground below.
            </p>
            
            <h2 className="font-serif text-3xl text-white font-bold mt-12 mb-6">
              Understanding Lion Behavior
            </h2>
            
            <p className="text-stone-300 leading-relaxed mb-6">
              Lions are the only truly social cat species, living in prides that typically consist of related females, their cubs, and a coalition of males who defend the territory. This complex social structure allows them to successfully hunt large prey and protect their young from other predators.
            </p>
            
            <div className="my-12 relative aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?q=80&w=1974&auto=format&fit=crop"
                alt="Male lion roaring in the savanna"
                fill
                className="object-cover object-center"
              />
            </div>
            
            <p className="text-stone-300 leading-relaxed mb-6">
              During our exclusive safari experience, we observed a pride of twelve lions, including four cubs around three months old. The mothers took turns watching over the playful young while others ventured out to hunt. This cooperative breeding strategy significantly increases cub survival rates in the challenging environment of the African savanna.
            </p>
            
            <h2 className="font-serif text-3xl text-white font-bold mt-12 mb-6">
              Conservation Challenges
            </h2>
            
            <p className="text-stone-300 leading-relaxed mb-6">
              Despite their apex predator status, African lion populations have declined by approximately 43% in the last two decades. Habitat loss, human-wildlife conflict, and poaching continue to threaten these magnificent creatures. In Uganda, conservation efforts are focused on maintaining healthy ecosystems and creating buffer zones between protected areas and human settlements.
            </p>
            
            <blockquote className="border-l-4 border-amber-600 pl-6 italic text-stone-300 my-8">
              "To witness a lion in its natural habitat is to understand the true meaning of power and grace. These animals aren't just symbols of Africa's wilderness—they're essential components of the ecosystem, regulating prey populations and maintaining the balance of the savanna."
              <footer className="text-amber-500 mt-2 not-italic text-sm">— Dr. Sarah Nambasa, Wildlife Biologist</footer>
            </blockquote>
            
            <p className="text-stone-300 leading-relaxed mb-6">
              Our commitment to responsible tourism includes supporting local conservation initiatives and educating visitors about the importance of preserving these magnificent creatures for future generations to witness and admire.
            </p>
            
            <h2 className="font-serif text-3xl text-white font-bold mt-12 mb-6">
              The Perfect Time for Lion Sightings
            </h2>
            
            <p className="text-stone-300 leading-relaxed mb-6">
              While lions can be observed year-round in Queen Elizabeth National Park, the dry season (December to February and June to September) offers the best viewing opportunities. During these months, reduced vegetation and concentration of wildlife around water sources significantly increase your chances of witnessing these magnificent predators in action.
            </p>
            
            <p className="text-stone-300 leading-relaxed">
              Our expert guides specialize in tracking lions and can interpret subtle signs that indicate their presence, ensuring an unforgettable encounter with the kings and queens of the African wilderness.
            </p>
          </div>
          
          {/* Author Section */}
          <div className="border-t border-amber-800/20 mt-16 pt-12">
            <div className="flex items-center">
              <div className="relative h-20 w-20 rounded-full overflow-hidden border border-amber-800/30">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                  alt="Jonathan Wambua"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-6">
                <h3 className="text-xl text-white font-serif">Jonathan Wambua</h3>
                <p className="text-stone-400 text-sm mt-1">Wildlife Expert & Senior Safari Guide</p>
                <p className="text-stone-300 text-sm mt-3 max-w-lg">With over 15 years of experience guiding safaris across East Africa, Jonathan specializes in tracking big cats and interpreting animal behavior for our guests.</p>
              </div>
            </div>
          </div>
          
          {/* Share & Tags */}
          <div className="border-t border-amber-800/20 mt-12 pt-12">
            <div className="flex flex-wrap justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h4 className="text-white text-sm uppercase tracking-widest mb-3">Related Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {['Lions', 'Wildlife', 'Queen Elizabeth Park', 'Conservation', 'Uganda'].map((tag, index) => (
                    <a key={index} href="#" className="bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs px-3 py-1 rounded-sm transition-colors duration-300">
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-white text-sm uppercase tracking-widest mb-3">Share Article</h4>
                <div className="flex space-x-4">
                  {['Twitter', 'Facebook', 'LinkedIn', 'Email'].map((platform, index) => (
                    <a key={index} href="#" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">
                      <Share2 size={18} />
                      <span className="sr-only">{platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="max-w-6xl mx-auto px-6 sm:px-10 mt-24">
          <h2 className="font-serif text-3xl text-white font-bold mb-12 text-center">
            Continue Your <span className="text-amber-500">Journey</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Gorilla Trekking: An Intimate Encounter",
                image: "https://images.unsplash.com/photo-1521651201144-634f700b36ef?q=80&w=1974&auto=format&fit=crop",
                category: "Adventure",
                date: "September 28, 2024"
              },
              {
                title: "The Great Migration: Nature's Greatest Spectacle",
                image: "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?q=80&w=1974&auto=format&fit=crop",
                category: "Wildlife",
                date: "October 5, 2024"
              },
              {
                title: "Luxury Under Canvas: Safari Lodges of Uganda",
                image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070&auto=format&fit=crop",
                category: "Accommodation",
                date: "October 10, 2024"
              }
            ].map((article, index) => (
              <article key={index} className="group">
                <a href="#" className="block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-stone-950/30 group-hover:bg-stone-950/20 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-900/80 text-amber-200 text-xs uppercase tracking-widest py-1 px-2 font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center text-stone-400 text-xs mb-2">
                      <Calendar size={14} className="mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="font-serif text-xl text-white font-bold group-hover:text-amber-500 transition-colors duration-300">
                      {article.title}
                    </h3>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>

      </div>
  )

}

