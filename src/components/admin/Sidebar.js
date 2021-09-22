import React from "react";
import { Fragment } from "react";
import "../../style/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const name = localStorage.getItem("user");
  return (
    <Fragment>
      <div className="col-3 sidebar">
        <div className="left-top p-2 d-flex">
          &nbsp;
          <p className="mt-2" style={{ color: "#fff" }}>
            Welcome {name}
          </p>
        </div>
        <div className="hr mb-3"></div>
        <ul>
          <li>
            <Link
              to="/dashboard1"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              {" "}
              <i className="fa fa-home"></i> &nbsp;&nbsp; Dashboard
            </Link>
          </li>

          <li>
            {" "}
            <Link
              to="/birthregistrationdata"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <i class="fa fa-table" aria-hidden="true"></i>&nbsp;View Users
            </Link>
          </li>
          <Link
            to="/birthregistrationform"
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <li>View Order</li>
          </Link>
          <li>
            <Link
              to="/deathregistrationform"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <i class="fa fa-table" aria-hidden="true"></i>&nbsp;Death
              Registraton Data
            </Link>
          </li>

          <li>
            <Link
              to="/deathregistrationform"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <i class="fa fa-table" aria-hidden="true"></i>&nbsp; Manage users
            </Link>
          </li>
          <li>
            <Link
              to="/deathregistrationform"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <i class="fa fa-table" aria-hidden="true"></i>&nbsp; Manage users
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Sidebar;
