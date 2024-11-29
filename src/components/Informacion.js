import React from 'react';
import '../styles/styles.css'; // Asegúrate de importar los estilos globales

function Informacion() {
    return (
        <div className="informacion-container">
            <h1 className="title">Información sobre el Diagnóstico</h1>

            <section className="section">
                <p>
                    El DSM-5 (Manual Diagnóstico y Estadístico de los Trastornos Mentales, quinta edición) es una herramienta central para el diagnóstico y clasificación de trastornos mentales, desarrollada por la American Psychiatric Association (APA). Publicado en mayo de 2013 tras una década de desarrollo, su influencia abarca la práctica clínica, la investigación y el ámbito legal. Para el desarrollo de este sistema experto se utilizó el DSM-5.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">1. Validación del DSM-5</h2>
                <p>
                    El DSM-5 pasó por un proceso riguroso de desarrollo, que incluyó:
                </p>
                <ul className="list">
                    <li>Revisión por expertos internacionales: Más de 160 profesionales contribuyeron a la revisión de criterios diagnósticos y la inclusión de nuevos trastornos.</li>
                    <li>Pruebas de campo: Evaluaron la fiabilidad (consistencia diagnóstica) y la validez (precisión en describir los trastornos).</li>
                    <li>Revisión empírica: Se analizaron datos de estudios para sustentar los cambios propuestos.</li>
                </ul>
                <p>
                    Si bien es ampliamente aceptado, su validación no estuvo exenta de críticas. Algunas categorías diagnósticas fueron cuestionadas por no tener suficiente respaldo empírico o por una fiabilidad moderada en diagnósticos como el trastorno depresivo mayor. A pesar de esto, sigue siendo el estándar más utilizado en salud mental.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">2. Estructura y contenido</h2>
                <p>
                    El DSM-5 organiza los trastornos mentales en categorías temáticas. Cada trastorno incluye:
                </p>
                <ul className="list">
                    <li>Criterios diagnósticos específicos: Listas claras de síntomas que deben cumplirse para realizar un diagnóstico.</li>
                    <li>Especificadores: Detalles adicionales que ayudan a clasificar subtipos o grados de severidad.</li>
                    <li>Factores contextuales: Consideraciones culturales, médicas y sociales que influyen en el diagnóstico.</li>
                </ul>
                <p>
                    El texto se divide en capítulos que abarcan grupos de trastornos como los del neurodesarrollo, ansiedad, estado de ánimo, personalidad, entre otros. Este enfoque asegura que los diagnósticos sean estructurados y consistentes, favoreciendo su aplicación clínica y en investigaciones.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">3. Actualización del DSM-5: DSM-5-TR (Texto Revisado)</h2>
                <p>
                    En marzo de 2022, la APA publicó el DSM-5-TR (Texto Revisado), una versión actualizada que incluye:
                </p>
                <ul className="list">
                    <li>Incorporación del trastorno de duelo prolongado como una nueva categoría diagnóstica.</li>
                    <li>Revisión de criterios diagnósticos y actualizaciones en los códigos utilizados en la práctica clínica.</li>
                    <li>Ajustes en el lenguaje y en las descripciones para reflejar avances en investigación científica y consideraciones culturales.</li>
                </ul>
                <p>
                    En septiembre de 2024, la APA realizó nuevas actualizaciones a esta versión, alineando el texto con los últimos avances en la literatura científica y las mejores prácticas clínicas. Aunque el DSM-5 original sigue siendo válido, se recomienda utilizar la versión revisada para garantizar mayor precisión y actualidad en los diagnósticos.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">4. Aplicaciones prácticas</h2>
                <p>
                    El contenido del DSM-5 sirve como base para herramientas diagnósticas ampliamente usadas, como:
                </p>
                <ul className="list">
                    <li>SCID-5: Entrevista clínica estructurada basada en el DSM-5.</li>
                    <li>Cuestionarios derivados, como el PHQ-9 (para depresión) o el GAD-7 (para ansiedad).</li>
                </ul>
                <p>
                    En la práctica, estas herramientas traducen los criterios del DSM-5 en preguntas concretas para facilitar su uso en evaluaciones clínicas.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">Trastornos de Ansiedad y Estrés</h2>
                <p>
                    A continuación, se detallan los síntomas asociados con los trastornos de ansiedad y estrés, basados en los criterios del DSM-5:
                </p>

                <h3 className="sub-title">Ansiedad</h3>
                <p><strong>Trastorno de Ansiedad Generalizada (TAG):</strong> Preocupación excesiva sobre diversas actividades y eventos, como el trabajo, la familia y la salud. Los síntomas físicos incluyen inquietud, fatiga fácil, dificultad para concentrarse, irritabilidad, tensión muscular y dificultades para dormir.</p>

                <p><strong>Trastorno de Pánico:</strong> Ataques súbitos de pánico con síntomas como palpitaciones, sudoración, temblores, dificultad para respirar, dolor en el pecho y mareos. El miedo intenso a perder el control o morir durante el ataque es común.</p>

                <p><strong>Fobia Específica:</strong> Miedo irracional y persistente hacia objetos o situaciones específicas, lo que puede llevar a la evitación activa de situaciones que causen pánico.</p>

                <p><strong>Agorafobia:</strong> Miedo o ansiedad en situaciones donde escape podría ser difícil o donde no se pueda encontrar ayuda si ocurre un ataque de pánico. Se da en lugares como transporte público, espacios abiertos o cerrados, y multitudes.</p>

                <p><strong>Trastorno de Ansiedad Social (Fobia Social):</strong> Miedo a situaciones sociales donde se pueda ser juzgado o humillado, lo que lleva a la evitación de interacciones sociales.</p>

                <p><strong>Trastorno Obsesivo-Compulsivo (TOC):</strong> Se caracteriza por obsesiones (pensamientos intrusivos) y compulsiones (comportamientos repetitivos para reducir la ansiedad). </p>

                <p><strong>Trastorno de Ansiedad Inducido por Sustancias:</strong> Ansiedad provocada por el consumo de drogas, alcohol o medicamentos.</p>

                <p><strong>Otros Trastornos Especificados de Ansiedad:</strong> Casos de ansiedad que no cumplen todos los criterios diagnósticos pero que causan malestar significativo.</p>

                <h3 className="sub-title">Estrés</h3>
                <p><strong>Trastorno de Estrés Agudo (TEA):</strong> Se produce tras la exposición a un evento traumático, caracterizado por síntomas como flashbacks, pesadillas, hipervigilancia y ansiedad.</p>

                <p><strong>Trastorno de Estrés Postraumático (TEPT):</strong> Persistencia de los síntomas del TEA más allá de un mes, con efectos a largo plazo en la vida diaria del paciente.</p>
            </section>
        </div>
    );
}

export default Informacion;
