import { render, screen } from '@testing-library/react';
import Timer from '../timer.js';

test('renders timer', ()=>{
    render(<Timer />);
    screen.debug();
    const timerElement = screen.getByText(/\d{2}:\d{2}:\d{2}/);
    expect(timerElement).toBeInTheDocument();
});