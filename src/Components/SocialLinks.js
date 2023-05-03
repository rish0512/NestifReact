import { SocialMediaItems } from "./SocialMediaItems";
import "./SocialLinks.css";
import { Link } from "react-router-dom";
const SocialLinks = () => {
  return (
    <div>
      <ul className="Social-icons flex">
        {SocialMediaItems.map((social, index) => {
          return (
            <li key={index}>
              <Link className={social.cName} to={social.url}>
                <i class={social.icon}></i>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SocialLinks;
