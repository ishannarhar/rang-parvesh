import androidSvg from "../../assets/icons8-android-os.svg";
import appleSvg from "../../assets/icons8-apple-logo.svg";
import whatsAppSvg from "../../assets/icons8-whatsapp.svg";
import Bell from "../../Icons/Bell";
import ShoppingCart from "../../Icons/ShoppingCart";
import DownArrow from "../../Icons/DownArrow";
import "./Header.css";
export default function Header() {
  return (
    <>
      <section className="navbar">
        <div className="navbar-part-a">
          <div className="navbar-icons">
            <i
              className="fa fa-apple"
              style={{ fontSize: "25px", color: "white", marginRight: "16px" }}
            ></i>
            <i
              className="fa fa-android"
              style={{ fontSize: "25px", color: "white", marginRight: "16px" }}
            ></i>
            <i
              className="fa fa-certificate"
              style={{ fontSize: "25px", color: "white", marginRight: "16px" }}
            ></i>
            <a>
              <i
                className="fa fa-whatsapp"
                style={{ fontSize: "18px", color: "white" }}
              ></i>{" "}
              Join Whatsapp Broadcast Group
            </a>
            <a>
              <i
                className="fa fa-bell"
                style={{ fontSize: "18px", color: "white", marginLeft: "16px" }}
              ></i>{" "}
              Subscribe
            </a>
          </div>
          <div className="navbar-marquee">
            <marquee>
              Timings: 9.00 a.m. to 6.00 p.m. (Monday to Saturday)
            </marquee>
          </div>
        </div>
        <div className="navbar-part-b">
          <button className="header-button">
            INR <DownArrow width="10" height="10" />
          </button>
          <button className="header-button">Pay Now</button>
          <button className="header-button">
            My Account <DownArrow width="10" height="10" />
          </button>
          <a>
            <i
              className="fa fa-ticket"
              style={{
                fontSize: "25px",
                color: "white",
                marginRight: "16px",
                marginLeft: "16px",
              }}
            ></i>
          </a>
          <a>
            <i
              className="fa fa-shopping-cart"
              style={{ fontSize: "25px", color: "white", marginRight: "16px" }}
            ></i>
          </a>
          <a>
            <i
              className="fa fa-bell"
              style={{ fontSize: "25px", color: "white", marginRight: "16px" }}
            ></i>
          </a>
        </div>
      </section>
    </>
  );
}
