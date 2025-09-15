import NavBar from "./NavBar";
import Header from "./pages/Header";
import ProductSection from "./pages/ProductSection";
import WhyChooseUs from "./pages/WhyChooseUs";
import ModernDesignSection from "./pages/ModernDesignSection";
import PopularProduct from "./pages/PopularProduct";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <ProductSection/>
      <WhyChooseUs/>
      <ModernDesignSection/>
      <PopularProduct/>
      <Testimonials/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default Home;
