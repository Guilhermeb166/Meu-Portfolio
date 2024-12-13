import styles from './AboutMe.module.css'
import { RiJavascriptFill, RiTailwindCssFill  } from "react-icons/ri";
import { SiCss3,SiAxios  } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { FaHtml5,FaReact,FaNodeJs,FaSass,FaGitAlt    } from "react-icons/fa";
export default function AboutMe(){
    return(
        <section id="aboutMe" className={styles.AboutMe}>
            <article>
                <h1 className={styles.title}>Sobre Mim</h1>
                <div className={styles.textContainer}>
                    <p className={styles.text}>Sou Guilherme Barroso, estudante do 5º semestre de Ciência da Computação e desenvolvedor web.
                        Tenho 19 anos e, apesar de ainda não ter experiência profissional, venho adquirindo conhecimento e
                        desenvolvendo minhas habilidades através de projetos pessoais. Estou me dedicando à criação de sites funcionais
                        e bem estruturados, sempre buscando aprender e me aperfeiçoar nas tecnologias mais modernas do mercado.
                    </p>
                </div>
            </article>
            <article className={styles.skillsContainer}>
                <h1>Skills</h1>
                <div className={styles.skills}>
                    <FaReact className={`${styles.skillsIcon} ${styles.reactIcon}`}/> 
                    <RiJavascriptFill className={`${styles.skillsIcon} ${styles.jsIcon}`}/>
                    <SiCss3 className={`${styles.skillsIcon} ${styles.cssIcon}`}/>
                    <FaHtml5 className={`${styles.skillsIcon} ${styles.htmlIcon}`}/>
                    <FaNodeJs className={`${styles.skillsIcon} ${styles.nodeIcon}`}/>
                    <RiTailwindCssFill className={`${styles.skillsIcon} ${styles.twIcon}`}/>
                    <TbBrandMysql className={`${styles.skillsIcon} ${styles.sqlIcon}`}/>
                    <SiAxios className={`${styles.skillsIcon} ${styles.axiosIcon}`}/>
                    <FaSass className={`${styles.skillsIcon} ${styles.sassIcon}`}/>
                    <FaGitAlt className={`${styles.skillsIcon} ${styles.gitIcon}`}/>
                </div>
            </article>
        </section>
    )
}