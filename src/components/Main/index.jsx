import { Outlet } from "react-router-dom";
import Banner from "../Banner";

export default function Main() {
  return (
    <main>
      <Banner />
      <Outlet />
    </main>
  );
}
