import { Link, useLocation } from "react-router-dom";
import styles from "./link.module.css";

export default function LinkTo({ routeName, routePath }) {
  const location = useLocation();

  return (
    <Link
      className={`
      ${styles.link}
      ${location.pathname === "/" ? styles.linkDestacado : null}
  `}
      to={routePath}
    >
      {routeName}
    </Link>
  );
}
