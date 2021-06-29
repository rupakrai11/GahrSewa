import React, { Component } from "react";
import Slider from "react-slick";

import PlumberData from "../utill/ServiceData";
export default class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container">
        <h2> Lundry Sewa </h2>
        <Slider {...settings}>
          {PlumberData.map((data) => {
            return (
              <div style={{ marginLeft: "50%" }}>
                <img src={data.image} alt="data" width="90%" height="300px" />
                <h6>{data.title}</h6>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
