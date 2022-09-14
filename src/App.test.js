// handleReset = (event) => {
  //   const name = event.target.name;

  //   this.setState((item) => ({
  //     [name]: this.state.id.filter((i) => i !== item),
  //   }));
  // };import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
