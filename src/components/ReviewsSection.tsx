import React from 'react';
import { TESTIMONIALS, SALON_INFO } from '../data/salonData';
import { Star, ShieldCheck, ThumbsUp, MessageSquare } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#0b0c10] border-b border-[#1f222b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#dfb76c]">
              <ShieldCheck className="w-4 h-4 text-[#dfb76c]" />
              <span>Verified Client Trust</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Rated 4.8★ Across 788+ Google Reviews
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl">
              Real testimonials from clients across Chandigarh, Panchkula, and Mohali who trust The Hair Clinique for precision hair, grooming, and bridal aesthetics.
            </p>
          </div>

          {/* Google Scorecard Box */}
          <div className="p-5 rounded-2xl bg-[#13151d] border border-[#dfb76c]/30 flex items-center gap-5 shrink-0">
            <div className="text-center">
              <span className="font-serif text-4xl font-extrabold text-white tabular-nums">4.8</span>
              <div className="flex items-center justify-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i === 4 ? 'text-[#dfb76c] fill-[#dfb76c]/60' : 'text-[#dfb76c] fill-[#dfb76c]'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="border-l border-zinc-800 pl-5 text-xs">
              <p className="font-semibold text-white">Google Reviews</p>
              <p className="text-zinc-400">788+ Verified Ratings</p>
              <p className="text-[11px] text-[#dfb76c] mt-0.5 font-medium">SCO 74, Sector 40 C</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="luxury-card rounded-xl p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#dfb76c] text-[#dfb76c]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500 tabular-nums">{t.date}</span>
                </div>

                {/* Comment */}
                <p className="text-xs text-zinc-300 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-white">{t.name}</h4>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                    <ShieldCheck className="w-3 h-3" />
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp & Review CTA */}
        <div className="mt-12 text-center text-xs text-zinc-400 flex flex-wrap items-center justify-center gap-4">
          <span>Visited The Hair Clinique recently?</span>
          <a
            href={SALON_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#dfb76c] hover:underline font-medium inline-flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Share feedback or review on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
