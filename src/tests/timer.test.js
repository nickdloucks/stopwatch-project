import { fireEvent, render, screen } from '@testing-library/react';
import Timer from '../timer.js';

test('renders timer', ()=>{
    render(<Timer />);
    screen.debug();
    const timerElement = screen.getByText(/\d{2}:\d{2}:\d{2}/);
    expect(timerElement).toBeInTheDocument();
});

test('displays time input properly', ()=>{
    render(<Timer timeElapsed = {3661} />); // total seconds equal to: one hour, one minute, one second
    const timerString = screen.getByText('01:01:01');
    expect(timerString).toBeInTheDocument();
});

test('displays timeStamp properly', ()=>{
    let now = new Date();
    let timeStamp = ` Time on ${now.getMonth()+1}-${now.getDate()}-${now.getFullYear()}\
       at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    render(<Timer dateStamp= {timeStamp} timeElapsed= {1} />);
    
    // finish writing test
});