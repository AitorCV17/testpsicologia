import React from 'react';
import '../styles/formulario.css';

function Formulario({ usuario, setUsuario, onComplete }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (usuario.nombre && usuario.edad >= 0) {
            onComplete(); // Notifica que el formulario está completo
        } else {
            alert('Por favor, completa tu nombre y asegura que la edad sea 0 o mayor.');
        }
    };

    const handleEdadChange = (e) => {
        const edad = parseInt(e.target.value, 10);
        if (isNaN(edad) || edad < 0) {
            // Evita valores negativos o inválidos
            setUsuario({ ...usuario, edad: '' });
        } else {
            setUsuario({ ...usuario, edad });
        }
    };

    return (
        <div className="formulario-container container d-flex justify-content-center align-items-center">
            <div className="formulario">
                <h2>Completa tus datos para iniciar</h2>
                <p className="formulario-descripcion">
                    Para realizar el diagnóstico, por favor proporciónanos tu nombre y tu edad.
                    Esta información nos ayudará a personalizar tu experiencia.
                </p>
                <form onSubmit={handleSubmit} className="w-100">
                    <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        value={usuario.nombre}
                        onChange={(e) => setUsuario({ ...usuario, nombre: e.target.value })}
                        className="form-control mb-3"
                    />
                    <input
                        type="number"
                        placeholder="Ingresa tu edad"
                        value={usuario.edad}
                        onChange={handleEdadChange}
                        className="form-control mb-4"
                    />
                    <button type="submit" className="btn btn-primary">Iniciar Diagnóstico</button>
                </form>
            </div>
        </div>
    );
}

export default Formulario;
