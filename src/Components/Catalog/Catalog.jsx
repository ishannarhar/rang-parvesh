import { ItemTemplate } from "./ItemTemplate/ItemTemplate";
import myphoto from "../../assets/mannequin.jpg";
import LeftArrow from "../../Icons/LeftArrow";
import RightArrow from "../../Icons/RightArrow";
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
            <button className="catalog-view-button">VIEW ALL</button>
          </div>
        </div>
        <div className="catalog-images">
          <ItemTemplate
            img={myphoto}
            name="GANGA RUBI COTTON SALWAR"
            price="42"
            stockOption="INSTOCK"
          />
          <ItemTemplate
            img={myphoto}
            name="SAADGI KANTHA CAMBRIC SAREE"
            price="42"
            stockOption="INSTOCK"
          />
          <ItemTemplate
            img={myphoto}
            name="JAY VIJAY CLAUDIA LINEN SAREE"
            price="42"
            stockOption="INSTOCK"
          />
          <ItemTemplate
            img={myphoto}
            name="HEAVY GEORGETTE SALWAR SUIT"
            price="42"
            stockOption="INSTOCK"
          />
        </div>
        <div className="catalog-arrow-left">
          <LeftArrow />
        </div>
        <div className="catalog-arrow-right">
          <RightArrow />
        </div>
      </section>
    </>
  );
}
