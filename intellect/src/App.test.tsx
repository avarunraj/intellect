import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('App initial load test', () => {
  render(<App />);
  const TextElement = screen.getByText('10');
  expect(TextElement).toBeInTheDocument();
});
