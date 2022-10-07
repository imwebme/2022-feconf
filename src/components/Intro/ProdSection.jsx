import React, { useState, useEffect, useRef } from "react";

const ProdSection = ({ getSize }) => {
  const imageRef = useRef(null);
  const [sectionState, setsectionState] = useState(false);
  useEffect(() => {
    setTimeout(() => setsectionState(true), 1000);
  }, []);
  return (
    <>
      <img
        className="intro-image animate__animated animate__fadeIn"
        src="/img/apple.png"
        ref={imageRef}
        onLoad={getSize}
      ></img>
      {sectionState && (
        <img
          className="intro-image animate__animated animate__fadeIn"
          src="/img/star.png"
          ref={imageRef}
          onLoad={getSize}
        ></img>
      )}
    </>
  );
};

export default ProdSection;
