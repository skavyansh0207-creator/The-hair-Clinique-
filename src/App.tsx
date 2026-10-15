import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { GroomingSpotlight } from './components/GroomingSpotlight';
import { BridalStudioSection } from './components/BridalStudioSection';
import { FeatureGallery } from './components/FeatureGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedServiceForBooking(serviceName || '');
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-[#e0e2ec] flex flex-col font-sans selection:bg-[#dfb76c] selection:text-black">
      {/* Top Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Services Catalogue */}
        <ServicesSection onSelectServiceForBooking={handleOpenBooking} />

        {/* Men's Grooming Section */}
        <GroomingSpotlight onOpenBooking={handleOpenBooking} />

        {/* Bridal Studio & Packages */}
        <BridalStudioSection onOpenBooking={handleOpenBooking} />

        {/* Studio Gallery (Showcasing all 3 user images) */}
        <FeatureGallery />

        {/* Verified Reviews (4.8 rating, 788+ Google reviews) */}
        <ReviewsSection />

        {/* Location & Map (SCO 74, Sector 40 C, Chandigarh) */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Persistent Floating WhatsApp & Call Button */}
      <FloatingWhatsApp />

      {/* Interactive Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedServiceForBooking}
      />
    </div>
  );
};

export default App;
