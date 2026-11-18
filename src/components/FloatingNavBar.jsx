import React from 'react';
import { HomeIcon, WrenchIcon, GaugeIcon, MapPinIcon, CalendarIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import './FloatingNavBar.css';

export default function FloatingNavBar({ activeTab, onSelectTab, onOpenBooking }) {
  const { t } = useLanguage();

  return (
    <div className="floating-dock-container">
      <div className="dock-pill">
        
        <button
          type="button"
          className={`dock-item ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => onSelectTab('home')}
          title={t('nav.home', 'Home')}
        >
          <HomeIcon size={18} />
          <span>{t('nav.home', 'Home')}</span>
        </button>

        <button
          type="button"
          className={`dock-item ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => onSelectTab('services')}
          title={t('nav.services', 'Services')}
        >
          <WrenchIcon size={18} />
          <span>{t('nav.services', 'Services')}</span>
        </button>

        <button
          type="button"
          className={`dock-item ${activeTab === 'estimator' ? 'active' : ''}`}
          onClick={() => onSelectTab('estimator')}
          title={t('nav.estimator', 'Estimator')}
        >
          <GaugeIcon size={18} />
          <span>{t('nav.estimator', 'Estimator')}</span>
        </button>

        <button
          type="button"
          className={`dock-item ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => onSelectTab('about')}
          title={t('nav.about', 'About')}
        >
          <MapPinIcon size={18} />
          <span>{t('nav.about', 'About')}</span>
        </button>

      </div>

      <button
        type="button"
        className="dock-book-btn"
        onClick={() => onOpenBooking()}
        title={t('nav.book', 'Book')}
      >
        <CalendarIcon size={20} />
        <span>{t('nav.book', 'Book')}</span>
      </button>
    </div>
  );
}
