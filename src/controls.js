import React from "react";

class Controls extends React.Component {
    constructor(props){
        super(props);
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleStart(){
        // implement event handler
    }
    handleStop(){
        // implement event handler
    }
    handleReset(){
        // implement event handler
    }
    handleSave(){
        // implement event handler
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
export default Controls;