import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dashboard from './pages/Dashboard';
import Listado from './pages/listado';
import Calculadora from './pages/calculadora';
import Layout from "./layout";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="listado" element={<Listado />} />
        <Route path="calculadora" element={<Calculadora />} />
      </Route>
    </Routes>
  );
}

export default App;