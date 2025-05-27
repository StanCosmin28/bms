import "./App.css";
import HeaderCarousel from "./Components/HeaderCarousel";
import Navbar from "./Components/Navbar";
import TechSection from "./Components/TechSection";
import CustomTechGrid from "./Components/CustomTechGrid";

function App() {
  return (
    <>
      <header className="flex justify-center text-center items-center">
        <h1 className="text-center">BMS ROMANIA </h1>
      </header>
      <Navbar />
      <HeaderCarousel />
      <TechSection />
      <CustomTechGrid />
    </>
  );
}

export default App;
