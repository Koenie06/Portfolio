import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import './Projects.css';
import { SiCss3, SiHtml5, SiJavascript, SiPython, SiReact } from "react-icons/si";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

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
                    imgPath="https://cdn.discordapp.com/attachments/1052780891300184096/1150988822056469514/image.png"
                    title="Portfolio Website"
                    description={<>This is my <span className="blue">portfolio website</span>. It is made with <span className="blue">React</span> and <span className="blue">Bootstrap</span>. It is a simple website that shows my <span className="blue">projects</span>, <span className="blue">skills</span> and <span className="blue">contact information</span>. It is still in <span className="blue">development</span>, but it is almost finished.</>}
                    languages={<><SiJavascript className="project-language-icon" /> Javascript | <SiReact className="project-language-icon" /> React | <SiCss3 className="project-language-icon" /> CSS | <SiHtml5 className="project-language-icon" /> HTML</>}
                    githubLink="https://github.com/Koenie06/Portfolio"
                    btnLink="https://www.koentermaat.com/"
                    btnName="Visit Website"
                    btnIcon={<FiExternalLink />}
                />
            </Col>
            <Col md={6} className="project-card">
                <ProjectCards 
                    imgPath=""
                    title="Connect Four"
                    languages={<><SiPython className="project-language-icon" /> Python <FiArrowRight /> CustomTkinter</>}
                    description={<>Ever wanted to play <span className="blue">Connect Four</span> locally? Well now you can! This is a <span className="blue">simple</span> connect four game made in <span className="blue">Python</span>. You can play against <span className="blue">a friend</span>, create your <span className="blue">own words</span> or pick a <span className="blue">random</span> one.</>}
                    githubLink="https://github.com/Koenie06/ConnectFourPY"
                    demoLink=""
                />
            </Col>

          <Col md={12} className="project-card">
            <ProjectCards 
                imgPath=""
                title="Hangman"
                languages={<><SiPython className="project-language-icon" /> Python <FiArrowRight /> CustomTkinter</>}
                description={<>Ever wanted to play <span className="blue">Hangman</span> locally with <span className="blue">a friend</span>? Well now you can! This is a <span className="blue">simple</span> hangman game made in <span className="blue">Python</span>. You can play against <span className="blue">a friend</span> or against <span className="blue">the computer</span>.</>}
                githubLink=""
                demoLink="https://github.com/Koenie06/HangmanPY"
            />
          </Col>

          <Col md={4} className="project-card">
            {/* <SocialCards
              link="https://steamcommunity.com/id/koenonsteam/"
              imgPath={steam}
              imgStyle={{ marginTop: 15 }}
              title="Steam"
              btn={<SiSteam />}
              btnName="Steam"
              description="All though I do talk a lot about coding etc. I do have other hobbies, one of them is gaming. I play a lot of games. If you're a real stalker you might want to see which games I play.. Well here you go."
              descStyle={{ marginTop: 10 }}
            /> */}
          </Col>

          <Col md={4} className="project-card">
            {/* <SocialCards
              link="https://www.paypal.com/donate/?hosted_button_id=7WXFLFK9FW9KS"
              imgPath={paypal}
              imgStyle={{ marginTop: 18, marginBottom: 11 }}
              title="Paypal"
              btn={<SiPaypal />}
              btnName="Paypal"
              description="Want to support me? Want to help me out? Want to buy me a coffee? Go and donate to me on paypal. I'll be very thankful for it."
              descStyle={{ marginTop: 25}}
            /> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
