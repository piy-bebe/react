import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialog = [
  { id: 0, name: 'Alexey' },
  { id: 1, name: 'Dimich' },
  { id: 2, name: 'Roma' },
]

const messages = [
  { id: 0, message: 'Hello Dima! :)' },
  { id: 1, message: 'Hello Roma! :D' },
]

const posts = [
  { id: 0, title: 'Me', message: "Hello guys, i'm Alex!" },
  { id: 1, title: 'Me', message: 'Hi Alex, how are you?' },
  { id: 2, title: 'Me', message: 'Yo, Guys!' },
]

ReactDOM.render(
  <React.StrictMode>
    <App dialog={ dialog } messages={ messages } posts={ posts } />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
