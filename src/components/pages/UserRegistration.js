import React, { useState } from "react";
import GharSewa from "../../images/gharsewa.png";
import { useHistory } from "react-router-dom";
import "../../style/registration.css";
import "../../style/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";

const UserRegistration = () => {
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
    history.push("/");
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
            <h3>Get Your Order</h3>
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
              <i className="fa fa-address-book"></i>
            </div>

            <div className="form-wrapper">
              <input
                type="number"
                name="password"
                value={password}
                placeholder="Phone Number"
                className="form-control"
                onChange={onChange}
                required
              />
              <i className="fa fa-phone"></i>
            </div>

            <input id="submitbtn" type="submit" name="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserRegistration;
