import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const name = localStorage.getItem("user");

  return (
    <div>
      <h2>
        Welcom {""}
        {name}
        <br />
        <Link to="/">Back To Home</Link>
      </h2>
    </div>
  );
};

export default Dashboard;
