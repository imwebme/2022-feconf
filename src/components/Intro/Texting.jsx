import React, { useState, useEffect, useRef } from "react";

const Intro = ({ getSize }) => {
  const [size, setSize] = useState({});
  const imageRef = useRef(null);

  return (
    <>
      <div className="intro-image-wrap animate__animated animate__fadeOut animate__delay-1s">
        <img
          className="intro-image"
          src="/img/texting.png"
          ref={imageRef}
          onLoad={getSize}
        ></img>
        <img className="intro-image-2" src="/img/typing_3.gif"></img>
      </div>
    </>
  );
};

export default Intro;
