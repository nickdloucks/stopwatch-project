import React from 'react';
import {default as Timer} from './timer.js';
import {default as Controls} from './controls.js';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      running: false, // timer is activated by pressing <Start>, deactivated by pressing <Stop> button
      time: 0 // number of seconds elapsed since pressing <Start> button
    };

  }
  handleClockTick(){
    // re-render Timer every time another second has elapsed, until stop button is pressed.
    // Add another condition like a maximum time limit to prevent an infinite loop,
    // or prevent callback hell/stack overflow in a recusrive function
    // example: to make it a 48-hour maximum timer, <totSec> must be <= 172,800 to prevent infinite loop
  }
  render(){

    return (
     <React.Fragment className="App">
        <h1 className="App-header">Stopwatch *header*</h1>

        <Timer timeElapsed={this.state.time}/>

        <Controls />

        {/* insert List component here*/}
 
     </React.Fragment>
    );
  }
}

export default App;
