import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import './Projects.css';
import { SiCss3, SiHtml5, SiJavascript, SiNpm, SiProgress, SiPython, SiReact } from "react-icons/si";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { TbProgressAlert, TbProgressCheck } from "react-icons/tb";

import websiteImg from "../../Assets/website.webp";
import hangmanImg from "../../Assets/hangman.webp";
import currencystem from "../../Assets/currencystem.webp";
import discordjs_music from "../../Assets/discordjs-music.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container style={{userSelect: "none", cursor: "default" }}>
        <h1 className="project-heading">
          My <strong className="blue">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
            Here are some of the projects I have worked on. Some of them are still in development, some of them are finished.<br />If you want to see more of my projects, go to my github page. If you want to contact me, go to the contact page.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={6} className="project-card">
                <ProjectCards 
                    imgPath={websiteImg}
                    title="Portfolio Website"
                    description={<>This is my <span className="blue">portfolio website</span>. It is made with <span className="blue">React</span> and <span className="blue">Bootstrap</span>. It is a simple website that shows my <span className="blue">projects</span>, <span className="blue">skills</span> and <span className="blue">contact information</span>. It is still in <span className="blue">development</span>, but it is almost finished.</>}
                    languages={<><SiJavascript className="project-language-icon" /> Javascript | <SiReact className="project-language-icon" /> React | <SiCss3 className="project-language-icon" /> CSS | <SiHtml5 className="project-language-icon" /> HTML</>}
                    githubLink="https://github.com/Koenie06/Portfolio"
                    btnLink="https://www.koentermaat.com/"
                    btnName="Visit Website"
                    btnIcon={<FiExternalLink />}
                    subtitle={<><TbProgressCheck className="project-card-subtitle-icon" />Finished</>}
                />
            </Col>
                <Col md={6} className="project-card">
                <ProjectCards 
                    imgPath={hangmanImg}
                    title="Hangman"
                    languages={<><SiPython className="project-language-icon" /> Python <FiArrowRight /> CustomTkinter</>}
                    description={<>Ever wanted to play <span className="blue">Hangman</span> locally with <span className="blue">a friend</span>? Well now you can! This is a <span className="blue">simple</span> hangman game made in <span className="blue">Python</span>. You can play against <span className="blue">a friend</span> or against <span className="blue">the computer</span>.</>}
                    githubLink="https://github.com/Koenie06/HangmanPY"
                    subtitle={<><TbProgressCheck className="project-card-subtitle-icon" />Finished</>}
                />
            </Col>
            
            <Col md={6} className="project-card">
                <ProjectCards 
                    imgPath="https://placehold.co/600x400/0f1174/lightgray?text=Connect+Four"
                    title="Connect Four"
                    languages={<><SiPython className="project-language-icon" /> Python <FiArrowRight /> CustomTkinter</>}
                    description={<>Ever wanted to play <span className="blue">Connect Four</span> locally? Well now you can! This is a <span className="blue">simple</span> connect four game made in <span className="blue">Python</span>. You can play against <span className="blue">a friend</span>, create your <span className="blue">own words</span> or pick a <span className="blue">random</span> one.</>}
                    githubLink="https://github.com/Koenie06/ConnectFourPY"
                    subtitle={<><TbProgressCheck className="project-card-subtitle-icon" />Finished</>}
                />
            </Col>

            <Col md={6} className="project-card">
                <ProjectCards 
                    imgPath={currencystem}
                    title="Currencystem"
                    languages={<><SiJavascript className="project-language-icon" /> Javascript | <SiNpm className="project-language-icon" /> NPM Package</>}
                    description={<>This <span className="blue">NPM package</span> helps you create a full <span className="blue">currency system</span>! Create user <span className="blue">wallets</span>/<span className="blue">bank accounts</span>, <span className="blue">add</span>/<span className="blue">remove</span> money, give them a <span className="blue">monthly income</span> or let them buy items from <span className="blue">the shop</span>..</>}
                    githubLink="https://github.com/Koenie06/Currencystem"
                    btnLink="https://github.com/Koenie06/Currencystem"
                    btnName="Download"
                    btnIcon={<FiExternalLink />}
                    subtitle={<><TbProgressAlert className="project-card-subtitle-icon" />In Progress</>}
                />
            </Col>

            <Col md={12} className="project-card">
                <ProjectCards 
                    imgPath={discordjs_music}
                    title="Discord.js-Music"
                    languages={<><SiJavascript className="project-language-icon" /> Javascript | <SiNpm className="project-language-icon" /> NPM Package</>}
                    description={<>This <span className="blue">NPM package</span> helps you create a full <span className="blue">currency system</span>! Create user <span className="blue">wallets</span>/<span className="blue">bank accounts</span>, <span className="blue">add</span>/<span className="blue">remove</span> money, give them a <span className="blue">monthly income</span> or let them buy items from <span className="blue">the shop</span>..</>}
                    githubLink="https://github.com/Koenie06/Discord.js-Music"
                    btnLink="https://www.npmjs.com/package/@koenie06/discord.js-music"
                    btnName="Download"
                    btnIcon={<FiExternalLink />}
                    subtitle={<><TbProgressAlert className="project-card-subtitle-icon" />Deprecated</>}
                />
            </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
