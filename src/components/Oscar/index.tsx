import { ReactNode } from "react";
import styles from "./index.module.scss";

type OscarProps = {
  children: ReactNode;
};

export default function Oscar(props: OscarProps) {
  return <div className={styles["oscar"]}>{props.children}</div>;
}
