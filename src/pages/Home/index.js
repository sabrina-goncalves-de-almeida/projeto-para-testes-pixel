import styles from "./Home.module.css";
import homeScreen from "../../assets/images/homeScreen/home_screen_image.png";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className={styles.screen}>
            <img className={styles.homeScreenImg} src={homeScreen} alt="Imagem da página Home" />
            <h1 className={styles.textTitle}>COLORINDO COM NÚMEROS</h1>
            <h2 className={styles.textSubtitle}>Representação de Imagens</h2>
            <Link className={styles.buttonContainer} to="/phaseselection">
                <h3 className={styles.textLink} >INICIAR</h3>
            </Link>
        </div>
    );
}

export default Home;
