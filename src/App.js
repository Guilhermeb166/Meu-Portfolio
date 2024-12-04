import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './index.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
