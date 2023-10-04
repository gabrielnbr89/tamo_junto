import React from "react";
import { useState } from "react";
import axios from "axios";

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder">
            <div className="fila">
                <div className="columna67">
                    <h2>Envíanos un mensaje</h2>
                    <hr />
                    <form className="formulario" onSubmit={handleSubmit}>
                        <p>
                            <label>Nombre</label>
                            <input type='text' name='nombre' value={formData.nombre} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Teléfono</label>
                            <input type='text' name='telefono' value={formData.telefono} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Comentario</label>
                            <textarea name='mensaje' value={formData.mensaje} onChange={handleChange} />
                        </p>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                        <p className="centrar"><input type="submit" value="Enviar" /></p>
                    </form>

                </div>
                <div className="columna33 datos">
                    <img src="https://via.placeholder.com/360x200" alt="logo" />
                    <p>
                        <strong>Dirección:</strong>
                        <br />
                        calle y número
                        <br />
                        ciudad - provincia - país
                        <br />
                    </p>
                    <p>
                        <strong>Horarios de atención:</strong>
                        <br />
                        dias de semana desde hh:mm hasta hh:mm
                        <br />
                        sábados y feriados desde hh:mm hasta hh:mm
                        <br />
                    </p>
                    <p>
                        <strong>Teléfono:</strong>
                        xxxxxxxxxxxxxxx
                        <br />
                        <strong>Whatsapp:</strong>
                        xxxxxxxxxxxxxxx
                    </p>
                    <p>
                        <strong>e-mail:</strong>
                        <a href="mailto:tmjnd@ejemplo.com">fivestars@ejemplo.com</a>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default ContactoPage;