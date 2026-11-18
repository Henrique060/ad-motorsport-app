import React from 'react';
import { WrenchIcon, SparklesIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import './WorkshopFacility.css';

export default function WorkshopFacility() {
  const { t, strings } = useLanguage();

  const items = strings?.facility?.items || [
    {
      title: 'Hunter Hawkeye Elite 3D Laser Alignment',
      desc: 'Sub-millimeter steering geometry, corner weighting, and custom camber/caster setups for highway stability or circuit performance.'
    },
    {
      title: 'Dynojet 4WD Synchronized Dynamometer',
      desc: 'Real-time eddy-current load control testing up to 1,200 HP with dual wideband lambda sensor telemetry.'
    },
    {
      title: 'OEM Diagnostic Diagnostic Suites',
      desc: 'Authorized dealer software for Porsche PIWIS, BMW ISTA/D, Audi ODIS, and universal high-speed oscilloscope capture.'
    },
    {
      title: 'Dedicated Clean Room & Engine Assembly',
      desc: 'Climate-controlled dust-free engine rebuilding bay with micro-torque calibration standards.'
    }
  ];

  return (
    <section className="section-wrapper" style={{ paddingTop: '1rem' }}>
      <div className="section-header">
        <div className="section-tag">
          <SparklesIcon size={16} />
          <span>{t('facility.tag', 'Technical Infrastructure')}</span>
        </div>
        <h2 className="section-title">{t('facility.title', 'Precision Workshop Equipment')}</h2>
        <p className="section-desc">
          {t('facility.desc', 'Motorsport telemetry, laser calibration, and clean-room assembly standards.')}
        </p>
      </div>

      <div className="facility-grid">
        {items.map((item, idx) => (
          <div key={idx} className="facility-card">
            <div className="facility-icon-box">
              <WrenchIcon size={20} />
            </div>
            <h3 className="facility-card-title">
              {item.title}
            </h3>
            <p className="facility-card-desc">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
