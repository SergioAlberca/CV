import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function Contact() {
  return (
    <Row className="fix-row-width">
      <Col xs={12} className="col-custom">
        <Form className="form-custom">
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
            Enviar
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default Contact;
