import React, { Fragment, useState } from "react";
import Carousel from "react-elastic-carousel";
import "../../style/carosuel.css";
import { RecomendedData } from "../utill/ServiceData";
import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

const RecomendedSewa = ({ title }) => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div
            class="col-md-6 col-md-offset-3 text-center colorlib-heading"
            style={{ margin: "auto", overflow: "hidden" }}
          >
            <h2>
              <span>{title}</span>
            </h2>
          </div>
        </div>
        <div className="cara">
          <div className="carousel-wrapper"></div>
          <Carousel
            breakPoints={breakPoints}
            enableAutoPlay
            autoPlaySpeed={50000}
          >
            {RecomendedData.map((data) => {
              return (
                <div style={{ marginLeft: "10%" }}>
                  <img
                    src={data.image}
                    alt="data"
                    width="100%"
                    height="250px"
                  />
                  <div className="mt-2 ">
                    <Link to="/service">
                      <h6 id="des">{data.title}</h6>
                    </Link>{" "}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
};
export default RecomendedSewa;
