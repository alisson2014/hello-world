import { BrowserRouter } from "react-router-dom";
import { Header, Footer, ScrollToTop } from "./components";
import AppRouter from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}
