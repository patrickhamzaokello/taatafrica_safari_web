import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">African Safari Adventures</h3>
            <p className="italic text-amber-400 text-lg">
              Where Wildlife Meets Culture
            </p>
            <p className="text-gray-300 text-sm max-w-xs">
              Experience the magic of Africa with our curated safari adventures,
              connecting you with nature and local cultures.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "Destinations",
                "Safari Packages",
                "Wildlife Gallery",
                "Travel Tips",
                "About Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 flex items-center gap-1"
                  >
                    <span className="text-amber-500">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Contact Us</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Safari Road, Nairobi</p>
              <p>Kenya, East Africa</p>
              <p className="pt-2">
                <a
                  href="tel:+254123456789"
                  className="hover:text-amber-400 transition-colors"
                >
                  +254 123 456 789
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@africansafari.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  info@africansafari.com
                </a>
              </p>
            </address>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Stay Updated</h4>
            <p className="text-gray-300 text-sm">
              Subscribe for exclusive offers and travel tips.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-stone-800 border-stone-700 text-white placeholder:text-gray-400 focus-visible:ring-amber-500"
              />
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-stone-800 pt-10 pb-6">
          <div className="flex flex-col items-center justify-center gap-6">
            <h2 className="text-2xl md:text-3xl font-serif text-center">
              <span className="text-amber-500">#</span>AfricanSafariAdventures
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  icon: <FaYoutube size={22} />,
                  label: "YouTube",
                  href: "https://www.youtube.com",
                },
                {
                  icon: <FaTiktok size={22} />,
                  label: "TikTok",
                  href: "https://www.tiktok.com",
                },
                {
                  icon: <FaInstagram size={22} />,
                  label: "Instagram",
                  href: "https://www.instagram.com",
                },
                {
                  icon: <FaMeta size={22} />,
                  label: "Facebook",
                  href: "https://www.facebook.com",
                },
                {
                  icon: <FaXTwitter size={22} />,
                  label: "Twitter",
                  href: "https://www.twitter.com",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.label}`}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-800 text-white hover:bg-amber-600 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-stone-800">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} African Safari Adventures. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
