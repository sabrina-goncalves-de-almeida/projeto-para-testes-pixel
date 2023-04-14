import styles from "./CardLevel.module.css"

function CardLevel({props}){
    return (
        <div className={styles.cardLevel}>
            <div>
                <image />
            </div>
            <div>
                <h1>FASE texto</h1>
                <p>Texto</p>
            </div>
            <div>
                <image />
            </div>
        </div>
    );
}

export default CardLevel;
