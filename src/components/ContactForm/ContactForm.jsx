import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { FormLabel, Button } from './ContactForm.styled';

// import * as yup from 'yup';

// const phoneRegExp = /^[0-9\+]{1,}[0-9\-]{3,15}$/;

// eslint-disable-next-line
// const schema = yup.object().shape({
//   name: yup.string().required(),
//   //   number: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
//   number: yup.number().required(),
// });

const initialValues = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    // e.preventDefault();

    const { onSubmit } = this.props;

    onSubmit(values.name, values.number);

    this.setState({ name: '', number: '' });
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmit}
        // validationSchema={schema}
      >
        <Form>
          <FormLabel htmlFor="name">
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            {/* <ErrorMessage name="name" /> */}
          </FormLabel>
          <br />
          <FormLabel htmlFor="number">
            Number
            <Field
              type="tel"
              name="number"
              pattern="^[0-9\+]{1,}[0-9\-]{3,15}$"
              required
            />
            {/* <ErrorMessage name="number" /> */}
          </FormLabel>
          <br />
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    );
  }
}
