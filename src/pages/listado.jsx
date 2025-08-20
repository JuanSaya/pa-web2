import React from 'react';
import { Container, Row, Col, Card, Table, Pagination } from 'react-bootstrap';

function Listado() {
  const estudiantes = [
    { id: 1, nombre: 'Juan Carlos Saya Angulo', correo: 'JuanSaAngu@gmail.com', programa: 'Ingeniería', fecha: '2005-09-10' },
    { id: 2, nombre: 'Oscar Saya Castillo', correo: 'OscarCastillo@hotmail.com', programa: 'Derecho', fecha: '2000-01-12' },
    { id: 3, nombre: 'Isabel Ramos', correo: 'Isacasierra10@utch.edu.co', programa: 'Enfermería', fecha: '2005-11-19' },
    { id: 4, nombre: 'Gabriel Gómez', correo: 'Gomezgabri@gmail.com', programa: 'Licenciatura', fecha: '2000-02-18' },
    { id: 5, nombre: 'Cristiano Ronaldo', correo: 'Cr7ofi@yahoo.com', programa: 'Educación Física', fecha: '2003-05-30' },
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10} lg={10}>
          <Card className="shadow mt-4 border-0">
            
            
            <Card.Header className="bg-white text-dark text-start">
              <div className="d-flex justify-content-between align-items-center">
              <h5>
                <i className="bi bi-list"></i> Listado
                </h5>
                <i className="bi bi-people ms-5"></i>
              
               </div>
            </Card.Header>

           
            <Card.Header className="bg-primary text-white text-center">
              <h5>
                Listado de estudiantes
                <i className="bi bi-plus-circle ms-3"></i>
              </h5>
            </Card.Header>

           
            <Card.Body className="p-0">
              <Table striped hover className="mb-0">
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
                  {estudiantes.map((est) => (
                    <tr key={est.id}>
                      <td>{est.id}</td>
                      <td>{est.nombre}</td>
                      <td>{est.correo}</td>
                      <td>{est.programa}</td>
                      <td>{est.fecha}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>

            
            <Card.Footer>
              <div className="d-flex justify-content-between align-items-center">
                <small>Mostrando 1 a 5 de 25 estudiantes</small>
                <Pagination size="sm" className="mb-0">
                  <Pagination.Prev disabled>Anterior</Pagination.Prev>
                  <Pagination.Item active>1</Pagination.Item>
                  <Pagination.Item>2</Pagination.Item>
                  <Pagination.Item>3</Pagination.Item>
                  <Pagination.Next>Siguiente</Pagination.Next>
                </Pagination>
              </div>
            </Card.Footer>

          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Listado;
