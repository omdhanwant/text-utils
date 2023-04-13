import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Utils text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Utils/i);
  expect(linkElement).toBeInTheDocument();
});
