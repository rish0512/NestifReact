import ContactDetail1 from "./ContactDetail1";
import "./Footer.css";
import SocialLinks from "./SocialLinks";
import ContactDetail2 from "./ContactDetail2";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer>
      <div className="Footer-container flex">
        <div>
          <h5>visit us</h5>
          <SocialLinks />
        </div>
        <ContactDetail1 />
        <ContactDetail2 />
      </div>
      <hr />
      <Copyright />
    </footer>
  );
};
export default Footer;
