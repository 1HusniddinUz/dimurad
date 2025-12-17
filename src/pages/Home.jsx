import React from "react";
import HeroSection from "../components/sections/HeroSection";
import LookbookPeek from "../components/sections/LookbookPeek";
import AppointmentCTA from "../components/sections/AppointmentCTA";

const Home = () => {
  return (
    <div id="Home">
      <HeroSection />
      <LookbookPeek />
      <AppointmentCTA />
    </div>
  );
};

export default Home;
