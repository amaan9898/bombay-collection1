"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, Search, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG, buildWhatsAppLink } from "@/config/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Visit Us" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-maroon-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-display font-bold text-sm">BC</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className={cn("font-display font-bold text-lg leading-none transition-colors", scrolled ? "text-charcoal-500" : "text-charcoal-500")}>
                Bombay
              </span>
              <span className="font-body text-xs tracking-[0.2em] text-beige-500 uppercase">Collection</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-charcoal-500 hover:text-maroon-500 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon-500 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/shop" className="p-2 rounded-full hover:bg-maroon-50 transition-colors text-charcoal-500 hover:text-maroon-500">
              <Search size={20} />
            </Link>
            <a
              href={buildWhatsAppLink("Hi! I'd like to know more about Bombay Collection.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2 text-xs"
            >
              <Phone size={14} />
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-charcoal-500"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-beige-100 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-base font-medium text-charcoal-500 hover:text-maroon-500 py-2 border-b border-beige-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={buildWhatsAppLink("Hi! I'd like to know more about Bombay Collection.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-2"
            >
              Order on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
