import { useEffect,useRef } from 'react';
import styles from './Home.module.css'
export default function Home({onLoad}){
    
  const divRef = useRef();
  const buttonRef = useRef();

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
        // Simula carregamento e avisa quando está pronto
        const timer = setTimeout(() => {// usada para executar algo uma única vez após um tempo determinado.
          if (onLoad) onLoad();//a verifica se a função onLoad foi passada como uma prop para o componente.
        },100);
    
        return () => clearTimeout(timer);
        //Cancela o temporizador criado pelo setTimeout, garantindo que ele não execute o código após o componente ser desmontado.
      }, [onLoad]);//O efeito só será executado novamente se a prop onLoad mudar.

    return(
        <section className={styles.home} id="home">
          <div ref={divRef}  className={styles.content}>
            <h1 className={styles.name}>Guilherme Barroso</h1>
            <h1 className={styles.lastName}>Desenvolvedor Web</h1>
          </div>
          <button className={styles.curriculumBtn} ref={buttonRef}><a download={'/curriculo/curriculoG.pdf'} href={'/curriculo/curriculoG.pdf'}>Download Currículo</a></button>
        </section>
    )
}