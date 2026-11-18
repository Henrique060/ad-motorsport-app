import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceEstimator from './components/ServiceEstimator';
import ServiceCatalog from './components/ServiceCatalog';
import About from './components/About';
import Footer from './components/Footer';
import FloatingNavBar from './components/FloatingNavBar';
import BookingModal from './components/BookingModal';
import { LanguageProvider } from './context/LanguageContext';

function MainApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  // Dynamic tab switcher with smooth scroll to top
  const handleSelectTab = (tabName) => {
    setActiveTab(tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open booking modal
  const handleOpenBooking = (initialData = null) => {
    setBookingData(initialData);
    setIsBookingOpen(true);
  };

  return (
    <div className="app-container">
      {/* 1. Header with Language Toggle and 100% visible logo badge with NO shadow */}
      <Header 
        onOpenBooking={() => handleOpenBooking()} 
        onSelectTab={handleSelectTab}
      />

      {/* 2. Main Dynamic View Container */}
      <main className="tab-view-container">
        {activeTab === 'home' && (
          <Hero 
            onOpenBooking={() => handleOpenBooking()} 
            onSelectTab={handleSelectTab} 
          />
        )}

        {activeTab === 'services' && (
          <ServiceCatalog 
            onOpenBooking={(service) => handleOpenBooking(service)} 
          />
        )}

        {activeTab === 'estimator' && (
          <ServiceEstimator 
            onBookWithEstimate={(quote) => handleOpenBooking(quote)} 
          />
        )}

        {activeTab === 'about' && (
          <About 
            onOpenBooking={() => handleOpenBooking()} 
          />
        )}
      </main>

      {/* 3. Comprehensive Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* 4. Floating Bottom Navigation Dock (Tab Switcher) */}
      <FloatingNavBar 
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 5. Multi-step Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialData={bookingData}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
