import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import myImg from "../../Assets/home-main.png";

import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A <span className="purple"> summary </span> about myself
            </h1>
            <p className="home-about-body">
              Positive minded and always full of energy, I am deeply interested
              in improving in general with a strong focus on productivity.
              <br />
              <br />
              After my degree I started to gain some interest in programming and
              decided to dedicate myself to it. After finding my first job, I
              started to work on my own little projects. Now I am also
              interested in content creation and keep improving in any
              discipline related to software. I do use TDD while programming and
              try to advocate for a short feedback loop seeking efficiency.
              <br />
              <br />
              Other interests cover playing and coaching padel, and BJJ
              (Brazilian Jiujitsu) among others.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nachogl1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ignaciogonzalezluengo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/nachogl1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
