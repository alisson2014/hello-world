import styles from "./button.module.css";

export default function Button({ children, tamanho }) {
  return (
    <button className={`${styles.button} ${styles[tamanho]}`}>
      {children}
    </button>
  );
}
