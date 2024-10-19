import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaAws, FaGit, FaJava, FaLinux } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoLogoIonic } from "react-icons/io";
import { SiCypress, SiJest, SiJunit5, SiTypescript } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCypress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJunit5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoIonic />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <HiDotsHorizontal color="purple" />
      </Col>
    </Row>
  );
}

export default Techstack;
