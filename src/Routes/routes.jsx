import HeaderCarousel from "../Components/HeaderCarousel";
import TechSection from "../Components/TechSection";
import CustomTechGrid from "../Components/CustomTechGrid";
import PostsSection from "../Components/PostsSection";
import HighlightedBlogPost from "../Components/HighlightedBlogPost";
import Banner from "../Components/Banner";
import DomainsBlogPost from "../Components/DomainsBlogPost";
import HotFeedBlogPost from "../Components/HotFeedBlogPost";
import articles from "../Posts/domainsData";

const data = articles.slice(0, 2);
const routes = [
  {
    path: "/bms",
    element: (
      <div>
        <HeaderCarousel />
        <CustomTechGrid />
        <Banner />
        <TechSection />
        <HighlightedBlogPost {...data[0]} />
        <PostsSection />
        <HighlightedBlogPost {...data[1]} />
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
        <DomainsBlogPost />
        <TechSection />
      </div>
    ),
  },
  {
    path: "/bms/hot-feed",
    element: (
      <div className="mt-16">
        <TechSection />
      </div>
    ),
  },
  {
    path: "/bms/hot-feed/:id",
    element: (
      <div>
        <HotFeedBlogPost />
        <TechSection />
      </div>
    ),
  },
];

export default routes;
