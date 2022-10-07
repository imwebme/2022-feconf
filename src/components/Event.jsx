import React, { useState, useEffect, useRef } from "react";

const Event = () => {
  const [size, setSize] = useState({});

  return (
    <div
      className="container event-container"
      id="event"
    >
      <img src="https://cdn.discordapp.com/attachments/1027877908481577003/1027881580485672960/event.png" width="100%" className="event-image" />
      <img src="https://cdn.discordapp.com/attachments/1027877908481577003/1027881682365317151/event.png" width="100%" className="event-image-mo" />
    </div>
  );
};

export default Event;
