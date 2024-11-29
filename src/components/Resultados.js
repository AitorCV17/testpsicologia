import React from "react";

function Resultados({ respuestas, usuario, onGuardar, onReiniciar }) {
    const diagnostico = [];

    // Evaluar Trastorno de Ansiedad Generalizada (TAG)
    if ((respuestas["Trastorno de Ansiedad Generalizada (TAG)"] || 0) >= 3) {
        diagnostico.push("Trastorno de Ansiedad Generalizada (TAG)");
    }

    // Evaluar Trastorno de Pánico
    if ((respuestas["Trastorno de Pánico"] || 0) >= 2) {
        diagnostico.push("Trastorno de Pánico");
    }

    // Evaluar Fobia Específica
    if ((respuestas["Fobia Específica"] || 0) >= 2) {
        diagnostico.push("Fobia Específica");
    }

    // Evaluar Agorafobia
    if ((respuestas["Agorafobia"] || 0) >= 2) {
        diagnostico.push("Agorafobia");
    }

    // Evaluar Trastorno de Ansiedad Social (Fobia Social)
    if ((respuestas["Trastorno de Ansiedad Social (Fobia Social)"] || 0) >= 2) {
        diagnostico.push("Trastorno de Ansiedad Social (Fobia Social)");
    }

    // Evaluar Trastorno Obsesivo-Compulsivo (TOC)
    if ((respuestas["Trastorno Obsesivo-Compulsivo (TOC)"] || 0) >= 2) {
        diagnostico.push("Trastorno Obsesivo-Compulsivo (TOC)");
    }

    // Evaluar Trastorno de Ansiedad Inducido por Sustancias
    if ((respuestas["Trastorno de Ansiedad Inducido por Sustancias"] || 0) >= 2) {
        diagnostico.push("Trastorno de Ansiedad Inducido por Sustancias");
    }

    // Evaluar Otros Trastornos Especificados de Ansiedad
    if ((respuestas["Otros Trastornos Especificados de Ansiedad"] || 0) >= 2) {
        diagnostico.push("Otros Trastornos Especificados de Ansiedad");
    }

    // Evaluar Trastorno de Estrés Agudo (TEA)
    if ((respuestas["Trastorno de Estrés Agudo (TEA)"] || 0) >= 2) {
        diagnostico.push("Trastorno de Estrés Agudo (TEA)");
    }

    // Evaluar Trastorno de Estrés Postraumático (TEPT)
    if ((respuestas["Trastorno de Estrés Postraumático (TEPT)"] || 0) >= 2) {
        diagnostico.push("Trastorno de Estrés Postraumático (TEPT)");
    }

    // Evaluar Trastornos de Adaptación
    if ((respuestas["Trastornos de Adaptación"] || 0) >= 2) {
        diagnostico.push("Trastornos de Adaptación");
    }

    const resultado = diagnostico.length > 0 ? diagnostico.join(", ") : "Sin diagnóstico claro";

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
