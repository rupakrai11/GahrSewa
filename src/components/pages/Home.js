import React from "react";
import Footer from "../common/Footer";
import Carousel from "../home/Carousel";
import Banner from "./../home/Banner";
import Navbar from "./../common/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
