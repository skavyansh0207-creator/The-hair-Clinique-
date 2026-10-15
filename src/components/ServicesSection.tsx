import React, { useState } from 'react';
import { SERVICE_CATEGORIES, ServiceCategory, ServiceItem, SALON_INFO } from '../data/salonData';
import { Sparkles, Clock, MessageCircle, Search, ArrowRight, Check } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter services by category and search
  const allServices: (ServiceItem & { categoryName: string })[] = SERVICE_CATEGORIES.flatMap((cat) =>
    cat.services.map((s) => ({ ...s, categoryName: cat.name }))
  );

  const filteredServices = allServices.filter((service) => {
    const matchesCategory = activeCategoryId === 'all' || service.category === activeCategoryId;
    const matchesSearch =
      searchQuery.trim() === '' ||
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getWhatsAppMessageUrl = (serviceName: string) => {
    const text = encodeURIComponent(
      `Hello The Hair Clinique! I would like to book an appointment for *${serviceName}* at your Sector 40 C salon.`
    );
    return `https://wa.me/919877123797?text=${text}`;
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#0d0f14] border-b border-[#1f222b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-[#dfb76c] font-semibold">
              Comprehensive Salon Menu
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Curated Services &amp; Specialized Aesthetics
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              From precision haircuts and Brazilian keratin infusions to European hot towel shaving and bridal artistry, every treatment is tailored to perfection.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. Keratin, Shave)..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#14161f] border border-zinc-800 focus:border-[#dfb76c] rounded-lg text-xs text-zinc-200 placeholder-zinc-500 outline-none transition-colors"
            />
          </div>
        </div>

        {/* Interactive Category Segmented Tabs (Functional Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-zinc-800 mb-8">
          <button
            onClick={() => setActiveCategoryId('all')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              activeCategoryId === 'all'
                ? 'bg-[#dfb76c] text-black font-semibold'
                : 'text-zinc-400 hover:text-white bg-[#14161f]'
            }`}
          >
            All Services ({allServices.length})
          </button>

          {SERVICE_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategoryId(category.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeCategoryId === category.id
                  ? 'bg-[#dfb76c] text-black font-semibold'
                  : 'text-zinc-400 hover:text-white bg-[#14161f]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Active Category Description Note */}
        {activeCategoryId !== 'all' && (
          <div className="mb-6 p-4 rounded-xl bg-[#14161f]/70 border border-zinc-800 text-xs text-zinc-300 flex items-center justify-between">
            <div>
              <span className="font-semibold text-[#dfb76c]">
                {SERVICE_CATEGORIES.find((c) => c.id === activeCategoryId)?.name}
              </span>
              <span className="mx-2 text-zinc-600">·</span>
              <span>{SERVICE_CATEGORIES.find((c) => c.id === activeCategoryId)?.description}</span>
            </div>
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#dfb76c] hover:underline shrink-0 ml-4 font-medium"
            >
              Consult Stylist
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#12141a] border border-zinc-800 space-y-3">
            <p className="text-zinc-400 text-sm">No services matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategoryId('all');
              }}
              className="text-xs text-[#dfb76c] hover:underline"
            >
              Clear filter and show all services
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="luxury-card rounded-xl p-6 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Category kicker */}
                  <div className="flex items-center justify-between text-[11px] text-zinc-400">
                    <span className="font-medium text-[#c5a880]">{service.categoryName}</span>
                    <span className="flex items-center gap-1 text-zinc-400 tabular-nums">
                      <Clock className="w-3.5 h-3.5 text-zinc-500" />
                      {service.duration}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#dfb76c] transition-colors">
                    {service.name}
                  </h3>

                  {/* Service Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Price & Actions */}
                <div className="pt-5 mt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-zinc-400">Starting</span>
                    <span className="text-sm font-semibold text-white font-serif tabular-nums">
                      {service.startingPrice}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectServiceForBooking(service.name)}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[#1e222e] hover:bg-[#282d3d] text-zinc-200 transition-colors cursor-pointer"
                    >
                      Book
                    </button>

                    <a
                      href={getWhatsAppMessageUrl(service.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-400 border border-emerald-800/50 transition-colors"
                      title={`WhatsApp booking for ${service.name}`}
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Custom inquiry note */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#141720] via-[#171b26] to-[#141720] border border-[#dfb76c]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-base font-semibold text-white">Need a Customized Treatment or Consultation?</h4>
            <p className="text-xs text-zinc-400">
              Speak directly with our senior aesthetician or master barber on WhatsApp.
            </p>
          </div>
          <a
            href={SALON_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp (9877123797)</span>
          </a>
        </div>
      </div>
    </section>
  );
};
