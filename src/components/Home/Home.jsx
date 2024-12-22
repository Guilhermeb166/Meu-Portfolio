import { useEffect,useRef, useState } from 'react';
import styles from './Home.module.css'
export default function Home({onLoad}){
  const divRef = useRef();
  const buttonRef = useRef();
  const [background, setBackground] = useState(''); // Estado para controlar o background
  

  useEffect(() => {
    const observer = new IntersectionObserver //Cria um observador que monitora quando elementos entram ou saem da área visível (viewport) do navegador.
    ((entries) => {//
        entries.forEach((entry) => {// iteramos sobre cada elemento observado (entry) para verificar se ele está visível.
          if (entry.isIntersecting) {//Verifica se o elemento está visível na viewport. 
            //A propriedade isIntersecting será true quando o elemento estiver visível e false quando não estiver.
            entry.target.classList.add(styles.animate);//Se o elemento estiver visível (isIntersecting === true), adiciona a classe CSS styles.animate
          } else {
            entry.target.classList.remove(styles.animate);//Se o elemento não estiver visível, remove a classe styles.animate
          }
        });
      },
      { threshold: 0.2 }//Configura o observador para ativar o callback quando 10% do elemento estiver visível. 
    );

    const div = divRef.current;
    const button = buttonRef.current;

    if (div) observer.observe(div);
    if (button) observer.observe(button);

    return () => {
      if (div) observer.unobserve(div);
      if (button) observer.unobserve(button);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 481) {
        // Troca o fundo para mobile
        setBackground(`
          linear-gradient(
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.1),
            rgba(0, 0, 0, 0.526),
            rgb(0, 0, 0)
          ),
          url('/img/fundoDevMobile.jpg') no-repeat center center / cover
        `);
      } else {
        // Retorna ao fundo padrão
        setBackground(`
          linear-gradient(
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.1),
            rgba(0, 0, 0, 0.526),
            rgb(0, 0, 0)
          ),
          url('/img/fundoDev.jpg') no-repeat center center / cover
        `);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Chama o onLoad quando o componente estiver pronto
    if (onLoad) {
      onLoad();
    }
  }, [onLoad]);

    return(
        <section className={styles.home} id="home"   style={{ background }}>
          <div ref={divRef}  className={styles.content}>
            <h1 className={styles.name}>Guilherme Barroso</h1>
            <h1 className={styles.lastName}>Desenvolvedor Web</h1>
          </div>
          <button className={styles.curriculumBtn} ref={buttonRef}><a download={'/curriculo/curriculoG.pdf'} href={'/curriculo/curriculoG.pdf'}>Download Currículo</a></button>
        </section>
    )
}