import React from 'react';
import {default as Timer} from './timer.js';
import {default as Controls} from './controls.js';
import {default as List} from './list'
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      running: false, // timer is activated by pressing <Start>, deactivated by pressing <Stop> button
      time: 0, // number of seconds elapsed since pressing <Start> button
      date: '', // will hold date/time associated with when the timer was started
      saved: [], // list of saved times, stored as total seconds for easy comparsion
        // the <List/> and <Timer/> components will display these times parsed out into {00:00:00} format
      lap: 1, // current lap; increments with each push of "lap" button
      lapTimes: [], // holds the values (# of seconds) of each lap
    };
    this.startTime = this.startTime.bind(this);
    this.newLap = this.newLap.bind(this);
    this.pauseTime = this.pauseTime.bind(this);
    this.resetTime = this.resetTime.bind(this);
    this.saveTime = this.saveTime.bind(this);
    this.deleteTime = this.deleteTime.bind(this);
    this.clockTick = this.clockTick.bind(this);
  }

  startTime(){
    if(this.state.running){
      return; // if the timer is already running when start is pushed, this function should just terminate and
            // let the current clock-tick loop continue
    }else{

      console.log("start button hit");
      let now = new Date(); // get the current date and save it as a stamp to identify the time for when/if it gets saved
      let dateStamp = ` Time on ${now.getMonth()+1}-${now.getDate()}-${now.getFullYear()}\
       at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}` // template literal for displaying date:
            // example:{ MM-DD-YYY at 12:56:03 }
      console.log(dateStamp + " = dateStamp for this instance of timer")
  
      this.setState({
        date: dateStamp, // keep track of when the timer started
        running: true // set <running> to True so the clock-tick loop will be able to run
      });
    }
  }

  newLap(){
    console.log("lap button hit");
    const lapTotal = this.state.lapTimes.reduce((a,b) => a + b);
    this.setState({
      running: true,
      lap: this.state.lap + 1,
      lapTimes: [...this.state.lapTimes, (this.state.time - lapTotal)]
    })
  }

  pauseTime(){
    console.log("pause button hit");
    this.setState({
      running: false  // set App.state.running to <false>, which should end <clockTick> loop
          // but leave time at its current value, in case user wants to continue timing
    });
  }

  resetTime(){
    console.log("reset button hit");
    this.setState({
          running: false, // if Reset button is pushed, it should stop any timer that might already be running
          time: 0, // reset/overwrite time elapsed to 0
          date: ''
    });
    console.log("time? " + this.state.time);
  }

  saveTime(){ // save button can save the most recent time and also stop any timer that might be running
    console.log("save button hit");
    if(this.state.time === 0){
      return; // avoids duplicate key problem in saved list when <Save> button hit twice
    }
    let timeToSave = this.state.time;
    let newTimeRecord = { // new time obejct which will be a completed timer and the date it was started
      time: timeToSave, 
      date: this.state.date
    };
    this.setState({
      running: false, // any running timer should be stopped if Save button is pushed
      saved: [...this.state.saved, newTimeRecord], // append new time to the list
      time: 0 // reset to 0 so timer can be used again starting from 0
    });
    console.log("saved: " + newTimeRecord);
    // if {App.state.time > 0}, save in App.state and pass all the times to the <List> component
    // then <List> component should dynamically render the list of saved times
  }

  deleteTime(timeDate){ // date of timer will be a parameter
    this.setState({
      saved: this.state.saved.filter(timeObj => timeObj.date !== timeDate)
    });
  }

  clockTick(){
    if((this.state.running) && (this.state.time <= this.props.maxTime)){
      this.setState({
        time: this.state.time + 1 // increment the number of seconds elapsed since pressing <start> button
      })
    }else{
      return; // do not increment time-elapsed if the timer is no longer running or it's reached the max
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log('Prev state', prevState); // Before update
    //console.log('New state', this.state); // After update 
    //console.log("running? " + this.state.running);
    console.log("time elapsed: " + this.state.time);
    //console.log("last saved time: " + this.state.saved[this.state.saved.length - 1] + " seconds")

    if(this.state.running){
      setTimeout(this.clockTick, 990); // wait almost a full second, 
        // then increment time-elapsed if App.state.running is still true
    }
  }
  

  render(){

    return (
     <React.Fragment>
       <div className="App">
        <h1>Stopwatch</h1>

        <Timer 
          timeElapsed = {this.state.time}
          dateStamp = {this.state.date}
        /> {/*render <Timer> and 
          override its timeElapsed prop with updated time from App.state.
          also override its dateStamp so it can be identified in a list of saved times*/}

        <Controls 
          running = {this.state.running} 
          startTime = {this.startTime}
          pauseTime = {this.pauseTime}
          resetTime = {this.resetTime}
          saveTime = {this.saveTime}
        /> {/*let the controls know whether the timer is running, and allow the buttons to access App's methods */}

        <List list = {this.state.saved} delete = {this.deleteTime} />
      </div>
     </React.Fragment>
    );
  }
}
App.defaultProps = {maxTime : 172800} // default maxTime of 48 hours (written in seconds) to prevent infinite loop
App.propTypes = {maxTime : PropTypes.number.isRequired}
export default App;