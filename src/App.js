import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { 
  Button
 } from 'reactstrap';
import Home from './components/home/home';
{/* import CarouselPage from './components/carousel/carousel'; */}

class App extends Component {
  render() {
    return (

      <div className="app">
      {/*  <header className="app-header">
          <div className="header-logo"></div>
        </header> */}
        <Home/>
        {/* <CarouselPage/> */}
      </div>
    );
  }
}


export default App;
