import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the best time to go on a safari?",
    answer:
      "Peak Safari Seasons in Uganda: • June to September (main dry season): Best for game drives, gorilla trekking, and chimpanzee tracking — wildlife gathers around water sources, and trails are dry and accessible. • December to February (short dry season): Also a good time for safaris and primate trekking, with fewer crowds than the mid-year months. Why Dry Seasons Are Ideal: • Easier wildlife spotting as animals gather around rivers and watering holes. • Roads and trekking trails are more accessible and less muddy. • Comfortable temperatures with lower humidity. Rainy Seasons to Avoid (if you prefer dry conditions): • March to May and October to November — lush and beautiful, but heavy rains can disrupt travel and make trekking slippery. That said, Uganda is a year-round destination — especially for birdwatching and lush landscape lovers",
  },
  {
    question: "What should I pack for a safari?",
    answer:
      "Clothing (Light & Neutral Colors): • Lightweight, breathable shirts (long & short sleeve) • Zip-off trousers or safari pants • A warm fleece or jacket (it gets chilly in the mornings/evenings) • A wide-brimmed hat or cap • A lightweight rain jacket (especially for gorilla trekking or in rainy seasons) • Comfortable walking shoes or boots • Flip-flops or sandals for camp/lodge • Swimsuit (many lodges have pools). Safari Essentials: • Sunglasses with UV protection • Sunscreen & lip balm (high SPF) • Insect repellent (DEET-based for mosquitos) • Refillable water bottle • Binoculars (for game viewing) • Flashlight or headlamp • Daypack or small backpack • Travel adaptor (Uganda uses UK-style plugs). Health & Personal Items: • Prescription medications • Basic first aid kit • Wet wipes and hand sanitizer • Personal toiletries (some lodges provide basics) • Malaria prophylaxis (ask your doctor before travel). For Gorilla/Chimp Trekking: • Gardening gloves (for gripping plants) • Gaiters or long socks (for tucking into trousers) • Sturdy hiking shoes • Waterproof backpack cover. Documents: • Passport & visa • Travel insurance info • Copies of travel documents (digital & paper) • Vaccination certificate (Yellow Fever is required).",
  },
  {
    question: "Are safaris safe for children?",
    answer:
      "Yes — safaris are safe and unforgettable for children when planned right. At Tata Africa Safaris, we design family-friendly trips with expert guides, child-appropriate lodges, and flexible schedules. While activities like gorilla trekking have age limits (15+), game drives and nature walks can be tailored for all ages. Safety, comfort, and fun come first — for every member of your family.",
  },
  {
    question: "How close will I get to the animals?",
    answer:
      "Very close — but always safe. On game drives, you’ll often see wildlife just a few meters away, especially lions, elephants, giraffes, and more. Our expert guides know how to approach animals respectfully without disturbing them. During gorilla or chimpanzee trekking, you’ll get within 7 meters (about 21 feet) — close enough for incredible photos and unforgettable moments, while keeping a safe distance for both you and the animals.",
  },
  {
    question: "How far in advance should I book my safari?",
    answer:
      "We recommend booking your safari 6 to 12 months in advance, especially if you’re planning to travel during peak seasons (June–September or December–February). This ensures you get the best lodges, permits (like gorilla trekking), and personalized planning. Last-minute trips are possible, but availability may be limited — so the earlier, the better!",
  },
  {
    question: "What types of accommodation are available?",
    answer:
      "We offer a range of accommodations from luxury lodges with premium amenities to authentic tented camps that provide a more immersive experience, all carefully selected for comfort and optimal wildlife viewing.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="italic text-amber-500 text-lg mb-2">Have Questions?</p>
          <h2 className="text-3xl font-serif mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-stone-800 overflow-hidden">
                <AccordionTrigger className="py-4 text-left font-serif text-lg hover:text-amber-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-800 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

         
        </div>
      </div>
    </section>
  )
}

