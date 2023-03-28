import { Routes, Route } from "react-router-dom";
import { Home, About, Post } from "./pages";
import Main from "./components/Main";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts/:id" element={<Post />} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}
