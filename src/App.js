import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
      <h1>Weather App</h1>  
      <Weather />
      <footer>
        <a href="https://github.com/oksiklepykova/weather-react" target="_blank" rel="noreferrer">Open-source code</a>{""}
        , by{" "}
        <a href="/" target="_blank" rel="noreferrer">Oksana Klepykova</a>{" "}
        from{" "}
        <a href="http://shecodes.io" target="_blank" rel="noreferrer">She Codes</a>
      </footer>
      </div>
    </div>
    
  );
}

export default App;
