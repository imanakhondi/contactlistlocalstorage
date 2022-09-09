import "./App.css";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import { useEffect, useState } from "react";
import FullContact from "./components/FullContact";
import EditContact from "./components/EditContact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );

  const deleteContact = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
    toast.success("Contact deleted successfully");
  };
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
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Layout>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<AddContact addNewContact={addNewContact} />}
          />
          <Route
            path="/contacts"
            element={
              <ContactList contacts={contacts} onDelete={deleteContact} />
            }
          />
          <Route
            path="/contacts/:id"
            element={
              <FullContact contacts={contacts} setContacts={setContacts} />
            }
          />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
        <ToastContainer className="toastCustomize" />
      </div>
    </Layout>
  );
}

export default App;
