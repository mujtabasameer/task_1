import React from "react";
import './App.css';
import FeatureList from "./FeatureList";
import LoginForm from './LoginForm'

function App()
{
  return (
    <div className="app">
      <div className="left-panel">
        <div className="logo">MyKlad</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec facilisis sem.</p>
        <FeatureList/>
      </div>
      <div className="right-panel">
        <LoginForm/>
      </div>
    </div>
  );
}

export default App;