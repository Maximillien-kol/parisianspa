export function QuoteSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <svg
          className="w-12 h-12 mx-auto mb-8 text-muted-foreground/30"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
        
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8 uppercase">
          Everyone deserves a place to find their inner peace. At Persian Beauty, we create moments of{" "}
          <span className="italic">care, comfort, and refreshment.</span>
        </blockquote>
        
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-border" />
          <p className="text-sm tracking-widest uppercase text-muted-foreground">
            Speak Founder
          </p>
          <div className="w-12 h-px bg-border" />
        </div>
      </div>
    </section>
  );
}
