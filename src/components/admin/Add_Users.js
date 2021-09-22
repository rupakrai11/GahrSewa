import React from "react";
import { Fragment } from "react";
import "../../style/dashboard.css";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
// import AdminHeader from "./AdminHeader";
// import FilterBregistration from "./../../context/birthregistration/FilterBregistration";

const Add_Users = () => {
  return (
    <Fragment>
      <div className="dashboard-container">
        <div className="container-fluid ">
          <div className="row">
            <Sidebar />
            <div className="col-9 data">
              {/* <FilterBregistration /> */}
              <AdminHeader />

              {/* <form>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Email address</label>
                  <input
                    type="email"
                    class="form-control1"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Example select</label>
                  <select class="form-control1" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect2">
                    Example multiple select
                  </label>
                  <select
                    multiple
                    class="form-control"
                    id="exampleFormControlSelect2"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Example textarea
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Add_Users;
