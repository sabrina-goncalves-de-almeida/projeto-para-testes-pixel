import styles from "./CardLevel.module.css";
import arrowImage from "../../assets/images/levelSelection/Group.png" 
import { Link } from "react-router-dom";


function CardLevel({props, imageCard, routesProperties
}){
    return (
        <div className={styles.cardLevel}>
            <Link to={routesProperties}>
                <div 
                    className={styles.container}
                >
                    <img className={styles.imageFase} src={imageCard.imagePhase} alt={imageCard.textAlternative}/>
                </div>
                <div
                    className={styles.textContainer}
                >
                    <h1>FASE {`${props.phase}`}</h1>
                    <p>{`${props.textPhase}`}</p>
                </div>
                <div
                    className={styles.container}
                >
                    <img className={styles.imageArrowFormat} src={arrowImage} alt="Imagem de seleção de Fase"/>
                </div>
            </Link>
        </div>
    );
}

export default CardLevel;
