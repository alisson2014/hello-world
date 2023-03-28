import PostModel from "../../components/PostModel";
import photo from "../../assets/sobre_mim_capa.png";
import styles from "./about.module.css";

export default function About() {
  return (
    <PostModel photo={photo} title="Sobre mim">
      <h3 className={styles.caption}>Olá, eu sou o Alisson</h3>
      <img
        src="https://github.com/alisson2014.png"
        alt="Alisson"
        title="Alisson"
        className={styles.photoAbout}
      />
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
        laudantium ipsa suscipit quidem mollitia numquam quo, temporibus
        blanditiis, repellat, officiis fugit modi eligendi. Nulla illum odio
        labore magnam nisi.
      </p>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
        laudantium ipsa suscipit quidem mollitia numquam quo, temporibus
        blanditiis, repellat, officiis fugit modi eligendi. Nulla illum odio
        labore magnam nisi.
      </p>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
        laudantium ipsa suscipit quidem mollitia numquam quo, temporibus
        blanditiis, repellat, officiis fugit modi eligendi. Nulla illum odio
        labore magnam nisi.
      </p>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
        laudantium ipsa suscipit quidem mollitia numquam quo, temporibus
        blanditiis, repellat, officiis fugit modi eligendi. Nulla illum odio
        labore magnam nisi.
      </p>
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea
        laudantium ipsa suscipit quidem mollitia numquam quo, temporibus
        blanditiis, repellat, officiis fugit modi eligendi. Nulla illum odio
        labore magnam nisi.
      </p>
    </PostModel>
  );
}
