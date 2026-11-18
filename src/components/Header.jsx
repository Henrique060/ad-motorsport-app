import React from 'react';
import { PhoneIcon, CalendarIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

export default function Header({ onOpenBooking, onSelectTab }) {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <header className="sticky-header">
      <div className="header-inner">
        
        {/* Logo in clean white badge to guarantee 100% visibility with NO shadow */}
        <button 
          type="button"
          onClick={() => onSelectTab('home')} 
          className="header-logo-btn" 
          title="AD Motorsport - Home"
        >
          <div className="header-logo-badge">
            <img 
              src={`${import.meta.env.BASE_URL}ad-motorsport-logo.png`} 
              alt="AD Motorsport Logo" 
              className="header-logo-img" 
            />
          </div>
        </button>

        <div className="header-status-pill" title={t('header.status', 'Open Today • 08:00 – 19:00')}>
          <span className="status-dot"></span>
          <span>{t('header.status', 'Open Today • 08:00 – 19:00')}</span>
        </div>

        <div className="header-actions">
          {/* Language Toggle */}
          <button 
            type="button" 
            className="btn-lang-toggle" 
            onClick={toggleLang}
            title={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          >
            <span>🌐</span>
            <span>{lang === 'pt' ? 'EN' : 'PT'}</span>
          </button>

          <a href="tel:+351912345678" className="btn-header-call" title="Call Workshop Hotline">
            <PhoneIcon size={16} />
            <span>+351 912 345 678</span>
          </a>

          <button 
            type="button"
            className="btn-header-book"
            onClick={() => onOpenBooking()}
            title={t('header.bookService', 'Book Service')}
          >
            <CalendarIcon size={16} />
            <span>{t('header.bookService', 'Book Service')}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
