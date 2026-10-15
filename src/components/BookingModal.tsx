import React, { useState } from 'react';
import { SALON_INFO, SERVICE_CATEGORIES } from '../data/salonData';
import { X, Calendar, Clock, User, Phone, MessageCircle, Sparkles, Check } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
}) => {
  const [service, setService] = useState(preselectedService || 'Precision Haircuts');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('11:00 AM');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const timeSlots = [
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '04:30 PM',
    '05:30 PM',
    '06:30 PM',
    '07:30 PM',
  ];

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = [
      `*New Appointment Request - The Hair Clinique*`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Client Name:* ${name || 'Valued Guest'}`,
      `📞 *Phone:* ${phone || 'Not specified'}`,
      `✂️ *Service:* ${service}`,
      `📅 *Date:* ${date}`,
      `⏰ *Preferred Time:* ${timeSlot}`,
      notes ? `📝 *Notes:* ${notes}` : null,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `📍 *Location:* SCO 74, Sector 40 C, Chandigarh`,
    ]
      .filter(Boolean)
      .join('\n');

    const encoded = encodeURIComponent(formattedMessage);
    const url = `https://wa.me/919877123797?text=${encoded}`;
    window.location.href = url;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#12141a] rounded-2xl border border-[#dfb76c]/40 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1e222e] text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#dfb76c] font-semibold">
            Seamless Reservation
          </span>
          <h3 className="font-serif text-2xl font-bold text-white">
            Book at The Hair Clinique
          </h3>
          <p className="text-xs text-zinc-400">
            SCO 74, Sector 40 C, Chandigarh · WhatsApp Confirmation: 9877123797
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppBooking} className="space-y-4 text-xs">
          {/* Service Selector */}
          <div className="space-y-1.5">
            <label className="text-zinc-300 font-medium flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#dfb76c]" />
              Select Service
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#181a24] border border-zinc-700 rounded-lg text-white outline-none focus:border-[#dfb76c]"
            >
              {SERVICE_CATEGORIES.map((cat) => (
                <optgroup key={cat.id} label={cat.name} className="bg-[#12141a] text-zinc-300">
                  {cat.services.map((s) => (
                    <option key={s.id} value={s.name} className="text-white">
                      {s.name} ({s.startingPrice})
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-zinc-300 font-medium flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#dfb76c]" />
                Your Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Jaspreet Singh"
                className="w-full px-3.5 py-2.5 bg-[#181a24] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 outline-none focus:border-[#dfb76c]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-300 font-medium flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#dfb76c]" />
                Contact Phone
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9877123797"
                className="w-full px-3.5 py-2.5 bg-[#181a24] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 outline-none focus:border-[#dfb76c]"
              />
            </div>
          </div>

          {/* Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-zinc-300 font-medium flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#dfb76c]" />
                Preferred Date
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#181a24] border border-zinc-700 rounded-lg text-white outline-none focus:border-[#dfb76c]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-300 font-medium flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#dfb76c]" />
                Time Slot
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#181a24] border border-zinc-700 rounded-lg text-white outline-none focus:border-[#dfb76c]"
              >
                {timeSlots.map((ts) => (
                  <option key={ts} value={ts} className="bg-[#12141a]">
                    {ts}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Special Requests */}
          <div className="space-y-1.5">
            <label className="text-zinc-300 font-medium">
              Special Requests or Stylist Preference (Optional)
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Bridal consultation, senior stylist, curly cut"
              className="w-full px-3.5 py-2 bg-[#181a24] border border-zinc-700 rounded-lg text-white placeholder-zinc-500 outline-none focus:border-[#dfb76c]"
            />
          </div>

          {/* Submit CTAs */}
          <div className="pt-2 space-y-2.5">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Confirm &amp; Send to WhatsApp (9877123797)</span>
            </button>

            <a
              href={`tel:${SALON_INFO.phone}`}
              className="w-full py-2.5 px-4 rounded-lg bg-[#181a24] hover:bg-[#202432] text-zinc-300 border border-zinc-700 font-medium text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#dfb76c]" />
              <span>Or Call Direct: {SALON_INFO.phone}</span>
            </a>
          </div>

          <p className="text-[11px] text-zinc-500 text-center">
            Zero booking fees · Instant confirmation via WhatsApp · No cancellation charge
          </p>
        </form>
      </div>
    </div>
  );
};
