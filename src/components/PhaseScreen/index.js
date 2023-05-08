import styles from "./PhaseScreen.module.css";
import arrowImage from "../../assets/images/levelSelection/Group.png";
import { Link } from "react-router-dom";

function PhaseScreen({props, routesProperties}) {
    return (
        <div className={styles.container}>
            <div ></div>
            <Link to={routesProperties.buttonLeft}>
                <img className={styles.imageLeft} src={arrowImage} alt="Botão para voltar para a tela anterior"/>
            </Link>
            <div className={styles.question}>
                <img className={styles.image1} src={props.phaseImage} alt={props.textAlt}/>
                <p>{`${props.textOfQuest}`}</p>
            </div>  
            <Link to={routesProperties.buttonRight}>
                <img className={styles.imageRigth} src={arrowImage} alt="Botão para ir para a próxima tela"/>
            </Link>
            <div ></div>
        </div>
    );
}

export default PhaseScreen;
