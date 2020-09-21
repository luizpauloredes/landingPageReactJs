import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './card';
import Nav from './nav.js';
import Jumb from './jumbotron';
import Footer from './footer';

function App() {
  //const [name, setName] = useState('Hello you ')
 

  return (
    <div className="App">       
        <Nav/>
        <Jumb/>
        <Card />
        <Footer/>
    </div>
  );
}

export default App;
