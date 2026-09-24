// Hero illustration: a trip-ETA forecast by hour of day with a P10–P90 band,
// the kind of output the Urban Mobility quantile models produce.
import { useEffect, useRef, useState } from 'react';

// Values are illustrative, generated here — not real model output.

const W = 520, H = 280, PAD = { l: 40, r: 26, t: 14, b: 34 };

function series() {
  const pts = [];
  for (let h = 0; h <= 23; h += 0.5) {
    const morning = 7 * Math.exp(-((h - 8.5) ** 2) / 3);
    const evening = 9 * Math.exp(-((h - 17.5) ** 2) / 4);
    const night = -2.5 / (1 + Math.exp((h - 4.5) * 1.5));
    const p50 = 14 + morning + evening + night;
    const spread = 2.5 + 0.45 * (morning + evening);
    const actual = p50 + Math.sin(h * 2.3) * spread * 0.7;
    pts.push({ h, p10: p50 - spread, p50, p90: p50 + spread * 1.35, actual });
  }
  return pts;
}

export default function ForecastChart() {
  // start the draw animation only once the chart scrolls into view
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.35 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const data = series();
  const yMin = 5, yMax = 35;
  const x = (h) => PAD.l + (h / 23) * (W - PAD.l - PAD.r);
  const y = (v) => PAD.t + (1 - (v - yMin) / (yMax - yMin)) * (H - PAD.t - PAD.b);

  const line = data.map((d, i) => `${i ? 'L' : 'M'}${x(d.h).toFixed(1)},${y(d.p50).toFixed(1)}`).join(' ');
  const band =
    data.map((d, i) => `${i ? 'L' : 'M'}${x(d.h).toFixed(1)},${y(d.p90).toFixed(1)}`).join(' ') +
    ' ' +
    [...data].reverse().map((d) => `L${x(d.h).toFixed(1)},${y(d.p10).toFixed(1)}`).join(' ') +
    ' Z';

  const yTicks = [10, 20, 30];
  const xTicks = [0, 6, 12, 18, 23];

  return (
    <figure ref={ref} className={`forecast ${seen ? 'in' : ''}`}>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="fc-title">
        <title id="fc-title">Illustrative chart of predicted trip time by hour of day, with a shaded uncertainty band that widens during rush hours.</title>
        {yTicks.map((t) => (
          <g key={t}>
            <line className="grid" x1={PAD.l} x2={W - PAD.r} y1={y(t)} y2={y(t)} />
            <text className="tick" x={PAD.l - 10} y={y(t) + 4} textAnchor="end">{t}</text>
          </g>
        ))}
        {xTicks.map((t) => (
          <text key={t} className="tick" x={x(t)} y={H - 12} textAnchor="middle">
            {String(t).padStart(2, '0')}:00
          </text>
        ))}
        <path className="band" d={band} />
        <path className="median" d={line} pathLength="1" />
        {data.filter((d) => d.h % 2 === 1).map((d) => (
          <circle key={d.h} className="actual" cx={x(d.h)} cy={y(d.actual)} r="3.2" style={{ '--i': d.h }} />
        ))}
      </svg>
      <figcaption>
        <span className="key"><i className="k-median" /> Predicted ETA</span>
        <span className="key"><i className="k-band" /> P10 to P90 range</span>
        <span className="key"><i className="k-actual" /> Observed trips</span>
        <span className="fc-note">Minutes by hour of day. Illustration of the quantile models in my Urban Mobility project.</span>
      </figcaption>
    </figure>
  );
}
