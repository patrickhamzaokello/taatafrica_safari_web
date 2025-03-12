import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the best time to go on a safari?",
    answer:
      "The dry season (June to October) is ideal for wildlife viewing as animals gather around water sources. The wet season (November to May) offers lush landscapes and newborn wildlife with fewer tourists.",
  },
  {
    question: "What should I pack for a safari?",
    answer:
      "Essential items include neutral-colored clothing, lightweight long-sleeved shirts and pants, a wide-brimmed hat, sturdy walking shoes, sunscreen, insect repellent, binoculars, and a camera with extra batteries.",
  },
  {
    question: "Are safaris safe for children?",
    answer:
      "Yes, we offer family-friendly safaris with experienced guides trained to work with children. These safaris feature age-appropriate activities, flexible schedules, and accommodations that cater to families.",
  },
  {
    question: "How close will I get to the animals?",
    answer:
      "Our experienced guides will bring you close enough to observe wildlife comfortably and safely, typically within 10-30 meters of most animals while maintaining a respectful distance that doesn't disturb their natural behavior.",
  },
  {
    question: "How far in advance should I book my safari?",
    answer:
      "We recommend booking your safari 6-12 months in advance, especially if you're planning to travel during peak season (June to September) or if you have specific lodges in mind.",
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

