import React, { useRef, useState, useEffect } from "react";

const MovingKeyword = ({ getSize }) => {
  const intersectionRef = useRef();
  const imageRef = useRef(null);
  const [firstLine, setFirstLine] = useState(null);
  const [secondLine, setSecondLine] = useState(null);

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await addEvents();
      observer.observe(entry.target);
    } else {
      setFirstLine(null);
      setSecondLine(null);
    }
  };

  const addEvents = async () => {
    setFirstLine(
      "animate__animated animate__slideInRight animate__slower animate__infinite"
    );
    setSecondLine(
      "animate__animated animate__slideInLeft animate__slower animate__infinite"
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, { threshold: 0 });
    observer.observe(intersectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        className="keyword-container keyword-top-section"
        ref={intersectionRef}
      >
        <img
          className={`keyword-image ${firstLine}`}
          src={`${process.env.PUBLIC_URL}/img/message_line.png`}
          ref={imageRef}
          width="100%" 
        ></img>
        <img
          className={`keyword-image ${secondLine}`}
          src={`${process.env.PUBLIC_URL}/img/message_line2.png`}
          ref={imageRef}
          width="100%"
        ></img>
      </div>
    </>
  );
};

export default MovingKeyword;
