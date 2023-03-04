import{BrowserRouter,Routes,Route} from "react-router-dom";

import "./estilos/App.css";
import "./estilos/Header.css"
import "./estilos/Footer.css";
import "./estilos/Nav.css";
import "./estilos/Homepage.css"
import "./estilos/Transparencia.css";
import "./estilos/Associado.css";
import "./estilos/Stakeholders.css";
import "./estilos/Contato.css";
import "./estilos/Nos.css"


import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';
import Header from './componentes/layout/Header';
import ContatoPage from './paginas/ContatoPage';
import HomePage from './paginas/HomePage';
import NosPage from './paginas/NosPage';
import TransparenciaPage from './paginas/TransparenciaPage';
import AssociadoPage from './paginas/AssociadoPage';
import StakeholdersPage from './paginas/StakeholdersPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="nos" element={<NosPage/>} />
        <Route path="transparencia" element={<TransparenciaPage/>} />
        <Route path="stakeholders" element={<StakeholdersPage/>} />
        <Route path="associado" element={<AssociadoPage/>} />
        <Route path="contato" element={<ContatoPage/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
