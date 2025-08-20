import React from "react"; 
import { Container,Row,Col,Card,Form, } from "react-bootstrap"; 
import Button from "react-bootstrap/Button"; 

const Dashboard = () => { 
  return ( 
  <div className="app.container"> 
  <Container className="py-5 d-flex justify-content-centerpy-5 d-flex justify-content-center"> 

    <Row className="justify-content-center">
       <Col md={10} lg={10} > 
       <Card className="shadow border-0" style={{width: "28rem"}}> 

      <Card.Header className="bg-white text-black text-start"> 
        <div className="d-flex justify-content-between align-items-center"> 
          <h5> <i className="bi bi-calendar4-range"></i> Formulario{" "} 
          </h5> <i className="bi bi-person-circle ms-5"></i> 
          </div> 
          </Card.Header> 

          <Card.Header className="bg-primary text-white text-center"> 
            <h5>Formulario de Registro</h5> 
            </Card.Header> 

            <Card.Body> 
              <Form> 
                <Form.Group className="mb-3" controlId="nombre"> 
                  <Form.Label>Nombre completo
                    </Form.Label> 

                  <Form.Control type="text" placeholder="Ingresa tu nombre" /> 
                  </Form.Group> 
                  <Form.Group className="mb-3" controlId="correo"> 
                    <Form.Label>Correo electrónico
                      </Form.Label> 

                    <Form.Control type="email" placeholder="Saya@ejemplo.com" /> 
                    </Form.Group> <Form.Group className="mb-3" controlId="programa"> 
                      <Form.Label>Programa académico
                        </Form.Label> 


                      <Form.Select defaultValue=""> 
                        <option value="" disabled> Seleccione uno </option>
                         <option value="1">Ingeniería</option> 
                         <option value="2">Derecho</option>
                          <option value="3">Medicina</option>
                           <option value="4">Licenciatura</option>
                            <option value="5">Trabajo Social</option> 
                            </Form.Select> 
                            </Form.Group> 
                            <Form.Group className="mb-3" controlId="terminos"> 
                              <Form.Check type="checkbox" label="Acepto los términos y condiciones" /> 
                              </Form.Group> <div className="text-center"> 
                                <Button variant="success"> Registrarse </Button>
                </div>
                </Form> 
              </Card.Body> 
                </Card> 
              </Col>
              </Row>
           </Container> 
                                    
         </div> 
         );
};
  export default Dashboard;