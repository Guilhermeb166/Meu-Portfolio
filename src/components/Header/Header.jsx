import styles from './Header.module.css'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; //CSS do AOS
import { Link } from 'react-router-dom';
export default function Header(){
    useEffect(() => {
        Aos.init({
            duration: 3000, // Tempo de duração da animação (opcional)
            once: true,     // Anima apenas uma vez (opcional)
        });
    }, []); // O array vazio garante que isso seja executado apenas uma vez
    return(
        <header data-aos="fade-down" className={styles.header}>
            <img src="./img/gb.png" alt="gb.png" className={styles.logo}/>
            <div className={styles.links}>
                <Link to={'/'}>Home</Link>
                <Link to={'#'}>Sobre Mim</Link>
                <Link to={'#'}>Projetos</Link>

            </div>
        </header>
    )
}