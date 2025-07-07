"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import posts from "@/data/post";

export default function BlogPage() {
  const router = useRouter();
  const [filter, setFilter] = useState("Alle");

  const filteredPosts =
    filter === "Alle"
      ? posts
      : posts.filter((post) => post.tags.includes(filter));

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Rezepte Blog Seite</h1>

      <button onClick={() => router.push("/")} className={styles.backButton}>
        Zurück zur Startseite
      </button>

      <div className={styles.filterButtons}>
        {["Alle", "🥦vegan", "🧀vegetarisch", "🍗Fleisch"].map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`${styles.filterButton} ${
              filter === tag ? styles.active : ""
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className={styles.card}
            onClick={() => router.push(`/blog/${post.id}`)}
          >
            <h2>{post.title}</h2>
            <p className={styles.meta}>
              von <strong>{post.author}</strong> – {post.date}
            </p>
            <p className={styles.tags}>{post.tags.join(" • ")}</p>
            <p>{post.content.slice(0, 200)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
