import React, { useState } from 'react';
import Formulario from './Formulario';
import Pregunta from './Pregunta';
import { preguntaData } from '../data/preguntaData';
import { useNavigate } from 'react-router-dom';
import '../styles/diagnostico.css';

function Diagnostico({ respuestas, setRespuestas, usuario, setUsuario }) {
    const [indice, setIndice] = useState(0);
    const [formularioCompletado, setFormularioCompletado] = useState(false);
    const navigate = useNavigate();

    const handleRespuesta = (respuesta) => {
        const preguntaActual = preguntaData[indice];
        const categoria = preguntaActual.categoria;

        const nuevaRespuesta = {
            ...respuestas,
            [categoria]: (respuestas[categoria] || 0) + (respuesta === 'Sí' ? 1 : 0),
        };

        setRespuestas(nuevaRespuesta);

        let nuevoIndice = indice + 1;
        if (nuevoIndice < preguntaData.length) {
            setIndice(nuevoIndice);
        } else {
            navigate('/diagnostico/resultados'); // Navega a los resultados
        }
    };

    if (!formularioCompletado) {
        return (
            <Formulario
                usuario={usuario}
                setUsuario={setUsuario}
                onComplete={() => setFormularioCompletado(true)}
            />
        );
    }

    return (
        <div className="diagnostico-container">
            <div className="pregunta-container">
                {preguntaData[indice] && (
                    <Pregunta pregunta={preguntaData[indice]} handleRespuesta={handleRespuesta} />
                )}
            </div>
        </div>
    );
}

export default Diagnostico;
