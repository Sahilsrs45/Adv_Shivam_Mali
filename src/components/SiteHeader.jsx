import React from 'react';
import { Menu, Scale, X } from 'lucide-react';

function SiteHeader({ currentPage, menuOpen, setMenuOpen, navigate }) {
  return (
    <header className="site-header">
      <button className="brand-button" onClick={() => navigate('/')} aria-label="Go to profile">
        <Scale size={34} />
        <span>Adv. Shivam Dundappa Mali</span>
      </button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <button className={currentPage === 'profile' ? 'active' : ''} onClick={() => navigate('/')}>Profile</button>
        <button className={currentPage === 'practice' ? 'active' : ''} onClick={() => navigate('/practice')}>Practice Areas</button>
        <button className="nav-cta" onClick={() => navigate('/appointment')}>Book Appointment</button>
      </nav>
      <button className="icon-button menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export default SiteHeader;
