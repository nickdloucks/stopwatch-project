import React from 'react';

class Timer extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div id="timer">
                <span id ="hours"></span><p>:</p>
                <span id ="minutes"></span><p>:</p>
                <span id ="seconds"></span>
            </div>
        );
    }
}
Timer.defaultProps={timeElapsed: {
    hours: 0,
    min: 0,
    sec: 0
}};
export default Timer;