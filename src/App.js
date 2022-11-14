import "./App.scss";
import "animate.css";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Popup from "./components/popup/Popup";
import { useState } from "react";

function App() {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const openPopup = () => {
    setOverlayVisible(true);
  };

  const closePopup = () => {
    setOverlayVisible(false);
  };
  return (
    <div className="App">
      {overlayVisible && <Popup closePopup={closePopup} />}
      <Nav openPopup={openPopup} />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
