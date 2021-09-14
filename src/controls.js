import React from 'react';
import PropTypes from 'prop-types'

class Controls extends React.Component {
    constructor(props){
        super(props);
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleStart(){
        this.props.startTime();
    }
    handleStop(){
        this.props.stopTime();
    }
    handleReset(){
        this.props.resetTime();
    }
    handleSave(){
        this.props.saveTime();
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