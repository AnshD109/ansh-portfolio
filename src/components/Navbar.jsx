import { useEffect, useState } from 'react';
import { nav, profile } from '../data/portfolio';
import { Icon } from './icons';

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const links = nav.map((n) => (
    <li key={n.id}>
      <button className={active === n.id ? 'active' : ''} aria-current={active === n.id ? 'true' : undefined} onClick={() => go(n.id)}>
        {n.label}
      </button>
    </li>
  ));

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="logo" href="#home" onClick={(e) => { e.preventDefault(); go('home'); }}>
          {profile.name}
        </a>
        <nav aria-label="Sections">
          <ul className="nav-links">{links}</ul>
        </nav>
        <div className="nav-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
          </button>
          <button className="icon-btn burger" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            <Icon name={open ? 'x' : 'menu'} size={18} />
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <ul>{links}</ul>
      </div>
    </header>
  );
}
