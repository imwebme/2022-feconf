import React, {useState, useEffect, useRef } from 'react';

const About = () => {
  const [size, setSize] = useState({});
  const imageRef = useRef(null);

  

  return (
    <div className='container about-container' id="about">
      <img className='about-image'
      src='https://cdn.discordapp.com/attachments/1027877908481577003/1027881578304647168/about.png'
      ref={imageRef}
      width='100%'
      />
      <img className='about-image2'
      src='https://cdn.discordapp.com/attachments/1027877908481577003/1027881681992032306/about.png'
      ref={imageRef}
      width='100%'
      />
    </div>
  );
}

export default About;
