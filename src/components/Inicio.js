import React from "react";
import { Link } from "react-router-dom";
import '../styles/hero.css';
import '../styles/cards.css';

function Inicio() {
    return (
        <div>
            {/* Sección Hero */}
            <div className="hero">
                <h1>Evaluación de Ansiedad y Estrés</h1>
                <p>
                    Descubre si presentas señales de trastornos relacionados con ansiedad o estrés a través de nuestra herramienta interactiva.
                </p>
                <Link to="/diagnostico" className="btn">Comenzar Evaluación</Link>
            </div>

            {/* Sección de Tarjetas Informativas */}
            <div className="container">
                <div className="row text-center">
                    {/* Tarjeta 1 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Ansiedad Generalizada</h5>
                                <p className="card-text">
                                    Explora si tus preocupaciones constantes y dificultad para relajarte podrían estar relacionadas con este trastorno.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Estrés Académico</h5>
                                <p className="card-text">
                                    Identifica si la carga académica, las evaluaciones o la presión diaria te están afectando significativamente.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Estrés Postraumático</h5>
                                <p className="card-text">
                                    Averigua si tus síntomas, como recuerdos intrusivos o hipervigilancia, podrían estar relacionados con un evento traumático.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inicio;
