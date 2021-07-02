import React from "react";

const CaraItem = ({ data: { image, title } }) => {
  return (
    <div>
      <div style={{ marginLeft: "50%" }}>
        <img src={image} alt="data" width="90%" height="300px" />
        <h6>{title}</h6>
      </div>
    </div>
  );
};

export default CaraItem;
