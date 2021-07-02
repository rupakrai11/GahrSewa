import React from "react";
import Footer from "../common/Footer";
import Banner from "./../home/Banner";
import Navbar from "./../common/Navbar";
import RecomendedSewa from "../home/RecomendedSewa";
import HealthBeautySewa from "./../home/HealthBeautySewa";
import DesignConstructionSewa from "./../home/DesignConstruction";
import RepaireSewa from "./../home/RepaireSewa";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <RecomendedSewa title="Recommended Sewa" />
      <HealthBeautySewa title="Health And Beauty Sewa" />
      <DesignConstructionSewa title="Design And Construction Sewa" />
      <RepaireSewa title="Repaire Sewa" />
      <Footer />
    </div>
  );
};

export default Home;
