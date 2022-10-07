

import React, { useState, useEffect, useRef } from "react";
const FirstIntroMessage = ({ getSize, imageRef }) => {
  const [sectionState, setsectionState] = useState(false);
  useEffect(() => {
    setTimeout(() => setsectionState(true), 500);
  }, []);

  return (
    <div>
      <img
        className="intro-image animate__animated animate__fadeIn"
        src="/img/hello1.png"
        ref={imageRef}
      ></img>
      {sectionState && (
        <img
          className="intro-image animate__animated animate__fadeIn"
          src="/img/hello2.png"
          ref={imageRef}
        ></img>
      )}
    </div>
  );
};

export default FirstIntroMessage;