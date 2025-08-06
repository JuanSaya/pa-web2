import React from 'react';
const Listado = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card shadow mt-4">
          <div className="card-header bg-white text-black text-left">
            <h5>
              <i className="bi bi-browser-edge"></i> Listado<i className="bi bi-person-circle ms-5"></i>
            </h5>
          </div>
          <div className="card-header bg-primary text-white text-center">
            <h5>Listado de estudiantes <i className="bi bi-plus-circle ms-5"></i></h5>
          </div>
          <div className="card-body p-0">
            <table className="table table-striped mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Programa</th>
                  <th>Fecha de nacimiento</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: 1,
                    nombre: 'Juan Carlos Saya Angulo',
                    correo: 'JuanSaAngu@gmail.com',
                    programa: 'Ingeniería',
                    fecha: '2005-09-10',
                  },
                  {
                    id: 2,
                    nombre: 'Oscar Saya Castillo',
                    correo: 'OscarCastillo@hotmail.com',
                    programa: 'Derecho',
                    fecha: '2000-01-12',
                  },
                  {
                    id: 3,
                    nombre: 'Isabel Ramos',
                    correo: 'Isacasierra10@utch.edu.co',
                    programa: 'Enfermería',
                    fecha: '2005-11-19',
                  },
                  {
                    id: 4,
                    nombre: 'Gabriel Gómez',
                    correo: 'Gomezgabri@gmail.com',
                    programa: 'Licenciatura',
                    fecha: '2000-02-18',
                  },
                  {
                    id: 5,
                    nombre: 'Cristiano Ronaldo',
                    correo: 'Cr7ofi@yahoo.com',
                    programa: 'Educación Física',
                    fecha: '2003-05-30',
                  },
                ].map((est, i) => (
                  <tr key={i}>
                    <td>{est.id}</td>
                    <td>{est.nombre}</td>
                    <td>{est.correo}</td>
                    <td>{est.programa}</td>
                    <td>{est.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-between align-items-center">
              <small>Mostrando 1 a 5 de 25 estudiantes</small>
              <nav>
                <ul className="pagination pagination-sm mb-0">
                  <li className="page-item disabled"><a className="page-link" href="#">Anterior</a></li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">Siguiente</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listado;