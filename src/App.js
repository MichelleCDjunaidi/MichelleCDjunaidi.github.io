import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <BrowserRouter>
      <Menu isMenuOpen={isMenuOpen} />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Intro />
      <About />
      <Service />
      <Portfolio />
      <Contacts />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
