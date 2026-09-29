import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { practiceCards } from '../data/practiceData.jsx';

function PracticePage({ navigate }) {
  const selectedArea = new URLSearchParams(window.location.search).get('area');

  useEffect(() => {
    if (!selectedArea) return;
    document.getElementById(`practice-${selectedArea}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [selectedArea]);

  return (
    <>
      <section className="practice-hero">
        <div className="practice-hero-copy">
          <p className="eyebrow">Our Expertise</p>
          <h1>Defending Rights with Precision and Authority.</h1>
          <p>
            A premier legal practice focused on delivering strategic counsel across diverse legal landscapes.
            We blend historical legal depth with modern tactical execution.
          </p>
        </div>
        <div className="practice-hero-image" role="img" aria-label="Scales of justice" />
      </section>

      <section className="practice-grid-section">
        <div className="practice-grid">
          {practiceCards.map((card) => {
            const Icon = card.icon;
            return (
              <article id={`practice-${card.title}`} className={`practice-card ${card.featured ? 'featured' : ''} ${card.highlighted ? 'highlighted' : ''}`} key={card.title}>
                <Icon size={28} />
                <h2>{card.title}</h2>
                <p>{card.text}</p>
                {card.points && (
                  <div className="practice-points">
                    {card.points.map((point) => <span key={point}>{point}</span>)}
                  </div>
                )}
                <button className="link-button" onClick={() => navigate('/appointment')}>{card.action}</button>
              </article>
            );
          })}
          <div className="practice-photo" aria-label="Law firm conference room" />
          <article id="practice-Other Matters" className="practice-card dark-card">
            <span className="dot-mark">...</span>
            <h2>Other Matters</h2>
            <p>Drafting of deeds, legal notices, affidavits, legal opinions, and specialized legal opinions on statutory laws.</p>
            <button className="dark-link" onClick={() => navigate('/appointment')}>Inquire Further <ArrowRight size={16} /></button>
          </article>
        </div>
      </section>

      <section className="consultation-band">
        <p className="eyebrow">Consultation</p>
        <h2>Request a Strategic Consultation</h2>
        <p>Every legal challenge requires a unique tactical approach. Contact our chambers to discuss your specific requirements in Pune or Mumbai.</p>
        <div className="consultation-actions">
          <button className="primary-button" onClick={() => navigate('/appointment')}>Book Online</button>
          <button className="outline-button" onClick={() => navigate('/appointment')}>Office Locations</button>
        </div>
      </section>
    </>
  );
}

export default PracticePage;
