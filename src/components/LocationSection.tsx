import React, { useState } from 'react';
import { SALON_INFO, SALON_FAQS } from '../data/salonData';
import { MapPin, Phone, MessageCircle, Clock, ChevronDown, ChevronUp, Navigation, Car } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="location" className="py-16 lg:py-24 bg-[#0a0b0e] border-b border-[#1f222b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#dfb76c] font-semibold">
            Visit Our Studio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Location, Hours &amp; Directions
          </h2>
          <p className="text-sm text-zinc-400">
            Conveniently situated in Sector 40 C with ample parking and luxurious amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Card & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="luxury-card rounded-2xl p-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#dfb76c]">
                  Salon Coordinates
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  The Hair Clinique
                </h3>
                <p className="text-xs text-zinc-400">
                  Premium Unisex Salon &amp; Aesthetic Studio
                </p>
              </div>

              <div className="space-y-4 text-xs text-zinc-300">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1a1e28] flex items-center justify-center text-[#dfb76c] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-medium mb-0.5">Address:</strong>
                    <span>{SALON_INFO.address}</span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1a1e28] flex items-center justify-center text-[#dfb76c] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-medium mb-0.5">Phone Call:</strong>
                    <a href={`tel:${SALON_INFO.phone}`} className="text-[#dfb76c] hover:underline font-semibold">
                      {SALON_INFO.phoneFormatted} ({SALON_INFO.phone})
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1a1e28] flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-medium mb-0.5">Direct WhatsApp:</strong>
                    <a
                      href={SALON_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline font-semibold"
                    >
                      wa.me/919877123797
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1a1e28] flex items-center justify-center text-[#dfb76c] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-medium mb-0.5">Salon Hours:</strong>
                    <span>{SALON_INFO.hours}</span>
                    <span className="block text-zinc-500 text-[11px] mt-0.5">Appointments recommended · Walk-ins welcomed</span>
                  </div>
                </div>

                {/* Parking */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1a1e28] flex items-center justify-center text-[#dfb76c] shrink-0 mt-0.5">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white font-medium mb-0.5">Parking &amp; Accessibility:</strong>
                    <span>Spacious market parking lot right outside SCO 74 for cars and two-wheelers.</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row gap-3">
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#dfb76c] hover:bg-[#ebd095] text-black font-semibold text-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={SALON_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Chat: 9877123797</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & FAQs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Embedded Map Frame */}
            <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-[#12141a] h-72 sm:h-80 relative shadow-xl">
              <iframe
                title="The Hair Clinique SCO 74 Sector 40 C Chandigarh Location Map"
                src="https://maps.google.com/maps?q=SCO%2074,%20Sector%2040%20C,%20Chandigarh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-85 hover:opacity-100 transition-opacity"
              />
              <div className="absolute bottom-3 left-3 bg-[#0d0f14]/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-zinc-700 text-[11px] text-zinc-300 pointer-events-none">
                📍 SCO 74, Sector 40 C, Chandigarh
              </div>
            </div>

            {/* FAQs Accordion */}
            <div className="space-y-3">
              <h4 className="font-serif text-lg font-bold text-white mb-2">
                Frequently Asked Questions
              </h4>

              {SALON_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#12141a] border border-zinc-800 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-3.5 text-left text-xs font-semibold text-white flex items-center justify-between hover:text-[#dfb76c] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-4 h-4 text-[#dfb76c] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
                    )}
                  </button>

                  {openFaq === idx && (
                    <div className="px-5 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
