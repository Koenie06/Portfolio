import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function SocialCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={props.imgStyle} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={props.descStyle}>
          {props.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
          <Button style={{ marginTop: 10 }} variant="primary" href={props.link} target="_blank">
            {props.btn} &nbsp;
            {props.btnName}
          </Button>
        </Card.Footer>
    </Card>
  );
}
export default SocialCards;
