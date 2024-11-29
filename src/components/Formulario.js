import React from 'react';

function Formulario({ usuario, setUsuario, setEstado }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (usuario.nombre && usuario.edad) {
            setEstado('pregunta');
        } else {
            alert('Por favor, ingresa tu nombre y edad');
        }
    };

    return (
        <div className="formulario container d-flex flex-column justify-content-center align-items-center">
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
                <button type="submit" className="btn btn-primary">Comenzar</button>
            </form>
        </div>
    );
}

export default Formulario;
