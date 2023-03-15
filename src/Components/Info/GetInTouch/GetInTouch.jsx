import "./GetInTouch.css";
import Map from "../../../Icons/Map";
export default function GetInTouch() {
  return (
    <>
      <div className="get-in-touch">
        <div style={{ display: "flex" }}>
          <Map />
          <p>
            "WHOLETEX" 213,FF RANG AVDHUT V-1, PUNAGAM SURAT 395010 GUJARAT
            INDIA
          </p>
        </div>
        <div>
          <button
            className="get-in-touch-icons"
            style={{ borderRadius: "50%", padding: "10px" }}
          >
            <i className="fa fa-linkedin" style={{ fontSize: "24px" }}></i>
          </button>
          <button
            className="get-in-touch-icons"
            style={{ borderRadius: "50%", padding: "10px" }}
          >
            <i className="fa fa-facebook" style={{ fontSize: "24px" }}></i>
          </button>
          <button
            className="get-in-touch-icons"
            style={{ borderRadius: "50%", padding: "10px" }}
          >
            <i className="fa fa-twitter" style={{ fontSize: "24px" }}></i>
          </button>
          <button
            className="get-in-touch-icons"
            style={{ borderRadius: "50%", padding: "10px" }}
          >
            <i className="fa fa-google" style={{ fontSize: "24px" }}></i>
          </button>
        </div>
      </div>
    </>
  );
}
