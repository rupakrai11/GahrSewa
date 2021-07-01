import React, { useState } from "react";
import GharSewa from "../../images/gharsewa.png";
import { useHistory } from "react-router-dom";
import "../../style/registration.css";
import "../../style/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";

const Registration = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    email: "",
    address: "",
    occupation: "",
    password: "",
    password2: "",
  });
  const option = [
    {
      label: "Electrician",
      value: "electrician",
    },
    {
      label: "Beauticial",
      value: "beauticial",
    },
    {
      label: "House Maid",
      value: "house Maid",
    },
  ];

  const { username, email, address, occupation, password, password2 } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", email);
    history.push("/login");
    console.log("register successfully");
  };
  return (
    <div>
      <div className="wrapper">
        <div className="inner">
          <div className="image-holder">
            <img src={GharSewa} alt="Ghar sewa " />
          </div>
          <form onSubmit={onSubmit}>
            <h3>Be Our Professional</h3>
            <div className="form-group"></div>
            <div className="form-wrapper">
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Username"
                className="form-control"
                onChange={onChange}
                required
              />
              <i className="zmdi zmdi-account"></i>
            </div>
            <div className="form-wrapper">
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Email Address"
                className="form-control"
                onChange={onChange}
                required
              />
              <i className="zmdi zmdi-email"></i>
            </div>
            <div className="form-wrapper">
              <input
                type="text"
                name="address"
                value={address}
                placeholder=" Address"
                className="form-control"
                onChange={onChange}
                required
              />
              <i className="zmdi zmdi-email"></i>
            </div>
            <div className="form-wrapper">
              <select
                name="occupation"
                className="form-control"
                name="occupation"
                required
                onChange={onChange}
                value={occupation}
              >
                <option value="" disabled>
                  Occupation
                </option>
                {option.map((data, id) => {
                  return (
                    <option key={id} value={data.value}>
                      {data.label}
                    </option>
                  );
                })}
              </select>
              <i
                className="zmdi zmdi-caret-down"
                style={{ fontSize: "17px" }}
              ></i>
            </div>
            <div className="form-wrapper">
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                className="form-control"
                onChange={onChange}
                required
              />
              <i className="zmdi zmdi-lock"></i>
            </div>
            <div className="form-wrapper">
              <input
                type="password"
                name="password2"
                value={password2}
                placeholder="Confirm Password"
                className="form-control"
                onChange={onChange}
                required
              />
              <i className="zmdi zmdi-lock"></i>
            </div>
            <input id="submitbtn" type="submit" name="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Registration;
