import { faFileCode, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Row, Col, Card, ProgressBar } from "react-bootstrap";

function CardSkills(props: any) {
  const [skills] = useState(props.skills[0]);

  return (
    <Row className="fix-row-width">
      <Col xs={12} className="fix-width">
        <Card>
          <Card.Title className="title-section-skill">
            Lenguajes de programación
          </Card.Title>
          {skills.languajes.map((skill: any) => {
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
                        variant="info"
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </div>
            );
          })}
          <Card.Title className="title-section-skill">
            Frameworks y librerías
          </Card.Title>
          {skills.frameworks.map((skill: any) => {
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
                        variant="info"
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </div>
            );
          })}
          <Card.Title className="title-section-skill">
            Herramientas de trabajo
          </Card.Title>
          {skills.tools.map((skill: any) => {
            return (
              <div>
                <Card.Body>
                  <Row>
                    <Col xs={12} md={1}>
                      <FontAwesomeIcon icon={faTools} className="icon-skill" />
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
}

export default CardSkills;
