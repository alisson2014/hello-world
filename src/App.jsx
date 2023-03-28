import { BrowserRouter } from "react-router-dom";
import { Header, Footer } from "./components";
import AppRouter from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}
