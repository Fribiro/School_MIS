import React from "react";
import "./footer.css";
import 'font-awesome/css/font-awesome.min.css';
 

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <h3>Akeo International School</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa
            nostrum libero reprehenderit eligendi, provident nam totam facere
            error excepturi deserunt quod debitis, quas voluptatibus? Porro est
            culpa sit modi!
          </p>
          <div className="socials">
            <a href="#/">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#/">
              <i className="fa fa-twitter"></i>
            </a>

            <a href="#/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#/">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="#/">
              <i className="fa fa-tumblr"></i>
            </a>
          </div>
        </div>
        <ul className="footer-right">
          <li>
            <h2>Quick Access</h2>
            <ul className="box">
              <li>
                <a href="#/">Home</a>
              </li>
              <li>
                <a href="#/">About Us</a>
              </li>
              <li>
                <a href="#/">Theme DEsign</a>
              </li>
              <li>
                <a href="#/">Academics</a>
              </li>
              <li>
                <a href="#/">Events</a>
              </li>
              <li>
                <a href="#/">Contact Us</a>
              </li>
            </ul>
          </li>
          <li className="features">
            <h2>Our School</h2>
            <ul className="box">
              <li>
                <a href="#/">School Tour</a>
              </li>
              <li>
                <a href="#/">Facilities</a>
              </li>
              <li>
                <a href="#/">Facuity and Staff</a>
              </li>
              <li>
                <a href="#/">Newsletter</a>
              </li>
              <li>
                <a href="#/">Gallery</a>
              </li>
            </ul>
          </li>
          <li>
            <h2>Address</h2>
            <ul className="box">
              <li>
                <a href="#/">165, Westlands Lane</a>
              </li>
              <li>
                <a href="#/">Westpoint 3PS, Mpaka Road</a>
              </li>
              <li>
                <a href="#/">Nairobi,Kenya</a>
              </li>
              <li>
                <a href="#/">+2547 34566, +2547 344 44</a>
              </li>
              <li>
                <a href="#/">info@akeoscholl.com</a>
              </li>
             
            </ul>
          </li>
        </ul>

        <div className="footer-bottom">
          <p>All Rights Reserved by &copy:conceptial 2022</p>
        </div>
      </footer>
    </>
  );
};
