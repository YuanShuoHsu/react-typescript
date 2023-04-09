import styles from "./index.module.scss";
import { Name } from "../Person/index.types";

type PersonListProps = {
  names: Name[];
};

export default function PersonList(props: PersonListProps) {
  return (
    <div className={styles["personList"]}>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
}
