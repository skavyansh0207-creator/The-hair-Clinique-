import React, { useState } from 'react';
import { SALON_INFO } from '../data/salonData';
import { Phone, Menu, X, Calendar, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0c10]/90 backdrop-blur-md border-b border-[#222530]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand wordmark */}
          <a href="#" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
            <span className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#dfb76c] to-[#9e7323] flex items-center justify-center text-black font-serif font-bold text-lg shadow-sm">
              C
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#dfb76c] transition-colors">
                The Hair Clinique
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#a0a5b5] font-sans">
                Chandigarh · Sector 40 C
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#c0c5d5]">
            <a href="#services" className="hover:text-[#dfb76c] transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#grooming" className="hover:text-[#dfb76c] transition-colors whitespace-nowrap shrink-0">
              Men's Grooming
            </a>
            <a href="#bridal" className="hover:text-[#dfb76c] transition-colors whitespace-nowrap shrink-0">
              Bridal Studio
            </a>
            <a href="#gallery" className="hover:text-[#dfb76c] transition-colors whitespace-nowrap shrink-0">
              Gallery
            </a>
            <a href="#location" className="hover:text-[#dfb76c] transition-colors whitespace-nowrap shrink-0">
              Location &amp; Hours
            </a>
          </nav>

          {/* Zone 3: Primary CTA action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#dfb76c] bg-[#161922] hover:bg-[#1f2330] border border-[#dfb76c]/30 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="Call The Hair Clinique"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SALON_INFO.phone}</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-[#dfb76c] hover:bg-[#f1ca7e] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-semibold text-black bg-[#dfb76c] rounded-md"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#c0c5d5] hover:text-white rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101217] border-b border-[#222530] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm text-[#d5d9e5]">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#181b24] hover:text-[#dfb76c]"
            >
              Services Catalogue
            </a>
            <a
              href="#grooming"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#181b24] hover:text-[#dfb76c]"
            >
              Men's Grooming Suite
            </a>
            <a
              href="#bridal"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#181b24] hover:text-[#dfb76c]"
            >
              Bridal Studio &amp; Packages
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#181b24] hover:text-[#dfb76c]"
            >
              Salon Gallery
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#181b24] hover:text-[#dfb76c]"
            >
              SCO 74, Sector 40 C, Chandigarh
            </a>
          </nav>
          <div className="pt-3 border-t border-[#222530] flex flex-col gap-2">
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 px-4 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white"
            >
              WhatsApp Us: {SALON_INFO.phone}
            </a>
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="w-full text-center py-2.5 px-4 text-xs font-semibold rounded-lg bg-[#1a1e28] text-[#dfb76c] border border-[#dfb76c]/30"
            >
              Direct Call: {SALON_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
