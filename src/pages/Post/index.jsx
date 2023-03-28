import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams } from "react-router-dom";
import PostModel from "../../components/PostModel";
import posts from "../../json/posts.json";
import "./post.css";

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  return (
    <PostModel photo={`/assets/posts/${post.id}/capa.png`} title={post.titulo}>
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModel>
  );
}
