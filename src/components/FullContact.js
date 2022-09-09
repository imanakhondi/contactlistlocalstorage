import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./fullContact.module.css";
import profile from "./profile.jpeg";
import { BiTrash } from "react-icons/bi";
import {
  BsFillTelephoneFill,
  BsGeoAltFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const FullContact = ({ contacts, setContacts }) => {
  const params = useParams();
  const contactId = params.id;
  console.log(contactId);
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);
  const { contact } = location.state;
  console.log(contact);

  const deleteContactFun = () => {
    console.log(contactId);
    if (parseInt(contactId) === parseInt(contact.id)) {
      console.log(contact.id);
      console.log("deleteContact");
      const filteredContacts = contacts.filter(
        (c) => c.id !== parseInt(contactId)
      );
      setContacts(filteredContacts);
    }
    toast.success("contact remove");
    navigate("/contacts");
    console.log("imannnnnn");
  };

  if (contact) {
    return (
      <div style={{ margin: "20px" }}>
        <Link to="/contacts">
          <button className={styles.button}>Go To contacts</button>
        </Link>
        <div className={styles.container}>
          <div className={styles.info}>
            <img src={profile} alt="Avatar" className={styles.avatar} />
          </div>
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginTop: "15px",
              }}
            >
              {contact.name}
            </p>
            <div className={styles.details}>
              <BsFillTelephoneFill />
              <span style={{ fontSize: "10px", marginLeft: "3px" }}>
                {contact.phone}
              </span>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <BsFillEnvelopeFill />
            <p style={{ fontSize: "12px", fontWeight: "500" }}>
              {contact.email}
            </p>
          </div>
          <div className={styles.contactInfo}>
            <BsGeoAltFill />
            <p style={{ fontSize: "12px", fontWeight: "500" }}>
              {contact.address}
            </p>
          </div>
          <button onClick={deleteContactFun} className={styles.trash}>
            <BiTrash />
          </button>
        </div>
      </div>
    );
  }
};

export default FullContact;
