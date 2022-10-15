import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Component } from 'react';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

const schema = yup.object().shape({
  name: yup.string().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;

    const handleSubmit = (values, { resetForm }) => {
      const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
      };

      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));

      resetForm();
    };

    const visibleContacts = this.getVisibleContacts();

    const changeFilter = e => {
      this.setState({
        filter: e.currentTarget.value,
      });
    };

    return (
      <div>
        <h2>Phonebook</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form>
            <label htmlFor="name">
              Name
              <Field
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <ErrorMessage name="name" />
            </label>
            <br />
            <label htmlFor="number">
              Number
              <Field type="tel" name="number" required />
              <ErrorMessage name="number" />
            </label>
            <br />
            <button type="submit">Add contact</button>
          </Form>
        </Formik>
        <div>
          <h2>Contacts</h2>

          <Filter value={filter} onChange={changeFilter} />

          {/* <ContactList visibleContacts={visibleContacts} /> */}
          <ul>
            {visibleContacts.map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
