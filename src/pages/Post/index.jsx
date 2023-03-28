import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Layout } from "../../components";
import { useParams, Routes, Route } from "react-router-dom";
import PostModel from "../../components/PostModel";
import posts from "../../json/posts.json";
import "./post.css";
import NotFound from "../NotFound";

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <NotFound />;
  }

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
            </PostModel>
          }
        />
      </Route>
    </Routes>
  );
}
