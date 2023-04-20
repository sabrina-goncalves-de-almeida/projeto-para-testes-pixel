import styles from "./Home.module.css";
import Button from "../../components/Button";
import homeScreen from "../../assets/images/homeScreen/home_screen_image.png";

function Home() {
    return (
        <>
            <body className={styles.container}>
                <img className={styles.homeScreenImg} src={homeScreen} alt="Imagem da página Home" />
                <h1 className={styles.textTitle}>COLORINDO COM NÚMEROS</h1>
                <h2 className={styles.textSubtitle}>Representação de Imagens</h2>
                <Button text={"INICIAR"}></Button>
            </body>
        </>
    );
}

export default Home;
