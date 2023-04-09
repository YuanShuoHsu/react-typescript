import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

import styles from "./index.module.scss";

export default function Box() {
  const theme = useContext(ThemeContext);
  return (
    <div
      className={styles["box"]}
      style={{ background: theme.primary.main, color: theme.primary.text }}
    >
      Theme context
    </div>
  );
}
