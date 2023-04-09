import { ChangeEvent } from "react";
import styles from "./index.module.scss";

type InputProps = {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div className={styles["input"]}>
      <input type="text" value={props.value} onChange={handleInputChange} />
    </div>
  );
}
