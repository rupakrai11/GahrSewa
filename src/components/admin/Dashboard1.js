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
              <div className="data-today mt-5">
                <div className="col-4">
                  <div className="total-order">
                    <div>
                      <h5>Total Order Today: 300</h5>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="total-confirmed">
                    <div>
                      <h5>
                        Order Confirmed Services :
                        <span className="data-nbr">100 </span>{" "}
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="total-confirmed">
                    <div>
                      <h5>
                        Order Confirmed Services :
                        <span className="data-nbr">100 </span>{" "}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <table class="table mt-5">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>

              <table class="table">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
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
