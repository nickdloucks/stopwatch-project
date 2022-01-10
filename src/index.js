import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App maxtTime={259200} />
    {/*maxTime prop is meant to prevent an infinite loop in case the stop button is never pressed
      here, its default is overridden to 3 days instead of 2 (259200 seconds in 3 days)
    */}
  </React.StrictMode>,
  document.getElementById('root')
); // App renders with functioning timer, saved/sorted list, and delete button removes correct time. 10/28/21

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// test message to see if repo is connected to github now
