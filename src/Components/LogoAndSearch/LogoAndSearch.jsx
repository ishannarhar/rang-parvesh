import "./LogoAndSearch.css";
import myLogo from "../../assets/logo.jpg";
export default function LogoAndSearch() {
  return (
    <>
      <section className="search">
        <div>
          <img src={myLogo} width="40" height="40" alt="My Logo" />
        </div>
        <div className="search-box">
          <div>
            <label>All Categories</label>
            <select>
              <option></option>
            </select>
          </div>
          <input placeholder="Search" />
        </div>
      </section>
    </>
  );
}
