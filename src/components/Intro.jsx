import React, { useState, useEffect, useRef } from "react";
import FirstIntro from "../components/Intro/FirtstIntro";
import SecondIntro from "./Intro/SecondIntro";
import MediaQuery from "react-responsive";
import ProdSectionPC from "./Intro/ProdSectionPC";
import ProdSectionMobile from "./Intro/ProdSectionPC";

const Intro = ({ getSize }) => {
  const imageRef = useRef(null);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSecond(true);
    }, 3000);
    if (second)
      setTimeout(() => {
        setThird(true);
      }, 1500);
  }, [second]);
  return (
    <div className="intro-container talking-section">
      <div style={{ left: 0 }}>
        <FirstIntro />
      </div>
      {second && <SecondIntro getSize={getSize} />}
      {third && (
        <>
          <MediaQuery minWidth={1224}>
            <ProdSectionPC getSize={getSize} />
          </MediaQuery>
          <MediaQuery maxWidth={1224}>
            <ProdSectionMobile getSize={getSize} />
          </MediaQuery>
        </>
      )}
    </div>
  );
};

export default Intro;
