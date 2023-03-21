import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Counter from '../componentes/animations/Counter.js';


const HomePage = (props) => {
    return (
        <main className="holder">
            {/* <Carousel className="carousel" autoPlay interval={5000} showThumbs={false}>
                <div>
                    <img src="https://via.placeholder.com/960x320" alt="imagen1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://via.placeholder.com/960x320" alt="imagen2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://via.placeholder.com/960x320" alt="imagen3" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
            <section>
                <h2>Contribuímos ao acesso da população à saúde através da
                    convivência e integração entre as estruturas públicas,
                    privadas e o terceiro setor, visando uma assistência com
                    maior qualidade e eficiência.
                </h2>
            </section>
            <hr />
            <div className="fila">
                <div className="columna33">
                    <img src="img/tecnologia_inovadora.png" alt="foto_teleconsulta" />
                    {/* <h3>Tecnologia inovadora</h3> */}
                    <p>Novas tecnologias para solucionar de forma inovadora e escalável desafios de prevenção e promoção à saúde.</p>
                    <a>Teleconsulta</a><br/>
                    <a>Política Privacidade dados</a>
                </div>
                <div className="columna33">
                    <img src="img/projetos_subprojetos.png" alt="projetos_subprojetos" />
                    {/* <h3>Projetos e Sub-projetos</h3> */}
                    <p>Cuidando do meu diabetes com uma pequena ajuda dos meus amigos.</p>
                    <a>Projetos e Sub-projetos</a><br/>
                    <a href="/stakeholders">Stakeholders</a>
                </div>
                <div className="columna33">
                    <img src="img/gestao_cuidado.png" alt="gestao_cuidado" />
                    {/* <h3>Gestão do cuidado</h3> */}
                    <p>Uma adequada GESTÃO da doença como forma para manter o sistema funcionando em harmonia.</p>
                    <a>Gestão gcdc</a><br/>
                    <a>Atualizações</a><br/>
                    <a>Transparencia</a>
                </div>
            </div>
            
            <div className="socios">           
                    <Counter/>
            </div>
            <hr />
            <section>
                <h2>NOSSOS PARCEIROS</h2>
                <div className="fila">
                    <div className="columna100 socios">
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />

                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;