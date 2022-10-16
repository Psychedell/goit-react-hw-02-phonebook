import PropTypes from 'prop-types';
import { ButtonList, ListLi } from './ContactList.styled';

const ContactList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <ul>
      {visibleContacts.map(contact => (
        <ListLi key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonList onClick={() => onDeleteContact(contact.id)}>
            Delete
          </ButtonList>
        </ListLi>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
