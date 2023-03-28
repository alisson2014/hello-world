import styles from "./postModel.module.css";

export default function PostModel({ photo, title, children }) {
  return (
    <article className={styles.postModelContainer}>
      <div
        className={styles.photo}
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.postContent}>{children}</div>
    </article>
  );
}
