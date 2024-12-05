import { RiArrowDownDoubleLine } from 'react-icons/ri'
import { ReactTyped } from 'react-typed';
import Aos from 'aos';
import 'aos/dist/aos.css'; //CSS do AOS
import styles from './Welcome.module.css'
import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
export default function Welcome({onClick}){
    const [loading,setLoading] = useState(true) //estado de loading
    useEffect(() => {
        Aos.init({
            duration: 1000, // Tempo de duração da animação (opcional)
            once: true,     // Anima apenas uma vez (opcional)
        });
        // Lista de imagens que você quer precarregar
        const imagesToLoad = [
            '/img/devImg.svg',
            '/img/fundoDev.jpg',
            '/img/backgroundHome.jpg'
        ];
        const preloadImages = (images) =>{
            let loadedImages = 0 //Essa variável será usada para contar quantas imagens foram carregadas com sucesso.
            images.forEach((src)=>{ // Utilizamos o método .forEach para percorrer cada item do array images.
                const img = new Image(); //Esse objeto nos permite carregar imagens manualmente sem adicioná-las imediatamente à página.
                img.src = src;
                /*Configuramos a propriedade src da imagem com o caminho atual (src) do loop,
                Isso faz o navegador iniciar automaticamente o download da imagem.*/
                
                img.onload = () => {//Usamos o evento onload para definir uma função que será executada quando a imagem for carregada com sucesso.
                    loadedImages++;//Quando a imagem atual termina de carregar, aumentamos o valor de loadedImages em 1.
                    if (loadedImages === images.length) {//Se ambos forem iguais, significa que todas as imagens do array foram carregadas.
                        setLoading(false); // Sair do estado de loading quando todas as imagens carregarem
                    }
                };

            })
        }
        preloadImages(imagesToLoad);
    }, []); // O array vazio garante que isso seja executado apenas uma vez
    return(
        <div>
            {loading?(
                <div className={styles.loading}>
                    <AiOutlineLoading3Quarters className={styles.loadingIcon}/>
                </div>
            ):(
                <div className={styles.welcome}>
                        <div data-aos="fade-down">
                            <img src="./img/devImg.svg" alt="dev imagem" className={styles.devImg}/>
                            <p className={styles.text}>Bem vindo! <p>meu nome é Guilherme Barroso e eu sou </p></p>
                            <ReactTyped
                                strings={['Desenvolvedor Web']}
                                typeSpeed={50}
                                backSpeed={30}
                                loop={false}
                                className={styles.textAnimation}
                            />
                        </div>
                        <RiArrowDownDoubleLine className={styles.ShowPortfolio} onClick={onClick}/>
                </div>  
            )}
        </div>
    )
}
