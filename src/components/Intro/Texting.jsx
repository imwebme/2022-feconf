
import React, { useState, useEffect, useRef } from "react";

const Intro = ({ getSize }) => {
  const [size, setSize] = useState({});
  const imageRef = useRef(null);
  
  return (
    <>
    <div className='intro-image-wrap animate__animated animate__fadeOut animate__delay-1s' style={{ flex: "40%" }}>
    <img className='intro-image'
      src="/img/typing_2.gif"
      ref={imageRef}
      >
      </img>
      </div>
      <div className="fake-image" style={{ flex: "60%" }}></div>
    </>
  );
};

export default Intro;