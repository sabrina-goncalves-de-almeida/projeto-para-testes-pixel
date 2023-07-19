import React from 'react';
import styles from "./Phase1Page1.module.css";
import phase1Image1 from "../../../../assets/images/phases/phase1/phase-1-image-1.png";
import PhaseScreen from "../../../../components/PhaseScreen";

function Phase1Page1() {
    return (
        <>
            <body className={styles.screen}>
                <h1 className={styles.titlePhase}>FASE 1</h1>
                <PhaseScreen 
                    props={{phaseImage : phase1Image1, textOfQuest : "Você sabia que os computadores armazenam desenhos, fotografias, e outras imagens usando apenas números? A seguir, entenderemos melhor.", textAlt : "Imagem de um garoto usando o computador"}} 
                    routesProperties={{buttonLeft : "/phaseselection/", buttonRight:"/phase1screen2"}}/>
            </body>
        </>
    );
}

export default Phase1Page1;
