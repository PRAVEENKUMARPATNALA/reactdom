import './App.css';
import React, { Component } from 'react';
import './App.css';
import Cards from './components/card.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Resume from './components/Resume.js'


class App extends Component{
  render(){
    return(
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Cards}/>
          <Route exact path="/Resume" component={Resume}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
