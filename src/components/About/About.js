import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Languages from "./Languages";
import Aboutcard from "./AboutCard";
import Tools from "./Tools";
import "./About.css";

function About() {
  return (
    <Container fluid className="about-section" style={{ userSelect: "none", cursor: "default" }}>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who am <strong className="blue">I?</strong>
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="blue">Coding languages</strong> I use
        </h1>

        <Languages />

        <h1 className="project-heading">
          <strong className="blue">Tools</strong> I use
        </h1>

        <Tools />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
