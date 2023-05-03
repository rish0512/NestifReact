import "./Contents.css";

function Contents(props) {
  return (
    <>
      <div className={props.cName}>
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default Contents;
