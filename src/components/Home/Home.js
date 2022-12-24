import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import "./Home.css";

function Home() {
  return (
    <section>
      <RemoveScrollBar />
      <Container fluid className="home-section">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col className="home-header">
              <h1 className="heading">
                Hi there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Koen Termaat</strong>
              </h1>

              <h1 className="heading-type">
                <Type />
              </h1>
            </Col>

            {/* <Col md="auto" style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
