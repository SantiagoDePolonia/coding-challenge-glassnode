import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

test('renders <ErrorMessage /> text', () => {
  render(<ErrorMessage />);
  const errorElement = screen.getByTestId('error-message');
  expect(errorElement).toBeInTheDocument();
});
