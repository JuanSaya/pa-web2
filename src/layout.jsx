import { Link, Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Layout() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-dark text-white p-3" style={{ minHeight: "100vh", width: "220px" }}>
        <h4 className="text-center mb-4 text-white" ><i className="bi bi-menu-down me-2"></i> MENÚ</h4>
        <nav className="d-flex flex-column gap-3">
          <Link to="/dashboard" className="text-white text-decoration-none">
            <i className="bi bi-newspaper"></i> Formulario
          </Link>
          <Link to="/listado" className="text-white text-decoration-none">
            <i className="bi bi-people"></i> Lista de Estudiantes
          </Link>
          <Link to="/calculadora" className="text-white text-decoration-none">
            <i className="bi bi-calculator"></i> Calculadora
          </Link>
        </nav>
      </div>

      {/* Content */}
      <div className="content flex-grow-1 p-4 bg-light">
        <div className="header-box d-flex justify-content-between align-items-center mb-3 gap-2">
          <span className="fw-bold"><i class="bi bi-clipboard2-check"></i>REGISTRO</span>
          <div className="rounded-circle bg-dark text-white fw-bold d-flex align-items-center justify-content-center" 
               style={{ width: "40px", height: "40px" }}>
            JC
          </div>
        </div>
 

        <Outlet />

    </div>

</div>

  );
}

export default Layout;
