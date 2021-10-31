import React from 'react';
import {default as Timer} from 'timer';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

function Laps(lapsArray){
    const LapsList = lapsArray.map(function(time, index){
        <li key={time.date.concat((index + 1).toString())}>Lap {index + 1}:&nbsp;<Timer timeElapsed = {time}/></li>
    }); // each list item should be a static timer: key is the date plus the lap number
    return(
        <ol>{LapsList}</ol>
    );
}

export default Laps;
