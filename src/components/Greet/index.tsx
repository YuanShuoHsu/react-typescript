import styles from "./index.module.scss";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export default function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;

  return (
    <div className={styles["greet"]}>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread messages.`
          : `Welcome Guest`}
      </h2>
    </div>
  );
}
