import profile from "./profile.jpeg";
import { Link } from "react-router-dom";
import { BiTrash, BiEditAlt } from "react-icons/bi";

const Contact = ({ contact, onDelete, onEdit }) => {
  const { name, email, id, phone, address } = contact;

  return (
    <div className="contactcontainer">
      <Link to={`/contacts/${id}`} state={{ contact }}>
        <div className="info">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={profile} alt="Avatar" className="avatar" />
          </div>
          <div>
            <p>{name}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{address}</p>
          </div>
        </div>
      </Link>
      <div>
        <button className="btn trash" onClick={onDelete}>
          <BiTrash />
        </button>
        <Link to={`/edit/${id}`} state={{ contact }}>
          <button className="btn edit" onClick={onEdit}>
            <BiEditAlt />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
