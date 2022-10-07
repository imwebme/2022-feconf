import React, { useState, useEffect, useRef } from 'react';

const Intro = ({getSize}) => {
  const [size, setSize] = useState({});
  const imageRef = useRef(null);

  return (
    <>

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
      <img className='intro-image'
      src="/img/message1.png"
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
}

export default Intro;
