import logo from "./logo.svg";
import "./style/main.css";
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
                    src="/img/logo.png"
                    alt="imweb-logo"
                    ref={imageRef}
                    onLoad={getSize}
                  />
                </div>
                <div>
                  <img
                    className="header_logo"
                    src="/img/feconf_logo.png"
                    alt="FECONF"
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
          <div className="main">
            <Intro onLoad={getSize}></Intro>
            <About onLoad={getSize}></About>
            <Keyword onLoad={getSize}></Keyword>
            <Mission></Mission>
            <Engineer></Engineer>
            <Event onLoad={getSize}></Event>
          </div>
          <footer className="footer">
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by <span className="logo"></span>
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
