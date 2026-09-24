import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';
import { Icon } from './icons';

// Types each role, holds it, deletes it, moves to the next.
function useTypedRole(roles) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setText(roles[0]); return; }
    const full = roles[i % roles.length];
    const t = setTimeout(() => {
      const next = deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === full) setTimeout(() => setDeleting(true), 1600);
      if (deleting && next === '') { setDeleting(false); setI(i + 1); }
    }, deleting ? 40 : 80);
    return () => clearTimeout(t);
  }, [text, deleting, i, roles]);

  return text;
}

export default function Hero() {
  const typed = useTypedRole(profile.roles);
  const [imgOk, setImgOk] = useState(true);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="status"><i /> {profile.available}</p>
          <h1>{profile.name}</h1>
          <p className="typed" aria-label={profile.roles.join(', ')}>
            <span aria-hidden="true">{typed}</span><i className="caret" aria-hidden="true" />
          </p>
          <p className="lead">{profile.tagline}</p>

          <div className="btn-row">
            <button className="btn btn-primary" onClick={() => go('about')}>
              About me <Icon name="arrow" size={17} />
            </button>
            <a className="btn btn-ghost" href={profile.resume} download>
              <Icon name="download" size={17} /> Download CV
            </a>
          </div>

          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Icon name="mail" /></a>
            <span className="loc"><Icon name="pin" size={16} /> {profile.location}</span>
          </div>
        </div>

        <div className="portrait">
          <div className="portrait-frame">
            {imgOk ? (
              <img src={profile.photo} alt={profile.name} onError={() => setImgOk(false)} />
            ) : (
              <span className="initials">{profile.initials}</span>
            )}
          </div>
          <div className="tag tag-study"><Icon name="book" size={16} /> {profile.study}</div>
          <div className="tag tag-focus"><Icon name="brain" size={16} /> ML, NLP and MLOps</div>
        </div>
      </div>
    </section>
  );
}
