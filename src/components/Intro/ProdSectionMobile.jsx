import React, { useState, useEffect, useRef } from "react";

const ProdSectionMobile = ({ getSize }) => {
  const imageRef = useRef(null);
  const [sectionState, setsectionState] = useState(false);
  useEffect(() => {
    setTimeout(() => setsectionState(true), 500);
  }, []);
  return (
    <div className="intro-container product-section">
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
    </div>
  );
};

export default ProdSectionMobile;
