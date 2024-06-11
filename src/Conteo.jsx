import { useEffect, useState } from 'react';
import { collection, getDocs, query, where, doc, setDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; 
import './style/App.css';

function Conteo() {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const ciudades = ['Comitan', 'Tapachula', 'Tuxtla'];
            const conteoData = {};

            for (const ciudad of ciudades) {
                const q = query(collection(db, 'asistentes'), where('Ciudad', '==', ciudad));
                const querySnapshot = await getDocs(q);
                const total = querySnapshot.size;
                conteoData[ciudad] = total;

                // Actualizar la colección 'conteo'
                const conteoDocRef = doc(db, 'conteo', ciudad);
                await setDoc(conteoDocRef, { total }, { merge: true });
            }

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
                        <th>Ciudad</th>
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
