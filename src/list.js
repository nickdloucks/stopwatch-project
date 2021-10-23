import React from 'react';
import {default as Timer} from './timer.js';
import {default as SavedTime} from './savedTime';
import PropTypes from 'prop-types';

class List extends React.Component {
    constructor(props){
        super(props);
        this.delTime = this.delTime.bind(this);
    }

    delTime(date2Del){ // parameter: date to delete
        this.props.delete(date2Del);
        // delete the record from the list
    }

    render(){
        const ordered = this.props.list
            .sort((timerA, timerB) => timerA.time >= timerB.time); // sort times by stortest to longest
        const savedTimes = ordered.map(timer => <SavedTime timeRecord={timer} deleteLI={this.delTime} />);
            // delTime calls the App's delete method
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
List.propTypes = {
    list: PropTypes.array.isRequired,
    delete: PropTypes.func.isRequired
}
export default List;