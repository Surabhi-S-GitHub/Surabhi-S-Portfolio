import { useReveal } from '../hooks/useReveal';
import styles from './Projects.module.css';

const badgeClass = {
  violet: styles.badgeViolet,
  purple: styles.badgePurple,
  green:  styles.badgeGreen,
  cyan:   styles.badgeCyan,
};

export default function Projects({ projects }) {
  const headRef = useReveal(0);

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div ref={headRef} style={{ textAlign: 'center' }}>
          <p className={styles.eyebrow}>Projects</p>
          <h2 className={styles.title}>Things I've built</h2>
        </div>
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, delay }) {
  const ref = useReveal(delay);

  return (
    <article
      ref={ref}
      className={`${styles.card} ${p.featured ? styles.featured : ''}`}
    >
      <div className={styles.glow} style={{ background: p.glowColor }} />
      <div className={styles.meta}>
        <span className={styles.period}>{p.period}</span>
        <span className={`${styles.badge} ${badgeClass[p.badgeColor] || styles.badgeViolet}`}>
          {p.badge}
        </span>
      </div>
      <h3 className={styles.name}>{p.title}</h3>
      {p.subtitle && <p className={styles.subtitle}>{p.subtitle}</p>}
      <p className={styles.desc}>{p.desc}</p>
      <div className={styles.stack}>
        {p.stack.map(s => <span key={s} className={styles.ptag}>{s}</span>)}
      </div>
      <a href={p.github} className={styles.link} target="_blank" rel="noreferrer">
        View on GitHub →
      </a>
    </article>
  );
}
