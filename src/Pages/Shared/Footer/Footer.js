import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section>
      <div className="footer">
        <div className="row">
          <div className="col">
          <i class="fab fa-apple fa-3x"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              optio facilis a eveniet magnam sequi veniam ipsam error iusto
              tenetur, possimus voluptatibus dignissimos, molestiae dicta
              quaerat animi natus ad quibusdam iste repellendus! Quasi unde
              maiores, neque culpa deleniti quibusdam illum.
            </p>
          </div>
          <div className="col">
                <h3>Office <div className="underline"><span></span></div> </h3>
                <p>ITPL Road</p>
                <p>Whitefield, Banglore</p>
                <p>Karnataka, PIN 560066, India</p>
                <p className="email-id">kongkon@gmail.com</p>
            </div>
          <div className="col">
            <h3>
              Links{" "}
              <div className="underline">
                <span></span>
              </div>{" "}
            </h3>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Fratures</a>
              </li>
              <li>
                <a href="">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>
              Newsletter{" "}
              <div className="underline">
                <span></span>
              </div>{" "}
            </h3>
            <form>
              <i className="far fa-envelope fa-2x"></i>
              <input type="email" placeholder="Enter your email id" required />
              <button type="submit">
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>
            <div className="social-icons">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-whatsapp"></i>
              <i className="fab fa-pinterest"></i>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">Last Update © 2022 By Kongkon - All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
