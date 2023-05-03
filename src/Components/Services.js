import ServiceData from "./ServiceData";
import "./Services.css";
import img1 from "../Assets/consulting.png";
import img2 from "../Assets/training.png";
import img3 from "../Assets/dataEngg.png";
import img4 from "../Assets/prodEngg.png";
import img5 from "../Assets/replatform.png";
import img6 from "../Assets/softSoln.png";

function Services() {
  return (
    <div>
      <h2>Our Services</h2>
      <p>
        "The workforce is the lifeblood of any organization, and with the right
        people, you can transform businesses. At Nestif, we aim to do just that
        – equip companies with world-class workforce management solutions to
        help them succeed. As a globally recognized workforce management
        services provider, we offer end-to-end HRO services that are aimed at
        solving complex HR challenges. From customized staffing services, expert
        talent acquisition, search and recruitment, payroll compliance, training
        and skill development, to managed workforce solutions, Nestif provides
        all the tools necessary to drive your business growth."
      </p>
      <div className="servicecard">
        <ServiceData image={img2} text="Software Training" />
        <ServiceData image={img4} text="Product Engineering" />
        <ServiceData image={img3} text="Data Engineering" />
      </div>
      <div className="servicecard">
        <ServiceData image={img1} text="IT Consulting" />
        <ServiceData image={img6} text="Software Solutions" />
        <ServiceData image={img5} text="Replatforming Services" />
      </div>
    </div>
  );
}

export default Services;
