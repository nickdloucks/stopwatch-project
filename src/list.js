import React from 'react';
import {default as Timer} from './timer.js';

class List extends React.Component {
    constructor(props){
        super(props);
        this.delTime = this.delTime.bind(this);

        this.state = {
            savedTimes: [] // move state of saved times down to this child List component to manage in List's scope
        }
    }

    delTime(date2Del){ // parameter: date to delete
        this.props.delete(date2Del);
        // delete the record from the list
        // use a callback funtion (passed as props to List) to update
    }

    render(){
        const ordered = this.props.times
            .sort((timerA, timerB) => timerA.time >= timerB.time); // sort times by stortest to longest
        const savedTimes = ordered.map(timer => 
            <li key = {timer.date}>{<Timer timeElapsed={timer.time} dateStamp={timer.date} />}
                <button onClick = {this.props.delete}>&nbsp;X&nbsp;</button>
            </li>);
            // make sure the list can pull both the time and it's stamp identifier: 
            // add stamp parameter to .map() callback somehow            
            // add "personal record" indicator to best time
        if (savedTimes.length > 0){
            return(
                <>
                    <p>Saved times:</p>
                    <ol>
                        {savedTimes}
                    </ol>
                </>
            );
        }else{ // handle case where list is empty:
            return(
                <p>No saved times yet...</p>
            );
        }
        
    }
}

export default List;