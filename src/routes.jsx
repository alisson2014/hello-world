import { Routes, Route } from "react-router-dom";
import { Home, About } from "./pages";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}
