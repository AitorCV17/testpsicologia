import React, { useState } from 'react';
import { preguntaData } from '../data/preguntaData'; // Importa los datos de las preguntas
import Pregunta from './Pregunta';
import { useNavigate } from 'react-router-dom';

function Diagnostico({ respuestas, setRespuestas }) {
    const [indice, setIndice] = useState(0); // Controla la pregunta actual
    const navigate = useNavigate();

    const handleRespuesta = (respuesta) => {
        const preguntaActual = preguntaData[indice];  // Obtén la pregunta actual
        const categoria = preguntaActual.categoria;

        // Actualiza las respuestas, sumando 1 si la respuesta es "Sí"
        const nuevaRespuesta = {
            ...respuestas,
            [categoria]: (respuestas[categoria] || 0) + (respuesta === 'Sí' ? 1 : 0)
        };

        setRespuestas(nuevaRespuesta);

        let nuevoIndice = indice + 1;

        // Mueve al siguiente índice de pregunta o termina si se acabaron las preguntas
        while (nuevoIndice < preguntaData.length) {
            const siguientePregunta = preguntaData[nuevoIndice];
            const preguntaDependencia = siguientePregunta.dependencia;

            // Avanza si la dependencia es satisfactoria
            if (!preguntaDependencia || nuevaRespuesta[preguntaDependencia]) {
                setIndice(nuevoIndice); // Avanza al siguiente índice
                return;
            }
            nuevoIndice++;
        }

        // Al terminar, navega a los resultados
        navigate('/diagnostico/resultados');
    };

    return (
        <div className="diagnostico-container container d-flex justify-content-center align-items-center">
            <div className="pregunta-container">
                {preguntaData[indice] && (
                    <Pregunta pregunta={preguntaData[indice]} handleRespuesta={handleRespuesta} />
                )}
            </div>
        </div>
    );
}

export default Diagnostico;
