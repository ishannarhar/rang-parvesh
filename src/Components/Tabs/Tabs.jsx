import "./Tabs.css";
import DownArrow from "../../Icons/DownArrow";
export default function Tabs() {
  return (
    <>
      <section className="tabs">
        <div className="border"></div>
        <div className="tabs-names">
          <div className="tabs-individual">
            <button className="tabs-button">Home</button>
          </div>
          <div className="tabs-individual">
            <button className="tabs-button">
              Wholesale - Catalog <DownArrow weight="10" height="10" />
            </button>
          </div>
          <div className="tabs-individual">
            <button className="tabs-button">
              Women <DownArrow weight="10" height="10" />
            </button>
          </div>
          <div className="tabs-individual">
            <button className="tabs-button">
              Kids <DownArrow weight="10" height="10" />
            </button>
          </div>
          <div className="tabs-individual">
            <button className="tabs-button">
              Men <DownArrow weight="10" height="10" />
            </button>
          </div>
          <div className="tabs-individual">
            <button className="tabs-button">
              Jewellery <DownArrow weight="10" height="10" />
            </button>
          </div>
          <div className="tabs-individual">
            <button className="tabs-button">
              Home Furnishing <DownArrow weight="10" height="10" />
            </button>
          </div>
          <div className="tabs-individual">
            <button className="tabs-button">
              Videos <DownArrow weight="10" height="10" />
            </button>
          </div>
          <div className="tabs-individual">
            <button className="tabs-button">
              Offer <DownArrow weight="10" height="10" />
            </button>
          </div>
          <div className="tabs-individual">
            <button className="tabs-button">
              Brand <DownArrow weight="10" height="10" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
