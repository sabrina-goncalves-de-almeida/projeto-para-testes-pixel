import styles from "./Phase1Page4.module.css";

import phase1Image4 from "../../../../assets/images/phases/phase1/phase-1-image-4.png";
import PhaseScreen from "../../../../components/PhaseScreen";

function Phase1Page4() {
    return (
        <>
            <body className={styles.screen}>
                <h1 className={styles.titlePhase}>FASE 1</h1>
                <PhaseScreen 
                    props={{phaseImage : phase1Image4, textOfQuest : "Uma imagem correspondente à letra C, por exemplo, poderia ser representada com números binários (bits). Se o 1 indica um quadrado branco e o 0 indica um quadrado preto, então poderíamos ter uma grade de 5 x 6 pixels como a ilustrada acima.", textAlt : "Imagem de uma grade de pixels formando a letra C"}} 
                    routesProperties={{buttonLeft : "/phase1screen3", buttonRight:"/phase1screen5"}}/>
            </body>
        </>
    );
}

export default Phase1Page4;
