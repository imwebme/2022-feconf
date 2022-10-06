import React, {useRef, useState} from 'react';

const Keyword = ({getSize}) => {
  const [size, setSize] = useState({});
  const imageRef = useRef(null);
  return (
    <>
    <div className='keyword-container keyword-top-section'>
      <img className='keyword-image'
      src="/img/message_line1.png"
      ref={imageRef}
      width="100%"></img>
      <img className='keyword-image'
        src="/img/message_line2.png"
        ref={imageRef}
        width="100%"></img>
      </div>
        <div className='keyword-bottom-container'>
          <img className='keyword-image'
        src='/img/digimon2.png'
        ref={imageRef}
        width='100%'></img>
      </div>
      </>
  );
}

export default Keyword;
