import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";

export function SpaInfoSection() {
  return (
    <section className="py-20 bg-[#FFF9F5]">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Column 1 - Left */}
          <div className="lg:col-span-1 flex flex-col gap-10">
            {/* Philosophy Card */}
            <div className="bg-[#E5CFA9] rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden">
              {/* Decorative Elements would go here */}
              <p className="text-sm text-[#4A4036] mb-3 font-medium">Our Philosophy</p>
              <h3 className="font-serif text-2xl text-[#2C241B] mb-4 uppercase tracking-wide">Crafted For Calm</h3>
              <div className="w-12 h-12 relative mb-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#4A4036] rounded-full" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#4A4036] rounded-full" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#4A4036] rounded-full" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#4A4036] rounded-full" />
              </div>
              <p className="text-[#4A4036] leading-relaxed font-medium px-4">
                We Create More Than Treatments, We Create Space To Breathe.
              </p>
            </div>

            {/* Community Love Card */}
            <div className="bg-[#F3ECD9] rounded-3xl p-8 flex flex-col justify-between flex-1 min-h-[300px]">
              <div>
                <h3 className="font-serif text-2xl text-[#2C241B] mb-2">Community Love</h3>
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[#2C241B] text-[#2C241B]" />
                  ))}
                </div>
                <p className="text-[#5C544D] text-sm leading-relaxed mb-6">
                  Parisian Beauty Spa Is More Than A Spa, It's A Part Of Our Clients' Self-Care Rituals. From First-Time Guests To Loyal Regulars.
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex -space-x-2">
                  
                </div>
                <div className="flex items-center gap-2 cursor-pointer group/testimonial">
                  <span className="text-xs font-bold text-[#2C241B] uppercase tracking-wide group-hover/testimonial:underline underline-offset-4">Read Testimonials</span>
                  <ArrowUpRight className="w-3 h-3 text-[#2C241B] group-hover/testimonial:translate-x-0.5 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Center (Large) */}
          <div className="lg:col-span-1 bg-[#BDDAF2] rounded-3xl p-10 text-center flex flex-col relative overflow-hidden min-h-[500px]">
            <div className="relative z-10">
              <h2 className="text-4xl font-serif text-[#1A3A5A] mb-8">- SPA -</h2>
              <p className="text-[#3A5A7A] max-w-md mx-auto leading-relaxed text-sm font-medium mb-12">
                At Parisian Beauty Spa, Our Team Consists Of Highly Trained, Certified Spa And Wellness Professionals. From Licensed Massage Therapists To Expert Estheticians, Every Practitioner.
              </p>
            </div>

            {/* Center Image/Illustration */}
            <div className="flex-1 relative w-full max-w-lg mx-auto min-h-[300px] mt-auto">
              <Image
                src="/spa-illustration1.png"
                alt="Hand drawn spa illustration with towels and candles"
                fill
                className="object-contain "
              />
            </div>

            <div className="relative z-10 pt-8 mt-auto">
              <p className="text-[#1A3A5A] uppercase tracking-widest font-semibold text-sm">
                WWW.PARISIANSPA.RW
              </p>
            </div>
          </div>

          {/* Column 3 - Right */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            {/* Stat 1 */}
            <div className="bg-[#E3E4DF] rounded-2xl p-6 flex-1 flex flex-col justify-center">
              <p className="text-[#5C5E5A] text-sm mb-2 font-medium">Customer Satisfaction</p>
              <p className="font-serif font-black text-4xl text-[#2C2E2A]">98%</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-[#E3E4DF] rounded-2xl p-6 flex-1 flex flex-col justify-center">
              <p className="text-[#5C5E5A] text-sm mb-2 font-medium">Annual Treatments</p>
              <p className="font-serif font-black text-4xl text-[#2C2E2A]">5k+</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-[#E3E4DF] rounded-2xl p-6 flex-1 flex flex-col justify-center">
              <p className="text-[#5C5E5A] text-sm mb-2 font-medium">Excellence Rating</p>
              <p className="font-serif font-black text-4xl text-[#2C2E2A]">4.9/5</p>
            </div>

            {/* Promise Card */}
            <div className="bg-[#E3E4DF] rounded-2xl p-6 flex-[1.5] flex flex-col justify-center relative overflow-hidden">
              <p className="text-[#5C5E5A] text-sm mb-3 font-medium">Our Promise To You</p>
              <p className="text-[#5C5E5A] text-xs leading-relaxed max-w-[80%]">
                This Isn't Just A Spa Treatment It's A Reset For Your Mind, Body.
              </p>
              {/* Sketchy illustration placeholder */}
              <div className="absolute bottom-2 right-2 opacity-50">
                <Star className="w-12 h-12 text-[#9CA098]" strokeWidth={1} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
