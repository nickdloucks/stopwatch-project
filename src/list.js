import React from 'react';
import {default as Timer} from './timer.js';

class List extends React.Component {
    constructor(props){
        super(props);
        this.deleteTime = this.deleteTime.bind(this);
    }

    deleteTime(){
        // delete the record from the list
    }

    render(){
        const times = this.props.times.map(time => 
            <li>{<Timer timeElapsed={time} />}
                <button onClick = {this.deleteTime}>&nbsp;X&nbsp;</button>
            </li>);
            // make sure the list can pull both the time and it's stamp identifier: 
                        // add stamp parameter to .map() callback somehow
            // handle edge cases where list is empty
            // sort times by stortest to longest
            // add "personal record" indicator to best time
        return(
            <>
                <ol>
                    {times}
                </ol>
            </>
        );
    }
}

export default List;