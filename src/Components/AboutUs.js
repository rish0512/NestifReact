import { useState } from "react";
import AboutDetailItems from "./AboutDetailItems";
const AboutUs = ({ heading, content, Image, aboutusContents }) => {
  const [show, setShow] = useState(AboutDetailItems);
  return (
    <>
      <p>{aboutusContents}</p>
      <div>
        <h3 onClick={() => setShow(!show)}>{heading}</h3>
      </div>
      {show && (
        <div className="mission flex">
          <p className="content">{content}</p>
          <img src={Image} alt=".." />
        </div>
      )}
    </>
  );
};
export default AboutUs;
