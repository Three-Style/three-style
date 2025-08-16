/* eslint-disable jsx-a11y/iframe-has-title */

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

function HomeFooter() {
    const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-dark footer">
        <div className="footer-top py-6">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-4 my-3">
                <div className="pb-3">
                  <img src="assets/images/logo-light.svg" title="" alt="" />
                </div>
                <address className="white-link mb-4">
                  <p className="text-white text-opacity-85 mb-2">
                    XYZ Address
                  </p>
                  <p className="text-white mb-2">
                    <a
                      className="border-bottom border-secondary"
                      href="mailto:support@domain.com"
                    >
                      support@domain.com
                    </a>
                  </p>
                  <p className="text-white mb-2">
                    <a
                      className="border-bottom border-secondary"
                      href="tel:820-885-3321"
                    >
                      820-885-3321
                    </a>
                  </p>
                </address>
                <div className="nav white-link fs-5 social-icon-list">
                  <a className="me-3" href="#">
                    <i className="bi bi-facebook" />
                  </a>
                  <a className="me-3" href="#">
                    <i className="bi bi-twitter" />{" "}
                  </a>
                  <a className="me-3" href="#">
                    <i className="bi bi-instagram" />{" "}
                  </a>
                  <a className="me-3" href="#">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-2 my-3">
                <h6 className="text-white text-uppercase mb-5">Quick Links</h6>
                <ul className="list-unstyled white-link footer-link-1 m-0 ">
                  <li className="pb-2">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="pb-2">
                    <Link to="/shop">Product</Link>
                  </li>
                  <li className="pb-2">
                    <Link to="/support">Help</Link>
                  </li>
                  <li className="pb-2">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="pb-2">
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-2 my-3">
                <h6 className="text-white text-uppercase mb-5">Policies</h6>
                <ul className="list-unstyled white-link footer-link-1 m-0">
                  <li className="pb-2">
                    <Link to="/return-policy">Return Policy</Link>
                  </li>
                  <li className="pb-2">
                    <Link to="/refund-policy">Refund Policy</Link>
                  </li>
                  <li className="pb-2">
                    <Link to="/privacy-policy">Terms of Services</Link>
                  </li>
                  <li className="pb-2">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li className="pb-2">
                    <Link to="/cookie-policy">Cookie Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-4 my-3">
                <h6 className="text-white text-uppercase mb-5">
                  Stay up to date
                </h6>
                <p className="text-white text-opacity-85">
                  Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan.
                </p>
                <form>
                  <div className="d-flex flex-column flex-md-row mb-2">
                    <input
                      type="email"
                      className="form-control me-md-2 mb-2 mb-md-0"
                      placeholder="Enter your username"
                    />
                    <button
                      className="btn btn-primary flex-shrink-0"
                      type="submit"
                    >
                      Get Started
                    </button>
                  </div>
                  <p className="text-white text-opacity-85 m-0">
                    New UI kits or big discounts. Never spam.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom py-3 footer-border-top light small">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center py-1">
                <p className="m-0 text-white text-opacity-85">
                 © {currentYear} Threestyle. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomeFooter;
