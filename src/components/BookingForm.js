/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { useNavigate } from 'react-router-dom';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';
import '../form.css';

function PhoneInput({ field, ...props }) {
  return <MaskedInput {...field} {...props} />;
}

function BookingForm({
  availableTimes,
}) {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        date: '',
        numberOfGuests: '1',
        time: '17:00',
        occasion: 'Dinner',
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('*Required'),
        lastName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('*Required'),
        phone: Yup.string().required('*Required'),
        email: Yup.string().email('Invalid emali address').required('Required'),
        date: Yup.date('Invalid date').required('Required'),
        numberOfGuests: Yup.number().min(1, 'One quest or more').max(10, 'Only ten allowed').required('*Required'),
        time: Yup.string().required('*Required'),
        occasion: Yup.string(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          navigate('/confirmbooking');
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h1>Make a Reservation</h1>
          <div className="form-box-col">
            <div className="personal-info">
              <div className="yellow-box" />
              <h2>Personal Information</h2>
            </div>
            <div className="form-box">
              <div className="form-col1">
                <div className="form-flex-col">
                  <label htmlFor="firstName">
                    First Name
                    <Field id="firstName" type="text" name="firstName" placeholder="Jane" data-testid="firstName" />
                    <ErrorMessage name="firstName" id="error" component="div" role="alert" />
                  </label>
                  <label htmlFor="lastName">
                    Last Name
                    <Field id="lastName" type="text" name="lastName" placeholder="Boar" />
                    <ErrorMessage name="lastName" id="error" component="div" />
                  </label>
                  <label htmlFor="email">
                    Email Adress
                    <Field id="email" type="email" name="email" placeholder="lemon@gmail.com" />
                    <ErrorMessage name="email" id="error" component="div" />
                  </label>
                  <label htmlFor="phone">
                    Phone Number
                    <Field name="phone">
                      {({ field }) => (
                        <PhoneInput
                          id="phone"
                          type="tel"
                          name="phone"
                          placeholder="+48 521-523-456"
                          {...field}
                          mask={['+', '4', '8', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                        />
                      )}
                    </Field>
                    <ErrorMessage name="phone" id="error" component="div" />
                  </label>
                </div>
              </div>
              <div className="form-col2">
                <div className="form-flex-col">
                  <label htmlFor="date">
                    Date
                    <Field id="date" type="date" name="date" />
                    <ErrorMessage name="date" id="error" component="div" />
                  </label>
                  <label htmlFor="numberOfGuests">
                    Number of Guests
                    <Field id="numberOfGuests" type="number" name="numberOfGuests" min="1" max="10" defaultValue="1" />
                    <ErrorMessage name="numberOfGuests" id="error" component="div" />
                  </label>
                  <label htmlFor="time">
                    Time
                    <Field id="time" type="time" as="select" name="time">
                      {availableTimes && availableTimes.time.map((option) => (
                        <option key={option.id} value={option}>{option}</option>
                      ))}
                    </Field>
                    <ErrorMessage name="time" id="error" component="div" />
                  </label>
                  <label htmlFor="occasion">
                    Occasion
                    <Field id="occasion" as="select" name="occasion">
                      <option value="birthday">Dinner</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="engagement">Engagement</option>
                    </Field>
                    <ErrorMessage name="occasion" id="error" component="div" />
                  </label>
                </div>
              </div>
            </div>
            <div className="submit-btn">
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default BookingForm;
