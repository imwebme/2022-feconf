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
        width: '120%',
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power4.out',
      });
    } else {
      gsap.to(earthref.current, {
        width: '100%',
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
    <div className='mission-container'>
      <h1 className='mission-title'>
      We serve the underserved
      </h1>
      <p>우리는 기술로부터 소외된 사람들을 돕고 그들을 위해 존재합니다.</p>
      <div className='video-container'>
        <iframe width='100%'height='100%' max-width="100%" src="https://www.youtube.com/embed/L1hMm0byUN0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    </div>
    <div className='earth-wrap'>
      <img src="/img/earth.png" ref={earthref} className='earth-image'alt="earth"/>
      </div>
    </>
  )
}
