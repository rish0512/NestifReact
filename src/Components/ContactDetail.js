import { ContactDetailItems } from "./ContactDetailItems";
import "./ContactDetail.css";

const ContactDetail = () => {
  return (
    <div>
      <ul>
        {ContactDetailItems.map((contact, index) => {
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
export default ContactDetail;
