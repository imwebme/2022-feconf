import React, { useState, useEffect, useRef } from 'react';

const Event = ({getSize}) => {
  const [size, setSize] = useState({});
  const imageRef = useRef(null);

  return (
    <div className='container event-container' id="event">
      <img
      src="/img/event.png"
      ref={imageRef}
      width="100%"/>
    </div>
  );
}

export default Event;
