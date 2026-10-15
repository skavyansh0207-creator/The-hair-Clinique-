import React from 'react';
import { SALON_INFO } from '../data/salonData';
import { Scissors, Flame, Shield, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface GroomingSpotlightProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const GroomingSpotlight: React.FC<GroomingSpotlightProps> = ({ onOpenBooking }) => {
  const rituals = [
    {
      title: 'Luxury Hot Towel Shaving',
      desc: 'Steamed herbal towels infused with eucalyptus, pre-shave botanical oils, multi-pass straight razor shave, and chilled alum closing.',
      time: '45 mins',
      price: 'From ₹450',
    },
    {
      title: 'Beard Trim & Sculpting',
      desc: 'Precision razor lineup, facial contouring, length debulking, finished with cedarwood beard elixir and beard butter balm.',
      time: '30 mins',
      price: 'From ₹350',
    },
    {
      title: 'Men\'s Hair Styling & Precision Fade',
      desc: 'Scissor-over-comb architecture or skin fade tailored to head shape, finished with luxury matte clay or high-hold pomade.',
      time: '40 mins',
      price: 'From ₹450',
    },
  ];

  return (
    <section id="grooming" className="py-16 lg:py-24 bg-[#0c0d12] border-b border-[#1f222b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[#dfb76c] font-semibold">
              Gentlemen's Atelier
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Men's Grooming with European Barbering Precision
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed font-light">
              Step into an unhurried sanctuary designed for the modern gentleman. We revive traditional straight-razor craftsmanship and combine it with advanced scalp wellness therapies.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-zinc-300">
                <span className="w-5 h-5 rounded-full bg-[#dfb76c]/10 text-[#dfb76c] flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </span>
                <span>Single-use medical grade Feather blades for supreme hygiene</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-zinc-300">
                <span className="w-5 h-5 rounded-full bg-[#dfb76c]/10 text-[#dfb76c] flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </span>
                <span>Custom consultations for face-framing beard geometry</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-zinc-300">
                <span className="w-5 h-5 rounded-full bg-[#dfb76c]/10 text-[#dfb76c] flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </span>
                <span>Dedicated private barbering chairs and aromatic hot towels</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenBooking("Men's Grooming")}
                className="px-5 py-2.5 rounded-lg bg-[#dfb76c] hover:bg-[#edd094] text-black font-semibold text-xs transition-colors cursor-pointer"
              >
                Book Grooming Slot
              </button>
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#14161f] border border-zinc-700 hover:border-[#dfb76c] text-white text-xs font-medium transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: {SALON_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Grooming Service Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {rituals.map((r, idx) => (
              <div
                key={idx}
                className="luxury-card rounded-xl p-5 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1a1e28] flex items-center justify-center text-[#dfb76c] border border-[#dfb76c]/20">
                    {idx === 0 ? (
                      <Flame className="w-4 h-4" />
                    ) : idx === 1 ? (
                      <Scissors className="w-4 h-4" />
                    ) : (
                      <Sparkles className="w-4 h-4" />
                    )}
                  </div>
                  <h3 className="font-serif text-base font-bold text-white group-hover:text-[#dfb76c] transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {r.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 block">{r.time}</span>
                    <span className="text-xs font-semibold text-white font-serif tabular-nums">
                      {r.price}
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenBooking(r.title)}
                    className="p-1.5 text-xs text-[#dfb76c] hover:text-white transition-colors cursor-pointer"
                    title={`Book ${r.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
