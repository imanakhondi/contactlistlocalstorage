import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const ContactList = ({ contacts, setContacts, onDelete }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contact"));
    if (savedContacts) setContacts(savedContacts);
  }, []);
  console.log(contacts);

  const editContact = () => {
    console.log("iman");
  };

  const renderContacts = () => {
    let renderValue = (
      <p style={{ color: "#fff", fontWeight: "bold", fontSize: "20px" }}>
        There is no contacts.....
      </p>
    );
    if (error) {
      renderValue = (
        <p style={{ color: "#fff", fontWeight: "bold", fontSize: "20px" }}>
          fetching data failed!!!
        </p>
      );
      // toast.error("there is a problem");
    }

    if (contacts && !error) {
      renderValue = contacts.map((contact, index) => (
        <Contact
          contact={contact}
          onDelete={() => onDelete(contact.id)}
          onEdit={() => editContact(contact)}
          key={index}
        />
      ));
    }
    return renderValue;
  };

  return (
    <div className="contactList">
      <Link to={"/"}>
        <button className="button">Add New Contact</button>
      </Link>
      <section>{renderContacts()}</section>
    </div>
  );
};

export default ContactList;
