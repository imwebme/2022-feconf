import React, {useState, useEffect, useRef } from 'react';

const About = () => {
  const [size, setSize] = useState({});
  const imageRef = useRef(null);

  

  return (
    <div className='container about-container' id="about">
      <img className='about-image'
      src={`${process.env.PUBLIC_URL}/img/about.png`}
      ref={imageRef}
      width='100%'
      />
      <img className='about-image2'
      src={`${process.env.PUBLIC_URL}/img/mo/about.png`}
      ref={imageRef}
      width='100%'
      />
    </div>
  );
}

export default About;
