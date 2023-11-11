import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Popup from "../Popup/Popup";
import Price from "../Price/Price";
import Slider from "../Slider/Slider";
import { useState } from 'react';


function App() {
  const[popupOpen, setPopupOpen] = useState(false)

  function handlePopupOpen(){
    setPopupOpen(true);
    console.log(popupOpen);
  }

 
  return (
    <div className="App">
      <div className="container">
        <Header />
        <About onClickButton={handlePopupOpen} />
        <Slider />
        <Price />
        <Footer />
        <Popup isOpen={popupOpen} />
      </div>
    </div>
  );
}

export default App;
