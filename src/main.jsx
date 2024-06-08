import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Formulario1 from './Formulario1.jsx';
import RegistroGrupal from './RegistroGrupal.jsx';
import RegistroIndividual from './RegistroIndividual.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/" element={<Formulario1 />} />
        <Route path="/registro-grupal" element={<RegistroGrupal />} />
        <Route path="/registro-individual" element={<RegistroIndividual />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
