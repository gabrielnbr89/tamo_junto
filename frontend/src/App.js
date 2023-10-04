import{BrowserRouter,Routes,Route} from "react-router-dom";

import "./estilos/App.css";
import "./estilos/Header.css"
import "./estilos/Footer.css";
import "./estilos/Nav.css";
import "./estilos/Homepage.css"
import "./estilos/Articulos.css";
import "./estilos/QueHacemos.css";
import "./estilos/Contacto.css";
import "./estilos/QuienesSomos.css"


import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';
import Header from './componentes/layout/Header';
import ContactoPage from './paginas/ContactoPage';
import HomePage from './paginas/HomePage';
import ArticulosPage from './paginas/ArticulosPage';
import QueHcemosPage from './paginas/QueHacemosPage';
import QuienesSomosPage from "./paginas/QuienesSomosPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="quienes-somos" element={<QuienesSomosPage/>} />
        <Route path="articulos" element={<ArticulosPage/>} />
        <Route path="que-hacemos" element={<QueHcemosPage/>} />
        <Route path="contacto" element={<ContactoPage/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
