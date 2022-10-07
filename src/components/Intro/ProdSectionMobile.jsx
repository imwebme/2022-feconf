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
        src="https://cdn.discordapp.com/attachments/1027877908481577003/1027881579277725736/apple.png"
        ref={imageRef}
        onLoad={getSize}
      ></img>

      {sectionState && (
        <img
          className="intro-image animate__animated animate__fadeIn"
          src="https://cdn.discordapp.com/attachments/1027877908481577003/1027881662949883955/star.png"
          ref={imageRef}
          onLoad={getSize}
        ></img>
      )}
    </div>
  );
};

export default ProdSectionMobile;
