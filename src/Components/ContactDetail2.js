import { ContactDetailItems2 } from "./ContactDetailItems2";
import "./ContactDetail.css";

const ContactDetail2 = () => {
  return (
    <div>
      <ul>
        {ContactDetailItems2.map((contact, index) => {
          return (
            <li key={index} className="Contact-link">
              {contact.title}
              {contact.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactDetail2;
