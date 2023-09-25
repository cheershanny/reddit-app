import { render, screen } from '@testing-library/react';
import App from '../../src/App';

test('renders without crashing', () => {
  render(<App />);
  const headerElement = screen.getByText(/Redditiana App/i);
  expect(headerElement).toBeInTheDocument();
});

