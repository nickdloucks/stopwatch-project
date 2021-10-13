import { fireEvent, render, screen } from '@testing-library/react';
import Controls from '../controls';

test('renders stopwatch start button', () => {
  render(<Controls />);
  const startButton = screen.getByText(/start/i);
  expect(startButton).toBeInTheDocument();
});

test('renders stopwatch stop button', () => {
  render(<Controls />);
  const stopButton = screen.getByText(/end/i);
  expect(stopButton).toBeInTheDocument();
});

test('renders stopwatch reset button', () => {
  render(<Controls />);
  const resetButton = screen.getByText(/reset/i);
  expect(resetButton).toBeInTheDocument();
});

test('renders stopwatch save button', () => {
  render(<Controls />);
  const saveButton = screen.getByText(/save/i);
  expect(saveButton).toBeInTheDocument();
});
//--------------
test('stop button works', ()=>{
  render(<Controls />);
  // implement test, possibly with fireEvent()
});