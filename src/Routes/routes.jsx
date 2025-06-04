import HeaderCarousel from "../Components/HeaderCarousel";
import HomeHotFeed from "../Components/HomeHotFeed";
import CustomTechGrid from "../Components/CustomTechGrid";
// import PostsSection from "../Components/DomainsSection";
import HighlightedBlogPost from "../Components/HighlightedBlogPost";
import Banner from "../Components/Banner";
import DomainsBlogPost from "../Components/DomainsBlogPost";
import HotFeedBlogPost from "../Components/HotFeedBlogPost";
import HotFeed from "../Components/HotFeed";
import articles from "../Posts/domainsData";
import DomainsSection from "../Components/DomainsSection";
import HomeDomainsSection from "../Components/HomeDomainsSection";
import PartnersSection from "../Components/PartnersSection";

const data = articles.slice(0, 2);
const routes = [
  {
    path: "/bms",
    element: (
      <div>
        <HeaderCarousel />
        <CustomTechGrid />
        <Banner />
        <HomeHotFeed />
        <HighlightedBlogPost {...data[0]} />
        <HomeDomainsSection />
        <HighlightedBlogPost {...data[1]} />
      </div>
    ),
  },
  {
    path: "/bms/domenii",
    element: (
      <div className="mt-16">
        <DomainsSection />
      </div>
    ),
  },
  {
    path: "/bms/domenii/:id",
    element: (
      <div className="mt-16">
        <DomainsBlogPost />
        <HomeHotFeed />
      </div>
    ),
  },
  {
    path: "/bms/hot-feed",
    element: (
      <div className="mt-16">
        <HotFeed />
      </div>
    ),
  },
  {
    path: "/bms/hot-feed/:id",
    element: (
      <div className="mt-16">
        <HotFeedBlogPost />
        <HomeHotFeed />
      </div>
    ),
  },
  {
    path: "/bms/parteneri",
    element: (
      <div className="mt-16">
        <PartnersSection />
      </div>
    ),
  },
];

export default routes;
