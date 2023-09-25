import App from '../src/App';
import {render, screen} from "@testing-library/react";
import React from 'react';

test('renders without crashing', () => {
  render(<App />);
  const headerElement = screen.getByText(/Redditiana App/i);
  expect(headerElement).toBeInTheDocument();
});

