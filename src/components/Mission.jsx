
import React, {useState, useEffect, useRef} from 'react'
import {gsap}from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

//scroll event
export default function Mission() {

  const intersctionRef = useRef(null);
  const [size, setSize] = useState({});
  const earthref = useRef(null);

  const onIntersect = async ([entry], observer) => {  
    if (entry.isIntersecting) { 
      observer.unobserve(entry.target);
      await gsap.to(earthref.current, {
        scale: 1,
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power4.out',
      });
    } else {
      gsap.to(earthref.current, {
        scale: 1.2,
        duration: 1,
        opacity: 0,
        y: 100,
        ease: 'power4.out',
      });
    }
  };


  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {threshold: 0});
    observer.observe(earthref.current);
    return () => observer.disconnect();
  }, []);


  return (
    <>
      <div className="mission-container active-pc">
        <h1 className="mission-title">
        <img src="/2022-feconf/img/mission.png" alt="mission" />
        </h1>
    </div>     
    <div className="mission-container active-mo">
        <h1 className="mission-title">
        <img src="/2022-feconf/img/mission.png" alt="mission" />
        </h1>
    </div>         
    <div className="video-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/L1hMm0byUN0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
    </div>
      <img src="/2022-feconf/img/earth.png" ref={earthref} className='earth-image earth-wrap'alt="earth"/>
    </>
  );
}
