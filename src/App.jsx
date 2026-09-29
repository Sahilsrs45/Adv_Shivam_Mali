import React, { useEffect, useState } from 'react';
import SiteFooter from './components/SiteFooter.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import AppointmentPage from './pages/AppointmentPage.jsx';
import PracticePage from './pages/PracticePage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(() => sessionStorage.getItem('disclaimerAccepted') === 'true');

  useEffect(() => {
    const syncPath = () => setPath(window.location.pathname);
    window.addEventListener('popstate', syncPath);
    return () => window.removeEventListener('popstate', syncPath);
  }, []);

  const navigate = (nextPath) => {
    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showDisclaimer = () => {
    sessionStorage.removeItem('disclaimerAccepted');
    setDisclaimerAccepted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {!disclaimerAccepted && <DisclaimerNotice onAccept={() => {
        sessionStorage.setItem('disclaimerAccepted', 'true');
        setDisclaimerAccepted(true);
      }} />}
      {disclaimerAccepted && <PublicSite path={path} navigate={navigate} onShowDisclaimer={showDisclaimer} />}
    </>
  );
}

function DisclaimerNotice({ onAccept }) {
  return (
    <main className="disclaimer-screen">
      <section className="disclaimer-card" role="dialog" aria-modal="true" aria-labelledby="disclaimer-title">
        <h1 id="disclaimer-title">Disclaimer</h1>
        <p>
          As per the applicable rules of the Bar Council of India, this website is intended solely to provide general
          information about the advocate and the areas of legal practice. It is not intended for advertising,
          solicitation, or the provision of legal advice. Any information obtained from this website should not be relied
          upon as a substitute for independent legal consultation.
        </p>
        <button className="primary-button" onClick={onAccept}>OK</button>
      </section>
    </main>
  );
}

function PublicSite({ path, navigate, onShowDisclaimer }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPage = path.startsWith('/practice') ? 'practice' : path.startsWith('/appointment') ? 'appointment' : 'profile';

  const goTo = (nextPath) => {
    setMenuOpen(false);
    navigate(nextPath);
  };

  return (
    <>
      <SiteHeader currentPage={currentPage} menuOpen={menuOpen} setMenuOpen={setMenuOpen} navigate={goTo} />
      <main>
        {currentPage === 'practice' && <PracticePage navigate={goTo} />}
        {currentPage === 'appointment' && <AppointmentPage />}
        {currentPage === 'profile' && <ProfilePage navigate={goTo} />}
      </main>
      <SiteFooter onShowDisclaimer={onShowDisclaimer} />
    </>
  );
}

export default App;
