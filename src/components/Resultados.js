import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/resultados.css';

function Resultados({ respuestas, usuario, onGuardar, onReiniciar }) {
    const navigate = useNavigate();

    const handleReiniciar = () => {
        onReiniciar(); // Reinicia el estado global
        navigate('/diagnostico'); // Redirige al formulario
    };

    const diagnostico = [];

    const evaluarDiagnostico = (categoria, umbral) => {
        const respuestaCategoria = respuestas[categoria] || 0;
        return respuestaCategoria >= umbral;
    };

    const categorias = [
        { nombre: "Trastorno de Ansiedad Generalizada", umbral: 3 },
        { nombre: "Trastorno de Pánico", umbral: 2 },
        { nombre: "Fobia Específica", umbral: 2 },
        { nombre: "Agorafobia", umbral: 2 },
        { nombre: "Trastorno de Ansiedad Social", umbral: 2 },
        { nombre: "Trastorno Obsesivo-Compulsivo", umbral: 2 },
        { nombre: "Trastorno de Estrés Agudo", umbral: 2 },
        { nombre: "Trastorno de Estrés Postraumático", umbral: 2 },
        { nombre: "Trastornos de Adaptación", umbral: 2 },
        { nombre: "Estrés Académico: Reacciones Físicas", umbral: 3 },
        { nombre: "Estrés Académico: Reacciones Psicológicas", umbral: 3 },
        { nombre: "Estrés Académico: Reacciones Comportamentales", umbral: 3 },
        { nombre: "Uso de Estrategias de Afrontamiento", umbral: 3 },
    ];

    categorias.forEach((categoria) => {
        if (evaluarDiagnostico(categoria.nombre, categoria.umbral)) {
            diagnostico.push(categoria.nombre);
        }
    });

    const todasRespuestasNo = Object.values(respuestas).every(valor => valor === 0);

    const resultado = diagnostico.length > 0
        ? diagnostico.join(", ")
        : todasRespuestasNo
            ? "Sin diagnóstico claro. No se ha encontrado un diagnóstico basado en las respuestas proporcionadas."
            : "Sin diagnóstico claro";

    return (
        <div className="resultados">
            <h2>Diagnóstico para {usuario.nombre || 'Usuario'}</h2>
            <p>{resultado}</p>
            <div className="botones-container">
                <button className="btn btn-success" onClick={onGuardar}>
                    Guardar Resultados
                </button>
                <button className="btn btn-danger" onClick={handleReiniciar}>
                    Reiniciar
                </button>
            </div>
        </div>
    );
}

export default Resultados;
