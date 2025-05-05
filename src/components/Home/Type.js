import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-wrapper">
      <Typewriter
        options={{
          strings: [
              "< Web Developer />",
              "< Full Stack Developer />",
              "< Dutch />",
              "< Professional Nerd />",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 100,
        }}
      />
    </div>
  );
};

export default Type;
