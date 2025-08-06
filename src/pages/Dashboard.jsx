
import React from 'react';




const Dashboard = () => {
  return (
    <div className="app-container">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-6">
            <div className="card shadow">
              <div className="card-header bg-white text-black text-left">
                <h5><i className="bi bi-browser-edge"></i> Mi Dashboard <i className="bi bi-person-circle ms-5"></i></h5>
              </div>
              <div className="card-header bg-primary text-white text-center">
                <h5>Formulario de Registro</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre completo</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="correo" placeholder="Saya@ejemplo.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="programa" className="form-label">Programa académico</label>
                    <select className="form-select" id="programa" defaultValue="">
                      <option value="" disabled>Seleccione uno</option>
                      <option value="1">Ingeniería</option>
                      <option value="2">Derecho</option>
                      <option value="3">Medicina</option>
                      <option value="4">Licenciatura</option>
                      <option value="5">Trabajo Social</option>
                    </select>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="terminos" />
                    <label className="form-check-label" htmlFor="terminos">Acepto los términos y condiciones</label>
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn btn-success">Registrarse</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;