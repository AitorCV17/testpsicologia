import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/formulario.css';

function Formulario({ usuario, setUsuario, onComplete }) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (usuario.nombre && usuario.edad) {
            onComplete(); // Notifica que el formulario está completo
        } else {
            alert('Por favor, ingresa tu nombre y edad');
        }
    };

    return (
        <div className="formulario-container container d-flex justify-content-center align-items-center">
            <div className="formulario">
                <h2>Por favor, ingresa tus datos</h2>
                <form onSubmit={handleSubmit} className="w-100">
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={usuario.nombre}
                        onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
                        className="form-control mb-2"
                    />
                    <input
                        type="number"
                        placeholder="Edad"
                        value={usuario.edad}
                        onChange={(e) => setUsuario({ ...usuario, edad: e.target.value })}
                        className="form-control mb-3"
                    />
                    <button type="submit" className="btn btn-primary">Comenzar Diagnóstico</button>
                </form>
            </div>
        </div>
    );
}

export default Formulario;
