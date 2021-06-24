import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

test('renders <ErrorMessage /> text', () => {
  render(<Spinner />);
  const errorElement = screen.getByTestId('spinner');
  expect(errorElement).toBeInTheDocument();
});
