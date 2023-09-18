import About from "../About/About";
import Header from "../Header/Header";
import Price from "../Price/Price";
import Slider from "../Slider/Slider";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <About />
        <Slider />
        <Price />
      </div>
    </div>
  );
}

export default App;
