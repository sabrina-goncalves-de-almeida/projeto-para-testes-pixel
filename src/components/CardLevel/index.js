import styles from "./CardLevel.module.css";
import faseImage1 from "../../assets/images/levelSelection/fase1.png";
import arrowImage from "../../assets/images/levelSelection/Group.png" 


function CardLevel(){
    return (
        <div className={styles.cardLevel}>
            <div 
                className={styles.container}
            >
                <img className={styles.imageFase} src={faseImage1} alt="Imagem de seleção de Fase"/>
            </div>
            <div
                className={styles.textContainer}
            >
                <h1>FASE texto</h1>
                <p>Texto</p>
            </div>
            <div
                className={styles.container}
            >
                <img className={styles.imageArrowFormat} src={arrowImage} alt="Imagem de seleção de Fase"/>
            </div>
        </div>
    );
}

export default CardLevel;
