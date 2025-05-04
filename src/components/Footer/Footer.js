import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaEnvelope, FaDiscord, FaReact, FaPaypal } from "react-icons/fa";
import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
  } from "react-icons/ai";
import { IoLogoVercel } from "react-icons/io5";
import "./Footer.css";

function Footer() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("Koenie06");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Container id="socials" fluid className="footer">
        <Row>
            <Col md="5" className="footer-copyright">
                <h2>Quick <span className="blue">Navigation</span></h2>
                <br />
                <a href="#home" className="social-link quick-navigation"><AiOutlineHome className="social-icon"/>Home</a><br />
                <a href="#about" className="social-link quick-navigation"><AiOutlineUser className="social-icon"/>About</a><br />
                <a href="#socials" className="social-link quick-navigation"><AiOutlineFundProjectionScreen className="social-icon"/>Socials</a><br />
            </Col>

            <Col md="2" className="footer-copyright">
                <h2>My <span className="blue">Socials</span></h2>
                <br />
                <a href="mailto:koentermaat1@gmail.com" className="social-link"><FaEnvelope className="social-icon"/>koentermaat1@gmail.com</a><br />
                <span onClick={handleCopy} className="social-link" style={{ position: "relative" }}>
                    <FaDiscord className="social-icon" />Add me on discord
                    {copied && <span className="copied-popup">Discord username copied</span>}
                </span><br />
                <a href="https://github.com/Koenie06" target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub className="social-icon"/>Visit my GitHub</a><br />
                <a href="https://www.paypal.com/donate/?hosted_button_id=7WXFLFK9FW9KS" target="_blank" rel="noopener noreferrer" className="social-link"><FaPaypal className="social-icon"/>Buy me a beer</a>
            </Col>

            <Col md="5" className="footer-copyright">
                <h2>Site <span className="blue">Info</span></h2>
                <br />
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer"><FaReact className="social-icon site-icon"/></a><a href="https://vercel.com" target="_blank" rel="noopener noreferrer"><IoLogoVercel className="social-icon site-icon"/></a><a href="https://github.com/Koenie06/Portfolio" target="_blank" rel="noopener noreferrer">< FaGithub className="social-icon site-icon"/></a><br />
                <span className="social-link">Built with <span className="blue">React</span></span><br />
                <span className="social-link">Deployed on <span className="blue">Vercel</span></span><br />
                <span className="social-link">Last updated: <span className="blue">May 2025</span></span><br />
            </Col>

            <Col md="12" className="footer-copyright">
                <p className="footer-copyright-text">© 2025-present Koen Termaat. All rights reserved.</p>
            </Col>
        </Row>
        </Container>
    );
};

export default Footer;