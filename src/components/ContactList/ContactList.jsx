import css from '../ContactList/ContactList.module.css';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul className={css.contactList}>
        {contacts.map(({ name, number, id }) => (
          <li className={css.contactListItem} key={id}>
            <div className={css.column1}>
              <span className={css.itemText}>
                <b>Name: </b>
                {name}
              </span>
              <span className={css.itemText}>
                <b>Number: </b>
                {number}
              </span>
            </div>
            <div className={css.column2}>
              <Button
                type="button"
                name="Delete contact"
                onClick={() => deleteContact(id)}
              >
                Delete contact
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
