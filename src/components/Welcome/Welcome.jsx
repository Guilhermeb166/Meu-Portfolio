import { RiArrowDownDoubleLine } from 'react-icons/ri'
import { ReactTyped } from 'react-typed';

import styles from './Welcome.module.css'
import ParticleBackground from '../Particle/ParticleBackground';
import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
export default function Welcome({onClick}){
    const [loading,setLoading] = useState(true) //estado de loading

    // Lista de imagens que você quer precarregar
    const imagesToLoad = [
        '/img/devImg.svg',
        '/img/fundoDev.jpg',
        '/img/backgroundHome.jpg',
        '/img/fundoDevMobile.jpg'
    ];
    
    useEffect(() => {
        
        const preloadImages = (images) => {
          let loadedImages = 0; // Contador interno
          images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              loadedImages++;
              if (loadedImages === images.length) {
                setLoading(false); // Sai do estado de loading quando todas as imagens carregarem
              }
            };
            img.onerror = () => {
              console.warn(`Erro ao carregar imagem: ${src}`);
              loadedImages++;
              if (loadedImages === images.length) {
                setLoading(false); // Sai do estado de loading quando todas as imagens tentarem carregar
              }
            };
          });
        };
    
        preloadImages(imagesToLoad); // Precarrega todas as imagens
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []); // Executa apenas uma vez ao montar o componente
    

    return(
        <div>
            {loading?(
                <div className={styles.loading}>
                    <AiOutlineLoading3Quarters className={styles.loadingIcon}/>
                </div>
            ):(
                <div className={styles.welcome}>
                    <ParticleBackground />
                        <div style={{zIndex:10}}>
                            <img src="./img/devImg.svg" alt="dev imagem" className={styles.devImg} />
                            <p className={styles.text}>Bem vindo ao meu portfólio !</p>
                            <ReactTyped
                                strings={['Descubra mais clicando logo abaixo ']}
                                typeSpeed={50}
                                backSpeed={30}
                                loop={false}
                                className={styles.textAnimation}
                                showCursor={false} 
                            />
                        </div>
                        <RiArrowDownDoubleLine className={styles.ShowPortfolio} onClick={onClick}/>
                </div>  
            )}
        </div>
    )
}
