import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}
