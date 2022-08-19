import React from "react";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Header from "./components/Header/Header";
import Contact from "./components/contact/Contact";
import Testimonals from "./components/Testimonals/Testimonals";
import Experinance from "./components/Experinance/Experinance";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experinance />
      <Services />
      <Portfolio />
      <Testimonals />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
