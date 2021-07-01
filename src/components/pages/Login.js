import React, { Fragment, useState } from "react";
import "../../style/login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const [message, setMessage] = useState();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const email1 = localStorage.getItem("user");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    if (email !== email1) {
      setMessage("Error Occured");
    } else {
      history.push("/dashboard");
      console.log("Login successfully");
    }
  };
  return (
    <Fragment>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
            <form onSubmit={onSubmit} className="login100-form validate-form">
              <span className="login100-form-title p-b-33">Login</span>
              {message && (
                <Fragment>
                  <span className="login100-form-title p-b-33">
                    Please Register First
                  </span>
                </Fragment>
              )}
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  value={email}
                  onChange={onChange}
                  placeholder="Email"
                />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div
                className="wrap-input100 rs1 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  placeholder="Password"
                />
                <span className="focus-input100-1"></span>
                <span className="focus-input100-2"></span>
              </div>

              <div className="container-login100-form-btn m-t-20">
                <input
                  id="submitbtn"
                  type="submit"
                  name="submit"
                  value="submit"
                />
              </div>
              <div className="text-center">
                <span className="txt1">Create an account?</span>
                <Link to="/regitration" class="txt2 hov1" target="_blank">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
