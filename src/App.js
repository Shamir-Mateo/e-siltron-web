import React, {useEffect, useState, useRef} from 'react';
import './App.css';
import navigation from "./data";
//import Navigation from './components/Navbar';
import { ReactComponent as Logo } from "./assets/logo.svg";
import Header from './components/Header';
import Routes from './Routes';

function App() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top < -60);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);


  useEffect(() => {
    document.title = "SILTRON ELECTRONICS"
  }, []);
  return (
    <div className="App">
      {/* <Navigation /> */}
      
      <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
        <Header items={navigation} logo={<Logo />} navPosition="center" isSticky = {isSticky} />
      </div>
      <Routes />
    </div>
  );
}

export default App;
