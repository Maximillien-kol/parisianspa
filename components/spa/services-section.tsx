import Image from "next/image";
import Link from "next/link";


const services = [
  {
    category: "Hair Spa",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074",
    description: "Indulge in a rejuvenating journey with our hair treatments featuring luxurious care and revitalization.",
    treatments: [
      { name: "Soft Mind", price: "$45", duration: "30 minutes" },
      { name: "Full Mind", price: "$75", duration: "60 minutes" },
      { name: "Treatment", price: "$120", duration: "90 minutes" },
    ],
  },
  {
    category: "Body Massage",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2128",
    description: "Relax and recharge with our body massage combining soothing touch and gentle care for your wellness.",
    treatments: [
      { name: "Syndrome Mini", price: "$55", duration: "30 minutes" },
      { name: "Syndrome Full", price: "$95", duration: "60 minutes" },
      { name: "Full Body", price: "$150", duration: "90 minutes" },
    ],
  },
  {
    category: "Face Massage",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070",
    description: "A refreshing treatment that enhances your natural glow combining soothing techniques for radiant skin.",
    treatments: [
      { name: "Glowing Skin", price: "$40", duration: "30 minutes" },
      { name: "Face Lifting", price: "$70", duration: "45 minutes" },
      { name: "Face Combo", price: "$110", duration: "60 minutes" },
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Our Soft Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover true relaxation at calm moments. Enjoy our head, body, and face treatments crafted to nurture your body, mind, and soul.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {services.map((service) => (
            <div key={service.category} className="group">
              {/* Image */}
              <div className="relative aspect-[4/3] mb-6 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.category}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {service.category}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Treatments List */}
                <div className="space-y-3 border-t border-border pt-4">
                  {service.treatments.map((treatment) => (
                    <div
                      key={treatment.name}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-foreground font-medium">
                          {treatment.name}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {treatment.duration}
                        </span>
                      </div>
                      <span className="text-foreground">{treatment.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="#booking"
                className="inline-block mt-6 w-full text-center border border-black bg-transparent hover:bg-black hover:text-white px-8 py-3 transition-colors duration-300 text-sm"
              >
                BOOK NOW
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
