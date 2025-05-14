import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import { FaGraduationCap, FaLaptopCode, FaGamepad } from "react-icons/fa";
import SplitType from 'split-type'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function AboutCard() {

    const main = useRef();

    useGSAP(
    () => {

        const splitTypes = document.querySelectorAll('.reveal-type')

        splitTypes.forEach((char, i) => {

            const text = new SplitType(char, { types: 'chars,words' });

            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: char,
                    start: 'top 45%',
                    end: 'top 30%',
                    scrub: true,
                    markers: false,
                },
                opacity: 0.2,
                stagger: 0.1,
                lazy: true,
            })
        });
    },
    { scope: main }
  );

    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    <span className="about-title">Hi, I am <span className="blue">Koen Termaat </span>
                    from <span className="blue"> The Netherlands.</span></span>
                    <br />
                    <br />
                </p>
                <div ref={main} className="reveal-type">
                    <div data-aos="custom-slide-right" data-aos-duration="600" data-aos-delay="100">
                        <div className="icon-container">
                            <FaGraduationCap className="graduation-icon" size={55} />
                        </div>
                        <br />

                        <p>
                            Currently studying <span className="blue">HBO-ICT</span> at <span className="blue">Hogeschool Utrecht</span>.<br />During my studies, I'm learning a wide range of <span className="blue">programming topics</span>, from <span className="blue">frontend development</span> to <span className="blue">backend systems</span> and <span className="blue"></span>everything in between.
                            <br />
                        </p>
                    </div>
                    <div data-aos="custom-slide-left" data-aos-duration="600" data-aos-delay="100">
                        <div className="icon-container">
                            <FaLaptopCode className="graduation-icon" size={55} />
                        </div>
                        <br />
                        <p>
                            In my <span className="blue">free time</span>, I love working on personal <span className="blue">coding projects</span>. I enjoy coding in languages like <span className="blue">JavaScript</span>, <span className="blue">HTML</span>, <span className="blue">CSS</span>, and <span className="blue">Python</span>, and I often experiment with frameworks like <span className="blue">React</span>. I'm always curious to explore <span className="blue">new tools</span> and improve my skills through <span className="blue">hands-on practice</span>.
                            <br />
                        </p>
                    </div>
                    <div data-aos="custom-slide-right" data-aos-duration="600" data-aos-delay="100">
                        <div className="icon-container">
                            <FaGamepad className="graduation-icon" size={55} />
                        </div>
                        <br />
                        <p>
                            Outside of <span className="blue">coding</span>, I like to <span className="blue">game with friends</span> and often <span className="blue">hang out</span> socially. Whether it's <span className="blue">online</span> or in <span className="blue">real life</span>, I enjoy <span className="blue">spending time with people</span> and <span className="blue">relaxing</span> after a day of <span className="blue">studying</span>.
                        </p>
                    </div>
                </div>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default AboutCard;
