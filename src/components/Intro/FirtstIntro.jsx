import React, { useState, useEffect, useRef } from "react";
import Texting from "./Texting";
const FirstIntro = ({ getSize }) => {
  const imageRef = useRef(null);
  const [sectionState, setsectionState] = useState(true);
  useEffect(() => {
    setTimeout(() => setsectionState(!sectionState), 2000);
  }, []);

  return (
    <div className="intro-container talking-section">
      {sectionState ? (
        <Texting />
      ) : (
        <div className="animate__animated animate__fadeIn">
          <img
            className="intro-image"
            src="/img/hello1.png"
            ref={imageRef}
            onLoad={getSize}
          ></img>
          <img
            className="intro-image"
            src="/img/hello2.png"
            ref={imageRef}
            onLoad={getSize}
          ></img>
        </div>
      )}
    </div>
  );
};

export default FirstIntro;
