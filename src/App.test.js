import { render, screen } from '@testing-library/react';

import App from './App';

it("renders without crashing", function () {
  render(<App />);
});

test('renders Shoply', () => {
  render(<App />);
  const appElement = screen.getByText("Shoply");
  expect(appElement).toBeInTheDocument();
});
