"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      setIsHidden(windowHeight + scrollY >= documentHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHidden ? "-translate-y-full" : "translate-y-0"
        } ${isScrolled ? "bg-white/85 py-4 shadow-sm" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src={isScrolled ? "/BLACK.png" : "/WHITE.png"}
              alt="Parisian Beauty Spa"
              width={200}
              height={50}
              className="h-8 sm:h-10 w-auto transition-opacity duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {["About Us", "Our Services", "Treatments", "Gallery"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`text-sm font-light tracking-wide transition-colors ${isScrolled
                  ? "text-black/90 hover:text-black"
                  : "text-white/90 hover:text-white"
                  }`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {item}
              </Link>
            ))}
          </div>

          <Link
            href="#booking"
            className={`hidden lg:inline-block border px-6 xl:px-8 py-3 transition-colors duration-300 text-sm ${isScrolled
              ? "border-black text-black hover:bg-black hover:text-white"
              : "border-white text-white hover:bg-white hover:text-black"
              }`}
          >
            BOOK AN APPOINTMENT
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 -mr-2 transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`lg:hidden mt-4 p-6 rounded-2xl backdrop-blur-xl transition-colors duration-300 shadow-lg ${isScrolled
            ? "bg-white/95 border border-black/10"
            : "bg-black/95 border border-white/10"
            }`}>
            <div className="flex flex-col gap-6">
              {["About Us", "Our Services", "Treatments", "Gallery"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${isScrolled ? "text-black/90" : "text-white/90"
                    }`}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="#booking"
                onClick={() => setIsOpen(false)}
                className={`inline-block w-full text-center border px-8 py-3 transition-colors duration-300 text-sm ${isScrolled
                  ? "border-black text-black hover:bg-black hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-black"
                  }`}
              >
                BOOK AN APPOINTMENT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
