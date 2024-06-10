import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from './firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import './style/Formulario1.css';
import './style/App.css';

function RegistroGrupal() {
  const [formData, setFormData] = useState({
    Nombre: '',
    mail: '',
    phone: '',
    Hombres_0_5: '',
    Hombres_6_11: '',
    Hombres_12_18: '',
    Hombres_19_26: '',
    Hombres_27_59: '',
    Hombres_60: '',
    Mujeres_0_5: '',
    Mujeres_6_11: '',
    Mujeres_12_18: '',
    Mujeres_19_26: '',
    Mujeres_27_59: '',
    Mujeres_60: '',
    total: '',
    Pais: '',
    Estado: '',
    Ciudad: '',
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

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const key = searchParams.get('key');

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        if (key) {
          console.log('Key found in URL:', key); // Debugging
          const docRef = doc(db, 'registrados', key);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log('Document data:', data); // Debugging
            setFormData({
              Nombre: data['Nombre.1'] || '',
              mail: data['mail'] || '',
              phone: data['phone.1'] || '',
              Hombres_0_5: data['Hombres_0_5']?.toString() || '',
              Hombres_6_11: data['Hombres_6_11']?.toString() || '',
              Hombres_12_18: data['Hombres_12_18']?.toString() || '',
              Hombres_19_26: data['Hombres_19_26']?.toString() || '',
              Hombres_27_59: data['Hombres_27_59']?.toString() || '',
              Hombres_60: data['Hombres_60']?.toString() || '',
              Mujeres_0_5: data['Mujeres_0_5']?.toString() || '',
              Mujeres_6_11: data['Mujeres_6_11']?.toString() || '',
              Mujeres_12_18: data['Mujeres_12_18']?.toString() || '',
              Mujeres_19_26: data['Mujeres_19_26']?.toString() || '',
              Mujeres_27_59: data['Mujeres_27_59']?.toString() || '',
              Mujeres_60: data['Mujeres_60']?.toString() || '',
              total: data['total']?.toString() || '',
              Pais: data['Pais.1'] || '',
              Estado: data['Estado.1'] || '',
              Ciudad: data['Ciudad.1'] || '',
            });
          } else {
            console.error('No such document!');
          }
        } else {
          console.error('No key provided in the URL');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchDocument();
  }, [key]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, 'asistentes', key), formData, { merge: true });
      console.log('Document successfully written!');
    } catch (error) {
      console.error('Error writing document:', error);
    }
  };

  return (
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
          <input className="input" type="text" name="Nombre" value={formData.Nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-labelcito ">Correo electrónico del responsable del grupo: <b>(Verifica el dato porque a esta dirección enviaremos el PASE de acceso)</b></label>
          <input className="input" type="email" name="mail" value={formData.mail} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-labelcito ">Número telefónico del responsable del grupo (opcional):</label>
          <input className="input" type="number" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="form-labelcito ">Número de personas que forman el grupo (solo número):</label>
          <input className="input" type="number" name="total" value={formData.total} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-labelcito ">Número de asistentes de 0 a 5 años: <b>(Si no hay asistentes en este rango, escribe 0)</b></label>
          <input className="input" placeholder='Hombre' type="number" name="Hombres_0_5" value={formData.Hombres_0_5} onChange={handleChange} required />
          <input className="input" placeholder='Mujer' type="number" name="Mujeres_0_5" value={formData.Mujeres_0_5} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-labelcito ">Número de asistentes de 6 a 11 años: <b>(Si no hay asistentes en este rango, escribe 0)</b></label>
          <input className="input" placeholder='Hombre' type="number" name="Hombres_6_11" value={formData.Hombres_6_11} onChange={handleChange} required />
          <input className="input" placeholder='Mujer' type="number" name="Mujeres_6_11" value={formData.Mujeres_6_11} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-labelcito ">Número de asistentes de 12 a 18 años: <b>(Si no hay asistentes en este rango, escribe 0)</b></label>
          <input className="input" placeholder='Hombre' type="number" name="Hombres_12_18" value={formData.Hombres_12_18} onChange={handleChange} required />
          <input className="input" placeholder='Mujer' type="number" name="Mujeres_12_18" value={formData.Mujeres_12_18} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-labelcito ">Número de asistentes de 19 a 26 años: <b>(Si no hay asistentes en este rango, escribe 0)</b></label>
          <input className="input" placeholder='Hombre' type="number" name="Hombres_19_26" value={formData.Hombres_19_26} onChange={handleChange} required />
          <input className="input" placeholder='Mujer' type="number" name="Mujeres_19_26" value={formData.Mujeres_19_26} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-labelcito ">Número de asistentes de 27 a 59 años: <b>(Si no hay asistentes en este rango, escribe 0)</b></label>
          <input className="input" placeholder='Hombre' type="number" name="Hombres_27_59" value={formData.Hombres_27_59} onChange={handleChange} required />
          <input className="input" placeholder='Mujer' type="number" name="Mujeres_27_59" value={formData.Mujeres_27_59} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-labelcito ">Número de asistentes de 60 años o más: <b>(Si no hay asistentes en este rango, escribe 0)</b></label>
          <input className="input" placeholder='Hombre' type="number" name="Hombres_60" value={formData.Hombres_60} onChange={handleChange} required />
          <input className="input" placeholder='Mujer' type="number" name="Mujeres_60" value={formData.Mujeres_60} onChange={handleChange} required />
        </div>
        <div className="container">
          <div className="form-group">
            <label className="form-labelcito">País de origen:</label>
            <select className="input" name="Pais" value={formData.Pais} onChange={handleChange} required>
              <option value="">Seleccione su país</option>
              {paises.map((pais, index) => (
                <option key={index} value={pais}>{pais}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-labelcito">Estado donde radican:</label>
            <select className="input" name="Estado" value={formData.Estado} onChange={handleChange} required>
              <option value="">Seleccione su estado</option>
              {estados.map((estado, index) => (
                <option key={index} value={estado}>{estado}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="form-labelcito">Ciudad donde radican:</label>
            <select className="input" name="Ciudad" value={formData.Ciudad} onChange={handleChange} required>
              <option value="">Seleccione su ciudad</option>
              {ciudades.map((ciudad, index) => (
                <option key={index} value={ciudad}>{ciudad}</option>
              ))}
            </select>
          </div>
        </div>
        <button className="buttonJson" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default RegistroGrupal;
