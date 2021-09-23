import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders stopwatch start button', () => {
  render(<App />);
  const startButton = screen.getByText(/start/i);
  expect(startButton).toBeInTheDocument();
});

test('renders stopwatch stop button', () => {
  render(<App />);
  const stopButton = screen.getByText(/end/i);
  expect(stopButton).toBeInTheDocument();
});

test('renders stopwatch reset button', () => {
  render(<App />);
  const resetButton = screen.getByText(/reset/i);
  expect(resetButton).toBeInTheDocument();
});

test('renders stopwatch save button', () => {
  render(<App />);
  const saveButton = screen.getByText(/save/i);
  expect(saveButton).toBeInTheDocument();
});

