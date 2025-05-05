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
import {
  RiStarFill,
  RiStarHalfFill,
  RiStarLine,
} from "react-icons/ri";

function Languages() {
    return (
        <Row className="tech-container" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="100">
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiJavascript />
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
            <a href="https://www.w3schools.com/typescript/index.php" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiTypescript />
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
            <a href="https://www.w3schools.com/react/default.asp" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiReact />
            <h5>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarLine />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiMongodb />
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
            <a href="https://www.w3schools.com/mysql/default.asp" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiMysql />
            <h5>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarLine />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.w3schools.com/python/default.asp" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiPython />
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
            <a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiHtml5 />
            <h5>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarLine />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiCss3 />
            <h5>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarLine />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiGit />
            <h5>
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarLine />
            </h5>
            </a>
        </Col>
        </Row>
    );
};

export default Languages;
