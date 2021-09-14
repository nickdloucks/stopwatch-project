import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
    // this component behaves as a display of the current instance of a running timer
    // it shows the current time elapsed and wil update every time a second passes
    constructor(props){
        super(props);
        this.timeElapsed = this.props.timeElapsed;
        this.dateStamp = this.props.dateStamp;
    }

    render(){ // parse total secons into a digital clock display format:
        let totSec = this.timeElapsed; // total seconds since hitting start
        let hrs = (totSec - (totSec % 3600)) / 3600; // 3,600 seconds in an hour
        let mins = (totSec - (hrs * 3600)) % 60; // 60 seconds in a minute
        let sec = totSec % 60; // remaining seconds less than a minute

        if (totSec > 0){ // if there is a totalElapsed time, render it dynamically
            return(
                <div id="timer">
                    <span id ="hours">{hrs}:</span>
                    <span id ="minutes">{mins}:</span><p>:</p>
                    <span id ="seconds">{sec}</span>
                    <br/>
                    <span>Date started: {this.dateStamp}</span>
                </div>
            );
        }else{ // if no time has elapsed or timer is not currently active, show all zeroes
            return(
                <div id="timer">
                    00:00:00
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