import styles from "./Phase1Page1.module.css";
import arrowImage from "../../../../assets/images/levelSelection/Group.png";
import { Link } from "react-router-dom";

function Phase1Page1() {
    return (
        <>
            <body className={styles.screen}>
                <div className={styles.container}>
                    <Link>
                        <img className={styles.imageLeft} src={arrowImage} alt="Botão para voltar para a tela anterior"/>
                    </Link>
                    <div>
                        <img  className={styles.imageLeft} src={arrowImage} alt="Botão para voltar para a tela anterior"/>
                        <p></p>
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
