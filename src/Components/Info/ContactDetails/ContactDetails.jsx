import Mail from "../../../Icons/Mail";
import Phone from "../../../Icons/Phone";
import whatsAppSvg from "../../../assets/icons8-whatsapp.svg";

import "./ContactDetails.css";
export default function ContactDetails() {
  return (
    <>
      <div className="contact-details">
        <h3>CONTACT DETAILS</h3>
        <div>
          <div style={{ display: "flex" }}>
            <Phone />
            <button>+91-9327773330</button>
          </div>
          <p>FOR INQUIRY</p>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <img src={whatsAppSvg} alt="Whatsapp" />
            <button>+91-7990842989</button>
          </div>
          <p>SALWAR SUITS AND DRESS MATERIAL</p>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <img src={whatsAppSvg} alt="Whatsapp" />
            <button>+91-9137381212</button>
          </div>
          <p>KURTI, WESTERN WEAR, BOTTOM WEAR, GOWN, DUPPATA AND SHAWLS</p>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <Mail />
            <button>sales.rangparvesh@gmail.com</button>
          </div>
        </div>
      </div>
    </>
  );
}
