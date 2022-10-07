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
            src="https://cdn.discordapp.com/attachments/1027877908481577003/1027881625855467550/message1.png"
            ref={imageRef}
            onLoad={getSize}
          ></img>

        </>
      )}
    </>
  );
};

export default SecondIntro;