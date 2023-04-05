import { Form } from './Form/Form';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notify } from 'notiflix';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterValue = event => {
    setFilter(event.currentTarget.value);
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const addUserToContacts = user => {
    setContacts([...contacts, user]);
  };

  const deleteContact = identification => {
    const deletedName = contacts.find(({ id }) => id === identification).name;

    setContacts(prevState =>
      prevState.filter(contact => contact.id !== identification)
    );

    Notify.success(`${deletedName} was deleted from the Phonebook.`);
  };

  const filteredContacts = filterContacts();
  return (
    <div className="App">
      <Section title="Phonebook">
        <Form
          addUserToContacts={addUserToContacts}
          contacts={contacts}
          // name={this.state.name}
          // number={this.state.number}
          // handleChange={this.handleChange}
        ></Form>
      </Section>
      <Section title="Contacts">
        {contacts.length === 0 ? (
          <Notification message="There are no contacts yet" />
        ) : (
          <>
            <Filter
              value={filter}
              onChange={filterValue}
              filteredContacts={filteredContacts}
            />
            <ContactList
              contacts={filteredContacts}
              deleteContact={deleteContact}
            ></ContactList>
          </>
        )}
      </Section>
    </div>
  );
};
