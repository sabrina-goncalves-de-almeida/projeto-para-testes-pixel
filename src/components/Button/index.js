import styles from "./Button.module.css";

function Button({text}){
    return (
        <button className={styles.choiceButton}>{text}</button>
    );
}

export default Button;
