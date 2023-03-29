import styles from "./index.module.scss";

type HeadingProps = {
  children: string;
};

export default function Heading(props:HeadingProps) {
  return <div className={styles["heading"]}>
    {props.children}
  </div>;
}
