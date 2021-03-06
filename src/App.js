import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Domain from "./components/Domain/Domain";
import About from "./components/About/About";
import Sponsors from "./components/Sponsors/Sponsors";
import Pricing from "./components/Pricing/Pricing";
import Testimonial from "./components/Testimonials/Testimonial";
import Support from "./components/Support/Support";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Domain />
      <About />
      <Sponsors />
      <Pricing />
      <Testimonial />
      <Support />
      <Blog />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
