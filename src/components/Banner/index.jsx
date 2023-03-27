import styles from "./banner.module.css";
import { useState, useEffect } from "react";

export default function Banner() {
  const [user, setUser] = useState({
    avatar: "",
    name: "",
  });

  useEffect(() => {
    fetch("https://api.github.com/users/alisson2014")
      .then((response) => response.json())
      .then((data) => {
        setUser({
          avatar: data.avatar_url,
          name: data.name,
        })
          .catch((error) => console.log(error))
          .finally();
      });
  }, []);

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
          src="/assets/circulo_colorido.png"
          alt="circulo colorido"
          className={styles.circuloColorido}
        />
        <img src={user.avatar} alt={user.name} className={styles.minhaFoto} />
      </div>
    </div>
  );
}
