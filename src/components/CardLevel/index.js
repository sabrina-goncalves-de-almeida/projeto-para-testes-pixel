import React from 'react';
import styles from "./CardLevel.module.css";
import arrowImage from "../../assets/images/levelSelection/Group.png" 
import { Link } from "react-router-dom";


function CardLevel({props, imageCard, routesProperties
}){
    return (
        <div className={styles.cardLevel}>
            <Link to={routesProperties}>
                <div className={styles.container}>
                    <div 
                        className={styles.contentImgPhase}
                    >
                        <img className={styles.imageFase} src={imageCard.imagePhase} alt={imageCard.textAlternative}/>
                    </div>
                    <div
                        className={styles.contentText}
                    >
                        <h1>FASE {`${props.phase}`}</h1>
                        <p>{`${props.textPhase}`}</p>
                    </div>
                    <div
                        className={styles.contentArrow}
                    >
                        <img className={styles.imageArrowFormat} src={arrowImage} alt="Imagem de seleção de Fase"/>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CardLevel;
