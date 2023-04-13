import css from '../ContactList/ContactList.module.css';
import { Button } from 'components/Button/Button';
import { deleteContacts } from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue, getContacts } from 'redux/selectors';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilterValue);
    const dispatch = useDispatch();
    const filteredContacts = contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number
          .replace(/-|\s/g, '')
          .includes(filter.replace(/-|\s/g, ''))
    );

    const deleteContact = data => {
      dispatch(deleteContacts(data));
    };
  return (
    <>
      <ul className={css.contactList}>
        {filteredContacts.map(({ name, number, id }) => (
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


