import { AboutDetailItems } from "./AboutDetailItems";
import "./AboutDetail.css";
import img from "../Assets/resilience.png";
import { useState } from "react";
import AboutUs from "./AboutUs";
const AboutDetail = () => {
  const [data] = useState(AboutDetailItems);
  return (
    <>
      <h2>About Us</h2>
      {data.map((event) => {
        return <AboutUs key={event.id} {...event} />;
      })}
      <img src={img} alt="careerimg" />
    </>
  );
};
export default AboutDetail;
