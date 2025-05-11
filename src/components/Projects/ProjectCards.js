import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from 'react-bootstrap/ListGroup';
import img1 from "../../Assets/website.png";

import {
    SiGithub,
} from "react-icons/si";

function ProjectCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Img 
                src={img1}
                alt="Card image" 
                variant="top"
                style={{ objectFit: 'cover' }}
                className="project-card-img"
            />
            <ListGroup className="project-card-list">
                <ListGroup.Item className="project-card-list-item">{props.languages}</ListGroup.Item>
            </ListGroup>
            <Card.Body className="project-card-body">
                <Card.Title className="project-card-title">{props.title}</Card.Title>
                <Card.Text className="project-card-text">{props.description}</Card.Text>
                {props.btnName && (
                    <Row className="project-btn-row">
                        <Col md={6}>
                            <Button href={props.btnLink} target="_blank" rel="noopener noreferrer" className="project-card-btn left" variant="primary">{props.btnIcon} {props.btnName}</Button>
                        </Col>
                        <Col md={6}>
                            <Button href={props.githubLink} target="_blank" rel="noopener noreferrer" className="project-card-btn right" variant="secondary"><SiGithub /> View Code</Button>
                        </Col>
                    </Row>
                )}
                {!props.btnName && (
                    <Row className="project-btn-row">
                        <Col md={12}>
                            <Button className="project-card-btn" target="_blank" rel="noopener noreferrer" variant="secondary"><SiGithub /> View Code</Button>
                        </Col>
                    </Row>
                )}

            </Card.Body>
        </Card>
    );
};
export default ProjectCards;
