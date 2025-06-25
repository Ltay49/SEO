import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            M&amp;M Nails
          </Link>

          <nav
            className={`${styles.nav} ${menuOpen ? styles.show : ""}`}
            aria-label="Primary navigation"
          >
            <Link href="/">Home</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#faq">FAQ</Link>
            <Link
              href="tel:+441612345678"
              className={styles.callNow}
              aria-label="Call M and M Nails now at 0161 234 5678"
            >
              Call Now
            </Link>
          </nav>

          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>
    </>
  );
}
