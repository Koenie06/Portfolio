import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

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

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Languages() {

    const main = useRef();

    useGSAP(() => {
        const headings = document.querySelectorAll(".reveal-container"); // Per 'row' met sterren

        headings.forEach((heading) => {
            const stars = heading.querySelectorAll(".reveal-star"); // Alle sterren in dit h5-element

            gsap.from(stars, {
                scrollTrigger: {
                    trigger: heading,
                    start: "top 60%",
                    end: "top 50%",
                    scrub: true,
                    markers: false,
                },
                rotate: 360,
                opacity: 0,
                y: 30,
                scale: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)",
                duration: 0.6,
                lazy: true,
            });
        });
    }, { scope: main });

    return (
        <Row className="tech-container" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="100">
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiJavascript />
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
            <a href="https://www.w3schools.com/typescript/index.php" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiTypescript />
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
            <a href="https://www.w3schools.com/react/default.asp" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiReact />
            <h5 className="reveal-container" ref={main}>
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarLine className='reveal-star' />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiMongodb />
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
            <a href="https://www.w3schools.com/mysql/default.asp" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiMysql />
            <h5 className="reveal-container" ref={main}>
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarLine className='reveal-star' />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.w3schools.com/python/default.asp" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiPython />
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
            <a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiHtml5 />
            <h5 className="reveal-container" ref={main}>
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarLine className='reveal-star' />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiCss3 />
            <h5 className="reveal-container" ref={main}>
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarLine className='reveal-star' />
            </h5>
            </a>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer" className="tech-href">
            <SiGit />
            <h5 className="reveal-container" ref={main}>
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarFill className='reveal-star' />
                <RiStarLine className='reveal-star' />
            </h5>
            </a>
        </Col>
        </Row>
    );
};

export default Languages;
