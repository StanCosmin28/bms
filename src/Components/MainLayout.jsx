import Navbar from "./Navbar";
import Footer from "./Footer";
import NewsletterSection from "./NewsLetterSection";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      {/* <NewsletterSection /> */}
      <Footer />
    </div>
  );
}
