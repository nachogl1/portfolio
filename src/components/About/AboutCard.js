import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Nacho Gonzalez </span>
            from <span className="purple"> Extremadura, Spain.</span>
            <br />
            Full-Stack software developer with a MSc in Computer Science and BSc
            in Bilingual Biomedical Engineering. I really enjoy practising Pair Programming and TDD together with a strong understanding of core concepts of programming.
            <br />
            I bring good energy and a hard working mindset, I am easy to work
            with and try to provide value above what is expected.
            <br />
            <br />
            Other interests are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Brazilian Jiujitsu
            </li>
            <li className="about-activity">
              <ImPointRight /> Padel
            </li>
            <li className="about-activity">
              <ImPointRight /> Finances
            </li>
            <li className="about-activity">
              <ImPointRight /> Productivity
            </li>
            <li className="about-activity">
              <ImPointRight /> Cryptocurrencies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never stop trying"{" "}
          </p>
          <footer className="blockquote-footer">Nacho</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
