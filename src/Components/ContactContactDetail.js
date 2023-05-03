import { ContactContactDetailItems } from "./ContactContactDetailItems";

const ContactDetail = () => {
  return (
    <div>
      <ul>
        {ContactContactDetailItems.map((contact, index) => {
          return (
            <li key={index} className="Contact-link">
              <h4>{contact.address}</h4>
              <p>{contact.name}</p>
              <p>{contact.add1}</p>
              <p>{contact.add2}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ContactDetail;
