import "./style/Formulario1.css";

function Formulario1() {
    return ( 
        <>
        <div className="containercititito">
            <h1 className="title">Programa de Impulso de las Ciencias en la Niñez de Chiapas (PICNICH)</h1>
            <p className="description">
                La Secretaría de Educación del Estado de Chiapas a través de la Comisión Estatal para la
                Planeación de la Educación Superior (COEPES) y su Comisión de Impulso de las
                Humanidades, Ciencia, Investigación, Desarrollo Tecnológico e Innovación (CIHCIDTI), te
                invita a registrarte para participar en el primer evento de divulgación científica dirigida a
                niños/as y jóvenes del estado.
            </p>
            <p className="description">
                El objetivo del PICNICH es promover en espacios públicos los trabajos de investigación
                desarrollados al interior de las Instituciones de Educación Superior y Centros de
                Investigación del estado, a través de actividades lúdicas que permitan acercar a los niños,
                niñas y jóvenes a la ciencia y la tecnología.
            </p>
            <p className="description">
                Las actividades tendrán lugar en tres sedes:
            </p>
            <ul className="locations">
                <li>Tuxtla Gtz. ..................... 15 de junio ........................ Museo Regional (09:00 a 12:00 horas)</li>
                <li>Tapachula...................... 22 de junio ........................ Planetario (09:00 a 12:00 horas)</li>
                <li>Comitán ........................ 29 de junio ....................... Parque central (16:00 a 19:00 horas)</li>
            </ul>
            <p className="description">
                Mediante el presente formulario podrás REGISTRARTE para asistir de manera individual
                o grupal.
            </p>
            <form className="registration-form">
                <div className="form-group">
                    <label className="form-label">Correo:</label>
                    <input placeholder="Tu dirección de correo electrónico" class="input" type="email" name="email" required/>
                </div>
                <div className="form-group">
                    <label className="form-label">Sede:</label>
                    <select className="input" name="sede" required>
                        <option value="Tuxtla Gtz">Tuxtla Gtz - 15 de junio</option>
                     {/*<option value="Tapachula">Tapachula - 22 de junio</option>*/}
                     {/*<option value="Comitán">Comitán - 29 de junio</option>*/}
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Tipo de registro:</label>
                    <p className="description">
                        • Individual: una sola persona.<br></br>
                        • Familiar: los participantes tienen algún parentesco: padres, hijos, tíos, sobrinos, etc.<br></br>
                        • Grupo Escolar: todos los participantes pertenecen a una escuela y son acompañados
                        de un responsable.<br></br>
                        • Grupal Abierto: Es un grupo diverso con poca o ninguna relación familiar y los
                        menores vienen acompañados con un tutor.<br></br>
                    </p>
                    <div className="form-radio-group">
                        <input className="description" type="radio" id="individual" name="tipoRegistro" value="Individual" required />
                        <label className="description" htmlFor="individual">Individual</label>
                    </div>
                    <div className="form-radio-group">
                        <input className="description" type="radio" id="familiar" name="tipoRegistro" value="Familiar" required />
                        <label className="description" htmlFor="familiar">Familiar</label>
                    </div>
                    <div className="form-radio-group">
                        <input className="description" type="radio" id="grupoEscolar" name="tipoRegistro" value="GrupoEscolar" required />
                        <label className="description" htmlFor="grupoEscolar">Grupal Escolar</label>
                    </div>
                    <div className="form-radio-group">
                        <input className="description" type="radio" id="grupoAbierto" name="tipoRegistro" value="GrupoAbierto" required />
                        <label className="description" htmlFor="grupoAbierto">Grupal Abierto</label>
                    </div>
                </div>
                <div>
                    <p className="description">
                        Para continuar tu registro debes aceptar el
                        <b> AVISO DE PRIVACIDAD.</b><br></br><br></br>
                        La Secretaría de Educación del Estado de Chiapas, es la responsable del tratamiento de los
                        datos personales que nos proporcione.<br></br><br></br>
                        Sus datos personales serán utilizados para las siguientes finalidades:<br></br><br></br>
                        a) Registrar su asistencia al evento en comento;<br></br><br></br>
                        b) generar listas de asistencias y validación de las mismas;<br></br><br></br>
                        c) emisión de constancia de participación o asistencia;<br></br><br></br>
                        d) establecer comunicación para dar seguimiento o aclaración de dudas sobre sus datos,
                        notificación de cancelación o cambio de horario, fecha; y<br></br><br></br>
                        e) generar estadísticas para informes obligatorios.<br></br><br></br>
                        De manera adicional, utilizaremos su información personal para las siguientes finalidades
                        que no son necesarias, pero que nos permiten y facilitan brindarle una mejor atención:<br></br><br></br>
                        a) envío de material de exposición o apoyo; e,<br></br><br></br>
                        b) invitaciones a futuros eventos.<br></br><br></br>
                        En caso de que no desee que sus datos personales sean tratados para las finalidades
                        adicionales, usted puede manifestarlo en el correo electrónico coepes.chiapas@gmail.com<br></br><br></br>
                        Se informa que no se realizarán transferencias que requieran su consentimiento, salvo
                        aquellas que sean necesarias para atender requerimientos de información de una autoridad
                        competente, debidamente fundados y motivados.<br></br><br></br>
                        Para mayor información acerca del tratamiento y de los derechos que puede hacer valer, a
                        través de educacionsuperiordireccion@gmail.com.
                    </p>
                    <p className="description"><b>Para continuar con su registro debe aceptar los términos y condiciones del registro para participar en el evento</b></p><br></br><br></br>
                    <p className="description">
                    <input type="checkbox" id="autorizacion" name="autorizacion" required />
                        Estando en pleno goce y ejercicio de mis derechos civiles y políticos, autorizo por
                        propio derecho y por conducto de mi representante a la Dirección de Educación
                        Superior de la Secretaría de Educación, la reproducción de imágenes, fotos y vídeos,
                        del PROGRAMA DE IMPULSO DE LAS CIENCIAS EN LA NIÑEZ DE CHIAPAS
                        (PICNICH). Por lo que se autoriza a dicha dependencia fijar, editar, reproducir,
                        publicar y/o distribuir las imágenes y vídeos, así como las subsecuentes ediciones y/o
                        reimpresiones de cualquier tipo de material, de conformidad con los artículos 27
                        fracción I y 87 de la Ley Federal del Derecho de Autor vigente y los relativos, artículos
                        27 y 28 de la Ley General de Protección de Datos Personales en Posesión de Sujetos
                        Obligados; 5, 6, 8, 9, 10, 12, 14, 19, 20, 22, 23, 26, 31, 33, 34, 35, 36, 37, 38, 39 de la
                        Ley de Protección de Datos Personales en Posesión de Sujetos Obligados del Estado
                        de Chiapas.
                    </p>
                </div>
                <button className="form-button" type="submit">Enviar</button>
            </form>
        </div>
        </>
    );
}

export default Formulario1;
