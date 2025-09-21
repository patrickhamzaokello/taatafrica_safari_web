'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { subscribeToNewsletter } from "@/app/actions/newsletter";
import { useActionState } from "react";

const initialState = {
  success: false,
  error: null,
};

export function Footer() {
  const [state, formAction] = useActionState(subscribeToNewsletter, initialState);

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
                'Featured', 'Experiences', 'Testimonies', 'Charity', 'About', 'Contact'
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
              <p>Entebbe</p>
              <p>Uganda, East Africa</p>
              <p className="pt-2">
                <a
                  href="tel:+256766274001"
                  className="hover:text-amber-400 transition-colors"
                >
                  +256 (0) 766 274 001
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@tataafricasafaris.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  info@tataafricasafaris.com
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
            <form action={formAction} className="space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="bg-stone-800 border-stone-700 text-white placeholder:text-gray-400 focus-visible:ring-amber-500"
              />
              {state.error && (
                <p className="text-red-500 text-sm">{state.error}</p>
              )}
              {state.success && (
                <p className="text-green-500 text-sm">Successfully subscribed!</p>
              )}
              <Button 
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-stone-800 pt-10 pb-6">
          <div className="flex flex-col items-center justify-center gap-6">
            <h2 className="text-2xl md:text-3xl font-serif text-center">
              <span className="text-amber-500">#</span>tataafricasafaris
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  icon: <FaYoutube size={22} />,
                  label: "YouTube",
                  href: "https://www.youtube.com/tataafricasafaris",
                },
                {
                  icon: <FaTiktok size={22} />,
                  label: "TikTok",
                  href: "https://www.tiktok.com/tataafricasafaris",
                },
                {
                  icon: <FaInstagram size={22} />,
                  label: "Instagram",
                  href: "https://www.instagram.com/tataafricasafaris",
                },
                {
                  icon: <FaMeta size={22} />,
                  label: "Facebook",
                  href: "https://www.facebook.com/tataafricasafaris",
                },
                {
                  icon: <FaXTwitter size={22} />,
                  label: "Twitter",
                  href: "https://www.twitter.com/tataafricasafaris",
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
            &copy; {new Date().getFullYear()} Tata Africa Safaris. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
