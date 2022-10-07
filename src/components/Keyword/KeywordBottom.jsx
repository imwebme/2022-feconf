import React, { useRef, useState } from "react";

const KeywordBottom = ({ getSize }) => {
  const [size, setSize] = useState({});
  const imageRef = useRef(null);
  return (
    <>
      <div className="keyword-bottom-container">
        <img
          className="keyword-image"
          src="https://cdn.discordapp.com/attachments/1027877908481577003/1027878472841961482/digimon2.png"
          ref={imageRef}
          width="100%" 
        ></img>
      </div>
    </>
  );
};

export default KeywordBottom;