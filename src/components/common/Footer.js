import React, { Fragment } from "react";
import "../../style/footer.css";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-contianer">
        <div className=" footer-wrapper">
          <div className="about">
            <ul>
              <li>
                <h5>About "Ghar Sewa"</h5>
              </li>
              <li>
                <p>
                  Full implementation of the latest innovation! "Ghar Sewa" has
                  now made ease to caontact<br></br> the specilized work person
                  according to the requirement
                </p>
              </li>
            </ul>

            <div className="social-links">
              <ul>
                <li>
                  <a href="">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-globe" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="client">
            <ul>
              <li>
                <h5>Our Clients</h5>
              </li>
              <li>Glow Beauty Parlor</li>
              <li>Electricity Private Limited</li>
              <li>Furniture Design Store</li>
              <li>Repairment and Exchange Junction</li>
            </ul>
          </div>
          <div className="contact">
            <ul>
              <li>
                <h5>Contact</h5>
              </li>
              <li>
                <a href="">Kamal Pokhari,Kathmandu</a>
              </li>
              <li>
                <a href="">gahrsewainfo@gmail.com</a>
              </li>
              <li>
                <a href="">GharSewa.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy">
          <p>
            Copyright &nbsp;
            <i class="fa fa-copyright" aria-hidden="true"></i> &nbsp;2021 all
            rights reserved | Ghar Sewa
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
