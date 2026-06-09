import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <span className={styles.logo}>SS<span className={styles.dot}>.</span></span>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className={styles.cta} onClick={() => setOpen(false)}>Contact</a>
          </li>
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span className={open ? styles.barOpen : ''}></span>
          <span className={open ? styles.barMid : ''}></span>
          <span className={open ? styles.barOpen : ''}></span>
        </button>
      </div>
    </nav>
  );
}
