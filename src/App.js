import React from 'react';
import './App.css';

const App = () => {
  function notifyMe() {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
       new Notification("Hi there from React Notify!");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
           new Notification("Hi therefrom React Notify after permission!");
        }
      });
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Notify</h1>
        <button onClick={() => notifyMe()}>Notify Me</button>
      </header>
    </div>
  );
}

export default App;
