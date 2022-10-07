import React, { useState, useEffect, useRef } from "react";
import FirstIntro from "../components/Intro/FirtstIntro";
import SecondIntro from "./Intro/SecondIntro";
import ProdSection from "./Intro/ProdSection";

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
    <>
      <div className="intro-container talking-section">
        <FirstIntro getSize={getSize} />
        {second && <SecondIntro getSize={getSize} />}
        {third && <ProdSection getSize={getSize} />}
      </div>
    </>
  );
};

export default Intro;
