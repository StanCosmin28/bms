import "./App.css";
import HeaderCarousel from "./Components/HeaderCarousel";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <header className="flex justify-center text-center items-center">
        <h1 className="text-center">BMS ROMANIA </h1>
      </header>
      <Navbar />
      <HeaderCarousel />
    </>
  );
}

export default App;
