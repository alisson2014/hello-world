import styles from "./footer.module.css";
import { ReactComponent as MarcaRegistrada } from "./marca_registrada.svg";

export default function Footer() {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
      <p>Desenvolvido por Alisson</p>
    </footer>
  );
}
