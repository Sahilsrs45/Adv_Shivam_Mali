import React from 'react';
import { ArrowRight, Building2, CalendarCheck, Clock3, Landmark, Mail, MapPin } from 'lucide-react';
import { practiceAreas } from '../data/practiceData.jsx';

function AppointmentPage() {
  return (
    <section className="appointment-page">
      <div className="appointment-intro">
        <p className="eyebrow">Consultation</p>
        <h1>Request an appointment</h1>
        <p>Share the essential details and the office will review your request. For urgent matters, call directly.</p>
        <div className="contact-list">
          <span><Clock3 size={22} /><strong>Availability</strong> Mon-Sat, 10:00 AM - 6:00 PM</span>
          <span><MapPin size={22} /><strong>Main Office</strong> Office consultations in Pune</span>
          <span><Mail size={22} /><strong>Direct Email</strong> advmalishivam@gmail.com</span>
        </div>
        <div className="library-image" aria-label="Legal library" />
      </div>

      <div className="appointment-content">
        <form className="appointment-form" action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="a09a791d-29a2-4a93-aa23-fc593722f536" />
          <input type="hidden" name="subject" value="New appointment request — Shivam Mali Advocate" />
          <input className="form-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" />
          <div className="form-row">
            <label>Full Name<input name="fullName" placeholder="Enter your full name" required /></label>
            <label>Email<input name="email" type="email" placeholder="email@example.com" required /></label>
          </div>
          <div className="form-row">
            <label>Phone<input name="phone" placeholder="+91 00000 00000" required /></label>
            <label>Type of Consultation<select name="service" defaultValue="Criminal Defence">{practiceAreas.map((area) => <option key={area}>{area}</option>)}</select></label>
          </div>
          <label>Message<textarea name="message" rows="6" placeholder="Briefly describe your matter" /></label>
          <button className="primary-button submit-button" type="submit">
            <CalendarCheck size={18} /> Submit Request
          </button>
        </form>

        <div className="office-grid">
          <a
            className="office-card"
            href="https://www.google.com/maps/search/?api=1&query=103%20Clover%20Center%20A%20Wing%20Moledina%20Road%20Near%20J.J%20Garden%20Camp%20Pune%20Maharashtra%20411001"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Pune Office in Google Maps"
          >
            <Building2 size={22} />
            <h3>Pune Office</h3>
            <p>103, Clover Center, A Wing Moledina Rd, Near J.J Garden Camp, Pune, Maharashtra 411001</p>
            <div className="map-preview">
              <span className="map-pin"><MapPin size={18} /></span>
              <div>
                <strong>Pune, Maharashtra</strong>
                <span>Open in Google Maps</span>
              </div>
              <ArrowRight size={18} />
            </div>
          </a>
          <a
            className="office-card"
            href="https://www.google.com/maps/search/?api=1&query=Rajgir%20Chambers%20Office%2067%208th%20Floor%20Shahid%20Bhagat%20Singh%20Road%20Opp%20Old%20Custom%20House%20Mumbai%20400001"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Mumbai Office in Google Maps"
          >
            <Landmark size={22} />
            <h3>Mumbai Office</h3>
            <p>Rajgir Chambers Office # 67, 8th Floor Shahid Bhagat Singh Road Opp. Old Custom House, Mumbai 400001</p>
            <div className="map-preview">
              <span className="map-pin"><MapPin size={18} /></span>
              <div>
                <strong>Mumbai, Maharashtra</strong>
                <span>Open in Google Maps</span>
              </div>
              <ArrowRight size={18} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AppointmentPage;
