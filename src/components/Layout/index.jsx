import { Outlet } from "react-router-dom";
import Banner from "../Banner";

export default function Layout() {
  return (
    <main>
      <Banner />
      <Outlet />
    </main>
  );
}
