import { render, screen } from '@testing-library/react';
import Header from './Header';
import {
  BrowserRouter as Router,
} from "react-router-dom";

describe('<Header />', () => {
  it('renders home link', () => {
    render(<Router><Header /></Router>);
    const button = screen.getByTestId('home-link');
    expect(button).toBeInTheDocument();  
  });

  it('renders difficulty chart link', () => {
    render(<Router><Header /></Router>);
    const button = screen.getByTestId('difficulty-link');
    expect(button).toBeInTheDocument();  
  });

  it('renders hash rate chart link', () => {
    render(<Router><Header /></Router>);
    const button = screen.getByTestId('hash-rate-link');
    expect(button).toBeInTheDocument();  
  });
});
