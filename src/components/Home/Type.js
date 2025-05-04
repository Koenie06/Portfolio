import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
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
  );
};

export default Type;
