import { useEffect, useRef } from 'react';
import ParticleCanvas from './ParticleCanvas';
import styles from './Hero.module.css';

export default function Hero({ data }) {
  const contentRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const handler = () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        el.style.transform = `translateY(${y * 0.18}px)`;
        el.style.opacity = 1 - y / (window.innerHeight * 0.75);
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <section className={styles.hero} id="home">
      <ParticleCanvas />
      <div className={styles.content} ref={contentRef}>
        <p className={styles.eyebrow}>
          <span className={styles.blink}>▶</span> Available for opportunities · {data.location}
        </p>
        <h1 className={styles.name}>
          Surabhi<br />
          <span className={styles.nameAccent}>Subramaniam</span>
        </h1>
        <p className={styles.tagline}>
          Full-Stack Developer &amp; Quantum Computing Enthusiast<br />
          building at the intersection of <em>code, cloud, and curiosity.</em>
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View My Work</a>
          <a href={`mailto:${data.email}`} className={styles.btnGhost}>Get In Touch</a>
        </div>
        <div className={styles.stats}>
          {data.stats.map((s, i) => (
            <div key={s.label} className={styles.statGroup}>
              {i > 0 && <div className={styles.divider} />}
              <div className={styles.stat}>
                <span className={styles.statVal}>{s.val}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.scrollHint}>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
