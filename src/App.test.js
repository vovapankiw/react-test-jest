import { render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

// Example how to get roles
// test('button has correct initial color', () => {
//   const {container } = render(<App />);
//   logRoles(container);
//   const button = screen.getByRole('button', { name: 'Change to blue' });

//   expect(button).toHaveStyle({ backgroundColor: 'red' });
// });

test('button has correct initial color', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: 'Change to blue' });

  expect(button).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked()
});

test('disable button when checkbox is checked', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  fireEvent.click(checkbox);

  expect(colorButton).toBeDisabled();
});

test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: blue');
 
});

describe('spaces before camel-case capital letters', () => {
  test('Works for inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {

  });
});