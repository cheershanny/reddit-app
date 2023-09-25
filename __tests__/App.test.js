import App from '../src/App';
import {render, screen} from "@testing-library/react";
import React from 'react';
import store from '../src/store';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect'; 

test('renders without crashing', () => {
  render(<Provider store={store}>
    <App />
  </Provider>);
  const headerElement = screen.getByText(/Redditiana App/i);
  expect(headerElement).toBeInTheDocument();
});

