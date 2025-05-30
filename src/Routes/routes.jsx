import HeaderCarousel from "../Components/HeaderCarousel";
import TechSection from "../Components/TechSection";
import CustomTechGrid from "../Components/CustomTechGrid";
import PostsSection from "../Components/PostsSection";
import HighlightedBlogPost from "../Components/HighlightedBlogPost";
import Banner from "../Components/Banner";
import BlogPost from "../Components/BlogPost";

const routes = [
  {
    path: "/bms",
    element: (
      <div>
        <HeaderCarousel />
        <CustomTechGrid />
        <Banner />
        <TechSection />
        <HighlightedBlogPost />
        <PostsSection />
        <HighlightedBlogPost imageSrc="https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    ),
  },
  {
    path: "/bms/domenii",
    element: (
      <div className="mt-16">
        <PostsSection />
      </div>
    ),
  },
  {
    path: "/bms/domenii/:id",
    element: (
      <div className="mt-16">
        <BlogPost />
        <TechSection />
      </div>
    ),
  },
  {
    path: "/bms/hot-feed",
    element: (
      <div className="mt-16">
        <PostsSection />
      </div>
    ),
  },
  {
    path: "/bms/hot-feed/:id",
    element: (
      <div>
        <BlogPost />
        <TechSection />
      </div>
    ),
  },
];

export default routes;
