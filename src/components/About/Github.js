import React from "react";
import GitHubCalendar from 'react-github-calendar';
import { Row } from "react-bootstrap";
import {useEffect, useState} from 'react';

function Github() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize());
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                Days I <strong className="blue">Code</strong>
            </h1>
            <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <GitHubCalendar
                    username="Koenie06"
                    blockSize={15}
                    blockMargin={5}
                    color="#00ff00" // #7085f0
                    fontSize={windowSize.innerWidth < 767 ? 13 : 16}
                />
            </div> 
        </Row>
    );
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
};

export default Github;
