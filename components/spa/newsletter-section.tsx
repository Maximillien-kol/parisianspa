"use client";

import React from "react"

import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail("");
  };

  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        {/* Decorative Element */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-px bg-border" />
          <svg className="w-6 h-6 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313-12.454z" />
          </svg>
          <div className="w-8 h-px bg-border" />
        </div>

        <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
          Wellness Delivered
        </p>

        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Subscribe & Stay Inspired
        </h2>

        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Fresh updates, self-care rituals & special rewards - straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="yourspa@gmail.com"
            className="flex-1 px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground text-sm"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-primary-foreground text-xs tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
