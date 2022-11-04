import React from "react";

const ServiciosPage = (props) => {
    return(
        <main className="holder">
        <h2>Servicios</h2>
        <hr/>
        <div className="servicio">
            <img src="img/relacion_empresa.png" alt="relacion_empresa"/>
            <div className="info_servicio">
                <h3>Conectamos con empresas</h3>
                <p>
                    La fundación se encarga de contactar con las empresas que estén interesadas en apoyar la causa.
                    No realizamos el contacto deliveradamente, sino que en principio nos damos a conocer mediante un programa de divulgación.
                    Luego esperamos que los interesados nos contacten, y de esa manera se genera el vínculo.
                    Una vez que la empresa expresa su voluntad de pertenecer. Realizamos todos los tramites pertinentes y de ser necesario asesoramos a los interesados
                    para que la asociación sea exitosa.
                </p>
            </div>
        </div>

        <div className="servicio">
            <img src="img/doctora_consulta.png" alt="doctora_consulta"/>
            <div className="info_servicio">
                <h3>Administramos el tratamiento de pacientes diabéticos</h3>
                <p>
                    Contamos con diferentes programas de captacion de pacientes con dificultades para ingresar a la salud pública o privada.
                    Del mismo modo captamos clínicas y médicos voluntarios que atiendan la salud de esos pacientes.
                    Ponemos a disposición los medios necesarios para iniciar el vínculo y garantizar la permanencia de los pacientes en sus tratamientos. 
                </p>
            </div>
        </div>

        <div className="servicio">
            <img src="img/teleconsulta.png" alt="teleconsulta"/>
            <div className="info_servicio">
                <h3>Conectamos a los pacientes con médicos especialiestas</h3>
                <p>
                La fundación cuenta con clínicas asociadas voluntariamente, las cuales prestan servicios de salud a los pacientes diabéticos beneficiados por nuestra fundación.
                    Nosotros mediamos el contacto del paciente con su médico, y nos aseguramos de que tanto el médico como el paciente cuenten con todo lo necesario para llevar adelante el tratamiento.
                    Realizamos un seguimiento para asegurarnos que el paciente se encuentre efectivamente transitando el tratamiento y facilitamos su permanencia.
                    
                </p>
            </div>
        </div>

    </main>
    );
}

export default ServiciosPage;