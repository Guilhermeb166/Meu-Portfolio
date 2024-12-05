import { RiArrowDownDoubleLine } from 'react-icons/ri'
import { ReactTyped } from 'react-typed';
import styles from './Welcome.module.css'
export default function Welcome({onClick}){
    return(
        <div className={styles.welcome}>
            <div>
                <img src="./img/devImg.svg" alt="dev imagem" className={styles.devImg}/>
                <p className={styles.text}>Bem vindo!, meu nome é Guilherme Barroso e eu sou um</p>
                <ReactTyped
                    strings={['Desenvolvedor Front End']}
                    typeSpeed={50}
                    backSpeed={30}
                    loop={true}
                    className={styles.textAnimation}
                />
                
                
            </div>
            <RiArrowDownDoubleLine className={styles.ShowPortfolio} onClick={onClick}/>
        </div>
    )
}