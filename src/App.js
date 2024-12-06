import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Inicio from './components/Inicio';
import Diagnostico from './components/Diagnostico';
import Informacion from './components/Informacion';
import Resultados from './components/Resultados';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './styles/global.css'; // Estilos globales
import './styles/navbar.css'; // Estilos del navbar

function App() {
    const [usuario, setUsuario] = React.useState({ nombre: '', edad: '' });
    const [respuestas, setRespuestas] = React.useState({});
    const [formularioCompletado, setFormularioCompletado] = React.useState(false);

    const resetState = () => {
        setUsuario({ nombre: '', edad: '' });
        setRespuestas({});
        setFormularioCompletado(false); // Reinicia el estado para volver al formulario
    };

    return (
        <Router>
            <div className="main-container">
                {/* Navbar fijo */}
                <Navbar resetState={resetState} />

                {/* Contenedor principal del contenido */}
                <div className="content">
                    <TransitionGroup>
                        <CSSTransition classNames="fade" timeout={300}>
                            <Routes>
                                <Route path="/" element={<Inicio />} />
                                <Route path="/informacion" element={<Informacion />} />
                                <Route
                                    path="/diagnostico"
                                    element={
                                        <Diagnostico
                                            respuestas={respuestas}
                                            setRespuestas={setRespuestas}
                                            usuario={usuario}
                                            setUsuario={setUsuario}
                                            formularioCompletado={formularioCompletado}
                                            setFormularioCompletado={setFormularioCompletado}
                                        />
                                    }
                                />
                                <Route
                                    path="/diagnostico/resultados"
                                    element={
                                        <Resultados
                                            respuestas={respuestas}
                                            usuario={usuario}
                                            onGuardar={() => console.log('Resultados guardados')}
                                            onReiniciar={resetState}
                                        />
                                    }
                                />
                            </Routes>
                        </CSSTransition>
                    </TransitionGroup>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
