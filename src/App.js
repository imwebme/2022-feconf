import logo from './logo.svg';
import './style/main.css';
import Intro from './components/Intro';
import Event from './components/Event';
import {useState, useRef} from 'react'

function App() {
  const [size, setSize] = useState({});
  const imageRef = useRef(null);
  return (
    <>   
      <div className="root_container">
        <div className="container">
          <header className="header">
          <nav className="nav">
            <div className="logoWapper">
              <img className="header_logo"
              src="/img/logo.png" alt="imweb-logo" ref={imageRef} 
              onLoad={()=> setSize(imageRef.current.getBoundingClientRect())} />
              <img className="header_logo" src="/img/feconf_logo.png"
              alt='FECONF' 
              ref={imageRef}
              onLoad={() => setSize(imageRef.current.getBoundingClientRect())}
              />
            </div>
            <ul className="menu">
              <li className="menuItem">
                <a href="#">About</a>
              </li>
              <li className="menuItem">
                <a href="#">Imweb Engineer</a>
              </li>
              <li className="menuItem">
                <a href="#">Event</a>
              </li>
            </ul>
            </nav>
          </header>
        <main className="main">
          <Intro></Intro>
          <Event></Event>
        </main>
        <footer className="footer">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className="logo">
            
            </span>
          </a>
        </footer>
      </div>
    </div>
    </>
  )
}

export default App;
