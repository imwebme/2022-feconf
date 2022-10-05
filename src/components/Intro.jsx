import React, { useState, useEffect, useRef } from 'react';

const Intro = () => {
  const [size, setSize] = useState({});
  const imageRef = useRef(null);

  const talkImage = [
    "/img/texting.png",
    "/img/hello1.png",
    "/img/hello2.png",
    "/img/texting.png",
    "/img/message1.png"
  ]

  return (
    <>
    <div className='intro-container talking-section'>
      <img className='intro-image'
      src="/img/texting.png"
      ref={imageRef}
      onLoad={()=>setSize(imageRef.current.getBoundingClientRect())}></img>
      <img className='intro-image'
      src="/img/hello1.png"
      ref={imageRef}
      onLoad={()=>setSize(imageRef.current.getBoundingClientRect())}></img>
      <img className='intro-image'
      src="/img/hello2.png"
      ref={imageRef}
      onLoad={()=>setSize(imageRef.current.getBoundingClientRect())}></img>
      <img className='intro-image'
      src="/img/texting.png"
      ref={imageRef}
      onLoad={()=>setSize(imageRef.current.getBoundingClientRect())}></img>
      <img className='intro-image'
      src="/img/message1.png"
      ref={imageRef}
      onLoad={()=>setSize(imageRef.current.getBoundingClientRect())}></img>
    </div>
    <div className='intro-container product-section'>
      </div>
    </>
  );
}

export default Intro;
