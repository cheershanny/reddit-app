import { render, screen } from '@testing-library/react';
import PostList from '../../src/features/postList/PostList';

test('renders without crashing', () => {
  render(<PostList />);
  const loadingElement = screen.getByText(/Loading/i);
  expect(loadingElement).toBeInTheDocument();
});

