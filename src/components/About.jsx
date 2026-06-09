import { useReveal } from '../hooks/useReveal';
import styles from './About.module.css';

export default function About({ data }) {
  const textRef  = useReveal(0);
  const cardRef  = useReveal(120);

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left column */}
          <div ref={textRef}>
            <p className={styles.eyebrow}>About Me</p>
            <h2 className={styles.title}>Driven by curiosity,<br />defined by craft.</h2>
            {data.about.bio.map((p, i) => (
              <p key={i} className={styles.body}>{p}</p>
            ))}
            <div className={styles.langBlock}>
              <p className={styles.langLabel}>Languages I speak</p>
              <div className={styles.chips}>
                {data.about.languages.map(l => (
                  <span
                    key={l}
                    className={`${styles.chip} ${l.includes('Japanese') ? styles.chipAccent : ''}`}
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div ref={cardRef} className={styles.cards}>
            {/* Education card */}
            <div className={styles.eduCard}>
              <div className={styles.eduIcon}>🎓</div>
              <div>
                <p className={styles.degree}>{data.education.degree}</p>
                <p className={styles.school}>{data.education.school}</p>
                <p className={styles.period}>{data.education.period}</p>
                <div className={styles.badges}>
                  {data.education.awards.map(a => (
                    <span key={a} className={styles.badge}>🏆 {a}</span>
                  ))}
                </div>
                <div className={styles.courseTags}>
                  {data.education.courses.map(c => (
                    <span key={c} className={styles.courseTag}>{c}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements card */}
            <div className={styles.achieveCard}>
              <p className={styles.achieveTitle}>Notable Achievements</p>
              <ul className={styles.achieveList}>
                {data.achievements.map((a, i) => (
                  <li key={i}>
                    <span className={styles.achieveIcon}>{a.icon}</span>
                    <span>{a.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
