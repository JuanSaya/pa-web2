import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function Calculadora() {
  const [operacion, setOperacion] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  const operar = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    switch (operacion) {
      case "suma":
        setResultado(a + b);
        break;
      case "resta":
        setResultado(a - b);
        break;
      case "multiplicacion":
        setResultado(a * b);
        break;
      case "division":
        setResultado(b !== 0 ? a / b : "Error");
        break;
      case "seno":
        setResultado(Math.sin(a).toFixed(4));
        break;
      case "coseno":
        setResultado(Math.cos(a).toFixed(4));
        break;
      case "tangente":
        setResultado(Math.tan(a).toFixed(4));
        break;
      default:
        setResultado("Seleccione una operación");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={10} lg={10}>
          <Card className="shadow border-0">
            
            {/* Header estilo dashboard */}
            <Card.Header className="bg-whitw text-black text-start">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <i className="bi bi-calculator"></i> Calculadora
                </h5>
                <i className="bi bi-person-circle ms-5"></i>
              </div>
            </Card.Header>

            <Card.Header className="bg-primary text-white text-center"> 
                        <h5>Calculadora</h5> 
                        </Card.Header>  




            {/* Body */}
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Label>Primer número</Form.Label>
                    <Form.Control
                      type="number"
                      value={num1}
                      onChange={(e) => setNum1(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Segundo número</Form.Label>
                    <Form.Control
                      type="number"
                      value={num2}
                      onChange={(e) => setNum2(e.target.value)}
                      disabled={["seno", "coseno", "tangente"].includes(operacion)}
                    />
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Operación</Form.Label>
                  <div className="d-flex flex-wrap">
                    {[
                      { label: "Suma", value: "suma" },
                      { label: "Resta", value: "resta" },
                      { label: "Multiplicación", value: "multiplicacion" },
                      { label: "División", value: "division" },
                      { label: "Seno", value: "seno" },
                      { label: "Coseno", value: "coseno" },
                      { label: "Tangente", value: "tangente" },
                    ].map((op) => (
                      <Form.Check
                        key={op.value}
                        type="radio"
                        label={op.label}
                        value={op.value}
                        name="operacion"
                        className="me-3"
                        onChange={(e) => setOperacion(e.target.value)}
                      />
                    ))}
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Resultado</Form.Label>
                  <Form.Control type="text" value={resultado} disabled />
                </Form.Group>

                <div className="text-center">
                  <Button variant="success" onClick={operar}>
                    Calcular
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Calculadora;
