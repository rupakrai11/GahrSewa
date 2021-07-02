import React, { Fragment, useState } from "react";
import Carousel from "react-elastic-carousel";
import "../../style/carosuel.css";
import { RepaireData } from "../utill/ServiceData";
import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];
const RepaireSewa = ({ title }) => {
  return (
    <Fragment>
      <div className="container-fluid" style={{ marginTop: "50px" }}>
        <div class="text-center colorlib-heading">
          <h2>
            <span>{title}</span>
          </h2>
          <div className="cara">
            <div className="carousel-wrapper"></div>
            <Carousel
              breakPoints={breakPoints}
              enableAutoPlay
              autoPlaySpeed={50000}
            >
              {RepaireData.map((data) => {
                return (
                  <div style={{ marginLeft: "10%" }}>
                    <img
                      src={data.image}
                      alt="data"
                      width="100%"
                      height="250px"
                    />
                    <div className="mt-2 ">
                      <Link to="/new">
                        <h6 id="des">{data.title}</h6>
                      </Link>{" "}
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RepaireSewa;
