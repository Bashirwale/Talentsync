import BlogPost from "./components/BlogPost";
import CTASection from "./components/CTASection";
import FaqsSection from "./components/FaqsSection";
import FeaturesSection from "./components/FeaturesSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import SponsorsSection from "./components/SponsorsSection";

function App() {
  return (
    <div className="px-8 py-4 md:px-14 lg:px-[96px] lg:py-[24px] font-[inter]">
      <NavBar />
      <HeroSection />
      <SponsorsSection />
      <FeaturesSection />
      <BlogPost />
      <FaqsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}

export default App;
