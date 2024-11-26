import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/Featuredproducts';
import SpecialOfferSection from './components/SpecialOfferSection';
import Footer from './components/Footer';
import DynamicSection from './components/DynamicSection';
import agingcream from './assets/agingcream.png'
import beautycream from './assets/beautycream.png'
import AboutUs from './components/AboutUs';
import PremiumProductsSection from './components/PremiuimProductSection';

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <HeroSection />
      <FeaturedProducts />
      <SpecialOfferSection />
      <DynamicSection image={agingcream}
        contentSide="right" // Can be "left" or "right"
        content={{
          type: "text",
          title: "Enhance Your Natural Radiance",
          description: (
            <>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </p>
              <p>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of 
              </p>
              
            </>
          ),
        }} />
        <PremiumProductsSection/>
        <DynamicSection image={beautycream}
        contentSide="left" // Can be "left" or "right"
        content={{
          type: "form",
        }} />
      <AboutUs />
      
      <Footer />
    </>
  );
}

export default App;
