import React, { useState, useEffect, useRef } from "react";

const ProdSectionPC = ({ getSize }) => {
  const imageRef = useRef(null);
  const [sectionState, setsectionState] = useState(false);
  useEffect(() => {
    setTimeout(() => setsectionState(true), 500);
  }, []);
  return (
    <div className="intro-container product-section">
      <div className="apple-wrap animate__animated animate__fadeIn">
        <img
          className="intro-image"
          src="/img/apple.png"
          ref={imageRef}
          onLoad={getSize}
        ></img>
      </div>
      {sectionState && (
        <div className="star-wrap">
          <img
            className="intro-image animate__animated animate__fadeIn"
            src="/img/star.png"
            ref={imageRef}
            onLoad={getSize}
          ></img>
        </div>
      )}
    </div>
  );
};

export default ProdSectionPC;
