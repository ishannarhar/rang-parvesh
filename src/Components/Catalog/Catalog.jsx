import LeftArrow from "../../Icons/LeftArrow";
import RightArrow from "../../Icons/RightArrow";
import myphoto from "../../assets/mannequin.jpg";
import "./Catalog.css";
export default function Catalog() {
  return (
    <>
      <section className="catalog">
        <div className="catalog-header">
          <div className="catalog-heading">
            <h2>CATALOGS</h2>
          </div>
          <div className="catalog-view">
            <button>VIEW ALL</button>
            <div className="catalog-arrows">
              <button className="catalog-buttons">
                <LeftArrow />
              </button>
              <button className="catalog-buttons">
                <RightArrow />
              </button>
            </div>
          </div>
        </div>
        <div className="catalog-images">
          <div className="catalog-image-container">
            <img src={myphoto} width="170" height="240" alt="my photo" />
            <h3>
              <b>HEAVY CHINON</b>
            </h3>
            <div className="catalog-image-content">
              <h3>1840 Rs</h3>
              <h3>PCs:4</h3>
            </div>
          </div>
          <div className="catalog-image-container">
            <img src={myphoto} width="170" height="240" alt="my photo" />
            <h3>
              <b>HEAVY CHINON</b>
            </h3>
            <div className="catalog-image-content">
              <h3>1840 Rs</h3>
              <h3>PCs:4</h3>
            </div>
          </div>
          <div className="catalog-image-container">
            <img src={myphoto} width="170" height="240" alt="my photo" />
            <h3>
              <b>HEAVY CHINON</b>
            </h3>
            <div className="catalog-image-content">
              <h3>1840 Rs</h3>
              <h3>PCs:4</h3>
            </div>
          </div>
          <div className="catalog-image-container">
            <img src={myphoto} width="170" height="240" alt="my photo" />
            <h3>
              <b>HEAVY CHINON</b>
            </h3>
            <div className="catalog-image-content">
              <h3>1840 Rs</h3>
              <h3>PCs:4</h3>
            </div>
          </div>
          <div className="catalog-image-container">
            <img src={myphoto} width="170" height="240" alt="my photo" />
            <h3>
              <b>HEAVY CHINON</b>
            </h3>
            <div className="catalog-image-content">
              <h3>1840 Rs</h3>
              <h3>PCs:4</h3>
            </div>
          </div>
          <div className="catalog-image-container">
            <img src={myphoto} width="170" height="240" alt="my photo" />
            <h3>
              <b>HEAVY CHINON</b>
            </h3>
            <div className="catalog-image-content">
              <h3>1840 Rs</h3>
              <h3>PCs:4</h3>
            </div>
          </div>
          <div className="catalog-image-container">
            <img src={myphoto} width="170" height="240" alt="my photo" />
            <h3>
              <b>HEAVY CHINON</b>
            </h3>
            <div className="catalog-image-content">
              <h3>1840 Rs</h3>
              <h3>PCs:4</h3>
            </div>
          </div>
          <div className="catalog-image-container">
            <img src={myphoto} width="170" height="240" alt="my photo" />
            <h3>
              <b>HEAVY CHINON</b>
            </h3>
            <div className="catalog-image-content">
              <h3>1840 Rs</h3>
              <h3>PCs:4</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
