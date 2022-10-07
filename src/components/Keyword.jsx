import React, { useRef, useState } from "react";
import MovingKeyword from "./Keyword/MovingKeyword";
import KeywordBottom from "./Keyword/KeywordBottom";
const Keyword = ({ getSize }) => {
  const [size, setSize] = useState({});
  const imageRef = useRef(null);
  return (
    <>
      <MovingKeyword imageRef={imageRef} />
      <KeywordBottom imageRef={imageRef} />
    </>
  );
};

export default Keyword;
