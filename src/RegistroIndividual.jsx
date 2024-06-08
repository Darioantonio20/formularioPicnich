import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/Formulario1.css';

function RegistroIndividual() {

    const [formData, setFormData] = useState({
        nombreIndividual: '',
        emailIndividual: '',
        telefonoIndividual: '',
        numEdad: '',
        sexoHombre: '',
        sexoMujer: '',
        sexoPrefieroNoDecirlo: '',
        paisOrigen: '',
        estadoRadican: '',
        ciudadRadican: '',
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
            <h3 className="title">Registro Individual</h3>
            <p className="description">
                En esta opción se efectúan los registros de UNA SOLA PERSONA para asistir al evento
            </p>
            <form className="registration-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-labelcito ">Nombre completo del asistente:</label>
                <input className="input" type="text" name="nombreIndividual" value={formData.nombreIndividual} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-labelcito ">Correo electrónico: <b>(verifica este dato porque aquí enviaremos tu pase de acceso al evento)</b></label>
                <input className="input" type="email" name="emailIndividual" value={formData.emailIndividual} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-labelcito ">Número telefónico <b>(opcional):</b></label>
                <input className="input" type="number" name="telefonoIndividual" value={formData.telefonoIndividual} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-labelcito ">Edad <b>(en años):</b>:</label>
                <input className="input" type="number" name="numEdad" value={formData.numEdad} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label className="form-labelcito ">Autodescripción sexogenérica con la que se identifica:</label><br></br>
                <input placeholder='Hombre' type="radio" name="sexoHombre" value={formData.sexoHombre} onChange={handleChange} required />
                <label className="description" >Sexo hombre</label><br></br><br></br>
                <input placeholder='Mujer' type="radio" name="sexoMujer" value={formData.sexoMujer} onChange={handleChange} required />
                <label className="description" >Sexo mujer</label><br></br><br></br>
                <input placeholder='PrefieroNoDecirlo' type="radio" name="sexoPrefieroNoDecirlo" value={formData.sexoPrefieroNoDecirlo} onChange={handleChange} required />
                <label className="description" >Prefiero no decirlo</label>
              </div>
              <div className="container">
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
              </div>
              <button className="buttonJson" type="submit">Enviar</button>
              <Link to="/">
                <center><button className="buttonDelete">Regresar</button></center>
              </Link>
            </form>
        </div>
        </>
    );
}

export default RegistroIndividual;
