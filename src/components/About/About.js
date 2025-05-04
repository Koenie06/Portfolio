import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Languages from "./Languages";
import Aboutcard from "./AboutCard";
import Tools from "./Tools";
import "./About.css";

function About() {
    return (
        <Container id="about" fluid className="about-section">
            <Container>
                <Row className="about-row">
                    <Col className="about-whois" md={7}>
                        <h1 className="whois-header">
                        Who am <strong className="blue">I?</strong>
                        </h1>
                        <Aboutcard />
                    </Col>
                </Row>
                <h1 className="project-heading languages" > 
                    <strong className="blue">Coding languages</strong> I know/use
                </h1>

                <Languages />

                <h1 className="project-heading tools" >
                    <strong className="blue">Tools</strong> I know/use
                </h1>

                <Tools />
                <Github />
            </Container>
        </Container>
    );
};

export default About;
