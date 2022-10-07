import React, { useState, useEffect, useRef } from "react";
import Texting from "./Texting";
import FirstIntroMessage from "./FirstIntroMessage";
const FirstIntro = ({ getSize }) => {
  const [sectionState, setsectionState] = useState(true);
  useEffect(() => {
    setTimeout(() => setsectionState(!sectionState), 2000);
  }, []);

  return (
    <>{sectionState ? <Texting /> : <FirstIntroMessage getSize={getSize} />}</>
  );
};

export default FirstIntro;