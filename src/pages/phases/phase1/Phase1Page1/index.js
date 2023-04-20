import styles from "./Phase1Page1.module.css";
import arrowImage from "../../../../assets/images/levelSelection/Group.png";
import phase1Image1 from "../../../../assets/images/phases/phase1/phase-1-image-1.png";
import { Link } from "react-router-dom";

function Phase1Page1() {
    return (
        <>
            <body className={styles.screen}>
                <div className={styles.container}>
                    <Link to={"/phaseselection/"}>
                        <img className={styles.imageLeft} src={arrowImage} alt="Botão para voltar para a tela anterior"/>
                    </Link>
                    <div className={styles.question}>
                        <img className={styles.image1} src={phase1Image1} alt="Imagem de um garoto usando um computador"/>
                        <p>Você sabia que os computadores armazenam desenhos, fotografias, e outras imagens usando apenas números? A seguir, entenderemos melhor.</p>
                    </div>
                    <Link>
                        <img className={styles.imageRigth} src={arrowImage} alt="Botão para ir para a próxima tela"/>
                    </Link>
                </div>
            </body>
        </>
    );
}

export default Phase1Page1;
