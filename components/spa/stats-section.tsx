const stats = [
  {
    label: "Customer Satisfaction",
    value: "98%",
    description: "Happy clients returning",
  },
  {
    label: "Annual Treatments",
    value: "5k+",
    description: "Treatments performed yearly",
  },
  {
    label: "Excellence Rating",
    value: "4.9/5",
    description: "Based on 500+ reviews",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-5xl md:text-6xl mb-2">{stat.value}</p>
              <p className="text-sm tracking-widest uppercase mb-1">{stat.label}</p>
              <p className="text-primary-foreground/60 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
