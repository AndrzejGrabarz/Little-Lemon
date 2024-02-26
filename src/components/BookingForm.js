/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
import { useNavigate } from 'react-router-dom';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask';

function PhoneInput({ field, ...props }) {
  return <MaskedInput {...field} {...props} />;
}

function BookingForm({
  availableTimes,
}) {
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          date: '',
          numberOfGuests: '',
          time: '',
          occasion: '',
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

            <label htmlFor="firstName">
              First name
              <Field id="firstName" type="text" name="firstName" placeholder="Jane" />
            </label>
            <ErrorMessage name="firstName" id="error" component="div" />

            <label htmlFor="lastName">
              Last name
              <Field id="lastName" type="text" name="lastName" placeholder="Boar" />
            </label>
            <ErrorMessage name="lastName" id="error" component="div" />

            <label htmlFor="email">
              Email
              <Field id="email" type="email" name="email" placeholder="lemon@gmail.com" />
            </label>
            <ErrorMessage name="email" id="error" component="div" />

            <label htmlFor="phone">
              Phone number
              <Field
                id="phone"
                type="tel"
                name="phone"
                placeholder="+48 521 523 456"
                render={({ field }) => (
                  <PhoneInput {...field} mask={['+', '4', '8', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]} placeholder="+48 521-523-456" />
                )}
              />
            </label>
            <ErrorMessage name="phone" id="error" component="div" />

            <label htmlFor="date">
              Date
              <Field id="date" type="date" name="date" />
            </label>
            <ErrorMessage name="date" id="error" component="div" />

            <label htmlFor="numberOfGuests">
              Number of guests
              <Field id="numberOfGuests" type="number" name="numberOfGuests" min="1" max="10" />
            </label>
            <ErrorMessage name="numberOfGuests" id="error" component="div" />

            <label htmlFor="time">
              Time
              <Field id="time" type="time" as="select" name="time">
                {availableTimes && availableTimes.time.map((option) => (
                  <option key={option.id} value={option}>{option}</option>
                ))}
              </Field>
            </label>
            <ErrorMessage name="time" id="error" component="div" />

            <label htmlFor="occasion">
              Occasion
              <Field id="occasion" as="select" name="occasion">
                <option value="birthday">Dinner</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="engagement">Engagement</option>
              </Field>
            </label>
            <ErrorMessage name="occasion" id="error" component="div" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default BookingForm;
