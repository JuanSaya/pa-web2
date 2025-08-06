import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dashboard from './pages/Dashboard';
import Listado from './pages/listado';
import Calculadora from './pages/calculadora';
import './App.css'

function App() {
  return (
    <div className="d-flex">
     
      <div className="sidebar">
        <h4 className="text-center text-white py-3">Menú</h4>
        
        <Link to='/dashboard'><i className="bi bi-newspaper"></i> Dashboard</Link>
        <Link to='/listado'><i className="bi bi-people"></i> Lista de Estudiantes</Link>
        <Link to='/calculadora'><i className="bi bi-person-circle"></i> Calculadora</Link>
      </div>

      
      <div className='content'>
        <Routes>
         <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/listado" element={<Listado />} />
  <Route path="/calculadora" element={<Calculadora />} />
          
        </Routes>
      </div>
    </div>
  );
}
export default App;

