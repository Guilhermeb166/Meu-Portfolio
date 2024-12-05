import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './index.css';
import Home from './components/Home/Home';
import { motion } from "motion/react"
import Welcome from './components/Welcome/Welcome';
import { useState } from 'react';

function App() {
  const [startTransition, setStartTransition] = useState(false);
  //startTransition: Estado booleano inicializado como false. Controla quando a transição entre as telas deve ocorrer.

  const handleShowPortfolio = () => {
    setStartTransition(true); // Inicia a transição
  };

  
  return (
    <div className="App">
    {/* Tela de Bem-vindo */}
    <motion.div
      initial={{ y: 0 }} 
      animate={startTransition ? { y: "-100%" } : { y: 0 }} 
      transition={{ duration: 1 }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <Welcome onClick={handleShowPortfolio}/>
    </motion.div>
    {/* Tela do Projeto */}
    {startTransition && (
        <motion.div
          initial={{ y: "100%" }} 
          animate={{ y: 0 }} 
          transition={{ duration: 1 }} 
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </motion.div>
      )}
    
    </div>
  );
}

export default App;
