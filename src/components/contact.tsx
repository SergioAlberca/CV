import React, { useState } from "react";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { setTimeout } from "timers";

function Contact() {
  const [loading, setloading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  function sendData(e: any) {
    e.preventDefault();
    setloading(true);
    setTimeout(() => {
      setloading(false);
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }, 3000);
  }

  return (
    <Row className="fix-row-width">
      <Col xs={12} className="col-custom">
        <Form className="form-custom" onSubmit={sendData}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Introduzca su email..." />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Introduzca su nombre..." />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Apellidos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduzca sus apellidos..."
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Asunto</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            {!loading && <span>Enviar</span>}
            {loading && <Spinner animation="border" variant="light" />}
          </Button>
          {showAlert && (
            <Alert variant="info">
              ¡Mensaje recibido! Te responderé a la mayor brevedad posible,
              ¡muchas gracias!
            </Alert>
          )}
        </Form>
      </Col>
    </Row>
  );
}

export default Contact;
