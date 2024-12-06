import React from 'react';
import '../styles/informacion.css';

function Informacion() {
    return (
        <div className="informacion-container">
            <h1 className="title">Información sobre el Diagnóstico</h1>

            <section className="section">
                <p>
                    El DSM-5 (Manual Diagnóstico y Estadístico de los Trastornos Mentales, quinta edición) es una herramienta central para
                    la evaluación y el diagnóstico de los trastornos mentales. Además, el Inventario SISCO del Estrés Académico proporciona
                    una evaluación específica del estrés en contextos académicos, complementando el diagnóstico clínico con una perspectiva
                    sistémica y cognitiva.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">1. Validación del DSM-5</h2>
                <p>
                    El DSM-5 pasó por un proceso riguroso de desarrollo, incluyendo:
                </p>
                <ul className="list">
                    <li>Revisión por expertos internacionales en psicología y psiquiatría.</li>
                    <li>Pruebas de campo para verificar la aplicabilidad clínica de los criterios.</li>
                    <li>Revisión empírica basada en datos epidemiológicos y clínicos.</li>
                </ul>
                <p>
                    Aunque es ampliamente aceptado, se reconoce que el DSM-5 no abarca todos los aspectos culturales y sociales, por lo que
                    debe usarse en combinación con evaluaciones específicas según el contexto del paciente.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">2. Estructura y contenido</h2>
                <p>
                    El DSM-5 organiza los trastornos mentales en capítulos específicos, basándose en similitudes clínicas y biológicas. Los elementos clave incluyen:
                </p>
                <ul className="list">
                    <li>Criterios diagnósticos específicos para cada trastorno.</li>
                    <li>Especificadores que detallan la gravedad o características adicionales.</li>
                    <li>Factores contextuales, como aspectos médicos o psicosociales relevantes.</li>
                </ul>
                <p>
                    Este manual está diseñado para ser utilizado en diversos entornos, incluyendo clínicas, hospitales y consultas privadas.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">3. Inventario SISCO del Estrés Académico</h2>
                <p>
                    El Inventario SISCO evalúa el estrés académico en estudiantes de niveles medio superior y superior, identificando:
                </p>
                <ul className="list">
                    <li>Factores estresores, como sobrecarga de tareas y relaciones interpersonales.</li>
                    <li>Reacciones físicas, psicológicas y comportamentales al estrés.</li>
                    <li>Estrategias de afrontamiento, como planificación, religiosidad y habilidades sociales.</li>
                </ul>
                <p>
                    Este inventario complementa herramientas clínicas al ofrecer un análisis contextualizado del estrés académico.
                </p>
            </section>

            <section className="section">
                <h2 className="section-title">Trastornos de Ansiedad y Estrés</h2>
                <p>
                    A continuación, se detallan los síntomas y características principales de los trastornos relacionados con la ansiedad y el estrés:
                </p>

                <h3 className="sub-title">Ansiedad</h3>
                <p><strong>Trastorno de Ansiedad Generalizada (TAG):</strong> Ansiedad excesiva durante al menos 6 meses, dificultad para controlar la preocupación, e incluye síntomas como fatiga, irritabilidad y problemas de sueño.</p>
                <p><strong>Trastorno de Pánico:</strong> Episodios de pánico recurrentes con síntomas físicos intensos como palpitaciones, sudoración y sensación de asfixia.</p>
                <p><strong>Fobia Específica:</strong> Miedo intenso y persistente hacia objetos o situaciones específicas, como animales o alturas.</p>
                <p><strong>Agorafobia:</strong> Miedo a situaciones donde escapar podría ser difícil, como transporte público o multitudes.</p>
                <p><strong>Trastorno de Ansiedad Social (Fobia Social):</strong> Miedo intenso a ser evaluado negativamente en situaciones sociales.</p>
                <p><strong>Trastorno Obsesivo-Compulsivo (TOC):</strong> Pensamientos intrusivos y comportamientos repetitivos destinados a reducir la ansiedad.</p>
                <p><strong>Trastorno de Ansiedad Inducido por Sustancias:</strong> Ansiedad resultante del consumo o abstinencia de sustancias.</p>
                <p><strong>Otros Trastornos Especificados de Ansiedad:</strong> Síntomas que no cumplen todos los criterios para un trastorno específico, pero que causan malestar clínico significativo.</p>

                <h3 className="sub-title">Estrés</h3>
                <p><strong>Trastorno de Estrés Agudo (TEA):</strong> Ansiedad y recuerdos intrusivos tras un evento traumático, con duración menor a un mes.</p>
                <p><strong>Trastorno de Estrés Postraumático (TEPT):</strong> Síntomas persistentes como recuerdos intrusivos, evitación de estímulos asociados al trauma e hiperalerta, con duración mayor a un mes.</p>
                <p><strong>Estrés Académico:</strong> Caracterizado por factores estresores (sobrecarga de tareas, evaluaciones), reacciones físicas (insomnio, fatiga), psicológicas (ansiedad, problemas de concentración) y comportamentales (aislamiento, cambios en hábitos alimenticios).</p>
            </section>
        </div>
    );
}

export default Informacion;
