import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from './firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import './style/Formulario1.css';

function RegistroIndividual() {
  const [formData, setFormData] = useState({
    Nombre: '',
    mail: '',
    phone: '',
    Edad: '',
    sexo: '',
    Pais: '',
    Estado: '',
    Ciudad: '',
  });

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
              Nombre: data['Nombre'] || '',
              mail: data['mail'] || '',
              phone: data['phone'] || '',
              Edad: data['Edad']?.toString() || '',
              sexo: data['sexo'] || '',
              Pais: data['Pais'] || '',
              Estado: data['Estado'] || '',
              Ciudad: data['Ciudad'] || '',
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
    const allFieldsFilled = Object.values(formData).every(field => field !== '');

    if (allFieldsFilled) {
      try {
        await setDoc(doc(db, 'asistentes', key), formData, { merge: true });
        console.log('Document successfully written!');
        alert('Formulario enviado correctamente.');
      } catch (error) {
        console.error('Error writing document:', error);
      }
    } else {
      alert('Por favor, complete todos los campos antes de enviar.');
    }
  };

  return (
    <div className="containercititito">
      <h1 className="title">Programa de Impulso de las Ciencias en la Niñez de Chiapas (PICNICH)</h1>
      <h3 className="title">Registro Individual</h3>
      <p className="description">
        En esta opción se efectúan los registros de UNA SOLA PERSONA para asistir al evento.
      </p>
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-labelcito ">Nombre completo del asistente:</label>
          <input className="input" type="text" name="Nombre" value={formData.Nombre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-labelcito ">Correo electrónico: <b>(verifica este dato porque aquí enviaremos tu pase de acceso al evento)</b></label>
          <input className="input" type="email" name="mail" value={formData.mail} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-labelcito ">Número telefónico <b>(opcional):</b></label>
          <input className="input" type="number" name="phone" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="form-labelcito ">Edad <b>(en años):</b></label>
          <input className="input" type="number" name="Edad" value={formData.Edad} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label className="form-labelcito ">Autodescripción sexogenérica con la que se identifica:</label><br></br>
          <input type="radio" name="sexo" value="Hombre" checked={formData.sexo === 'Hombre'} onChange={handleChange} />
          <label className="description">Hombre</label><br></br><br></br>
          <input type="radio" name="sexo" value="Mujer" checked={formData.sexo === 'Mujer'} onChange={handleChange} />
          <label className="description">Mujer</label><br></br><br></br>
          <input type="radio" name="sexo" value="PrefieroNoDecirlo" checked={formData.sexo === 'PrefieroNoDecirlo'} onChange={handleChange} />
          <label className="description">Prefiero no decirlo</label>
        </div>
        <div className="container">
          <div className="form-group">
            <label className="form-labelcito">País de origen:</label>
            <input className="input" type="text" name="Pais" value={formData.Pais} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="form-labelcito">Estado donde radican:</label>
            <input className="input" type="text" name="Estado" value={formData.Estado} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label className="form-labelcito">Ciudad donde radican:</label>
            <input className="input" type="text" name="Ciudad" value={formData.Ciudad} onChange={handleChange} required />
          </div>
        </div>
        <button className="buttonJson" type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default RegistroIndividual;
