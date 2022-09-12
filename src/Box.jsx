import "./Box.css";

function Box({ array, label }) {
  return (
    <div className="containerBox">
      <div className="labelBox">{label}</div>
      <div className="idsBox">
        {array.map((e, index) => {
          return (
            <div key={index} className="idsValueBox">
              <div className="idsValueBoxLabel">{e.id}</div>
              <div className="idsValueBoxContent">{e.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Box;
