import React, { useState } from 'react';
import './style/Formulario1.css';

function RegistroGrupal() {
  const [formData, setFormData] = useState({
    nombreResponsable: '',
    emailResponsable: '',
    telefonoResponsable: '',
    numAsistentes0a5hombre: '',
    numAsistentes6a11hombre: '',
    numAsistentes12a18hombre: '',
    numAsistentes19a26hombre: '',
    numAsistentes27a59hombre: '',
    numAsistentes60mashombre: '',
    numAsistentes0a5mujer: '',
    numAsistentes6a11mujer: '',
    numAsistentes12a18mujer: '',
    numAsistentes19a26mujer: '',
    numAsistentes27a59mujer: '',
    numAsistentes60masmujer: '',
    numPersonasGrupo: '',
    hombres: '',
    mujeres: '',
    paisOrigen: '',
    estadoRadican: '',
    ciudadRadican: '',
    paisOrigen: '',
    estadoRadican: '',
    ciudadRadican: ''
  });

  const estados = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", 
    "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Estado de México", 
    "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit", 
    "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", 
    "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
  ];

  const ciudades = [
    "Ciudad de México", "Guadalajara", "Monterrey", "Puebla", "Toluca", "Tijuana", "León", 
    "Ciudad Juárez", "Torreón", "San Luis Potosí", "Mérida", "Chihuahua", "Querétaro", 
    "Aguascalientes", "Morelia", "Saltillo", "Hermosillo", "Mexicali", "Culiacán", 
    "Villahermosa", "Cancún", "Veracruz", "Tuxtla Gutiérrez", "Reynosa", "Oaxaca", 
    "Acapulco", "Durango", "Tepic", "Cuernavaca", "Chilpancingo", "Tlaxcala", "Zacatecas"
  ];

  const paises = [
    "México", "Estados Unidos", "Canadá", "Guatemala", "El Salvador", "Honduras", "Nicaragua", 
    "Costa Rica", "Panamá", "Colombia", "Venezuela", "Perú", "Brasil", "Argentina", "Chile", 
    "Uruguay", "Paraguay", "Bolivia", "Ecuador", "España", "Francia", "Alemania", "Italia", 
    "Reino Unido", "Japón", "China", "India", "Australia"
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un backend
  };

  return (
    <>
    <div className="containercititito">
    <h1 className="title">Programa de Impulso de las Ciencias en la Niñez de Chiapas (PICNICH)</h1>
        <h3 className="title">Registro Grupal</h3>
        <p className="description">
          Aquí podrás registrar la asistencia de VARIAS PERSONAS al evento. Una de ellas deberá ser
          el contacto para enviarle el pase de acceso. Se requiere que esa persona sea MAYOR DE
          EDAD.
        </p>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-labelcito ">Nombre completo del responsable del grupo:</label>
            <input className="input" type="email" name="nombreResponsable" value={formData.nombreResponsable} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="form-labelcito ">Correo electrónico del responsable del grupo: <b>(Verifica el dato porque a esta dirección enviaremos el PASE de acceso)</b></label>
            <input className="input" type="email" name="emailResponsable" value={formData.emailResponsable} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="form-labelcito ">Número telefónico del responsable del grupo (opcional):</label>
            <input className="input" type="tel" name="telefonoResponsable" value={formData.telefonoResponsable} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-labelcito ">Número de personas que forman el grupo (solo número):</label>
            <input className="input" type="number" name="numPersonasGrupo" value={formData.numPersonasGrupo} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="form-labelcito ">Número de asistentes de 0 a 5 años: <b>(Si no hay asistentes en este rango, escribe 0)</b></label>
            <input className="input" placeholder='Hombre' type="number" name="numAsistentes0a5hombre" value={formData.numAsistentes0a5hombre} onChange={handleChange} required />
            <input className="input" placeholder='Mujer' type="number" name="numAsistentes0a5mujer" value={formData.numAsistentes0a5mujer} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="form-labelcito ">Número de asistentes de 6 a 11 años: <b>(Si no hay asistentes en este rango, escribe 0)</b></label>
            <input className="input" placeholder='Hombre' type="number" name="numAsistentes6a11hombre" value={formData.numAsistentes6a11hombre} onChange={handleChange} required />
            <input className="input" placeholder='Mujer' type="number" name="numAsistentes6a11mujer" value={formData.numAsistentes6a11mujer} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="form-labelcito ">Número de asistentes de 12 a 18 años: <b>(Si no hay asistentes en este rango, escribe 0)</b></label>
            <input className="input" placeholder='Hombre' type="number" name="numAsistentes12a18hombre" value={formData.numAsistentes12a18hombre} onChange={handleChange} required />
            <input className="input" placeholder='Mujer' type="number" name="numAsistentes12a18mujer" value={formData.numAsistentes12a18mujer} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="form-labelcito ">Número de asistentes de 19 a 26 años: <b>(Si no hay asistentes en este rango, escribe 0)</b></label>
            <input className="input" placeholder='Hombre' type="number" name="numAsistentes19a26hombre" value={formData.numAsistentes19a26hombre} onChange={handleChange} required />
            <input className="input" placeholder='Mujer' type="number" name="numAsistentes19a26mujer" value={formData.numAsistentes19a26mujer} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="form-labelcito ">Número de asistentes de 27 a 59 años: <b>(Si no hay asistentes en este rango, escribe 0)</b></label>
            <input className="input" placeholder='Hombre' type="number" name="numAsistentes27a59hombre" value={formData.numAsistentes27a59hombre} onChange={handleChange} required />
            <input className="input" placeholder='Mujer' type="number" name="numAsistentes27a59mujer" value={formData.numAsistentes27a59mujer} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="form-labelcito ">Número de asistentes de 60 años o más: <b>(Si no hay asistentes en este rango, escribe 0)</b></label>
            <input className="input" placeholder='Hombre' type="number" name="numAsistentes60mashombre" value={formData.numAsistentes60mashombre} onChange={handleChange} required />
            <input className="input" placeholder='Mujer' type="number" name="numAsistentes60masmujer" value={formData.numAsistentes60masmujer} onChange={handleChange} required />
          </div>
          <div className="container">
        <form className="registration-form">
          <div className="form-group">
            <label className="form-labelcito">País de origen:</label>
            <select className="input" name="paisOrigen" value={formData.paisOrigen} onChange={handleChange} required>
              <option value="">Seleccione su país</option>
              {paises.map((pais, index) => (
                <option key={index} value={pais}>{pais}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-labelcito">Estado donde radican:</label>
            <select className="input" name="estadoRadican" value={formData.estadoRadican} onChange={handleChange} required>
              <option value="">Seleccione su estado</option>
              {estados.map((estado, index) => (
                <option key={index} value={estado}>{estado}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-labelcito">Ciudad donde radican:</label>
            <select className="input" name="ciudadRadican" value={formData.ciudadRadican} onChange={handleChange} required>
              <option value="">Seleccione su ciudad</option>
              {ciudades.map((ciudad, index) => (
                <option key={index} value={ciudad}>{ciudad}</option>
              ))}
            </select>
          </div>
        </form>
      </div>
          <button className="form-button" type="submit">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default RegistroGrupal;
