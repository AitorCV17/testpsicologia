import React from 'react';

function Pregunta({ pregunta, handleRespuesta }) {
    return (
        <div className="pregunta">
            <h3>{pregunta.pregunta}</h3> {/* Mostrar la pregunta */}
            <div className="d-flex justify-content-center mt-4">
                <button
                    className="btn pregunta-button btn-yes"
                    onClick={() => handleRespuesta('Sí')}
                >
                    Sí
                </button>
                <button
                    className="btn pregunta-button btn-no"
                    onClick={() => handleRespuesta('No')}
                >
                    No
                </button>
            </div>
        </div>
    );
}

export default Pregunta;
