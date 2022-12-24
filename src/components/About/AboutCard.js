import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="blue">Koen Termaat </span>
            from <span className="blue"> The Netherlands.</span>
            <br />My main hobby is to code, I like to <span className="blue">code</span> all kinds of things, from <span className="blue">websites</span> to <span className="blue">games</span>.<br />
            <br />
            Apart from coding, I am most likely to be found <span className="blue">playing games</span> or <span className="blue">at school</span>.<br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
