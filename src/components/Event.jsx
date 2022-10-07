import React, { useState, useEffect, useRef } from 'react';

const Event = () => {
  const [size, setSize] = useState({});

  return (
    <div className='container event-container' id="event">
      <img
      src="/img/event.png"
      width="100%" className='event-image'/>
      <img 
      src="/img/mo/event.png"
      width="100%" className='event-image-mo' />
    </div>
  );
}

export default Event;
