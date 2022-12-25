import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiDatabase
} from 'react-icons/di';
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiGithub,
  SiVercel,
  SiWindows,
  SiDiscord,
} from "react-icons/si";

function Tools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.microsoft.com/windows/" className="tech-href">
          <SiWindows />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.linux.org" className="tech-href">
          <SiLinux />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://code.visualstudio.com" className="tech-href">
          <SiVisualstudiocode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.postman.com" className="tech-href">
          <SiPostman />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://github.com" className="tech-href">
          <SiGithub />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://vercel.com" className="tech-href">
          <SiVercel />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.heroku.com" className="tech-href">
          <SiHeroku />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://discord.com" className="tech-href">
          <SiDiscord />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mysql.com" className="tech-href">
          <DiDatabase />
        </a>
      </Col>
    </Row>
  );
}

export default Tools;
