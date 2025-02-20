import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import style from './CamperForm.module.css';
import { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  date: null,
  comment: '',
};

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Must be a valid email!')
    .required('Email is required'),
  date: Yup.date().required('Booking date is required'),
  comment: Yup.string(),
});

const CamperForm = () => {
  const [text, setText] = useState('Booking date*');

  const handleSubmit = (values, options) => {
    iziToast.success({
      title: 'Ok',
      titleColor: '#fff',
      message: 'Successfully booking camper!',
      position: 'topRight',
      backgroundColor: 'green',
      messageColor: '#fff',
      theme: 'dark',
    });
    options.resetForm();
  };

  const handleCalendarClose = () => setText('Booking date*');
  const handleCalendarOpen = () => setText('Select a date between today');

  return (
    <div className={style.formSection}>
      <div className={style.formWrapper}>
        <h3 className={style.formTitle}>Book your campervan now</h3>
        <p className={style.formSubtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        <Form>
          <div className={style.formContainer}>
            <label>
              <Field
                className={style.formInput}
                type="text"
                name="name"
                placeholder="Name*"
              />
              <ErrorMessage
                name="name"
                component="span"
                className={style.formError}
              />
            </label>
            <label>
              <Field
                className={style.formInput}
                type="email"
                name="email"
                placeholder="Email*"
              />
              <ErrorMessage
                name="email"
                component="span"
                className={style.formError}
              />
            </label>
            <label>
              <Field type="date" name="date">
                {({ field, form }) => (
                  <DatePicker
                    {...field}
                    selected={field.value ? new Date(field.value) : null}
                    onChange={(date) => form.setFieldValue('date', date)}
                    dateFormat="dd.MM.yyyy"
                    minDate={new Date()}
                    shouldCloseOnSelect={true}
                    onCalendarClose={handleCalendarClose}
                    onCalendarOpen={handleCalendarOpen}
                    placeholderText={text}
                    className={style.formInput}
                  />
                )}
              </Field>
              <ErrorMessage
                name="date"
                component="span"
                className={style.formError}
              />
            </label>
            <label>
              <Field
                className={style.formComment}
                as="textarea"
                name="comment"
                placeholder="Comment"
              />
            </label>
          </div>
          <button className={style.formBtn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CamperForm;
