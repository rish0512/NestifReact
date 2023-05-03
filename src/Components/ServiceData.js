import "./Services.css";

function ServiceData(props) {
  return (
    <div className="s-card">
      <div className="s-image">
        <img src={props.image} alt="serviceimg" />
      </div>
      <div className="background">
        <h3 className="text">{props.text}</h3>
      </div>
    </div>
  );
}
export default ServiceData;
