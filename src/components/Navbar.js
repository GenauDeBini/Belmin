"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>Mein Kochbuch</div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link href="/" className={styles.link}>
              Startseite
            </Link>
          </li>
          <li>
            <Link href="/blog" className={styles.link}>
              Rezepte
            </Link>
          </li>
          <li>
            <Link href="/receipt" className={styles.link}>
              Risotto Rezept
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
