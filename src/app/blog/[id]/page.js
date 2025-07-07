"use client";

import { use } from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import posts from "@/data/post";
import { useRouter } from "next/navigation";

export default function BlogDetailPage({ params }) {
  const { id } = use(params); // <- hier params "unwrapped"
  const postId = parseInt(id);
  const post = posts.find((p) => p.id === postId);
  const router = useRouter();

  if (!post) return notFound();

  return (
    <div className={styles.detailContainer}>
      <h1 className={styles.title}>{post.title}</h1>
      <button
        onClick={() => router.push("/blog")}
        className={styles.backButton}
      >
        Zurück
      </button>
      <p className={styles.meta}>
        von <strong>{post.author}</strong> – {post.date}
      </p>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <p className={styles.content}>{post.content}</p>

      {post.image && (
        <img src={post.image} alt={post.title} className={styles.image} />
      )}

      {post.youtube && (
        <div className={styles.videoWrapper}>
          <iframe
            src={post.youtube}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
