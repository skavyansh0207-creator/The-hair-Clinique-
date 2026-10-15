import React from 'react';
import { SALON_INFO, SERVICE_CATEGORIES } from '../data/salonData';
import { MapPin, Phone, MessageCircle, Star, Clock } from 'lucide-react';

interface FooterProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#07080a] border-t border-[#1a1d26] text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#dfb76c] to-[#9e7323] flex items-center justify-center text-black font-serif font-bold text-base">
                C
              </span>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                {SALON_INFO.name}
              </span>
            </div>
            <p className="text-zinc-400 leading-relaxed max-w-sm">
              {SALON_INFO.tagline}. Setting new standards for precision haircutting, European men's grooming, aesthetic dermatology, and bespoke bridal elegance in Chandigarh.
            </p>
            <div className="flex items-center gap-2 text-zinc-300">
              <Star className="w-4 h-4 fill-[#dfb76c] text-[#dfb76c]" />
              <span className="font-semibold text-white">{SALON_INFO.rating}★ Rated</span>
              <span aria-hidden="true">·</span>
              <span>{SALON_INFO.reviewCount} Google Reviews</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px]">
              Services
            </h4>
            <ul className="space-y-2">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a href="#services" className="hover:text-[#dfb76c] transition-colors">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Treatments */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px]">
              Signature Treatments
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onOpenBooking('Keratin Treatments')}
                  className="hover:text-[#dfb76c] transition-colors text-left cursor-pointer"
                >
                  Keratin Treatments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking('Luxury Hot Towel Shaving')}
                  className="hover:text-[#dfb76c] transition-colors text-left cursor-pointer"
                >
                  Hot Towel Shaving
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking('Complete Luxury Bridal Package')}
                  className="hover:text-[#dfb76c] transition-colors text-left cursor-pointer"
                >
                  Bridal Studio Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking('Acrylic Nails & Extensions')}
                  className="hover:text-[#dfb76c] transition-colors text-left cursor-pointer"
                >
                  Acrylic Nail Extensions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenBooking('Permanent Hair Removal')}
                  className="hover:text-[#dfb76c] transition-colors text-left cursor-pointer"
                >
                  Permanent Hair Removal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Coordinates & Contact */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold uppercase tracking-wider text-[11px]">
              Chandigarh Salon
            </h4>
            <div className="space-y-2.5">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#dfb76c] shrink-0 mt-0.5" />
                <span>{SALON_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#dfb76c] shrink-0" />
                <a href={`tel:${SALON_INFO.phone}`} className="hover:text-white font-semibold">
                  {SALON_INFO.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={SALON_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-semibold text-emerald-400"
                >
                  WhatsApp: {SALON_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>10:00 AM – 8:30 PM (Daily)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-[11px]">
          <p>© {new Date().getFullYear()} The Hair Clinique. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-zinc-300">Services</a>
            <span aria-hidden="true">·</span>
            <a href="#location" className="hover:text-zinc-300">Directions</a>
            <span aria-hidden="true">·</span>
            <a href={SALON_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">
              WhatsApp Booking
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
