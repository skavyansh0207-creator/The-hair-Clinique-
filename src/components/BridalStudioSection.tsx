import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Sparkles, Heart, Crown, Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';

interface BridalStudioSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const BridalStudioSection: React.FC<BridalStudioSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="bridal" className="py-16 lg:py-24 bg-[#0d0e14] border-b border-[#1f222b] relative overflow-hidden">
      {/* Decorative luxury glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#dfb76c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#dfb76c] font-semibold">
            Bespoke Haute Couture Beauty
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            The Bridal Studio &amp; Wedding Lounge
          </h2>
          <p className="text-sm text-zinc-300">
            Complete luxury bridal packages &amp; event preparation tailored to make your wedding celebrations in Chandigarh unforgettable.
          </p>
        </div>

        {/* 3 Bridal Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Complete Luxury Bridal Package */}
          <div className="luxury-card rounded-2xl p-7 flex flex-col justify-between border-2 border-[#dfb76c]/40 relative bg-gradient-to-b from-[#181a24] to-[#12141a]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#dfb76c]">
                  Signature Wedding Day
                </span>
                <Crown className="w-5 h-5 text-[#dfb76c]" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-white">
                Complete Luxury Bridal Package
              </h3>

              <p className="text-xs text-zinc-300 leading-relaxed">
                Full-service bride transformation in our private bridal suite with HD/Airbrush makeup, couture hair, and drape setting.
              </p>

              <div className="pt-3 border-t border-zinc-800 space-y-2.5 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb76c] shrink-0" />
                  <span>Ultra-HD / Airbrush Makeup with 18hr Hold</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb76c] shrink-0" />
                  <span>Couture Hair Architecture &amp; Jewelry Placement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb76c] shrink-0" />
                  <span>Dupatta &amp; Lehenga Precision Draping</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb76c] shrink-0" />
                  <span>Pre-Makeup Hydro Glow &amp; Eyelash Extensions</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800 space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-zinc-400">Starting from</span>
                <span className="font-serif text-xl font-bold text-[#dfb76c] tabular-nums">
                  ₹14,999
                </span>
              </div>
              <button
                onClick={() => onOpenBooking("Complete Luxury Bridal Package")}
                className="w-full py-2.5 rounded-lg bg-[#dfb76c] hover:bg-[#edd094] text-black font-semibold text-xs transition-colors cursor-pointer"
              >
                Book Bridal Consultation
              </button>
            </div>
          </div>

          {/* Card 2: Pre-Bridal Radiance Bootcamp */}
          <div className="luxury-card rounded-2xl p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-400">
                  2–4 Weeks Pre-Wedding
                </span>
                <Sparkles className="w-5 h-5 text-zinc-400" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-white">
                Pre-Bridal Radiance Bootcamp
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Step-by-step skin and hair restoration across 3 to 4 scheduled sessions to guarantee natural lit-from-within glow.
              </p>

              <div className="pt-3 border-t border-zinc-800 space-y-2.5 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb76c] shrink-0" />
                  <span>Full Body Exfoliating Polish &amp; Organic De-Tan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb76c] shrink-0" />
                  <span>Dermatological Lactic Glow Facial Ritual</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb76c] shrink-0" />
                  <span>Intense Hair Spa &amp; Keratin Treatment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb76c] shrink-0" />
                  <span>Deluxe Paraffin Manicure &amp; Pedicure</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800 space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-zinc-400">Starting from</span>
                <span className="font-serif text-xl font-bold text-white tabular-nums">
                  ₹8,999
                </span>
              </div>
              <button
                onClick={() => onOpenBooking("Pre-Bridal Radiance Bootcamp")}
                className="w-full py-2.5 rounded-lg bg-[#1a1e28] hover:bg-[#252b3a] text-zinc-200 border border-zinc-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                Inquire Pre-Bridal Plan
              </button>
            </div>
          </div>

          {/* Card 3: Groom & Entourage Packages */}
          <div className="luxury-card rounded-2xl p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-400">
                  Groom &amp; Family
                </span>
                <Heart className="w-5 h-5 text-zinc-400" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-white">
                Groom &amp; Sangeet / Reception
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed">
                Tailored styling for the groom, bridesmaid party, mothers of the bride/groom, and cocktail reception glam.
              </p>

              <div className="pt-3 border-t border-zinc-800 space-y-2.5 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb76c] shrink-0" />
                  <span>Groom's Signature Beard &amp; Matte HD Touch-Up</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb76c] shrink-0" />
                  <span>Sangeet Smokey Eye &amp; Textured Hair Waves</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb76c] shrink-0" />
                  <span>Bridal Party Group Packages (3+ Guests)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb76c] shrink-0" />
                  <span>On-site or Salon Suite Availability</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800 space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-zinc-400">Starting from</span>
                <span className="font-serif text-xl font-bold text-white tabular-nums">
                  ₹5,499
                </span>
              </div>
              <button
                onClick={() => onOpenBooking("Groom & Reception Glam")}
                className="w-full py-2.5 rounded-lg bg-[#1a1e28] hover:bg-[#252b3a] text-zinc-200 border border-zinc-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                Inquire Entourage Package
              </button>
            </div>
          </div>
        </div>

        {/* WhatsApp Bridal Concierge Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-400 mb-3">
            Want to discuss custom wedding dates, bridal trial appointments, or bridal party bookings?
          </p>
          <a
            href="https://wa.me/919877123797?text=Hello%20The%20Hair%20Clinique!%20I%20am%20inquiring%20about%20a%20luxury%20bridal%20package%20in%20Chandigarh."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Connect with Bridal Lead on WhatsApp: 9877123797</span>
          </a>
        </div>
      </div>
    </section>
  );
};
