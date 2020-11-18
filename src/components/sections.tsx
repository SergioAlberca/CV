import React, { useState } from "react";
import { Row, Col, Tab, Tabs } from "react-bootstrap";
import { sections } from "../constants/constants";

function Sections(props: any) {
  const [key, setKey] = useState("experience");

  return (
    <div>
      {/* Secciones */}
      <Row className="sections">
        <Col xs={12} className="sections-container">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k != null ? k : "experience")}
          >
            <Tab
              eventKey={sections.experience}
              title="Experiencia profesional"
            ></Tab>
            <Tab
              eventKey={sections.education}
              title="Formación Académica"
            ></Tab>
            <Tab
              eventKey={sections.skills}
              title="Conocimientos Técnicos"
            ></Tab>
            <Tab eventKey={sections.contact} title="Contacto"></Tab>
          </Tabs>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="timeLine-container">
          {props.renderSection(key)}
        </Col>
      </Row>
    </div>
  );
}

export default Sections;
