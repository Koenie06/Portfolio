import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiPython,
  SiReact,
  SiGit
} from "react-icons/si";

function Languages() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col onClick="window.location.href='https://google.com'" xs={4} md={2} className="tech-icons">
        <a href="https://www.w3schools.com/js/default.asp" className="tech-href">
          <SiJavascript />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.w3schools.com/typescript/index.php" className="tech-href">
          <SiTypescript />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.w3schools.com/react/default.asp" className="tech-href">
          <SiReact />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mongodb.com" className="tech-href">
          <SiMongodb />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.w3schools.com/mysql/default.asp" className="tech-href">
          <SiMysql />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.w3schools.com/python/default.asp" className="tech-href">
          <SiPython />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.w3schools.com/html/default.asp" className="tech-href">
          <SiHtml5 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.w3schools.com/css/default.asp" className="tech-href">
          <SiCss3 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://git-scm.com" className="tech-href">
          <SiGit />
        </a>
      </Col>
    </Row>
  );
}

export default Languages;
