import './App.css';
import React , {useContext, useState, useRef, useCallback, useEffect} from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import {Context} from './components/Context';
import useEventListener from './components/UseEventListener'
import Hero from './components/hero/Hero';

function App() {

  const {menuOpen} = useContext(Context)
  const {toggleMenu} = useContext(Context)

  function checkViewWidth() {
    if(window.innerWidth >= 1100 && menuOpen) {
      toggleMenu()
    }
  }
  useEventListener('resize', checkViewWidth)

  return (
    <div className="App">
      <Header/>
      { 
        menuOpen && <Nav/>
      }
      
      <Hero/>
     {/* <Shorten/>
      <Features/>
      <Boost/>
      <Footer/> */}
    </div>
  );
}

export default App;
