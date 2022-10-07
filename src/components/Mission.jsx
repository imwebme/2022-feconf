import React from 'react'

export default function Mission() {
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
      <img src="/img/earth.png" className='earth' alt="earth"/>
    </>
  )
}
