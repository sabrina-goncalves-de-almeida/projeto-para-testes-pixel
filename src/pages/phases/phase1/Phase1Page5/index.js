import styles from "./Phase1Page5.module.css";

import ExerciseScreen from "../../../../components/ExerciseScreen";

function Phase1Page5() {
    return (
        <>
            <body className={styles.screen}>
                <h1 className={styles.titlePhase}>FASE 1</h1>
                <ExerciseScreen 
                    props={{ num : 25, digite: "0, 0, 0, 0,0", textOfQuest : "Uma imagem correspondente à letra C, por exemplo, poderia ser representada com números binários (bits). Se o 1 indica um quadrado branco e o 0 indica um quadrado preto, então poderíamos ter uma grade de 5 x 6 pixels como a ilustrada acima."}} 
                    routesProperties={{buttonLeft : "/phase1screen4", buttonRight:"/phase1screen6"}}/>
            </body>
        </>
    );
}

export default Phase1Page5;
