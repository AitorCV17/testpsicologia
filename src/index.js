/*src/index.js*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Asegúrate de que App esté bien importado
import './styles/styles.css';  // Asegúrate de que los estilos globales se estén importando

const root = ReactDOM.createRoot(document.getElementById('root')); // Obtener el elemento con id 'root'

root.render(
    <React.StrictMode>
        <App />  {/* Aquí se está renderizando la aplicación */}
    </React.StrictMode>
);
