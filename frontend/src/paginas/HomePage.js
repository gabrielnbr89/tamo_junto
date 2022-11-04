import React from "react";

const HomePage = (props) => {
    return(
        <main className="holder">
        <img src="img/foto_portada.png" alt="portada" />

        <section>
            <h2>¡Bienvenido!</h2>
            <p>Al Cuidado es una plataforma de información sobre diferentes patologías que vincula a asociaciones, pacientes y profesionales con el fin de ponerlos en contacto y facilitar la interacción entre ellos.
                 Las empresas asociadas facilitan la existencia de nuestra fundación mediante donaciones. Y los médicos y clínicas asociadas realizan el seguimiento de pacientes de forma voluntaria.
                  Navegá por nuestro sitio y enterate que servicios prestamos y cómo podés formar parte de nuestro equipo.
            </p>
        </section>
        <hr/>
        <div className="fila">
            <div className="columna33">
                <h3>Proximo evento</h3>
                <a href="agenda"></a>
                <img src="img/calendario.png" alt="foto_agenda"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt amet accusamus voluptatum repellat fugit, saepe adipisci voluptatem possimus est dolor molestias ullam neque ipsam in maxime ut a dolore deleniti!</p>
            </div>
            <div className="columna33">
                <h3>Actualidad</h3>
                <img src="img/diario.png" alt="foto_noticias"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quo...</p>
                <a href="noticias.html">continuar leyendo...</a>
            </div>
            <div className="columna33">
                <h3>Socios Al Cuidado</h3>
                <a href=""><img src="https://via.placeholder.com/130" alt=""/></a>
                <a href=""><img src="https://via.placeholder.com/130" alt=""/></a>
                <a href=""><img src="https://via.placeholder.com/130" alt=""/></a>
                <a href=""><img src="https://via.placeholder.com/130" alt=""/></a>
            </div>
        </div>
    </main>
    );
}

export default HomePage;