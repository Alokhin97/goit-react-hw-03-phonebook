import React from 'react';
import { render } from '@testing-library/prefer-screen-queries';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});