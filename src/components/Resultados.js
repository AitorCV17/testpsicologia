import React from "react";

function Resultados({ respuestas, usuario, onGuardar, onReiniciar }) {
    const diagnostico = [];

    // Función para evaluar si se cumplen los criterios de diagnóstico
    const evaluarDiagnostico = (categoria, umbral) => {
        const respuestaCategoria = respuestas[categoria] || 0; // Si no hay respuesta, será 0
        return respuestaCategoria >= umbral; // Comprobamos si la respuesta supera el umbral
    };

    // Definir las categorías y los umbrales
    const categorias = [
        { nombre: "Trastorno de Ansiedad Generalizada (TAG)", umbral: 3 },
        { nombre: "Trastorno de Pánico", umbral: 2 },
        { nombre: "Fobia Específica", umbral: 2 },
        { nombre: "Agorafobia", umbral: 2 },
        { nombre: "Trastorno de Ansiedad Social (Fobia Social)", umbral: 2 },
        { nombre: "Trastorno Obsesivo-Compulsivo (TOC)", umbral: 2 },
        { nombre: "Trastorno de Ansiedad Inducido por Sustancias", umbral: 2 },
        { nombre: "Otros Trastornos Especificados de Ansiedad", umbral: 2 },
        { nombre: "Trastorno de Estrés Agudo (TEA)", umbral: 2 },
        { nombre: "Trastorno de Estrés Postraumático (TEPT)", umbral: 2 },
        { nombre: "Trastornos de Adaptación", umbral: 2 },
    ];

    // Evaluar cada categoría y agregarla al diagnóstico si supera el umbral
    categorias.forEach((categoria) => {
        if (evaluarDiagnostico(categoria.nombre, categoria.umbral)) {
            diagnostico.push(categoria.nombre);
        }
    });

    // Comprobamos si todas las respuestas son 0 (todas "NO") y mostramos un mensaje adecuado
    const todasRespuestasNo = Object.values(respuestas).every(valor => valor === 0);

    // Si no hay diagnósticos y todas las respuestas son "NO"
    const resultado = diagnostico.length > 0
        ? diagnostico.join(", ")
        : todasRespuestasNo
            ? "Sin diagnóstico claro. No se ha encontrado un diagnóstico basado en las respuestas proporcionadas."
            : "Sin diagnóstico claro";

    return (
        <div className="resultados">
            <h2>Diagnóstico para {usuario.nombre}</h2>
            <p>{resultado}</p>
            <div className="botones-container">
                <button className="btn btn-success" onClick={onGuardar}>Guardar Resultados</button>
                <button className="btn btn-danger" onClick={onReiniciar}>Reiniciar</button>
            </div>
        </div>
    );
}

export default Resultados;
