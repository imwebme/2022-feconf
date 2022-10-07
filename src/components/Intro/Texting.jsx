import React, { useState, useEffect, useRef } from "react";

const Intro = ({ getSize }) => {
  const [size, setSize] = useState({});
  const imageRef = useRef(null);

  return (
    <div>
      <div className="intro-image-wrap animate__animated animate__fadeOut animate__delay-1s">
        <img
          className="intro-image"
          src="https://cdn.discordapp.com/attachments/1027877908481577003/1027881663931355217/typing_2.gif"
          ref={imageRef}
        ></img>
      </div>
      <div className="fake-image" style={{ flex: "60%" }}></div>
    </div>
  );
};

export default Intro;
