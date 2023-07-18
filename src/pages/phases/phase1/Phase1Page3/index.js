import React from 'react';
import styles from "./Phase1Page3.module.css";
import phase1Image3 from "../../../../assets/images/phases/phase1/phase-1-image-3.png";
import PhaseScreen from "../../../../components/PhaseScreen";

function Phase1Page3() {
    return (
        <>
            <body className={styles.screen}>
                <h1 className={styles.titlePhase}>FASE 1</h1>
                <PhaseScreen 
                    props={{phaseImage : phase1Image3, textOfQuest : "Em uma imagem em preto e branco, cada pixel pode ser preto ou branco, então tudo que o computador precisa armazenar é quais pontos são pretos e quais são brancos.", textAlt : "Imagem de um cursor"}} 
                    routesProperties={{buttonLeft : "/phase1screen2", buttonRight:"/phase1screen4"}}/>
            </body>
        </>
    );
}

export default Phase1Page3;
