import "./CareerDetails.css";
import CareerDetailItems from "./CareerDetailItems";
import CareerContents from "./CareerContents";
import img from "../Assets/career-Icon.jpg";
function career(e) {
  return <CareerContents key={e.id} text={e.text} />;
}
function CareerDetail() {
  return (
    <div className="career-container">
      <div className="career flex">
        <div className="careerContents">
          <h3> Why Nestif? </h3>
          {CareerDetailItems.map(career)}
        </div>
        <div className="careerimg">
          {" "}
          <img src={img} alt="careerimg" />
        </div>
      </div>
    </div>
  );
}
export default CareerDetail;
