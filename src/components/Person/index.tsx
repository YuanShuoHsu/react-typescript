import styles from "./index.module.scss"

type PersonProps = {
    name: {
        first: string,
        last: string
    }
}

export default function Person(props: PersonProps) {
    return (
        <div className={styles["person"]}>
            {props.name.first} {props.name.last}
        </div>
    )
}
