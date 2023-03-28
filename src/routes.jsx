import { Routes, Route } from "react-router-dom";
import { Home, About, Post, NotFound } from "./pages";
import { Layout } from "./components";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts/:id" element={<Post />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
