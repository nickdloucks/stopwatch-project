import React from 'react';
import {default as Timer} from './timer.js';

class List extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ol>
                <li><Timer timeElapsed={this.props.times}/></li>
            </ol>
        );
    }
}

export default List;