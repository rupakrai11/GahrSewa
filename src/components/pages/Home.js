import React from "react";
import Footer from "../common/Footer";
import Carousel from "../home/Carousel";
import ElasticCarosuel from "../home/RecomendedSewa";
import Banner from "./../home/Banner";
import Navbar from "./../common/Navbar";
import RecomendedSewa from "../home/RecomendedSewa";
import HealthBeautySewa from "./../home/HealthBeautySewa";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <RecomendedSewa title="Recommended Sewa" />
      <HealthBeautySewa title="Health And Beauty Sewa" />
      <Footer />
    </div>
  );
};

export default Home;
