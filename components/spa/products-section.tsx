import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const newsItems = [
  {
    category: "Wellness",
    date: "Mars 15, 2024",
    title: "The Healing Power of Hot Stone Therapy",
    excerpt: "Discover how ancient techniques combined with modern therapy can restore your body's natural balance.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070",
  },
  {
    category: "Lifestyle",
    date: "Mars 10, 2024",
    title: "Creating A Zen Space At Home",
    excerpt: "Simple tips to transform your living environment into a sanctuary of peace and tranquility.",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070",
  },
  {
    category: "New In",
    date: "Mars 01, 2024",
    title: "Introducing Our New Organic Facials",
    excerpt: "Experience the purest ingredients with our newly launched line of organic skin treatments.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070",
  },
];

export function ProductsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        {/* Header content */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Latest News & Stories
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Stay updated with the latest trends in wellness, our salon announcements, and professional care tips.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {newsItems.map((item, index) => (
            <div key={index} className="group cursor-pointer flex flex-col h-full">
              {/* Image Container */}
              <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-muted rounded-none">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Date Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2">
                  <span className="text-xs font-medium tracking-wider uppercase text-black">
                    {item.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
                    {item.category}
                  </span>
                  <div className="h-px w-8 bg-border" />
                </div>

                <h3 className="font-serif text-2xl text-foreground mb-3 leading-snug decoration-1 underline-offset-4">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-medium tracking-widest uppercase group-hover:underline underline-offset-4">Read More</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="#journal"
            className="inline-flex px-8 py-4 border border-foreground text-foreground text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
