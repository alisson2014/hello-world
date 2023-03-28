import styles from "./banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá Mundo!</h1>
        <p className={styles.paragrafo}>
          Meu nome é alisson e sou apaixonado por tecnologia, atualmente estou
          cursando Análise e desenvolvimento de sistemas e estudando back end
          com NodeJS. Desenvolvo soluções em tecnologia, usando as melhores
          tecnologias do mercado, como o ecossistema ReactJS.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          src={circuloColorido}
          alt="circulo colorido"
          className={styles.circuloColorido}
        />
        <img
          src="https://github.com/alisson2014.png"
          alt="Alisson"
          title="Alisson"
          className={styles.minhaFoto}
        />
      </div>
    </div>
  );
}
