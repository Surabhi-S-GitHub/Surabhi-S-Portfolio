import { useReveal } from '../hooks/useReveal';
import styles from './Contact.module.css';

export default function Contact({ data }) {
  const ref = useReveal(0);

  return (
    <>
      <section id="contact" className={styles.contact}>
        <div className="container">
          <div ref={ref} className={styles.inner}>
            <p className={styles.eyebrow}>Contact</p>
            <h2 className={styles.title}>Let's build something<br />together.</h2>
            <p className={styles.sub}>
              I'm actively looking for internships and full-time opportunities. Whether it's a project
              collaboration or a job offer — my inbox is open.
            </p>
            <div className={styles.actions}>
              <a href={`mailto:${data.email}`} className={styles.emailBtn}>
                {data.email}
              </a>
              <div className={styles.links}>
                <a href={data.linkedin} target="_blank" rel="noreferrer" className={styles.link}>LinkedIn</a>
                <span className={styles.sep}>·</span>
                <a href={data.github} target="_blank" rel="noreferrer" className={styles.link}>GitHub</a>
                <span className={styles.sep}>·</span>
                <a href={data.portfolio} target="_blank" rel="noreferrer" className={styles.link}>Portfolio</a>
              </div>
              <p className={styles.phone}>📞 {data.phone}</p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <p className={styles.footerText}>Designed &amp; built by Surabhi Subramaniam · 2026</p>
        </div>
      </footer>
    </>
  );
}
