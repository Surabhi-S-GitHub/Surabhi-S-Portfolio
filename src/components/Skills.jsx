import { useReveal } from '../hooks/useReveal';
import styles from './Skills.module.css';

const colorMap = {
  violet:  styles.tagViolet,
  cyan:    styles.tagCyan,
  orange:  styles.tagOrange,
  green:   styles.tagGreen,
  quantum: styles.tagQuantum,
};

export default function Skills({ skills }) {
  const headRef = useReveal(0);

  return (
    <section id="skills">
      <div className="container">
        <div ref={headRef} style={{ textAlign: 'center' }}>
          <p className={styles.eyebrow}>Technical Skills</p>
          <h2 className={styles.title}>Tools of the trade</h2>
        </div>
        <div className={styles.grid}>
          {skills.map((s, i) => (
            <SkillCard key={s.category} skill={s} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill, delay }) {
  const ref = useReveal(delay);
  return (
    <div
      ref={ref}
      className={`${styles.card} ${skill.wide ? styles.wide : ''}`}
    >
      <div className={styles.header}>
        <span className={styles.icon}>{skill.icon}</span>
        <h3>{skill.category}</h3>
      </div>
      <div className={styles.tags}>
        {skill.items.map(item => (
          <span key={item} className={`${styles.tag} ${colorMap[skill.color] || styles.tagViolet}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
