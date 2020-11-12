import React, { useState } from "react";
import "./dashboard.css";
import {
  Container,
  Row,
  Col,
  Button,
  Tabs,
  Tab,
  Card,
  ProgressBar,
  Form,
} from "react-bootstrap";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../assets/images/profile.jpg";
import {
  faAt,
  faLaptopCode,
  faMapMarker,
  faPhone,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";

function Dashboard() {
  const [key, setKey] = useState("experience");
  const [skills, setSkills] = useState({
    languajes: [
      { label: "Html", percentage: "80%" },
      { label: "CSS", percentage: "70%" },
      { label: "JavaScript", percentage: "80%" },
      { label: "Java", percentage: "40%" },
      { label: "PHP", percentage: "50%" },
      { label: "MYSQL", percentage: "60%" },
    ],
    frameworks: [
      { label: "JQuery", percentage: "75%" },
      { label: "Node Js", percentage: "60%" },
      { label: "Angular", percentage: "90%" },
      { label: "Angular Js", percentage: "80%" },
      { label: "Ionic", percentage: "90%" },
      { label: "React", percentage: "90%" },
      { label: "React Native", percentage: "85%" },
      { label: "Vue Js", percentage: "70%" },
      { label: "Jekyll", percentage: "80%" },
      { label: "Laravel", percentage: "50%" },
      { label: "Slim", percentage: "50%" },
      { label: "Sass", percentage: "70%" },
      { label: "Less", percentage: "70%" },
      { label: "Bootstrap", percentage: "80%" },
    ],
    tools: [
      { label: "Redux" },
      { label: "Git" },
      { label: "Docker" },
      { label: "Jenkins" },
      { label: "Visual Studio" },
      { label: "Sublime Text" },
      { label: "Netbeans" },
      { label: "PhpStorm" },
      { label: "Eclipse" },
      { label: "JIRA" },
      { label: "Scrum" },
      { label: "Npm" },
      { label: "Trello" },
    ],
  });

  const renderSection = () => {
    switch (key) {
      case "experience":
        return renderExperience();
      case "education":
        return renderEducation();
      case "skills":
        return renderSkills();
      case "contact":
        return renderContact();
      default:
        break;
    }
  };

  const renderExperience = () => {
    return (
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#007888",
            color: "white",
          }}
          contentArrowStyle={{
            borderRight: "7px solid #007888",
          }}
          date="Septiembre 2020 - presente"
          iconStyle={{
            background: "#007888",
            color: "#fff",
            fontSize: "19px",
          }}
          icon={<FontAwesomeIcon icon={faLaptopCode} />}
        >
          <h3 className="vertical-timeline-element-title">
            Desarrollador de front - end
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Atmira, Córdoba
          </h4>
          <p>
            Desarrollo de páginas web y aplicaciones móviles con las tecnologías
            punteras en desarrollo para el Front - End.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#007888",
            color: "white",
          }}
          contentArrowStyle={{
            borderRight: "7px solid #007888",
          }}
          date="Noviembre 2017 - Septiembre 2020"
          iconStyle={{
            background: "#007888",
            color: "#fff",
            fontSize: "19px",
          }}
          icon={<FontAwesomeIcon icon={faLaptopCode} />}
        >
          <h3 className="vertical-timeline-element-title">
            Desarrollador de front - end
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vector ITC, Córdoba
          </h4>
          <p>
            Desarrollo de páginas web y aplicaciones móviles con las tecnologías
            punteras en desarrollo para el Front - End.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#007888",
            color: "white",
          }}
          contentArrowStyle={{
            borderRight: "7px solid #007888",
          }}
          date="Marzo 2017 - Junio 2017"
          iconStyle={{
            background: "#007888",
            color: "#fff",
            fontSize: "19px",
          }}
          icon={<FontAwesomeIcon icon={faLaptopCode} />}
        >
          <h3 className="vertical-timeline-element-title">
            Desarrollador de aplicaciones móviles
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Publicube S.L, Lucena (Córdoba)
          </h4>
          <p>
            Desarrollo de aplicaciones móviles para android y desarrollo de
            módulos Wordpress para páginas web.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
  };

  const renderEducation = () => {
    return (
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#007888",
            color: "white",
          }}
          contentArrowStyle={{
            borderRight: "7px solid #007888",
          }}
          date="Septiembre 2014 - Junio 2017"
          iconStyle={{
            background: "#007888",
            color: "#fff",
            fontSize: "19px",
          }}
          icon={<FontAwesomeIcon icon={faLaptopCode} />}
        >
          <h3 className="vertical-timeline-element-title">
            G.F.P.S DESARROLLO DE APLICACIONES MULTIPLATAFORMA
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            I.E.S FRANCISCO DE LOS RÍOS
          </h4>
          <p>
            Desarrollo de páginas web y aplicaciones móviles con las tecnologías
            punteras en desarrollo para el Front - End.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#007888",
            color: "white",
          }}
          contentArrowStyle={{
            borderRight: "7px solid #007888",
          }}
          date="Septiembre 2011 - Junio 2013"
          iconStyle={{
            background: "#007888",
            color: "#fff",
            fontSize: "19px",
          }}
          icon={<FontAwesomeIcon icon={faLaptopCode} />}
        >
          <h3 className="vertical-timeline-element-title">
            G.F.P.M SISTEMA MICROINFORMÁTICOS Y REDES
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            I.E.S VICENTE NÚÑEZ
          </h4>
          <p>
            Desarrollo de páginas web y aplicaciones móviles con las tecnologías
            punteras en desarrollo para el Front - End.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
  };

  const renderSkills = () => {
    return (
      <Row className="fix-row-width">
        <Col xs={12} className="fix-width">
          <Card>
            <Card.Title className="title-section-skill">Lenguajes de programación</Card.Title>
            {skills.languajes.map((skill) => {
              return (
                <div>
                  <Card.Body>
                    <Row>
                      <Col xs={12} md={1}>
                        <FontAwesomeIcon
                          icon={faFileCode}
                          className="icon-skill"
                        />
                      </Col>
                      <Col xs={12} md={5}>
                        <h5>{skill.label}</h5>
                      </Col>
                      <Col xs={12} md={6}>
                        <ProgressBar
                          now={parseInt(skill.percentage)}
                          label={skill.percentage}
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </div>
              );
            })}
            <Card.Title className="title-section-skill">Frameworks y librerías</Card.Title>
            {skills.frameworks.map((skill) => {
              return (
                <div>
                  <Card.Body>
                    <Row>
                      <Col xs={12} md={1}>
                        <FontAwesomeIcon
                          icon={faFileCode}
                          className="icon-skill"
                        />
                      </Col>
                      <Col xs={12} md={5}>
                        <h5>{skill.label}</h5>
                      </Col>
                      <Col xs={12} md={6}>
                        <ProgressBar
                          now={parseInt(skill.percentage)}
                          label={skill.percentage}
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </div>
              );
            })}
            <Card.Title className="title-section-skill">Herramientas de trabajo</Card.Title>
            {skills.tools.map((skill) => {
              return (
                <div>
                  <Card.Body>
                    <Row>
                      <Col xs={12} md={1}>
                        <FontAwesomeIcon
                          icon={faTools}
                          className="icon-skill"
                        />
                      </Col>
                      <Col xs={12} md={5}>
                        <h5>{skill.label}</h5>
                      </Col>
                      <Col xs={12} md={6}></Col>
                    </Row>
                  </Card.Body>
                </div>
              );
            })}
          </Card>
        </Col>
      </Row>
    );
  };

  const renderContact = () => {
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
  };

  return (
    <div>
      <Container className="container">
        {/* Iconos de redes sociales y botón descargar */}
        <Row className="header-social-sharing">
          <Col xs={6} className="buttons-social-sharing">
            <Button className="button-social-sharing">
              {" "}
              <FontAwesomeIcon
                icon={faTwitter}
                className="icon-social-sharing"
              />
            </Button>
            <Button className="button-social-sharing">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="icon-social-sharing"
              />
            </Button>
          </Col>
          <Col xs={6} className="button-donwload-container">
            <Button className="button-donwload">Descarga mi CV aquí</Button>
          </Col>
        </Row>
        {/* Avatar y descripcion */}
        <Row className="description">
          <Col xs={12} className="description-item">
            <img className="avatar" src={profile} alt="" />
          </Col>
          <Col xs={12} className="description-item">
            <h1 className="name-title">Sergio Alberca Navarro</h1>
          </Col>
          <Col xs={12} className="description-item">
            <h4 className="name-title">Front - End Developer</h4>
          </Col>
          <Col xs={12} className="description-item">
            <p className="name-title">
              Soy desarrollador de software especializado en la parte Front -
              End, desarrollo de páginas web y aplicaciones móviles. Me
              apasionan la nuevas tecnologías así como el trabajo en equipo y
              las metodologías ágiles. Además de ser un desarrollador web,
              disfruto la mayor parte de mi tiempo estando al aire libre. Me
              gusta practicar la musculación y el senderismo. Cuando estoy en
              casa, sigo una serie de películas de ciencia ficción y fantasía y
              programas de televisión, dedico gran parte de mi tiempo libre a
              explorar los últimos avances tecnológicos en el mundo de
              desarrollo web front-end.
            </p>
          </Col>
        </Row>
        {/* Datos personales */}
        <Row className="personal-data">
          <Col xs={12} className="personal-data-container">
            <div className="personal-data-item">
              <FontAwesomeIcon icon={faAt} className="icon-social-sharing" />
              <h5 className="name-data">s.albercaalberca@gmail.com</h5>
            </div>
            <div className="personal-data-item">
              <FontAwesomeIcon icon={faPhone} className="icon-social-sharing" />
              <h5 className="name-data">+34639102234</h5>
            </div>
            <div className="personal-data-item">
              <FontAwesomeIcon
                icon={faMapMarker}
                className="icon-social-sharing"
              />
              <h5 className="name-data">
                Aguilar de la frontera, Córdoba, España
              </h5>
            </div>
          </Col>
        </Row>
        {/* Secciones */}
        <Row className="sections">
          <Col xs={12} className="sections-container">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k != null ? k : "experience")}
            >
              <Tab eventKey="experience" title="Experiencia profesional"></Tab>
              <Tab eventKey="education" title="Formación Académica"></Tab>
              <Tab eventKey="skills" title="Conocimientos Técnicos"></Tab>
              <Tab eventKey="contact" title="Contacto"></Tab>
            </Tabs>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="timeLine-container">
            {renderSection()}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
