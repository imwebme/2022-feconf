import React, { useState, useEffect, useRef } from "react";
import Texting from "./Texting";
const SecondIntro = ({ getSize }) => {
  const imageRef = useRef(null);
  const [sectionState, setsectionState] = useState(true);
  useEffect(() => {
    setTimeout(() => setsectionState(!sectionState), 1000);
  }, []);

  return (
    <>
      {sectionState ? (
        <Texting />
      ) : (
        <>
          <img
            className="intro-image animate__animated animate__fadeIn"
            src={`${process.env.PUBLIC_URL}/img/message1.png`}
            ref={imageRef}
            onLoad={getSize}
          ></img>

        </>
      )}
    </>
  );
};

export default SecondIntro;