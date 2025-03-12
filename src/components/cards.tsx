import { getAllSafariPackages } from "@/data-layer/landing_page";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRef } from "react";

const HomePage = async () => {
  const safariPackages = await getAllSafariPackages();

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]); // Define cardRefs

  return (
    <div>
      {safariPackages.map((safari, index) => (
        <div
          key={safari.id}
          ref={(el) => {
            cardRefs.current[index] = el;
          }}
          className="bg-white shadow-sm border border-stone-200 group hover:shadow-md transition-shadow duration-300 opacity-0"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={Array.isArray(safari.imagePaths) && safari.imagePaths.length > 0 && typeof safari.imagePaths[0] === 'string' ? safari.imagePaths[0] : "/placeholder.svg"}
              alt={safari.packageName}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 bg-amber-600 text-white px-3 py-1 text-sm font-medium">
              From ${safari.pricePerPerson}
            </div>
          </div>

          <div className="p-6 space-y-4">
            <h3 className="text-2xl font-serif text-stone-900 group-hover:text-amber-600 transition-colors duration-300">
              {safari.packageName}
            </h3>

            <p className="text-stone-600">{safari.description}</p>

            <div className="grid grid-cols-2 gap-3 text-sm text-stone-500">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-amber-600" />
                <span>{safari.durationDays}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-amber-600" />
                <span>{safari.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-amber-600" />
                <span>{safari.maxGroupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-amber-600" />
                <span>{safari.season}</span>
              </div>
            </div>

            <Button className="w-full bg-stone-800 hover:bg-amber-600 text-white transition-colors duration-300 rounded-none mt-2">
              Inquire
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

}

export default HomePage
