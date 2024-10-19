import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import enigma from "../../Assets/Projects/enigma.png";
import myGymBro from "../../Assets/Projects/mygymbro.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">pet projects </strong>
        </h1>
        <p style={{ color: "white" }}>When I am free I like to work on</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imageHref="/enigma"
              imgPath={enigma}
              isBlog={false}
              title="Enigma"
              description="Tool used to encrypt seeds or passwords and write then on NTAGs (NFC technology)"
              // ghLink="https://github.com/nachogl1/enigmx"
              demoLink="https://play.google.com/store"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imageHref="#"
              imgPath={myGymBro}
              isBlog={false}
              title="MyGymBro"
              description="Tool used to track and design gym routines, gamify your trainings and coach others"
              // ghLink="https://github.com/nachogl1/enigmx"
              demoLink="https://play.google.com/store"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
