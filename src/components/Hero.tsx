import React, { useState } from 'react';
import { SALON_INFO } from '../data/salonData';
import { Star, MessageCircle, Phone, Clock, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#1f222b]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#dfb76c]/10 via-transparent to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand, Value Proposition, Action CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Trust Indicator (Zero-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-[#dfb76c]">
              <span className="flex items-center gap-1 font-semibold text-[#f5d78a]">
                <Star className="w-4 h-4 fill-[#dfb76c] text-[#dfb76c]" />
                {SALON_INFO.rating} Rating
              </span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-300">{SALON_INFO.reviewCount} Verified Google Reviews</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">Sector 40 C, Chandigarh</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15] text-balance">
                Precision Hair Architecture &amp;{' '}
                <span className="gold-gradient-text">Aesthetic Studio</span>
              </h1>
              <p className="text-base sm:text-lg text-[#adb3c4] max-w-2xl font-light leading-relaxed">
                Chandigarh's premier unisex destination for transformative keratin therapy, bespoke bridal styling, European men's grooming, and dermatological skin rejuvenation.
              </p>
            </div>

            {/* Direct Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-900/30 whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Book via WhatsApp ({SALON_INFO.phone})</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg bg-[#dfb76c] hover:bg-[#ebd095] text-black transition-all shadow-md whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-black" />
                <span>Reserve Appointment</span>
              </button>

              <a
                href={`tel:${SALON_INFO.phone}`}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg bg-[#141720] hover:bg-[#1a1e28] text-zinc-300 border border-zinc-700 hover:border-[#dfb76c]/40 transition-colors whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 text-[#dfb76c]" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Highlight bullets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-[#1a1d26] text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#dfb76c] shrink-0" />
                <span>Sterile Clinical Hygiene</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#dfb76c] shrink-0" />
                <span>Top European Products</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-[#dfb76c] shrink-0" />
                <span>Free Dedicated Parking</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Canvas */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#dfb76c]/30 shadow-2xl bg-[#14161f] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
              {/* Fallback container with luxury gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#13151c] via-[#1a1d28] to-[#25221b] flex items-center justify-center p-6 text-center">
                <div className="space-y-2 opacity-60">
                  <span className="font-serif text-xl text-[#dfb76c]">The Hair Clinique</span>
                  <p className="text-xs text-zinc-400">SCO 74, Sector 40 C, Chandigarh</p>
                </div>
              </div>

              {/* Main Image */}
              <img
                src={SALON_INFO.heroImage}
                alt="The Hair Clinique Chandigarh interior and luxury salon studio"
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                className={`relative z-10 w-full h-full object-cover transition-opacity duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Contrast Scrim */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Floating Bottom Card Over Scrim */}
              <div className="absolute bottom-4 left-4 right-4 z-30 p-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white">The Hair Clinique</p>
                  <p className="text-[11px] text-zinc-300">SCO 74, Sector 40 C · Open Today</p>
                </div>
                <a
                  href={SALON_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-medium bg-[#dfb76c] text-black rounded-md hover:bg-white transition-colors"
                >
                  WhatsApp Booking
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Quick Metric & Assurance Strip (Full Width Row Below Split) */}
        <div className="mt-12 pt-8 border-t border-[#1e222c] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold font-serif text-[#dfb76c] tabular-nums">
              4.8 ★
            </div>
            <p className="text-xs text-zinc-400">788+ Verified Google Ratings</p>
          </div>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold font-serif text-white">
              SCO 74
            </div>
            <p className="text-xs text-zinc-400">Sector 40 C, Chandigarh</p>
          </div>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold font-serif text-white tabular-nums">
              10 AM – 8:30 PM
            </div>
            <p className="text-xs text-zinc-400">Open 7 Days a Week</p>
          </div>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold font-serif text-[#dfb76c] tabular-nums">
              9877123797
            </div>
            <p className="text-xs text-zinc-400">Instant WhatsApp &amp; Calls</p>
          </div>
        </div>
      </div>
    </section>
  );
};
