import React from "react";
import PlumberData from "./../service/Plumber";
import Navbar from "./../common/Navbar";
import Banner from "./../home/Banner";
import Footer from "./../common/Footer";
import LondryData from "./../service/Londry";
import HairAndBeutyData from "./../service/HairAndBeautyData";

const Service = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <PlumberData title="Our Plumber" />
      <LondryData title="Londry Data" />
      <HairAndBeutyData title="Health And Beauty Data" />
      <Footer />
    </div>
  );
};

export default Service;
