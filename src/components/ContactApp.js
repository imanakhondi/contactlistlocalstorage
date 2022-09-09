import { useEffect, useState } from "react";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const ContactApp = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );

  const deleteContact = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = (input) => {
    const newContact = {
      id: Math.floor(Math.random() * 100),
      name: input.name,
      phone: input.phone,
      email: input.email,
      address: input.address,
    };
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="addContact">
      <button className="button">Go To contacts</button>
      <AddContact addNewContact={addNewContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
};

export default ContactApp;
