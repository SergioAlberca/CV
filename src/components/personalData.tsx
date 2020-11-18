import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhone, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row, Col, Button } from "react-bootstrap";

function PersonalData(props: any) {
  return (
    <div>
      {/* Iconos de redes sociales y botón descargar */}
      <Row className="header-social-sharing">
        <Col xs={6} className="buttons-social-sharing">
          <Button
            className="button-social-sharing"
            href="https://twitter.com/s_alberca?lang=es"
          >
            {" "}
            <FontAwesomeIcon icon={faTwitter} className="icon-social-sharing" />
          </Button>
          <Button
            className="button-social-sharing"
            href="https://es.linkedin.com/in/sergio-alberca-navarro-a44353106"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon-social-sharing"
            />
          </Button>
        </Col>
        <Col xs={6} className="button-donwload-container">
          <Button
            className="button-donwload"
            target="_blank"
            href="https://firebasestorage.googleapis.com/v0/b/cv-sergio-alberca.appspot.com/o/CV-Sergio_Alberca-2020.pdf?alt=media&token=5e16e616-281a-48df-8898-10ae84d441dd"
          >
            Descarga mi CV aquí
          </Button>
        </Col>
      </Row>
      {/* Avatar y descripcion */}
      <Row className="description">
        <Col xs={12} className="description-item">
          <img
            className="avatar"
            src="https://firebasestorage.googleapis.com/v0/b/cv-sergio-alberca.appspot.com/o/Profile%20(1).jpg?alt=media&token=b2547b31-08c6-4bb0-84a4-716ba44b9630"
            alt=""
          />
        </Col>
        <Col xs={12} className="description-item">
          <h1 className="name-title">
            {props.personalData.name} {props.personalData.surname}{" "}
            {props.personalData.surname2}
          </h1>
        </Col>
        <Col xs={12} className="description-item">
          <h4 className="name-title">{props.personalData.employment}</h4>
        </Col>
        <Col xs={12} className="description-item">
          <p className="description-text">{props.personalData.description}</p>
        </Col>
      </Row>
      {/* Datos personales */}
      <Row className="personal-data">
        <Col xs={12} md={4} className="personal-data-container">
          <div className="personal-data-item">
            <FontAwesomeIcon icon={faAt} className="icon-social-sharing" />
            <h5 className="name-data">{props.personalData.email}</h5>
          </div>
        </Col>
        <Col xs={12} md={4} className="personal-data-container">
          <div className="personal-data-item">
            <FontAwesomeIcon icon={faPhone} className="icon-social-sharing" />
            <h5 className="name-data">
              {props.personalData.prefix} {props.personalData.phone}
            </h5>
          </div>
        </Col>
        <Col xs={12} md={4} className="personal-data-container">
          <div className="personal-data-item">
            <FontAwesomeIcon
              icon={faMapMarker}
              className="icon-social-sharing"
            />
            <h5 className="name-data">
              {props.personalData.city}, {props.personalData.province},{" "}
              {props.personalData.country}
            </h5>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default PersonalData;
