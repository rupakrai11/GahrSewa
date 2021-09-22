import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../style/dashboard.css";

const AdminHeader = () => {
  //   const { logout, user } = authContext;
  const history = useHistory();

  const OnLogout = () => {
    // logout();
    history.push("/");
    localStorage.clear();
  };
  return (
    <div>
      <div className="data-top d-flex justify-content-between">
        <div className="data-top-left">
          <input
            type="text"
            placeholder="....Search Data"
            style={{ border: "2px solid #000" }}
          />
        </div>
        <div onClick={OnLogout} style={{ cursor: "pointer" }}>
          <i className="fa fa-sign-out" aria-hidden="true" />
          <span className="hide-sm">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
