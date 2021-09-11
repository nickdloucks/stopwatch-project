import React from 'react';
import {default as Timer} from './timer.js';

class List extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const times = this.props.times.map(time => <li>{<Timer timeElapsed={time}/>}</li>);
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