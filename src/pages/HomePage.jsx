import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import WorkersList from "../components/WorkersList";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WorkersList />
      <Footer />
    </div>
  );
};

export default HomePage;
