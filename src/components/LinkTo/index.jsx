import { NavLink } from "react-router-dom";
import styles from "./link.module.css";

export default function LinkTo({ routeName, routePath }) {
  return (
    <NavLink
      to={routePath}
      className={`
        ${styles.link}
      `}
      style={({ isActive }) => {
        return {
          textDecoration: isActive ? "underline" : "",
        };
      }}
    >
      {routeName}
    </NavLink>
  );
}
