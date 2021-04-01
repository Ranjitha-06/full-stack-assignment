import './App.css';
import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom';

import {Header} from './components/Header';
import {Scroll} from './components/Scroll';
import {Card} from './components/Card';
import {Footer} from './components/Footer';
import {About} from './components/About';
import {Contact} from './components/Contact';

function App() {
  
  
  return (
    
  
    <BrowserRouter>
    <Header/>
    <Card/>
    <div loader="" className="container">
       
    <Route exact path="/"><Scroll/>
    </Route>
    <Route path="/About"><About/></Route>
    <Route path="/contact"><Contact/></Route>
   
   
    </div>
    <Footer/>
    </BrowserRouter>
  );
}


export default App;
