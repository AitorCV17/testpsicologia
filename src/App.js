import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Formulario from './components/Formulario';
import Diagnostico from './components/Diagnostico';
import Resultados from './components/Resultados';
import Informacion from './components/Informacion';

// Importar los estilos
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/cards.css';
import './styles/formulario.css';
import './styles/diagnostico.css';
import './styles/resultados.css';
import './styles/informacion.css';
import './styles/footer.css';
import './styles/responsive.css';

function AppWrapper() {
    const [usuario, setUsuario] = useState({ nombre: '', edad: '' });
    const [respuestas, setRespuestas] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    // Función para guardar resultados
    const onGuardar = () => {
        localStorage.setItem('diagnosticoResultados', JSON.stringify({
            usuario,
            respuestas
        }));
        alert('Resultados guardados correctamente.');
    };

    // Función para reiniciar
    const onReiniciar = () => {
        // Restablecer estados y redirigir al formulario
        setUsuario({ nombre: '', edad: '' });
        setRespuestas({});
        navigate('/diagnostico'); // Redirige a la página de diagnóstico
    };

    // Efecto para reiniciar estados cuando no estemos en la sección de diagnóstico
    useEffect(() => {
        // Si la ruta actual es "/" o "/informacion", reiniciamos
        if (location.pathname === '/' || location.pathname === '/informacion') {
            setUsuario({ nombre: '', edad: '' });
            setRespuestas({});
        }
    }, [location]);

    return (
        <div className="d-flex flex-column min-vh-100">
            <TransitionGroup component={null}>
                <CSSTransition key={location.pathname} classNames="page" timeout={500}>
                    <div className="flex-grow-1">
                        <Routes location={location}>
                            <Route path="/" element={<Inicio />} />
                            <Route path="/informacion" element={<Informacion />} />
                            <Route
                                path="/diagnostico"
                                element={<Formulario usuario={usuario} setUsuario={setUsuario} />}
                            />
                            <Route
                                path="/diagnostico/pregunta"
                                element={<Diagnostico respuestas={respuestas} setRespuestas={setRespuestas} />}
                            />
                            <Route
                                path="/diagnostico/resultados"
                                element={<Resultados respuestas={respuestas} usuario={usuario} onGuardar={onGuardar} onReiniciar={onReiniciar} />}
                            />
                        </Routes>
                    </div>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Navbar />
            <AppWrapper />
        </Router>
    );
}

export default App;
