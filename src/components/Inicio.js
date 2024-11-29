/*src/components/Inicio.js*/
import React from "react";
import { Link } from "react-router-dom"; // Para navegación
import "../styles/styles.css"; // Asegúrate de la ruta correcta

function Inicio() {
    return (
        <div>
            {/* Sección Hero - Banner Principal */}
            <div className="hero">
                <h1>Diagnóstico de Trastornos de Estrés y Ansiedad</h1>
                <p>Utiliza nuestro sistema experto para obtener un diagnóstico personalizado</p>
                <Link to="/diagnostico" className="btn">Comienza el Diagnóstico</Link>
            </div>

            {/* Tarjetas de Información */}
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Ansiedad Generalizada</h5>
                                <p className="card-text">Evaluamos si sufres de ansiedad constante y preocupaciones excesivas.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Trastornos de Pánico</h5>
                                <p className="card-text">Detectamos si has experimentado ataques de pánico o episodios intensos de ansiedad.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Estrés Postraumático</h5>
                                <p className="card-text">Ayudamos a identificar los síntomas relacionados con el estrés postraumático.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inicio;
