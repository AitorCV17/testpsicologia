/*src/App.js*/
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Formulario from './components/Formulario';
import Diagnostico from './components/Diagnostico';
import Resultados from './components/Resultados';
import Informacion from './components/Informacion';

function App() {
    const [usuario, setUsuario] = useState({ nombre: '', edad: '' });
    const [estado, setEstado] = useState('formulario');
    const [respuestas, setRespuestas] = useState({});

    const renderDiagnostico = () => {
        switch (estado) {
            case 'formulario':
                return <Formulario usuario={usuario} setUsuario={setUsuario} setEstado={setEstado} />;
            case 'pregunta':
                return <Diagnostico respuestas={respuestas} setRespuestas={setRespuestas} setEstado={setEstado} />;
            case 'resultados':
                return <Resultados respuestas={respuestas} usuario={usuario} onGuardar={() => alert('Guardado!')} onReiniciar={() => setEstado('formulario')} />;
            default:
                return <Inicio />;
        }
    };

    return (
        <Router>
            <Navbar />
            <div style={{ minHeight: 'calc(100vh - 160px)' }}>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/informacion" element={<Informacion />} />
                    <Route path="/diagnostico" element={renderDiagnostico()} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
