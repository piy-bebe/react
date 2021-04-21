import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updateText } from './redux/state'

export const render = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateText={updateText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}