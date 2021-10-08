import { fireEvent, render, screen } from '@testing-library/react';
import Timer from '../timer.js';
import App from '../App'

test('renders timer', ()=>{
    render(<Timer />);
    screen.debug();
    const timerElement = screen.getByText(/\d{2}:\d{2}:\d{2}/);
    expect(timerElement).toBeInTheDocument();
});

    test('displays input properly', ()=>{
    render(<Timer timeElapsed = {3661} />);
    const timerString = screen.getByText('01:01:01');
    expect(timerString).toBeInTheDocument();
});