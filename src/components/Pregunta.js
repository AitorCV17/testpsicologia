import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Pregunta({ pregunta, handleRespuesta }) {
    return (
        <div className="pregunta container d-flex flex-column justify-content-center align-items-center card p-4 my-3 shadow-sm">
            <h2 className="card-title mb-4 text-center" style={{ fontFamily: 'Montserrat, sans-serif', color: '#2980b9' }}>{pregunta.pregunta}</h2>
            <div className="d-flex justify-content-around w-50">
                <button onClick={() => handleRespuesta("Sí")} className="btn btn-success btn-lg mx-2">Sí</button>
                <button onClick={() => handleRespuesta("No")} className="btn btn-danger btn-lg mx-2">No</button>
            </div>
        </div>
    );
}

export default Pregunta;
