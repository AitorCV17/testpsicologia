import React, { useState } from 'react';
import { preguntaData } from '../data/preguntaData'; // Importamos las preguntaData
import Pregunta from './Pregunta';

function Diagnostico({ respuestas, setRespuestas, setEstado }) {
    const [indice, setIndice] = useState(0);

    const handleRespuesta = (respuesta) => {
        const preguntaActual = preguntaData[indice];
        const categoria = preguntaActual.categoria;

        // Aseguramos que las respuestas sean siempre numéricas y se incrementen correctamente
        const nuevaRespuesta = {
            ...respuestas,
            [categoria]: (respuestas[categoria] || 0) + (respuesta === 'Sí' ? 1 : 0)
        };

        setRespuestas(nuevaRespuesta);

        // Avanzamos a la siguiente pregunta
        let nuevoIndice = indice + 1;

        // Buscar la siguiente pregunta válida considerando dependencias
        while (nuevoIndice < preguntaData.length) {
            const siguientePregunta = preguntaData[nuevoIndice];
            const preguntaDependencia = siguientePregunta.dependencia;

            if (!preguntaDependencia || nuevaRespuesta[preguntaDependencia]) {
                setIndice(nuevoIndice);
                return;
            }
            nuevoIndice++;
        }

        // Si no hay más preguntas válidas, mostramos los resultados
        setEstado('resultados');
    };

    return (
        <div className="diagnostico">
            <Pregunta pregunta={preguntaData[indice]} handleRespuesta={handleRespuesta} />
        </div>
    );
}

export default Diagnostico;
