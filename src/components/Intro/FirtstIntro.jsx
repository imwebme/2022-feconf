import React, { useState, useEffect, useRef } from "react";
import Texting from "./Texting";
import FirstIntroMessage from "./FirstIntroMessage";
const FirstIntro = ({ getSize }) => {
  const [sectionState, setsectionState] = useState(true);
  useEffect(() => {
    setTimeout(() => setsectionState(!sectionState), 2000);
  }, []);

  return (
    <div className="intro-container talking-section">
      {sectionState ? <Texting /> : <FirstIntroMessage getSize={getSize} />}
    </div>
  );
};

export default FirstIntro;
