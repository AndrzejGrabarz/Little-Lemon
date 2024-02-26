import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingFrom';
import { initialState } from './utilities/testFunction';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('choose date');
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes eturns the correct expected value', () => {
  expect(typeof initialState()).toEqual('object');
});
