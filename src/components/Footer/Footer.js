import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" style={{ userSelect: "none", cursor: "default" }}>
      <Row>
        <Col md="12" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
