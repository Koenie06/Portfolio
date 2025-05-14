import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
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

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Tools() {

    const main = useRef();

    return (
        <Row className="tech-container" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="100">
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.microsoft.com/windows/" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiWindows />
            <h5 className="reveal-container" ref={main}>
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.linux.org" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiLinux />
            <h5 className="reveal-container" ref={main}>
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarHalfFill className='reveal-star' />
                <RiStarLine className='reveal-star' />
                <RiStarLine className='reveal-star' />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiVisualstudiocode />
            <h5 className="reveal-container" ref={main}>
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.postman.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiPostman />
            <h5 className="reveal-container" ref={main}>
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarHalfFill className='reveal-star' />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiGithub />
            <h5 className="reveal-container" ref={main}>
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiVercel />
            <h5 className="reveal-container" ref={main}>
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <FaFigma />
            <h5 className="reveal-container" ref={main}>
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarHalfFill className='reveal-star' />
                <RiStarLine className='reveal-star' />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiDiscord />
            <h5 className="reveal-container" ref={main}>
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <DiDatabase />
            <h5 className="reveal-container" ref={main}>
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarHalfFill className='reveal-star' />
            </h5>
            </a>
        </Col>
        </Row>
    );
};

export default Tools;
