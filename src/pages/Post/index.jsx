import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Layout } from "../../components";
import { useParams, Routes, Route } from "react-router-dom";
import PostModel from "../../components/PostModel";
import posts from "../../json/posts.json";
import "./post.css";
import styles from "./post.module.css";
import NotFound from "../NotFound";
import PostCard from "../../components/PostCard";

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <NotFound />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(params.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  console.log(postsRecomendados);

  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route
          index
          element={
            <PostModel
              photo={`/assets/posts/${post.id}/capa.png`}
              title={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
              <h2 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar
              </h2>
              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((poster) => (
                  <li key={poster.id}>
                    <PostCard post={poster} />
                  </li>
                ))}
              </ul>
            </PostModel>
          }
        />
      </Route>
    </Routes>
  );
}
