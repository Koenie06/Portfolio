import React from "react";
import { Container } from "react-bootstrap";
import About from "../About/About";
import Type from "./Type";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import "./Home.css";

function Home() {
  return (
    <section>
      <Container id="home" fluid className="home-section">
        <Container className="home-content">
            <h1 className="heading">
                What's up?{" "}
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

            <a href="#about">
                <MdKeyboardDoubleArrowDown className="scroll-down" />
            </a>
        </Container>
        <About />
      </Container>
    </section>
  );
};

export default Home;
