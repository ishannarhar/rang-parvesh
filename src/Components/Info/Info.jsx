import QuickLinks from "./QuickLinks/QuickLinks";
import MyAccount from "./MyAccount/MyAccount";
import ContactDetails from "./ContactDetails/ContactDetails";
import GetInTouch from "./GetInTouch/GetInTouch";
import "./Info.css";
export default function Info() {
  return (
    <>
      <section className="info">
        <QuickLinks />
        <MyAccount />
        <ContactDetails />
        <GetInTouch />
      </section>
    </>
  );
}
