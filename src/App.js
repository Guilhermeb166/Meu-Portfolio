import Header from './components/Layout/Header/Header';
import './index.css';
import Home from './components/Home/Home';
import { motion } from "motion/react"
import Welcome from './components/Welcome/Welcome';
import { useState } from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

function App() {
  const [startTransition, setStartTransition] = useState(false);
  //startTransition: Estado booleano inicializado como false. Controla quando a transição entre as telas deve ocorrer.
  const [isHomeReady, setIsHomeReady] = useState(false); // Controla se o Home está pronto

  const handleShowPortfolio = () => {
    setStartTransition(true); // Inicia a transição
  };


  const handleHomeLoaded = () => {
    // Indica que o componente Home está pronto
    setIsHomeReady(true);
  };
  
  return (
    <div className="App">
    {/* Tela de Bem-vindo */}
    <motion.div
      initial={{ y: 0, opacity: 1 }} // fica vísivel até aparecer o component home
      animate={startTransition && isHomeReady ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 2 }}
      style={{
          position: "absolute",
          width: "100%",
          height: "100%",
      }}
    >
      <Welcome onClick={handleShowPortfolio} />
    </motion.div>
    {/* Tela do Projeto */}
    {startTransition && (
        <motion.div
          initial={{ y: "100%" }} 
          animate={isHomeReady ? { y: 0 } : { y: "100%" }}
          transition={{ duration: 2 }} 
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <Header />
          <main>
            <Home onLoad={handleHomeLoaded} />
            <AboutMe />
            <Projects/>
          </main>
        </motion.div>
      )}
    
    </div>
  );
}

export default App;
