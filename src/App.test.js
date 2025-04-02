import { render, screen } from '@testing-library/react';
import App from './app/App';

test('renders learn react link', () => {
  render(<App />);
  const navLink = screen.getByText(/Rental Roulette/i);
  expect(linkElement).toBeInTheDocument();
});
