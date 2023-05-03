import { ContactDetailItems1 } from "./ContactDetailItems1";
import "./ContactDetail.css";

const ContactDetail1 = () => {
  return (
    <div>
      <ul>
        {ContactDetailItems1.map((contact, index) => {
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
export default ContactDetail1;
