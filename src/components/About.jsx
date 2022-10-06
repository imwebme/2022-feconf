import React, {useState, useEffect, useRef } from 'react';

const About = ({getSize}) => {
  const [size, setSize] = useState({});
  const imageRef = useRef(null);

  

  return (
    <div className='container about-container' id="about">
      <img className='about-image'
      src='/img/about.png'
      ref={imageRef}
      width='100%'
      />
    </div>
  );
}

export default About;
