import React from "react";
import { Fragment } from "react";
import "../../style/dashboard.css";
import AdminHeader from "./AdminHeader";
import Sidebar from "./Sidebar";
// import AdminHeader from "./AdminHeader";
// import FilterBregistration from "./../../context/birthregistration/FilterBregistration";

const Dashboard1 = () => {
  return (
    <Fragment>
      <div className="dashboard-container">
        <div className="container-fluid ">
          <div className="row">
            <Sidebar />
            <div className="col-9 data">
              {/* <FilterBregistration /> */}
              <AdminHeader />

              <table class="table mt-2">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">S.N</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Skills</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Ramesh Karki</td>
                    <td>Kathmandu,Kalanki</td>
                    <td>Plumber</td>
                    <td>9808654754</td>
                    <td>
                      <a className="btn btn-primary pl-3 pr-3">Edit</a>
                      &nbsp;
                      <a className="btn btn-danger pl-3 pr-3">Delete</a>
                      &nbsp;
                      <a className="btn btn-info pl-3 pr-3"> Details</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Umesh Shrestha</td>
                    <td>Kathmandu,Pepsicola</td>
                    <td>Electrician</td>
                    <td>9808654754</td>
                    <td>
                      <a className="btn btn-primary pl-3 pr-3">Edit</a>
                      &nbsp;&nbsp;
                      <a className="btn btn-danger pl-3 pr-3">Delete</a>
                      &nbsp;&nbsp;
                      <a className="btn btn-info pl-3 pr-3">Details</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Ram Kuram Tamang </td>
                    <td>Kathmandu,jaributi</td>
                    <td>Baby Sitter</td>
                    <td>9808654754</td>
                    <td>
                      <a className="btn btn-primary pl-3 pr-3">Edit</a>
                      &nbsp;&nbsp;
                      <a className="btn btn-danger pl-3 pr-3">Delete</a>
                      &nbsp;&nbsp;
                      <a className="btn btn-info pl-3 pr-3">Details</a>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">4</th>
                    <td>Man Bahadur Shrestha </td>
                    <td>Kathmandu,Kadaghari</td>
                    <td>House Keeper</td>
                    <td>98086547552</td>
                    <td>
                      <a className="btn btn-primary pl-3 pr-3">Edit</a>
                      &nbsp;&nbsp;
                      <a className="btn btn-danger pl-3 pr-3">Delete</a>
                      &nbsp;&nbsp;
                      <a className="btn btn-info pl-3 pr-3">Details</a>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">4</th>
                    <td>Bikki Gurung </td>
                    <td>Lalitpur,Lagankehl</td>
                    <td> Electrician</td>
                    <td>98086547552</td>
                    <td>
                      <a className="btn btn-primary pl-3 pr-3">Edit</a>
                      &nbsp;&nbsp;
                      <a className="btn btn-danger pl-3 pr-3">Delete</a>
                      &nbsp;&nbsp;
                      <a className="btn btn-info pl-3 pr-3">Details</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard1;
