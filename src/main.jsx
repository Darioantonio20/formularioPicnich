import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Formulario1 from './Formulario1.jsx';
import RegistroGrupal from './RegistroGrupal.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/formulario1" element={<Formulario1 />} />
        <Route path="/registro-grupal" element={<RegistroGrupal />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
