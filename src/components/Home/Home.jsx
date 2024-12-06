import { useEffect } from 'react';
import styles from './Home.module.css'
export default function Home({onLoad}){

    useEffect(() => {
        // Simula carregamento e avisa quando está pronto
        const timer = setTimeout(() => {// usada para executar algo uma única vez após um tempo determinado.
          if (onLoad) onLoad();//a verifica se a função onLoad foi passada como uma prop para o componente.
        });
    
        return () => clearTimeout(timer);
        //Cancela o temporizador criado pelo setTimeout, garantindo que ele não execute o código após o componente ser desmontado.
      }, [onLoad]);//O efeito só será executado novamente se a prop onLoad mudar.

    return(
        <main className={styles.home}>
          <div>
            <h1 className={styles.name}>Guilherme Barroso</h1>
            <h1 className={styles.lastName}>Desenvolvedor Web</h1>
          </div>
        </main>
    )
}