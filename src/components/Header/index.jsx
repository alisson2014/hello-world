import LinkTo from "../LinkTo";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={styles.navigation}>
        <LinkTo routeName="Ínício" routePath="/" />
        <LinkTo routeName="Sobre mim" routePath="/about" />
      </nav>
    </header>
  );
}
