import { MouseEvent } from "react";
import styles from "./index.module.scss";

type ButtonProps = {
  handleClick: (event: MouseEvent<HTMLButtonElement>, id: number) => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={(event) => props.handleClick(event, 1)}
      className={styles["button"]}
    >
      Click
    </button>
  );
}
