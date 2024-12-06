import React from 'react';
import '../styles/pregunta.css';

function Pregunta({ pregunta, handleRespuesta }) {
    return (
        <div className="pregunta">
            <h3 className="pregunta-title">{pregunta.pregunta}</h3>
            <div className="pregunta-buttons">
                <button
                    className="btn pregunta-button btn-si"
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
