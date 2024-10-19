import React from "react";
import { Col, Row } from "react-bootstrap";
import { HiDotsHorizontal } from "react-icons/hi";
import {
  SiIntellijidea,
  SiMacos,
  SiPostman,
  SiSlack,
  SiVisualstudiocode,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <HiDotsHorizontal color="purple"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
