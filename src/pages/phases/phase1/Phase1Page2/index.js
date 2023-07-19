import React from 'react';
import styles from "./Phase1Page2.module.css";
import phase1Image2 from "../../../../assets/images/phases/phase1/phase-1-image-2.png";
import PhaseScreen from "../../../../components/PhaseScreen";

function Phase1Page2() {
    return (
        <>
            <body className={styles.screen}>
                <h1 className={styles.titlePhase}>FASE 1</h1>
                <PhaseScreen 
                    props={{phaseImage : phase1Image2, textOfQuest : "As telas dos computadores são divididas em uma grade de pequenos quadrados, podendo ser cada um de uma cor específica. Chamamos esses quadrados de elementos  de imagem ou pixels.", textAlt : "Imagem de um computador com representação de pixels em sua tela"}} 
                    routesProperties={{buttonLeft : "/phase1screen1", buttonRight:"/phase1screen3"}}/>
            </body>
        </>
    );
}

export default Phase1Page2;
