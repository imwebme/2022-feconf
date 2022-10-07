import logo from "./logo.svg";
import "./style/main.css";
import "./style/index.css";
import Intro from "./components/Intro";
import Event from "./components/Event";
import About from "./components/About";
import { useState, useRef } from "react";
import Keyword from "./components/Keyword";
import Mission from "./components/Mission";
import Engineer from "./components/Engineer";

function App() {
  const [size, setSize] = useState({});
  const imageRef = useRef(null);
  const getSize = () =>
    setSize({
      width: imageRef.current.clientWidth,
      height: imageRef.current.clientHeight,
    });
    
  return (
    <>
      <div className="root_container">
        <div className="container">
          <header className="header">
            <nav className="nav">
              <div className="logoWapper">
                <div>
                  <img
                    className="header_logo"
                    src="https://cdn.discordapp.com/attachments/1027877908481577003/1027880368445083648/top.png"
                    alt="imweb-logo"
                    ref={imageRef}
                    onLoad={getSize}
                  />
                </div>
              </div>
              <ul className="menu">
                <li className="menuItem">
                  <a href="#about">About</a>
                </li>
                <li className="menuItem">
                  <a href="#enginner">Imweb Engineer</a>
                </li>
                <li className="menuItem">
                  <a href="#event">Event</a>
                </li>
              </ul>
            </nav>
          </header>
          <div
            className="main"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div style={{ minHeight: "100vh" }}>
              <Intro onLoad={getSize}></Intro>
            </div>
            <About onLoad={getSize}></About>
            <Keyword onLoad={getSize}></Keyword>
            <Mission></Mission>
            <div style={{ paddingRight: 56 }}>
              <Engineer></Engineer>
            </div>
            <Event onLoad={getSize}></Event>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
