import React from 'react';
import App from './App';

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
        // set App.state.running to <true> 
        // begin <clockTick> loop, incrementing App.state.time once for each second elapsed
    }
    handleStop(){
        // implement event handler
        // set App.state.running to <false>, which should end <clockTick> loop
    }
    handleReset(){
        App.setState(
            {
                running: false,
                time: 0
            }
        );
        // implement event handler
        // verify {App.state.running == false} ***or check this Controls component's props.running
        // overwrite App.state.time to be == 0
    }
    handleSave(){
        let timeToSave = App.state.time;
        let now = new Date();
        let timeStamp = `${now.getMonth()+1}-${now.getDate()}-${now.getFullYear()} at ${now.getHours()}:${now.getMinutes}:${now.get()}`
        App.setState(
            {
                running: false,
                time: 0,
                saved: App.state.saved.append([timeToSave, timeStamp])
            }
        );
        // implement event handler
        // verify {App.state.running == false} ***or check this Controls component's props.running
        // if {App.state.time > 0}, save in App.state and pass all the times to the <List> component
        // then <List> component should dynamically render the list of saved times
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