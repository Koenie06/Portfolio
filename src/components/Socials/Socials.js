import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialCards from "./SocialCards";
import Particle from "../Particle";
import github from '../../Assets/logos/github.png';
import mail from '../../Assets/logos/gmail.png';
import discord from '../../Assets/logos/discord.png';
import steam from '../../Assets/logos/steam.png';
import paypal from '../../Assets/logos/paypal.png';
import { 
  SiGithub,
  SiGmail,
  SiDiscord,
  SiSteam,
  SiPaypal
} 
from "react-icons/si";
import './Socials.css';

function Socials() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{userSelect: "none", cursor: "default" }}>
        <h1 className="project-heading">
          My <strong className="blue">Socials </strong>
        </h1>
        <p style={{ color: "white" }}>
          Want to contact me or stalk me? Here you go.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <SocialCards
              link="https://github.com/Koenie06"
              imgPath={github}
              imgStyle={{ height: 175, marginTop: 10 }}
              title="Github"
              btnName="Github"
              btn={<SiGithub />}
              description="Want to see some projects of mine? Go and take a look at my github page. Currently working on a lot to publish so there isn't much on it YET!"
              descStyle={{ marginTop: 15 }}
            />
          </Col>

          <Col md={4} className="project-card">
            <SocialCards
              imgPath={mail}
              imgStyle={{ height: 160, marginTop: 5, marginBottom: 23 }}
              title="Mail"
              btn={<SiGmail />}
              btnName="koentermaat1@gmail.com"
              description="Want to contact me? Want to ask me something? Need help with some project you're working on? Just send me an mail and I'll try to respond to it as fast as possible."
              descStyle={{ marginTop: 10 }}
            />
          </Col>

          <Col md={4} className="project-card">
            <SocialCards
              imgPath={discord}
              imgStyle={{ height: 165, marginTop: 25 }}
              title="Discord"
              btn={<SiDiscord />}
              btnName="Koenie06#0252"
              description="Need to contact me? Want to talk about a project? Need help with some project you're working on? Go and add me on discord."
              descStyle={{ marginTop: 20 }}
            />
          </Col>

          <Col md={4} className="project-card">
            <SocialCards
              link="https://steamcommunity.com/id/koenonsteam/"
              imgPath={steam}
              imgStyle={{ marginTop: 15 }}
              title="Steam"
              btn={<SiSteam />}
              btnName="Steam"
              description="All though I do talk a lot about coding etc. I do have other hobbies, one of them is gaming. I play a lot of games. If you're a real stalker you might want to see which games I play.. Well here you go."
              descStyle={{ marginTop: 10 }}
            />
          </Col>

          <Col md={4} className="project-card">
            <SocialCards
              link="https://www.paypal.com/donate/?hosted_button_id=7WXFLFK9FW9KS"
              imgPath={paypal}
              imgStyle={{ marginTop: 18, marginBottom: 11 }}
              title="Paypal"
              btn={<SiPaypal />}
              btnName="Paypal"
              description="Want to support me? Want to help me out? Want to buy me a coffee? Go and donate to me on paypal. I'll be very thankful for it."
              descStyle={{ marginTop: 25}}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Socials;
