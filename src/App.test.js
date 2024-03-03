import {
  screen, fireEvent, waitFor, render,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import { initialState } from './utilities/testFunction';

test('Renders the BookingForm heading', () => {
  render(
    <Router>
      <BookingForm />
    </Router>,
  );
  const headingElement = screen.getByText('First Name');
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes eturns the correct expected value', () => {
  expect(typeof initialState()).toEqual('object');
});

test('shows an error message when firstName is not filled in', async () => {
  render(
    <Router>
      <BookingForm />
    </Router>,
  );

  const inputElement = screen.getByTestId('firstName');
  fireEvent.blur(inputElement);

  expect(await screen.findByText('*Required')).toBeInTheDocument();
});

test('shows an div with error class when firstName is not filled in', () => {
  render(
    <Router>
      <BookingForm />
    </Router>,
  );
  const input = screen.getByTestId('email-field');
  fireEvent.blur(input);
  waitFor(() => {
    expect(screen.getByTestId('email-error')).toBeInTheDocument();
  });
});

test('shows no error when input is just clicked', async () => {
  render(
    <Router>
      <BookingForm />
    </Router>,
  );
  const input = screen.getByTestId('lastName');
  fireEvent.click(input);
  await waitFor(() => {
    const errorDiv = screen.queryByTestId('lastName-error');
    expect(errorDiv).not.toBeInTheDocument();
  });
});
