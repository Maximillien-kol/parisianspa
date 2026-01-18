import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {/* Connect With Us */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6">Connect With Us</h3>
            <div className="space-y-4 text-primary-foreground/80 text-sm">
              <div>
                <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-1">Address</p>
                <p>KG 357 N•6 Street</p>
                <p>KIBAGABAGA, KIGALI CITY</p>
              </div>
              <div>
                <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-1">Opening Hours</p>
                <p>MON - SUN: 9:00 AM - 21:00</p>
              </div>
              <div>
                <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-1">Phone</p>
                <p>+250 795 033 116</p>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6">Follow Us</h3>
            <div className="space-y-3">
              {["Instagram", "Facebook", "Pinterest", "TikTok"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {social}
                </Link>
              ))}
            </div>
          </div>

          {/* Book An Appointment */}
          <div id="booking">
            <h3 className="text-sm tracking-widest uppercase mb-6">BOOK AN APPOINTMENT</h3>
            <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
              Your well-being starts here. Take the first step towards serenity with Persian Beauty. Let us create the perfect moment just for you.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 border border-primary-foreground text-primary-foreground text-xs tracking-widest uppercase hover:bg-primary-foreground hover:text-primary transition-colors"
            >
              BOOK AN APPOINTMENT

            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-xs">
              2026 Persian Beauty Spa. All Rights Reserved.
            </p>
            <p className="text-primary-foreground/60 text-xs">
              Website designed with care
            </p>
          </div>
        </div>
      </div>

      {/* Large Brand Text */}
      <div className="overflow-hidden py-8">
        <p className="font-serif text-2xl md:text-6xl lg:text-9xl text-primary-foreground/10 text-center tracking-widest whitespace-nowrap">
          PARISIAN BEAUTY SPA
        </p>
      </div>
    </footer>
  );
}
