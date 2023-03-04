import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const HomePage = (props) => {
    return (
        <main className="holder">
            <Carousel className="carousel" autoPlay interval={5000} showThumbs={false}>
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
            </Carousel>


            <section>
                <h2>Bem-vindo!</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt amet accusamus voluptatum repellat fugit, saepe adipisci voluptatem possimus est dolor molestias ullam neque ipsam in maxime ut a dolore deleniti!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt amet accusamus voluptatum repellat fugit, saepe adipisci voluptatem possimus est dolor molestias ullam neque ipsam in maxime ut a dolore deleniti!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt amet accusamus voluptatum repellat fugit, saepe adipisci voluptatem possimus est dolor molestias ullam neque ipsam in maxime ut a dolore deleniti!
                </p>
            </section>
            <hr />
            <div className="fila">
                <div className="columna33">
                    <h3>Inovação</h3>
                    <img src="https://via.placeholder.com/280" alt="foto_agenda" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt amet accusamus voluptatum repellat fugit, saepe adipisci voluptatem possimus est dolor molestias ullam neque ipsam in maxime ut a dolore deleniti!</p>
                </div>
                <div className="columna33">
                    <h3>Solidaridade</h3>
                    <img src="https://via.placeholder.com/280" alt="foto_noticias" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quo...</p>
                    <a href="noticias.html">continuar leyendo...</a>
                </div>
                <div className="columna33">
                    <h3>Eficácia</h3>
                    <img src="https://via.placeholder.com/280" alt="foto_noticias" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quo...</p>
                </div>
            </div>
            <hr />
            <section>
                <h2>Nossos associados</h2>
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