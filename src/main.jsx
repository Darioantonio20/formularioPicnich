import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RegistroGrupal from './RegistroGrupal.jsx';
import RegistroIndividual from './RegistroIndividual.jsx';

function App() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tipo = searchParams.get('Tipo');
  const key = searchParams.get('key');

  if (tipo === 'Individual') {
    return <Navigate to={`/registro-individual?key=${key}`} />;
  } else if (tipo === 'Grupal' || tipo === 'Grupal Escolar' || tipo === 'Familiar') {
    return <Navigate to={`/registro-grupal?key=${key}`} />;
  } else {
    return <div>Tipo no especificado o no válido</div>;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/registro-grupal" element={<RegistroGrupal />} />
        <Route path="/registro-individual" element={<RegistroIndividual />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
