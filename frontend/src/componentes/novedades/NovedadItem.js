import React from "react";

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;
    return (
        <div className="novedad">
            <h3>{title}</h3>
            <div className="info_novedad">
                <div className="subtitulo_cuerpo">
                    <h4>{subtitle}</h4>
                    <p dangerouslySetInnerHTML={{ __html: body }} />
                </div>
                <img src={imagen} alt="imagen" />
            </div>
            
            <hr />
        </div>
    );
}

export default NovedadItem;