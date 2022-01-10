import App from './App';

function* newSecond() {
  if (App.state.running && this.state.time <= this.props.maxTime) {
    yield App.state.time;
    App.setState({
      time: this.state.time + 1,
    });
  }
}

//////

function waitASec() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`current time = ${App.state.time}`);
    }, 990);
  });
}

async function addNewSec() {
  console.log('calling');
  const result = await waitASec();
  console.log(result);
  result.then(
    setState({
      time: App.state.time + 1,
    })
  );
}

asyncCall();

//componentWillReceiveProps()

/*
  componentDidMount(){ // 1st attempt at kicking off the timer loop,
      // intending to re-render timer each time a second passes
      // need to optimize so other components don't re-render unnecessarily
    if (this.state.running && (this.state.time <= this.props.maxTime)){ // maximum time limit to prevent infinite loop
      // maxTime is passed as a prop in index.js
      setInterval(this.setState({   // re-render Timer every time another second has elapsed, until stop button is pressed.
        time: this.state.time + 1
      }), 1000)
    }
  }*/

waitASec = async function () {
  setTimeout(this.setState({ time: this.state.time + 1 }), 990);
};
/*
  handleClockTick(){ // asynchronous??
    do{

      this.waitASec().then(this.render());
      console.log("increment second function should have run");
      // BUG #1 PROBABLY IN WHILE LOOP, EVERYTHING SEEMS TO WORK UNTIL HERE:
    }while ((this.state.running) && (this.state.time <= this.props.maxTime));
      // prevent infinite loop by using the maxTime prop
      // wait 990 milliseconds before incrementing the seconds count
      // 990 is subject to change based on the time complexity/ performance of the app:
      // need to account for the milliseconds it takes to run the program
  }
  */
/////////////////////////

import React from 'react';
import PropTypes from 'prop-types';

const Timer = function (timeElapsed, dateStamp) {
  /** this component behaves as a display of the current instance of a running timer.
   * it shows the current time elapsed and should update every time a second passes
   */
  // parse total seconds into a digital clock display format:
  // only parse the timer if there is a time elapsed, otherwise display all zeroes
  if (this.timeElapsed > 0) {
    // if there is a totalElapsed time, render it dynamically
    let totSec = this.timeElapsed;
    let sec = totSec % 60;
    let mins_hrs = totSec - sec; // total number of seconds that add up to complete minutes
    // total seconds with remainder (less than 60 sec) cut off
    let mins = (mins_hrs / 60) % 60; // total minutes less than an hour
    let hrs = (totSec - (totSec % 3600)) / 3600; // hours

    console.log(`totSec=${totSec}:_ hrs=${hrs}, min=${mins}, sec=${sec}`);

    return (
      <div id="timeAndStamp">
        <span id="timerString">
          {hrs.toString().padStart(2, '0')}:{mins.toString().padStart(2, '0')}:
          {sec.toString().padStart(2, '0')}
        </span>
        <br />
        <span>Date started: {this.dateStamp}</span>
      </div>
    );
  } else {
    // if no time has elapsed or timer is not currently active, show all zeroes
    return (
      <div id="timer">
        <span className="timer">00:00:00</span>
      </div>
    );
  }
};
Timer.defaultProps = {
  timeElapsed: 0,
  dateStamp: '',
};
Timer.propTypes = {
  timeElapsed: PropTypes.number.isRequired,
  dateStamp: PropTypes.string.isRequired,
};
export default Timer;

//////////////////////////////------------------------original, class verion:
/*
import React from 'react';
import PropTypes from 'prop-types'

function Timer(timeElapsed) {
    // this component behaves as a display of the current instance of a running timer
    // it shows the current time elapsed and should update every time a second passes
    /*constructor(props){
        super(props);
        this.timeElapsed = this.props.timeElapsed;
        this.dateStamp = this.props.dateStamp;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("TIMER UPDATES:");
        console.log('Prev props for Timer: ', prevProps); // Before update
        console.log('New props: ', this.props); // After update

    }
// Convert to functional component

    render(){ // parse total seconds into a digital clock display format:
        // only parse the timer if there is a time elapsed, otherwise display all zeroes
        if (this.timeElapsed > 0){ // if there is a totalElapsed time, render it dynamically
            let totSec = this.timeElapsed;
            let sec = totSec % 60;
            let mins_hrs = totSec - sec; // total number of seconds that add up to complete minutes
            // total seconds with remainder (less than 60 sec) cut off
            let mins = (mins_hrs / 60) % 60; // total minutes less than an hour
            let hrs = (totSec - (totSec % 3600)) / 3600; // hours

            console.log(`totSec=${totSec}:_ hrs=${hrs}, min=${mins}, sec=${sec}`);

            return(
                <div id="timeAndStamp">
                    <span id="timerString">{hrs.toString().padStart(2,'0')}:{mins.toString().padStart(2,'0')}:{sec.toString().padStart(2,'0')}</span>
                    <br/>
                    <span>Date started: {this.dateStamp}</span>
                </div>
            );
        }else{ // if no time has elapsed or timer is not currently active, show all zeroes
            return(
                <div id="timer">
                    <span className='timer'>00:00:00</span>
                </div> 
            );
        }
    }
}
Timer.defaultProps = {
    timeElapsed: 0,
    dateStamp: ''
};
Timer.propTypes = {
    timeElapsed: PropTypes.number.isRequired,
    dateStamp: PropTypes.string.isRequired
};
export default Timer;


















<li key = {timer.date}>{<Timer timeElapsed={timer.time} dateStamp={timer.date} />}
                <button onClick = {this.delTime}>&nbsp;X&nbsp;</button>
            </li>);




*/
