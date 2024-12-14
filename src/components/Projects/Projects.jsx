import Project from './Project/Project'
import styles from './Projects.module.css'
export default function Projects(){
    return(
        <section id='projects' className={styles.projectsContainer}>
            <h1>Meus Projetos</h1>
            <article className={styles.projects}>
                <Project image={'/projetos/tela-ecommerce.png'} name={'Projeto E-commerce'} description={'Meu projeto de e-commerce foi uma iniciativa pessoal focada em desenvolver uma aplicação funcional. O objetivo principal foi criar uma interface intuitiva e responsiva, que simulasse a experiência de um e-commerce real. A aplicação conta com páginas essenciais para um e-commerce, como a página inicial, filtragem de produtos, página de detalhes de produtos, carrinho de compras e uma página de pagamento.'} tech={'React, Css, Material-UI, Swiper.js.'} url={'https://projeto-e-commerce-techstore.vercel.app/'}/>

                <Project image={'/projetos/tela-todoList.png'} name={'Projeto To-Do-List'} description={'Meu projeto de To-Do List foi uma aplicação pessoal desenvolvida para organizar tarefas e explorar funcionalidades básicas de React. A ideia foi criar uma interface simples, mas eficiente, onde o usuário pudesse adicionar, editar e excluir tarefas. Utilizei o firebase para colocar meu banco de dados e hospedei tudo no vercel.'} tech={'React, Css, Node.js, Axios, Firebase, Material-UI.'} url={'https://to-do-list-guilherme-project.vercel.app/'}/>

                <Project image={'/projetos/tela-Mario.png'} name={'Jogo do Mario'} description={'Este projeto foi uma experiência pessoal enriquecedora, onde criei um jogo simples e divertido inspirado no universo do Mario. Tem como objetivo principal fazer o Mario saltar sobre canos que se movem em sua direção. A cada obstáculo superado, a pontuação do jogador aumenta. O desafio de implementar a lógica para o movimento dos canos e a detecção de colisão entre o Mario e os obstáculos me fez aprofundar meu conhecimento sobre coordenadas, intervalos e funções de controle de eventos.'} tech={'Html, Css, Javascript'}/>
            </article>
        </section>
    )
}