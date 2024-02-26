import { useReducer } from 'react';
import BookingForm from '../components/BookingForm';
import { fetchAPI } from '../components/bookingsAPI';

function BookingPage() {
  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'setTime':
        return { ...state, selected: action.date };
      default:
        return state;
    }
  };
  const initialState = () => {
    const today = new Date();
    return { time: fetchAPI(today), selected: null };
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, initialState());

  return (
    <BookingForm
      availableTimes={availableTimes}
    />
  );
}

export default BookingPage;
