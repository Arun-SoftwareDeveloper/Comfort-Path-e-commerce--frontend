import React from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavBar";
import AboutContianer from "../Components/AboutContainer";
import MainContainerCourosel from "../Components/MainContainerCourosel";
import BestSellers from "./BestSellers";
import AboutUs from "../Components/AboutUs";
import Contact from "./Contact";
import FooterContainer from "../Components/FooterContainer";

function Home() {
  return (
    <div className="contianer mt-4">
      <NavigationBar />
      <AboutContianer />
      <MainContainerCourosel />
      <AboutUs />
      <BestSellers />
      <Contact />
      <FooterContainer />
    </div>
  );
}

export default Home;
