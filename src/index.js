import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
window.renderComponent3 = () => {
  const container = document.getElementById('container');
  const containerDiv = document.createElement('div');
  container.innerHTML = "";
  containerDiv.id = "container-react";
  container.appendChild(containerDiv);
  ReactDOM.render(<App key={Math.random()} />, document.getElementById('container-react'));
}

ReactDOM.render(<App key={Math.random()} />, document.getElementById('container-react'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


