import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = ({ addNewContact }) => {
  let navigate = useNavigate();

  const [contact, setContact] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    addNewContact(contact);
    setContact({
      id: "",
      name: "",
      phone: "",
      email: "",
      address: "",
    });
    navigate("/contacts");
    toast.success("The contact was successfully registered");
  };

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <div className="addContact">
      <Link to="/contacts">
        <button className="button">Go To contacts</button>
      </Link>
      <div className="addContainer">
        <form className="form" onSubmit={submitHandler}>
          <input
            type="text"
            value={contact.name}
            name="name"
            onChange={changeHandler}
            placeholder="name"
          />
          <input
            type="tel"
            value={contact.phone}
            name="phone"
            onChange={changeHandler}
            placeholder="phone"
          />
          <input
            type="email"
            value={contact.email}
            name="email"
            onChange={changeHandler}
            placeholder="email"
          />
          <textarea
            value={contact.address}
            name="address"
            onChange={changeHandler}
            placeholder="address"
            className="address"
          />
          <input type="submit" value="add"></input>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
