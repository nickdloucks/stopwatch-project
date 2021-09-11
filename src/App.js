import React from 'react';
import {default as Timer} from './timer.js';
import {default as Controls} from './controls.js';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      running: false, // timer is activated by pressing <Start>, deactivated by pressing <Stop> button
      time: 0, // number of seconds elapsed since pressing <Start> button
      saved: [] // list of saved times, stored as total seconds for easy comparsion
        // the <List/> and <Timer/> components will display these times parsed out into {00:00:00} format
        // ****ADD DATE STAMP FUNCTIONALITY LATER AND USE AS TIME ID
    };

  }
  handleClockTick(){
    // re-render Timer every time another second has elapsed, until stop button is pressed.
    // Add another condition like a maximum time limit to prevent an infinite loop,
    // or prevent callback hell/stack overflow in a recusrive function
    // example: to make it a 48-hour maximum timer, <totSec> must be <= 172,800 to prevent infinite loop
    // ***USE shouldComponentUpdate() HOOK???
  }
  render(){

    return (
     <React.Fragment className="App">
        <h1 className="App-header">Stopwatch *header*</h1>

        <Timer timeElapsed={this.state.time}/>{/*render <Timer> and 
          override its timeElapsed prop with updated time from App.state */}

        <Controls running={this.state.running}/>{/*let the controls know if the timer is running */}

        {/* <List/> component should receive a list of times saved by user
        <List times={this.state.saved}/>
        */}

     </React.Fragment>
    );
  }
}

export default App;