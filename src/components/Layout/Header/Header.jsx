import styles from './Header.module.css'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'; //CSS do AOS

export default function Header(){
    useEffect(() => {
        Aos.init({
            duration: 2000, // Tempo de duração da animação (opcional)
            once: true,     // Anima apenas uma vez (opcional)
        });
    }, []); // O array vazio garante que isso seja executado apenas uma vez

    const scrollToSection=((id)=>{
       
        const element = document.getElementById(id)
        if(element){
            element.scrollIntoView({ behavior: 'smooth'});
        }
    })
    return(
        <header className={styles.header}>
            <img src="./img/gb.png" alt="gb.png" className={styles.logo} />
            <div className={styles.links} >
                <span
                    role="button"
                    onClick={() => scrollToSection('home')}
                >
                    Home
                </span>
                <span
                    role="button"
                    onClick={() => scrollToSection('aboutMe')}
                >
                    Sobre Mim
                </span>
                <span
                    role="button"
                    onClick={() => scrollToSection('projects')}
                    
                >
                    Projetos
                </span>

            </div>
        </header>
    )
}