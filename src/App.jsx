import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Projects, Skills, Certifications, Education, Contact } from './components/Sections';
import { profile } from './data/portfolio';

function initialTheme() {
  try {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
  } catch {}
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <footer>
        <div className="container foot-inner">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </footer>
    </>
  );
}
