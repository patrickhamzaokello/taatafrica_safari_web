
export function BlogSection() {
  return (
   <section className="py-20 px-4 md:px-8 bg-stone-50">
   <div className="max-w-7xl mx-auto">
     <div className="text-center mb-12">
       <p className="cursive text-amber-600 text-2xl mb-2">
         Latest Updates
       </p>
       <h2 className="text-4xl font-serif mb-8">Travel Tips & Stories</h2>
     </div>
     <div className="grid md:grid-cols-3 gap-8">
       {[
         {
           title: "Top 5 Safari Destinations in Uganda",
           image:
             "https://images.unsplash.com/photo-1553521306-9728831d2983?auto=format&fit=crop&q=80",
           desc: "Discover the best places to witness Uganda's wildlife.",
         },
         {
           title: "How to Prepare for Your First Safari",
           image:
             "https://images.unsplash.com/photo-1535530124635-c5487dfad499?auto=format&fit=crop&q=80",
           desc: "Essential tips for a seamless safari experience.",
         },
         {
           title: "The Ugandan Culture: A Rich Heritage",
           image:
             "https://images.unsplash.com/photo-1614528767034-70de9fe166e0?auto=format&fit=crop&q=80",
           desc: "Learn about the traditions of the Ugandan people.",
         },
       ].map((post, index) => (
         <div
           key={index}
           className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
         >
           <img
             src={post.image}
             alt={post.title}
             className="w-full h-48 object-cover"
           />
           <div className="p-6">
             <h3 className="text-xl font-serif mb-2">{post.title}</h3>
             <p className="text-gray-600 mb-4">{post.desc}</p>
             <a href="#" className="text-amber-600 hover:underline">
               Read More →
             </a>
           </div>
         </div>
       ))}
     </div>
   </div>
 </section>
  );
}
