import "./App.css";
import HeaderCarousel from "./Components/HeaderCarousel";
import Navbar from "./Components/Navbar";
// import TechSection from "./Components/TechSection";
import CustomTechGrid from "./Components/CustomTechGrid";
// import PromotionalSection from "./Components/PromotionalSection";
// import PostsSection from "./Components/PostsSection";
// import HighlightedBlogPost from "./Components/HighlightedBlogPost";
import Footer from "./Components/Footer";
// import Banner from "./Components/Banner";

function App() {
  return (
    <>
      {/* <header className="flex justify-center text-center items-center">
        <h1 className="text-center">BMS ROMANIA </h1>
      </header> */}
      <Navbar />
      <HeaderCarousel />
      <CustomTechGrid />
      {/* <Banner /> */}
      {/* <TechSection /> */}
      {/* <HighlightedBlogPost /> */}
      {/* <PostsSection /> */}
      {/* <HighlightedBlogPost imageSrc="https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
      {/* <PromotionalSection /> */}
      <Footer />
    </>
  );
}

export default App;
