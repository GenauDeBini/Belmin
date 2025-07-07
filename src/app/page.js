"use client";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Belmin Cookbook</h1>
          <p className={styles.subtitle}>
            Willkommen! Wähle ein Rezept von Belmin aus:
          </p>
          <a href="/receipt" className={styles.button}>
            Zum Risotto Rezept
          </a>
          <br />
          <a href="/blog" className={styles.button}>
            Zum Blog
          </a>
        </div>
      </main>
    </>
  );
}
