import styles from "./index.module.scss"

type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

export default function Greet(props: GreetProps) {
    return (
        <div className={styles["greet"]}>
            <h2>
                {
                    props.isLoggedIn ?
                        `Welcome {props.name}! You have {props.messageCount} unread messages.` :
                        `Welcome Guest`
                }
            </h2>
        </div>
    )
}
