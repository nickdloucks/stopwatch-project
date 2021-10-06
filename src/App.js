import React from 'react';
import {default as Timer} from './timer.js';
import {default as Controls} from './controls.js';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      running: false, // timer is activated by pressing <Start>, deactivated by pressing <Stop> button
      time: 0, // number of seconds elapsed since pressing <Start> button
      date: '', // will hold date/time associated with when the timer was started
      saved: [] // list of saved times, stored as total seconds for easy comparsion
        // the <List/> and <Timer/> components will display these times parsed out into {00:00:00} format
        // ****ADD DATE STAMP FUNCTIONALITY LATER AND USE AS TIME ID
    };
    this.startTime = this.startTime.bind(this);
    this.stopTime = this.stopTime.bind(this);
    this.resetTime = this.resetTime.bind(this);
    this.saveTime = this.saveTime.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  startTime(){
    console.log("start button hit");
    let now = new Date(); // get the current date and save it as a stamp to identify the time when/if it gets saved
    let dateStamp = ` Time on ${now.getMonth()+1}-${now.getDate()}-${now.getFullYear()}\
     at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}` // template literal for displaying date:
          // example:{ MM-DD-YYY at 12:56:03 }
    console.log(dateStamp + " = dateStamp for this instance of timer")

    
    this.setState({
      date: dateStamp,
      running: true
    });
    console.log("running? " + this.state.running);

    // implement event handler
    // set App.state.running to <true> 
    // stamp the currnent instance of running timer with the date/time, use as a key when saved?
    // ****begin <clockTick> loop, incrementing App.state.time once for each second elapsed
  }
  stopTime(){
    console.log("stop button hit")
    this.setState({
      running: false
    });
    console.log("running? " + this.state.running);
    // implement event handler
    // set App.state.running to <false>, which should end <clockTick> loop
  }
  resetTime(){
    console.log("reset button hit");
    this.setState({
          running: false,
          time: 0,
          date: ''
    });
    console.log("running? " + this.state.running);
    console.log("time? " + this.state.time);
    // implement event handler
    // verify {App.state.running == false} ***or check this Controls component's props.running
    // overwrite App.state.time to be == 0
  }
  saveTime(){
    console.log("save button hit");
    let timeToSave = this.state.time;
    let newTimeRecord = [timeToSave, this.state.date];
    this.setState({
      running: false,
      saved: [...this.state.saved, newTimeRecord],
      time: 0
    });
    console.log("saved: " + newTimeRecord);
    // implement event handler
    // verify {App.state.running == false} ***or check this Controls component's props.running
    // if {App.state.time > 0}, save in App.state and pass all the times to the <List> component
    // then <List> component should dynamically render the list of saved times
  }

  handleClockTick(){ // asynchronous??
    while ((this.state.running) && (this.state.time <= this.props.maxTime)) {
      // prevent infinite loop by using the maxTime prop
      setTimeout(this.setState({time: this.state.time + 1}), 990);
      console.log("increment secon function should have run") 
      // wait 990 milliseconds before incrementing the seconds count
      // 990 is subject to change based on the time complexity/ performance of the app:
      // need to account for the milliseconds it takes to run the program
    }
    // Add another condition like a maximum time limit to prevent an infinite loop,
    // or prevent callback hell/stack overflow in a recusrive function
    // example: to make it a 48-hour maximum timer, <totSec> must be <= 172,800 to prevent infinite loop
    // ***USE shouldComponentUpdate() HOOK???
  }
  componentDidMount(){ // 1st attempt at kicking off the timer loop,
      // intending to re-render timer each time a second passes
      // need to optimize so other components don't re-render unnecessarily
    if (this.state.running && (this.state.time <= this.props.maxTime)){ // maximum time limit to prevent infinite loop
      // maxTime is passed as a prop in index.js
      setInterval(this.setState({   // re-render Timer every time another second has elapsed, until stop button is pressed.
        time: this.state.time + 1
      }), 1000)
    }
  }

  render(){

    return (
     <React.Fragment>
       <div className="App">
        <h1 className="App-header">Stopwatch *header*</h1>

        <Timer 
          timeElapsed = {this.state.time}
          dateStamp = {this.state.date}
        /> {/*render <Timer> and 
          override its timeElapsed prop with updated time from App.state.
          also override its dateStamp so it can be identified in a list of times*/}

        <Controls running = {this.state.running} 
          startTime = {this.startTime}
          stopTime = {this.stopTime}
          resetTime = {this.resetTime}
          saveTime = {this.saveTime}
        /> {/*let the controls know whether the timer is running, and allow the buttons to access App's methods */}

        {/* <List/> component should receive a list of times saved by user
        <List times={this.state.saved}/>
        */}
      </div>
     </React.Fragment>
    );
  }
}
App.defaultProps = {maxTime : 172800} // default maxTime of 48 hours to prevent infinite loop
App.propTypes = {maxTime : PropTypes.number.isRequired}
export default App;