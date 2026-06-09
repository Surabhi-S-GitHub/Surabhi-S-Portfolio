import { useReveal } from '../hooks/useReveal';
import styles from './Certifications.module.css';

const logoClass = {
  aws:     styles.logoAws,
  gcp:     styles.logoGcp,
  quantum: styles.logoQuantum,
  infosys: styles.logoInfosys,
  jp:      styles.logoJp,
};

export default function Certifications({ certs }) {
  const headRef = useReveal(0);

  return (
    <section id="certifications">
      <div className="container">
        <div ref={headRef} style={{ textAlign: 'center' }}>
          <p className={styles.eyebrow}>Certifications</p>
          <h2 className={styles.title}>Credentials &amp; Learning</h2>
        </div>
        <div className={styles.grid}>
          {certs.map((c, i) => (
            <CertCard key={c.name} cert={c} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert: c, delay }) {
  const ref = useReveal(delay);
  return (
    <div ref={ref} className={styles.card}>
      <div className={`${styles.logo} ${logoClass[c.logoColor] || styles.logoAws}`}>
        {c.logo}
      </div>
      <div className={styles.body}>
        <p className={styles.name}>{c.name}</p>
        <p className={styles.issuer}>{c.issuer}</p>
      </div>
      <span className={`${styles.status} ${c.status === 'Trained' ? styles.trained : styles.certified}`}>
        {c.status}
      </span>
    </div>
  );
}
