import React from 'react';
import {default as Timer} from './timer.js';
import {default as Controls} from './controls.js';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      running: false,
      time: {
        hours: 0,
        min: 0,
        sec: 0
      }
    };

  }
  handleClockTick(){

  }
  render(){

    return (
     <React.Fragment className="App">
        <h1 className="App-header">Stopwatch *header*</h1>

        <Timer props={this.state.time}/>

        <Controls />

        {/* insert List component here*/}
 
     </React.Fragment>
    );
  }
}

export default App;
