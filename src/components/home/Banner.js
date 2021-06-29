import React, { Fragment } from "react";
import house_hold from "../../images/house_hold.jpg";
import plumber from "../../images/plumberi.jpg";

const Banner = () => {
  return (
    <Fragment>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
        style={{ marginBottom: "20px" }}
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
            style={{
              borderRadius: "50%",
              height: "12px",
              width: "12px",
            }}
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="1"
            style={{ borderRadius: "50%", height: "12px", width: "12px" }}
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={house_hold}
              alt="First slide"
              height="580px"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={plumber}
              alt="Second slide"
              height="580px"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
