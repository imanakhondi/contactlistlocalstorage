import {  useState } from "react";
import styles from "./editContact.module.css";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const EditContact = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );
  console.log(contacts);
  const navigate = useNavigate();
  const params = useParams();
  const selectId = params.id;

  const location = useLocation();
  console.log(location);
  const [contact, setContact] = useState(location.state.contact);
  console.log(contact);

  const editContactFun = (contact, id) => {
    console.log(id);
    if (contact.id === parseInt(id)) {
    }

    console.log("jaber");
    console.log(contact);
  };

  const submitHandler = (e) => {
    if (!contact.name) {
      alert("enter all fields");
      return;
    }
    e.preventDefault();
    editContactFun(contact, selectId);

    // setContact({
    //   name: "",
    //   email: "",
    //   phone: "",
    //   address: "",
    // });
    // navigate("/contacts");
  };

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
    console.log("naghmeh");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div>
          <br />
          <input
            type="text"
            id="name"
            value={contact.name}
            name="name"
            onChange={changeHandler}
            placeholder="name"
          />
        </div>
        <div>
          <br />
          <input
            type="email"
            id="email"
            value={contact.email}
            name="email"
            onChange={changeHandler}
            placeholder="email"
          />
        </div>
        <div>
          <br />
          <input
            type="tel"
            id="phone"
            value={contact.phone}
            name="phone"
            onChange={changeHandler}
            placeholder="phone"
          />
        </div>
        <div>
          <br />
          <textarea
            id="address"
            value={contact.address}
            name="address"
            onChange={changeHandler}
            placeholder="address"
            className={styles.address}
          />
        </div>
        <div className={styles.submit}>
          <input type="submit" value="update"></input>
        </div>
      </form>
    </div>
  );
};
// adrress
export default EditContact;
