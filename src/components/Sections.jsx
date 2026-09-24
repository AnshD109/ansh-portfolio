import { useMemo, useState } from 'react';
import { Icon } from './icons';
import ForecastChart from './ForecastChart';
import {
  about, featured, projects, skills, learning, education, certifications, languages, profile,
} from '../data/portfolio';

function Head({ title, lead }) {
  return (
    <div className="sec-head">
      <h2>{title}</h2>
      {lead && <p>{lead}</p>}
    </div>
  );
}

function Links({ links }) {
  if (!links.code && !links.demo) return null;
  return (
    <div className="links">
      {links.code && (
        <a href={links.code} target="_blank" rel="noreferrer"><Icon name="github" size={16} /> View code</a>
      )}
      {links.demo && (
        <a href={links.demo} target="_blank" rel="noreferrer"><Icon name="external" size={16} /> Open demo</a>
      )}
    </div>
  );
}

const Stack = ({ items }) => (
  <ul className="stack" aria-label="Tools used">
    {items.map((t) => <li key={t}>{t}</li>)}
  </ul>
);

export function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <Head title="A little about me" />
          {about.summary.map((p, i) => <p className="prose" key={i}>{p}</p>)}
        </div>
        <dl className="stat-grid">
          {about.facts.map((f) => (
            <div className="stat" key={f.label}>
              <dt>{f.value}</dt>
              <dd>
                <span className="stat-label">{f.label}</span>
                <span className="stat-note">{f.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Projects() {
  const tags = useMemo(() => ['All', ...new Set(projects.flatMap((p) => p.tags))], []);
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <Head title="Projects" lead="Most of these run end to end, from raw data to an API someone can call. Code for each is on GitHub." />

        <article className="featured">
          <div className="featured-body">
            <p className="featured-label">Main project</p>
            <h3>{featured.title}</h3>
            <p className="featured-sub">{featured.subtitle}</p>
            <p className="prose">{featured.blurb}</p>
            <Stack items={featured.stack} />
            <Links links={featured.links} />
          </div>
          <div className="featured-visual">
            <ForecastChart />
            <dl className="metrics">
              {featured.metrics.map((m) => (
                <div key={m.label}>
                  <dt>{m.value}</dt>
                  <dd>{m.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>

        <div className="filters" role="group" aria-label="Filter projects">
          {tags.map((t) => (
            <button key={t} className={`filter ${filter === t ? 'active' : ''}`} onClick={() => setFilter(t)} aria-pressed={filter === t}>
              {t}
            </button>
          ))}
        </div>

        <ul className="project-list">
          {shown.map((p) => (
            <li className="project" key={p.title}>
              <div className="project-main">
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <Stack items={p.stack} />
              </div>
              <div className="project-side">
                <p className="project-tags">{p.tags.join(', ')}</p>
                {p.results && (
                  <figure className="results">
                    <table>
                      <tbody>
                        {p.results.map((r, i) => (
                          <tr key={r.label} className={i === p.results.length - 1 ? 'best' : ''}>
                            <th scope="row">{r.label}</th>
                            <td>{r.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <figcaption>{p.resultsCaption}</figcaption>
                  </figure>
                )}
                <Links links={p.links} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Head title="What I work with" lead="Tools I've used in real projects, grouped by where they sit in a machine learning workflow." />
        <div className="skill-grid">
          {skills.map((g) => (
            <div className="skill-card" key={g.group}>
              <div className="skill-top">
                <span className="skill-ico"><Icon name={g.icon} size={20} /></span>
                <h3>{g.group}</h3>
              </div>
              <ul className="chips">
                {g.items.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
          <div className="skill-card learning-card">
            <div className="skill-top">
              <span className="skill-ico"><Icon name="book" size={20} /></span>
              <h3>Currently learning</h3>
            </div>
            <ul className="chips">
              {learning.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <Head title="Certificates" lead="Courses in machine learning, AI and cloud data engineering. The Coursera certificates link to their verification page." />
        <ul className="cert-grid">
          {certifications.map((c) => (
            <li className="cert" key={c.name}>
              <div className="cert-top">
                <span className={`issuer issuer-${c.issuer.toLowerCase()}`}>{c.issuer}</span>
                <span className="cert-date">{c.date}</span>
              </div>
              <h3>{c.name}</h3>
              <p className="cert-meta">{c.focus}, via {c.via}</p>
              {c.verify ? (
                <a className="cert-link" href={c.verify} target="_blank" rel="noreferrer">
                  <Icon name="check" size={15} /> Verify certificate
                </a>
              ) : (
                <span className="cert-link muted"><Icon name="award" size={15} /> Badge on Credly</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Head title="Education" />
        <div className="edu-grid">
          <ol className="edu">
            {education.map((e) => (
              <li key={e.degree}>
                <p className="edu-period">{e.period}</p>
                <h3>{e.degree}</h3>
                <p className="edu-school">{e.school}, {e.location}</p>
                <p className="edu-details">{e.details}</p>
              </li>
            ))}
          </ol>
          <div className="edu-side">
            <h3>Languages</h3>
            <ul className="plain">
              {languages.map((l) => (
                <li key={l.name}><span>{l.name}</span><span className="muted">{l.level}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const send = () => {
    if (!form.message.trim()) {
      setError('Write a message first, then press Send.');
      return;
    }
    setError('');
    const subject = encodeURIComponent(`Portfolio message from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-grid">
        <div>
          <Head title="Let's talk" lead="Hiring for a data science or ML internship, or a working student role in Berlin? Send me a message." />
          <ul className="contact-list">
            {[
              { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
              { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
              { icon: 'pin', label: 'Location', value: profile.location },
              { icon: 'linkedin', label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin, ext: true },
              { icon: 'github', label: 'GitHub', value: 'See my code', href: profile.github, ext: true },
            ].map((c) => {
              const inner = (
                <>
                  <span className="c-ico"><Icon name={c.icon} size={19} /></span>
                  <span className="c-text"><span className="c-label">{c.label}</span><span className="c-value">{c.value}</span></span>
                </>
              );
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a className="c-item" href={c.href} {...(c.ext ? { target: '_blank', rel: 'noreferrer' } : {})}>{inner}</a>
                  ) : (
                    <div className="c-item">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>

        </div>

        <div className="form">
          <div className="field">
            <label htmlFor="cname">Your name</label>
            <input id="cname" value={form.name} onChange={set('name')} autoComplete="name" placeholder="Jane Müller" />
          </div>
          <div className="field">
            <label htmlFor="cmail">Your email</label>
            <input id="cmail" type="email" value={form.email} onChange={set('email')} autoComplete="email" placeholder="jane@company.de" />
          </div>
          <div className="field">
            <label htmlFor="cmsg">Message</label>
            <textarea id="cmsg" value={form.message} onChange={set('message')} aria-describedby="cmsg-err" placeholder="What role or project is this about?" />
          </div>
          {error && <p id="cmsg-err" className="form-error" role="alert">{error}</p>}
          <button className="btn btn-primary" onClick={send}>
            <Icon name="send" size={17} /> Send message
          </button>
          <p className="form-note">This opens your email app with the message filled in.</p>
        </div>
      </div>
    </section>
  );
}
