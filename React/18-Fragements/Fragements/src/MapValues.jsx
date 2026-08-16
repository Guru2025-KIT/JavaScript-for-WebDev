import "bootstrap/dist/css/bootstrap.min.css";

function MapValues() {
  let arr = ["Daal", "Chaval", "Roti", "Paneer"];

  return (
    <>
      {
        <ul className="list-group">
          {arr.map((item) => {
            return (
              <li className="list-group-item d-flex justify-content-between align-items-center">
                {item}
                <span className="badge text-bg-primary rounded-pill">14</span>
              </li>
            );
          })}
        </ul>
      }
    </>
  );
}

export default MapValues;
