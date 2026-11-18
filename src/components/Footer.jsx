import React from 'react';
import { PhoneIcon, MapPinIcon, ShieldCheckIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer({ onSelectTab }) {
  const { t } = useLanguage();

  return (
    <footer className="app-footer">
      <div className="footer-inner">
        
        {/* Brand Column */}
        <div>
          <div className="footer-logo-badge">
            <img 
              src="/ad-motorsport-logo.png" 
              alt="AD Motorsport" 
              className="footer-logo-img" 
            />
          </div>
          <p className="footer-desc">
            {t('footer.desc', 'Specialist automotive repair, performance tuning, and motorsport race preparation. Official Hunter 3D alignment & Dynojet calibration center.')}
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--success-green)', fontSize: '0.85rem', fontWeight: 700 }}>
            <ShieldCheckIcon size={18} />
            <span>{t('footer.warrantyBadge', '24-Month Warranty on All OEM Parts & Labor')}</span>
          </div>
        </div>

        {/* Operating Hours */}
        <div>
          <h4 className="footer-title">{t('footer.hoursTitle', 'Workshop Operating Hours')}</h4>
          <ul className="footer-hours-list">
            <li><span>{t('footer.monFri', 'Monday – Friday:')}</span> {t('footer.monFriVal', '08:00 – 19:00')}</li>
            <li><span>{t('footer.sat', 'Saturday:')}</span> {t('footer.satVal', '08:30 – 13:30')}</li>
            <li><span>{t('footer.sun', 'Sunday:')}</span> {t('footer.sunVal', 'Closed (Track Support Only)')}</li>
            <li style={{ marginTop: '0.5rem', color: 'var(--primary-orange)', fontWeight: 700 }}>
              {t('footer.emergency', '24/7 Roadside Assistance Available')}
            </li>
          </ul>
        </div>

        {/* Location & Contact */}
        <div>
          <h4 className="footer-title">{t('footer.contactTitle', 'Location & Contact')}</h4>
          <ul className="footer-hours-list">
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <MapPinIcon size={18} style={{ color: 'var(--primary-orange)', flexShrink: 0, marginTop: '2px' }} />
              <span>Av. Motorsport Tech Park, Bay 4-6, Industrial Park</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <PhoneIcon size={18} style={{ color: 'var(--primary-orange)', flexShrink: 0 }} />
              <a href="tel:+351912345678" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                +351 912 345 678
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--primary-orange)', fontWeight: 900 }}>@</span>
              <a href="mailto:service@ad-motorsport.com" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                service@ad-motorsport.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div>
          © {new Date().getFullYear()} {t('footer.copyright', 'AD Motorsport. All Rights Reserved. Engineered with Precision.')}
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            type="button" 
            onClick={() => {
              onSelectTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.85rem' }}
          >
            {t('footer.backToTop', 'Back to Top ↑')}
          </button>
        </div>
      </div>
    </footer>
  );
}
