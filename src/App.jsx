import Header from "./Components/Header/Header";
import LogoAndSearch from "./Components/LogoAndSearch/LogoAndSearch";
import Tabs from "./Components/Tabs/Tabs";
import Catalog from "./Components/Catalog/Catalog";
import Info from "./Components/Info/Info";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <LogoAndSearch />
      <Tabs />
      <Catalog />
      <Info />
      <Footer />
    </>
  );
}

export default App;
