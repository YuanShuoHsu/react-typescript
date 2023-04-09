import styles from "./index.module.scss"
import { PersonProps } from "./index.types"

export default function Person(props: PersonProps) {
    return (
        <div className={styles["person"]}>
            {props.name.first} {props.name.last}
        </div>
    )
}
