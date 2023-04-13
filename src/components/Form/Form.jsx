import { useState } from 'react';
import css from './Form.module.css';
import { Button } from 'components/Button/Button';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { getContacts } from 'redux/selectors';
import { addContacts } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      name,
      number,
      id: nanoid(),
    };

    let contactExists = false;

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === user.name.toLowerCase()) {
        Notify.info(`${contact.name} is already in the Phonebook.`);
        contactExists = true;
      }
    });

    if (!contactExists) {
      dispatch(addContacts(user));
      Notify.success(`${user.name} was added to the Phonebook.`);
    }

    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        Name
        <input
          className={css.input}
          autoComplete="off"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
        Number
        <input
          className={css.input}
          autoComplete="off"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          name="Add contact"
         
        ></Button>
      </form>
    </>
  );
};
