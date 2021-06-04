import './App.css';
import React , {useContext, useState, useRef, useCallback, useEffect} from 'react'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Hero from './components/hero/Hero';
import Features from './components/features/Features'
import Boost from './components/boost/Boost'
import Shorten from './components/shorten/Shorten'
import Footer from './components/footer/Footer'


function App() {
    
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Hero/>
      <Shorten/>
      <Features/>
      <Boost/>
      <Footer/> 
    </div>
  );
}

export default App;
