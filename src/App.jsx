import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderCarousel from "./Components/HeaderCarousel";
import Navbar from "./Components/Navbar";
import TechSection from "./Components/TechSection";
import CustomTechGrid from "./Components/CustomTechGrid";
// import PromotionalSection from "./Components/PromotionalSection";
import PostsSection from "./Components/PostsSection";
import HighlightedBlogPost from "./Components/HighlightedBlogPost";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import NewsletterSection from "./Components/NewsLetterSection";
import BlogPost from "./Components/BlogPost";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/bms"
          element={
            <>
              <HeaderCarousel />
              <CustomTechGrid />
              <Banner />
              <TechSection />
              <HighlightedBlogPost />
              <PostsSection />
              <HighlightedBlogPost imageSrc="https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              {/* <PromotionalSection /> */}
            </>
          }
        />
        <Route
          path="/bms/domenii"
          element={
            <>
              <div className="mt-16">
                {/* <BlogPost /> */}
                <PostsSection />
              </div>
            </>
          }
        />
        <Route
          path="/bms/domenii/:id"
          element={
            <>
              <div className="mt-16">
                <BlogPost />
                <TechSection />
              </div>
            </>
          }
        />
        <Route
          path="/bms/hot-feed"
          element={
            <>
              <div className="mt-16">
                {/* <BlogPost /> */}
                <PostsSection />
              </div>
            </>
          }
        />
        <Route
          path="/bms/hot-feed/:id"
          element={
            <>
              <BlogPost />
              <TechSection />
            </>
          }
        />
      </Routes>
      <NewsletterSection />
      <Footer />
    </Router>
  );
}

export default App;
