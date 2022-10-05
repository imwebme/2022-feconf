import React, { useState, useEffect, useRef } from 'react';

const Event = () => {
  const [size, setSize] = useState({});
  const imageRef = useRef(null);

  return (
    <div className='event-container'>
      <img
      src="/img/event.png"
      ref={imageRef}
      onLoad={()=>setSize(imageRef.current.getBoundingClientRect())}></img>
    </div>
  );
}

export default Event;
