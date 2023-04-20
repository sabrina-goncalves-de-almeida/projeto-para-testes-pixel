import styles from "./PhaseSelection.module.css";
import CardLevel from "../../components/CardLevel";
import imagePhase1 from "../../assets/images/levelSelection/fase1.png";
import imagePhase2 from "../../assets/images/levelSelection/fase2.png";
import imagePhase3 from "../../assets/images/levelSelection/fase3.png";
import imagePhase4 from "../../assets/images/levelSelection/fase4.png";

function PhaseSelection() {
  return (
    <>
      <body className={styles.screen} >
        <div className={styles.container} >
          <h1 className={styles.title} >Seleção de Fases</h1>
          <CardLevel props={{phase : "1", textPhase : "Imagens e pixels"}} imageCard={{imagePhase: imagePhase1, textAlternaive: "Imagem do card de seleção da Fase 1"}} routesProperties="/phase1screen1" />
          <CardLevel props={{phase : "2", textPhase : "Codificar imagens com 1 e 0"}} imageCard={{imagePhase: imagePhase2, textAlternaive: "Imagem do card de seleção da Fase 2"}} routesProperties="/phase2screen2" />
          <CardLevel props={{phase : "3", textPhase : "Imagens compactas"}} imageCard={{imagePhase: imagePhase3, textAlternaive: "Imagem do card de seleção da Fase 3"}} routesProperties="/phase3screen3" />
          <CardLevel props={{phase : "4", textPhase : "Usando run-length coding"}} imageCard={{imagePhase: imagePhase4, textAlternaive: "Imagem do card de seleção da Fase 4"}} routesProperties="/phase4screen4" />
        </div>
      </body>
    </>
  );
}

export default PhaseSelection;
