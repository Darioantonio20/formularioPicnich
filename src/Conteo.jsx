import { useEffect, useState } from 'react';
import { collection, getDocs, query, where, doc, setDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import './style/Conteo.css';

function Conteo() {
    const [data, setData] = useState({});
    const sedes = { 
        'Comitan': 'Comitán (29 de junio)', 
        'Tapachula': 'Tapachula (22 de junio)', 
        'Tuxtla': 'Tuxtla Gutiérrez (15 de junio)' 
    };

    useEffect(() => {
        const fetchData = async () => {
            const conteoData = {};

            // Inicializar conteo en 0 para cada sede
            for (const sede in sedes) {
                conteoData[sede] = 0;
            }

            // Obtener nuevos registros y sumar al conteo
            for (const [sede, valor] of Object.entries(sedes)) {
                console.log(`Clave: ${sede}, Valor: ${valor}`);
                const q = query(collection(db, 'asistentes'), where('Sede', '==', valor));
                const querySnapshot = await getDocs(q);
                let totalNuevosRegistros = 0;

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    if (data.Tipo === 'Grupal Escolar' || data.Tipo === 'Familiar' || data.Tipo === 'Grupal Abierto') {
                        totalNuevosRegistros += parseInt(data.total) || 0;
                    } else {
                        totalNuevosRegistros += 1;
                    }
                });

                console.log(`Nuevos registros para ${sede}: ${totalNuevosRegistros}`);  // Verificar el total calculado

                // Actualizar conteo con los nuevos registros
                conteoData[sede] += totalNuevosRegistros;
            }

            // Actualizar la colección 'conteo' en la base de datos
            for (const [sede, total] of Object.entries(conteoData)) {
                const conteoDocRef = doc(db, 'conteo', sede);
                await setDoc(conteoDocRef, { total: total }, { merge: true });
            }

            console.log('Datos actualizados de conteo:', conteoData);  // Verificar los datos actualizados
            setData(conteoData);
        };

        fetchData();
    }, []);

    return (
        <>
            <h1 className='titlecititito'>Conteo de Registros</h1>
            <table className='conteo-table'>
                <thead>
                    <tr>
                        <th>Sede</th>
                        <th>Conteo</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{data[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Conteo;
