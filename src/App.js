import './App.css';
import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom';

import {Header} from './components/Header';
import {Scroll} from './components/Scroll';
import {Card} from './components/Card';

function App() {
  
  
  return (
    
  
    <BrowserRouter>
    <Header/>
    <Card/>
    <div loader="" className="container">
       
   
    <Route exact path="/"><Scroll/>
    </Route>
    <Route exact path="/design">
    <Scroll/>
    </Route>
    <Route exact path="/scenary">
    <Scroll/>
    </Route>
   
   
    </div>
    </BrowserRouter>
  );
}


export default App;
