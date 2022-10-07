import React, { useState, useEffect, useRef } from "react";

const Intro = ({ getSize }) => {
  const [size, setSize] = useState({});

  const imageRef = useRef(null);

  return (
    <>
      <div className="intro-container talking-section">
        <div className="intro-image-container" style={{ display: "flex" }}>
          <div className="intro-image-wrap" style={{ flex: "40%" }}>
            <img
              className="intro-image"
              src="/img/typing_2.gif"
              ref={imageRef}
            ></img>
          </div>
          <div className="fake-image" style={{ flex: "60%" }}></div>
        </div>
        <div>
          <img
            className="intro-image"
            src="/img/hello1.png"
            ref={imageRef}
          ></img>
          <img
            className="intro-image"
            src="/img/hello2.png"
            ref={imageRef}
          ></img>
        </div>
        <div className="intro-image-container" style={{ display: "flex" }}>
          <div className="intro-image-wrap" style={{ flex: "40%" }}>
            <img
              className="intro-image"
              src="/img/typing_2.gif"
              ref={imageRef}
            ></img>
          </div>
          <div className="fake-image" style={{ flex: "60%" }}></div>
        </div>
        <img
          className="intro-image"
          src="/img/message1.png"
          ref={imageRef}
        ></img>
      </div>
      <div className="n-container hidden-tablet">
        <div className="intro-container product-section">
          <img
            className="intro-image"
            src="/img/apple.png"
            ref={imageRef}
          ></img>
          <img className="intro-image" src="/img/star.png" ref={imageRef}></img>
        </div>
      </div>
      <div className="n-container hidden-pc">
        <div className="intro-container product-section">
          <div className="apple-wrap">
            <img
              className="intro-image"
              src="/img/apple.png"
              ref={imageRef}
            ></img>
          </div>
          <div className="star-wrap">
            <img
              className="intro-image"
              src="/img/star.png"
              ref={imageRef}
            ></img>
          </div>
        </div>
    <div className='intro-container talking-section' >
    <div className='intro-image-container'>
     <div className='intro-image-wrap' style={{display: 'flex'}}>
     <img className='intro-image'
      src="/img/texting.png"
      ref={imageRef}
      >
      </img>
      <img className='intro-image-2'
      src="/img/typing_3.gif"></img>
      </div>
      <div className='fake-image'></div>
      </div>
      <img className='intro-image'
      src="/img/hello1.png"
      ref={imageRef}
      ></img>
      <img className='intro-image'
      src="/img/hello2.png"
      ref={imageRef}
      ></img>
    <div className='intro-image-container'>
     <div className='intro-image-wrap' style={{display: 'flex'}}>
     <img className='intro-image'
      src="/img/texting.png"
      ref={imageRef}
      >
      </img>
      <img className='intro-image-2'
      src="/img/typing_3.gif"></img>
      </div>
      <div className='fake-image'></div>
      </div>
      src="/img/message1.png"
      <img className='intro-image'
      ref={imageRef}
      ></img>
    </div>
    <div className='intro-container product-section'>
      <img className='intro-image'
      src="/img/apple.png"
      ref={imageRef}
      ></img>
    <img className='intro-image'
      src="/img/star.png"
      ref={imageRef}
      ></img>
      </div>
    </>
  );
};

export default Intro;
