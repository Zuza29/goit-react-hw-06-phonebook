import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  useEffect(() => {
    if (contacts !== []) {
      localStorage.setItem('savedContacts', JSON.stringify(contacts));
    }
  }, [contacts]);
  return (
    <div className="App">
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        {contacts.length === 0 ? (
          <Notification message="There are no contacts yet" />
        ) : (
          <>
            <Filter
            />
            <ContactList />
          </>
        )}
      </Section>
    </div>
  );
};
