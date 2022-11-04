import{BrowserRouter,Routes,Route} from "react-router-dom";

import "./estilos/App.css";
import "./estilos/Header.css";
import "./estilos/Footer.css";
import "./estilos/Nav.css";
import "./estilos/Novedades.css";
import "./estilos/SeParte.css";
import "./estilos/Servicios.css";
import "./estilos/Contacto.css";
import "./estilos/Nosotros.css"


import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import ContactoPage from './paginas/ContactoPage';
import HomePage from './paginas/HomePage';
import NosotrosPage from './paginas/NosotrosPage';
import NovedadesPage from './paginas/NovedadesPage';
import SePartePage from './paginas/SePartePage';
import ServiciosPage from './paginas/ServiciosPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="nosotros" element={<NosotrosPage/>} />
        <Route path="novedades" element={<NovedadesPage/>} />
        <Route path="servicios" element={<ServiciosPage/>} />
        <Route path="separte" element={<SePartePage/>} />
        <Route path="contacto" element={<ContactoPage/>} />
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
