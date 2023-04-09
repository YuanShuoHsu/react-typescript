import { CSSProperties } from "react";
import styles from "./index.module.scss";

type ContainerProps = {
  styles: CSSProperties;
};

export default function Container(props: ContainerProps) {
  return (
    <div style={props.styles} className={styles["container"]}>
      Text content goes here
    </div>
  );
}
