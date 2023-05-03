import CareerInside from "./CareerInside";

function CareerContents(props) {
  return (
    <div>
      <CareerInside insideContents={props.text} />
    </div>
  );
}
export default CareerContents;
