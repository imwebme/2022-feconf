import React, { useState, useEffect, useRef } from "react";
import FirstIntro from "../components/Intro/FirtstIntro";
import SecondIntro from "./Intro/SecondIntro";
import ProdSection from "./Intro/ProdSection";

const Intro = ({ getSize }) => {
  const imageRef = useRef(null);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [scrollFlag, setScrollFlag] = useState(0);

  const handleOnScroll = () => {
    setScrollFlag(scrollFlag + 1);
    if (scrollFlag > 10) {
      setTimeout(() => {
        setSecond(true);
        if (second == true) setThird(true);
        setScrollFlag(0);
      }, 1000);
    }
  };

  window.addEventListener("scroll", handleOnScroll);

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
