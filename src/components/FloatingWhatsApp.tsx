import React, { useState } from 'react';
import { SALON_INFO } from '../data/salonData';
import { MessageCircle, Phone, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Mini tooltip popup on desktop */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#13151e] border border-[#dfb76c]/40 text-xs text-white shadow-2xl animate-fade-in">
          <span>Chat on WhatsApp: <strong>{SALON_INFO.phone}</strong></span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-zinc-400 hover:text-white p-0.5 cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2">
        {/* Quick Phone Call Button */}
        <a
          href={`tel:${SALON_INFO.phone}`}
          className="p-3 rounded-full bg-[#161822] hover:bg-[#202434] text-[#dfb76c] border border-[#dfb76c]/40 shadow-lg transition-transform hover:scale-105"
          title={`Call ${SALON_INFO.phone}`}
          aria-label={`Call ${SALON_INFO.phone}`}
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Floating Action Button */}
        <a
          href={SALON_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/60 transition-transform hover:scale-105 flex items-center justify-center group"
          title={`WhatsApp ${SALON_INFO.phone}`}
          aria-label="Chat with The Hair Clinique on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>
      </div>
    </div>
  );
};
