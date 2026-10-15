import React, { useState } from 'react';
import { SALON_INFO } from '../data/salonData';
import { Eye, X, Sparkles, MapPin, MessageCircle } from 'lucide-react';

export const FeatureGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<{ url: string; title: string; desc: string } | null>(null);

  const galleryItems = [
    {
      id: 'gallery-1',
      url: SALON_INFO.galleryImage1,
      title: 'Luxury Styling Stations & Hair Studio',
      desc: 'Ergonomic Italian wash stations, specialized lighting, and dedicated workstations for keratin therapies and precision cuts.',
      tag: 'Studio Interior',
    },
    {
      id: 'gallery-2',
      url: SALON_INFO.galleryImage2,
      title: 'Private Aesthetic & Bridal Suite',
      desc: 'Serene, sound-insulated private suites for bridal makeup preparations, skin facials, and relaxation rituals.',
      tag: 'Aesthetic Suite',
    },
    {
      id: 'hero-banner',
      url: SALON_INFO.heroImage,
      title: 'The Hair Clinique Reception & Lounge',
      desc: 'Welcoming consultation lounge with champagne tones, client beverage bar, and retail displays of premium haircare.',
      tag: 'Main Lounge',
    },
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[#0a0b0e] border-b border-[#1f222b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#dfb76c] font-semibold">
            Visual Tour
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Inside The Hair Clinique
          </h2>
          <p className="text-sm text-zinc-400">
            A glimpse into Chandigarh's premier aesthetic sanctuary at SCO 74, Sector 40 C.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#14161f] border border-zinc-800 hover:border-[#dfb76c]/50 transition-all cursor-pointer aspect-[4/3] flex flex-col justify-end"
            >
              {/* Fallback pattern */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#12141a] via-[#1a1e28] to-[#25221b] -z-10 flex items-center justify-center p-4">
                <span className="font-serif text-sm text-[#dfb76c]/50">{item.title}</span>
              </div>

              {/* Photo */}
              <img
                src={item.url}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Card Information */}
              <div className="relative z-10 p-5 space-y-1.5">
                <span className="text-[10px] uppercase tracking-wider text-[#dfb76c] font-semibold">
                  {item.tag}
                </span>
                <h3 className="font-serif text-base font-bold text-white group-hover:text-[#dfb76c] transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <Eye className="w-4 h-4 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visit us card */}
        <div className="mt-10 p-6 rounded-2xl bg-[#12141a] border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-300">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#dfb76c] shrink-0" />
            <div>
              <p className="font-semibold text-white">Experience in Person</p>
              <p className="text-zinc-400">SCO 74, Sector 40 C, Chandigarh - 160036</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Book Appointment ({SALON_INFO.phone})</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#12141a] rounded-2xl overflow-hidden border border-[#dfb76c]/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-black">
              <img
                src={activeImage.url}
                alt={activeImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 space-y-2 bg-[#12141a]">
              <h3 className="font-serif text-xl font-bold text-white">{activeImage.title}</h3>
              <p className="text-sm text-zinc-300">{activeImage.desc}</p>
              <div className="pt-3 flex items-center justify-between">
                <span className="text-xs text-zinc-400">The Hair Clinique · Sector 40 C, Chandigarh</span>
                <a
                  href={SALON_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold bg-[#dfb76c] text-black rounded-lg hover:bg-white transition-colors"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
