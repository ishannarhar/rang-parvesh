import { useState } from "react";
import "./LogoAndSearch.css";
import myLogo from "../../assets/logo.png";
export default function LogoAndSearch() {
  const initialValues = [
    "All Categories",
    "SALWAR SUITS CATALOGS",
    "SAREES CATALOGS",
    "LEHENGA CHOLI CATALOGS",
    "KURTIS CATALOGS",
    "BOTTOM WEAR LEGGINGS CATALOGS",
    "DRESS MATERIAL CATALOGS",
    "WESTERN WEAR CATALOGS",
    "GOWN CATALOGS",
    "NIGHT WEAR CATALOGS",
    "BLOUSE CATALOGS",
    "DUPATTAS AND SHAWLS CATALOG",
    "SALWAR SUITS",
    "SAREES",
    "LEHENGA CHOLI",
    "KURTI",
    "BLOUSE",
    "DUPATTAS AND SHAWLS",
    "BOTTOM WEAR LEGGINGS",
    "GOWN",
  ];
  const [categories, setCategories] = useState(initialValues);
  return (
    <>
      <section className="search">
        <div className="search-logo">
          <img src={myLogo} width="100" height="40" alt="My Logo" />
        </div>
        <div className="search-box">
          <select className="search-select">
            {categories.map((category) => {
              return <option key={crypto.randomUUID()}>{category}</option>;
            })}
          </select>
          <input className="search-input" placeholder="Search" type="text" />
        </div>
      </section>
    </>
  );
}
