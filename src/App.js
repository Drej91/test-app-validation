import React from 'react';
import Registration from './Components/Registration/Registration.component';
import Login from './Components/Login/Login.component';
import Navigation from './Components/Navigation/Navigation.component';
import { Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div className="App">
      <div className="wrapper">
          <Navigation/>
      </div>
    </div>
  )
}

export default App;
