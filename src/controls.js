import React from 'react';
import PropTypes from 'prop-types'

class Controls extends React.PureComponent {
    // switched to "PureComponent" in hopes of avoiding unnecessary re-renders.
    // This component should theoretically not receive any props that are 
    // different from when it initially is mounted
    constructor(props){
        super(props);
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleStart(){
        this.props.startTime(); // tell App.js to start the timer
    }
    handleStop(){
        this.props.stopTime(); // tell App.js to stop the timer
    }
    handleReset(){
        this.props.resetTime(); // tell App.js to reset the timer
    }
    handleSave(){
        this.props.saveTime(); // tell App.js to save the current instance of timer
    }

    render(){
        return(
            <>
                <button onClick={this.handleStart}>Start</button>
                <button onClick={this.handleStop}>Stop</button>
                <button onClick={this.handleReset}>Reset</button>
                <button onClick={this.handleSave}>Save</button>
            </> 
        )
    }
}
Controls.propTypes = {
    startTime: PropTypes.func.isRequired,
    stopTime: PropTypes.func.isRequired,
    resetTime: PropTypes.func.isRequired,
    saveTime: PropTypes.func.isRequired
};
export default Controls;