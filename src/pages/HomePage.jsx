import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import CustomerReview from "../components/CustomerReview";
import Stats from "../components/Stats";
import AcMechanic from "../components/AcMechanic";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AcMechanic />
      <Stats />
      <CustomerReview />
      <Footer />
    </div>
  );
};

export default HomePage;
