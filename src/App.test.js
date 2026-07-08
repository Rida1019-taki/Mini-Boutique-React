import { render, screen } from '@testing-library/react';
import App from './app/App';

test('renders boutique title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Boutique Électronique/i);
  expect(titleElement).toBeInTheDocument();
});
