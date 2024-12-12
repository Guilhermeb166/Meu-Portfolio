import styles from './AboutMe.module.css'
export default function AboutMe(){
    return(
        <section id="aboutMe" className={styles.AboutMe}>
            <h1 className={styles.title}>Sobre Mim</h1>
            <div>
                <p className={styles.text}>Sou Guilherme Barroso, estudante do 5º semestre de Ciência da Computação e desenvolvedor web. 
                    Tenho 19 anos e, apesar de ainda não ter experiência profissional, venho adquirindo conhecimento e 
                    desenvolvendo minhas habilidades através de projetos pessoais. Estou me dedicando à criação de sites funcionais
                    e bem estruturados, sempre buscando aprender e me aperfeiçoar nas tecnologias mais modernas do mercado.
                </p>
            </div>
        </section>
    )
}