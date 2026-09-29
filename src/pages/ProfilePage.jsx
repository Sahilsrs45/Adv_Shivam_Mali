import React from 'react';
import { ArrowRight, BriefcaseBusiness, CalendarCheck, Check, Phone } from 'lucide-react';
import { practiceAreas } from '../data/practiceData.jsx';
import gavelMark from '../assets/attorney-gavel-accent.png';

function ProfilePage({ navigate }) {
  return (
    <>
      <section className="profile-hero">
        <div className="profile-hero-copy">
          <p className="eyebrow">Advocate and Legal Consultant</p>
          <h1>Adv. Shivam Dundappa Mali</h1>
          <p className="degree-line">BBA LLB, DCCL</p>
          <p>Seeking practical courtroom strategy, risk management, and dispute resolution.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => navigate('/appointment')}>
              <CalendarCheck size={18} /> Book Appointment
            </button>
            <a className="secondary-button dark" href="tel:+917620348058">
              <Phone size={18} /> Call Office
            </a>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Professional highlights">
        <div>
          <strong>2<span>+</span></strong>
          <p>Years Practice</p>
        </div>
        <div>
          <strong>50<span>+</span></strong>
          <p>Client Matters</p>
        </div>
      </section>

      <section className="profile-section">
        <div className="attorney-photo" aria-label="Attorney portrait">
          <span className="attorney-gavel" aria-hidden="true"><img src={gavelMark} alt="" /></span>
        </div>
        <div className="profile-copy">
          <p className="eyebrow">Attorney Profile</p>
          <h2>Strategic counsel with a client-first litigation approach.</h2>
          <p>
            Shivam Mali represents clients across criminal matters, family and matrimonial disputes, labour and
            employment laws, consumer laws, intellectual property and business protection, dispute resolution, and
            negotiation.
          </p>
          <p>
            His practice is built around early case assessment, transparent advice, careful documentation, and steady
            advocacy from consultation through final hearing. Every case is treated with the precision it deserves,
            ensuring that legal complexities are translated into actionable strategies.
          </p>
          <div className="profile-values">
            <div>
              <Check size={24} />
              <strong>Integrity</strong>
              <span>Unwavering ethical standards in every legal pursuit.</span>
            </div>
            <div>
              <BriefcaseBusiness size={24} />
              <strong>Strategy</strong>
              <span>Calculated moves designed for favorable outcomes.</span>
            </div>
          </div>
          <button className="profile-link" onClick={() => navigate('/practice')}>View Detailed Profile <ArrowRight size={22} /></button>
        </div>
      </section>

      <section className="home-practice-preview">
        <p className="eyebrow">Expertise</p>
        <h2>Practice Areas</h2>
        <div className="preview-card-grid">
          {practiceAreas.map((area) => (
            <button className="practice-preview-box" key={area} onClick={() => navigate(`/practice?area=${encodeURIComponent(area)}`)}>
              {area}
            </button>
          ))}
        </div>
      </section>

      <section className="dark-cta">
        <h2>Ready to discuss your case?</h2>
        <p>Schedule a confidential consultation at our Pune or Mumbai offices to evaluate your legal options.</p>
        <div>
          <button className="primary-button gold" onClick={() => navigate('/appointment')}>Request Appointment</button>
          <a className="secondary-button inverted" href="https://wa.me/917620348058">Contact via WhatsApp</a>
        </div>
      </section>
    </>
  );
}

export default ProfilePage;
