import React from "react";

const SepartePage = (props) => {
    return(
        <main className="holder">
        <h2>Forma parte de nuestro equipo</h2>
        <hr/>
        <div className="fila fila-seParte">
            <div className="columna67">
                <h3>Juntos llegarémos más lejos!</h3>
                <p>
                    Al Cuidado busca permanentemente nuevas incorporaciones en nuestros tres frentes.
                    Si representas a una empresa y llegaste hasta aquí, es probable que hayamos llegado a ustedes
                    a traves de alguno de nuestros programas de divulgación. 
                    Si sos médico independiente o representas a una clínica, tal vez quieras formar parte de nuestro
                    equipo de profesionales.
                    O puede que seas un paciente diabético y neccesitás nuestra asistencia.
                    En cualquier caso, te invitamos a visitar nuestra sección de contacto para enviarnos un mensaje describiendo tu intención
                    de pertenecer y te contactarémos inmediatamente. Juntos estarémos al cuidado de la salud de los argentinos! 
                </p>
            </div>
            <div className="columna33 img-seParte">
                <img className="" src="img/globo.png" alt="globo"/>
            </div>
        </div>
    </main>
    );
}

export default SepartePage;