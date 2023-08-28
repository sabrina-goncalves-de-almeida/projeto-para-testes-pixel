import styles from "./ExerciseScreen.module.css";
import arrowImage from "../../assets/images/levelSelection/Group.png";
import PaintingTable from "../PaintingTable";
import { Link } from "react-router-dom";

function ExerciseScreen({props, routesProperties}) {
    return (
        <div className={styles.container}>
            <div className={styles.clickArea}>
                <Link to={routesProperties.buttonRight} className={styles.clickAreaRight} >
                </Link>
                {/* Ainda fica por cima do botão de passar para próxima tela */}
                <Link to={routesProperties.buttonLeft} className={styles.clickAreaLeft}>
                </Link>
            </div>
            <Link to={routesProperties.buttonLeft}>
                <img className={styles.imageLeft} src={arrowImage} alt="Botão para voltar para a tela anterior"/>
            </Link>
            <div className={styles.question}>
                {/* <img className={styles.image1} src={props.phaseImage} alt={props.textAlt}/> */}
                <PaintingTable num={props.numOfPixels}></PaintingTable>
                <p>{`${props.textOfQuest}`}</p>
            </div>  
            <Link to={routesProperties.buttonRight}>
                <img className={styles.imageRigth} src={arrowImage} alt="Botão para ir para a próxima tela"/>
            </Link>
        </div>
    );
}

export default ExerciseScreen;
