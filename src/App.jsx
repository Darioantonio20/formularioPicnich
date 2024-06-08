import "./style/App.css";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from './firebaseConfig';
import { collection, getDocs, query, where } from "firebase/firestore"; 

function App() {
  const [users, setUsers] = useState([]);
  const [updatedUsers, setUpdatedUsers] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const key = searchParams.get('key');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (key) {
          const q = query(collection(db, "users"), where("__name__", "==", key));
          const querySnapshot = await getDocs(q);
          console.log(querySnapshot);
          const usersData = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setUsers(usersData);
          setUpdatedUsers(usersData);
        } else {
          console.error("No key provided in the URL");
        }
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, [key]);

  const handleDelete = (id) => {
    const newUsers = updatedUsers.filter(user => user.id !== id);
    setUpdatedUsers(newUsers);
  };

  const handleGenerateJSON = () => {
    const jsonData = JSON.stringify(updatedUsers, null, 2);
    console.log(jsonData);
  };

  return (
    <div className="divcito">  
      <table className="container">
        <thead>
          <tr>
            <th><p>Usuario</p></th>
            <th><p>Contraseña</p></th>
            <th><p>Eliminar</p></th>
          </tr>
        </thead>
        <tbody>
          {updatedUsers.length > 0 ? (
            updatedUsers.flatMap(user => 
              user.usuario.map((usuario, index) => (
                <tr key={`${user.id}-${index}`}>
                  <td>{usuario}</td>
                  <td>{user.pswd[index]}</td>
                  <td>
                    <button className="buttonDelete" onClick={() => handleDelete(user.id)}>Eliminar</button>
                  </td>
                </tr>
              ))
            )
          ) : (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          )}
        </tbody>
          <button className="buttonJson" onClick={handleGenerateJSON}>Generar JSON</button>
      </table>
      
    </div>
  );
}

export default App;
