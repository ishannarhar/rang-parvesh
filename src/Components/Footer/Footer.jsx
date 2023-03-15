import "./Footer.css";
export default function Footer() {
  return (
    <>
      <section className="footer">
        <div>
          &#169; 2019-{new Date().getFullYear()} All Rights Reserved | Powered
          By Rang Parvesh
        </div>
      </section>
    </>
  );
}
