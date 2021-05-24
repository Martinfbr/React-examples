import './App.css';
import React , {useContext, useState, useRef, useCallback, useEffect} from 'react'
import Header from './components/header/Header';



function App() {

  return (
    <div className="App">
      <Header/>
      {
        menuOpen && <Nav/>
      }
      <Hero/>
      <Shorten/>
      <Features/>
      <Boost/>
      <Footer/>
    </div>
  );
}

export default App;
