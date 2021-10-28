import React from 'react';
import {default as Timer} from 'timer';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

function Laps(lapsArray){
    const LapsList = lapsArray.map(function(time, index){
        <li>Lap {index + 1}:&nbsp;<Timer timeElapsed = {time}/></li>
    });
    return(
        <ol>{LapsList}</ol>
    );
}