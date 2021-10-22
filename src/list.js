import React from 'react';
import {default as Timer} from './timer.js';

class List extends React.Component {
    constructor(props){
        super(props);
        //this.deleteTime = this.deleteTime.bind(this);

        this.state = {
            savedTimes: [] // move state of saved times down to this child List component to manage in List's scope
        }
    }
    /*
    delTime(date2Del){ // parameter: date to delete
        this.props.deleteTime(date2Del);
        // delete the record from the list
        // use a callback funtion (passed as props to List) to update
    }*/

    render(){
        const ordered = this.props.times
            .map(timer => timer)
            .sort((timerA, timerB) => timerA.time >= timerB.time);
        const times = ordered.map(timer => 
            <li key = {timer.date}>{<Timer timeElapsed={timer.time} dateStamp={timer.date} />}
                <button onClick = {this.props.delete(timer.date)}>&nbsp;X&nbsp;</button>
            </li>);
            // make sure the list can pull both the time and it's stamp identifier: 
                        // add stamp parameter to .map() callback somehow
            // handle edge cases where list is empty
            // sort times by stortest to longest
            // add "personal record" indicator to best time
        return(
            <>
                <p>Saved times:</p>
                <ol>
                    {times}
                </ol>
            </>
        );
    }
}

export default List;