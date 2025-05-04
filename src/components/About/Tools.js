import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiDatabase
} from 'react-icons/di';
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiVercel,
  SiWindows,
  SiDiscord,
} from "react-icons/si";
import {
  RiStarFill,
  RiStarHalfFill,
  RiStarLine,
} from "react-icons/ri";
import { FaFigma } from "react-icons/fa";

function Tools() {
    return (
        <Row className="tech-container">
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.microsoft.com/windows/" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiWindows />
            <h5>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.linux.org" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiLinux />
            <h5>
                <RiStarFill />
                <RiStarFill />
                <RiStarHalfFill />
                <RiStarLine />
                <RiStarLine />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiVisualstudiocode />
            <h5>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.postman.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiPostman />
            <h5>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarHalfFill />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiGithub />
            <h5>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiVercel />
            <h5>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <FaFigma />
            <h5>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarHalfFill />
                <RiStarLine />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiDiscord />
            <h5>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <DiDatabase />
            <h5>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarHalfFill />
            </h5>
            </a>
        </Col>
        </Row>
    );
};

export default Tools;
