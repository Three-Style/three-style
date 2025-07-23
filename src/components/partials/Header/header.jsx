import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useCart } from "../../../context/CartContext";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import MegaMenu from "../../MenuItem";
import LoginModal from "../../popup/login";
window.bootstrap = bootstrap;

function HomeHeader() {
  const { openCart, setCartOpen } = useCart();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const isAuthenticated = !!localStorage.getItem(
    "three_style_user_authorization"
  );

  const closeModal = () => {
    setShowLoginModal(false);
  };

  const handleOpenCart = () => {
    console.log("openCart called");
    setCartOpen(true);
    const cartOffcanvas = document.getElementById("modalMiniCart");
    if (cartOffcanvas && window.bootstrap) {
      const bsOffcanvas =
        window.bootstrap.Offcanvas.getOrCreateInstance(cartOffcanvas);
      bsOffcanvas?.show();
    }
  };

  return (
    <>
      {showLoginModal && <LoginModal onClose={closeModal} />}
      <header className="header-main bg-mode-re header-light fixed-top header-height header-option-1">
        <div className="header-top header-border-bottom small bg-black small offer-slider-main-wrapper">
          <div className="d-flex justify-content-between align-items-center">
            <div className="slider">
              <div className="slide-track">
                <div className="slide text-white bg-black text-sm">
                  Sign Up for 10% off your first order*
                </div>
                <div className="slide text-white bg-black text-sm">
                  Sign Up for 10% off your first order*
                </div>
                <div className="slide text-white bg-black text-sm">
                  Sign Up for 10% off your first order*
                </div>
                <div className="slide text-white bg-black text-sm">
                  Sign Up for 10% off your first order*
                </div>
                <div className="slide text-white bg-black text-sm">
                  Sign Up for 10% off your first order*
                </div>
                <div className="slide text-white bg-black text-sm">
                  Sign Up for 10% off your first order*
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header Top */}
        {/* End Header Top */}
        <nav className="navbar navbar-expand-lg navbar-light d-none d-lg-flex">
          <div className="container">
            {/* Logo */}{" "}
            <Link className="navbar-brand" to={"/"}>
              <img
                className="logo-dark"
                src="assets/images/logo.svg"
                title=""
                alt=""
              />{" "}
              <img
                className="logo-light"
                src="assets/images/logo-light.svg"
                title=""
                alt=""
              />{" "}
            </Link>
            {/* Logo */}
            {/* Menu */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>{" "}
                  {/* <label className="px-dropdown-toggle mob-menu" />
                  <div className="dropdown-menu dropdown-mega-menu py-0">
                    <div className="container p-3 p-lg-4">
                      <div className="row gy-4">
                        <div className="col-6 col-md-3 col-xl-2">
                          <h6 className="sm-title-02 mb-3 fw-500">
                            Home Options
                          </h6>
                          <ul className="list-unstyled link-list-style-02 m-0">
                            <li>
                              <Link to="../home/index.html">Home Option 1</Link>
                            </li>
                            <li>
                              <a href="../home/index-02.html">Home Option 2</a>
                            </li>
                            <li>
                              <a href="../home/index-03.html">Home Option 3</a>
                            </li>
                            <li>
                              <a href="../home/index-04.html">Home Option 4</a>
                            </li>
                            <li>
                              <a href="../home/index-05.html">Home Option 5</a>
                            </li>
                            <li>
                              <a href="../home/index-06.html">Home Option 6</a>
                            </li>
                            <li>
                              <a href="../home/index-07.html">Home Option 7</a>
                            </li>
                            <li>
                              <a href="../home/index-08.html">Home Option 8</a>
                            </li>
                            <li>
                              <a href="../home/index-09.html">Home Option 9</a>{" "}
                              <span className="menu-label">New</span>
                            </li>
                            <li>
                              <a href="../home/index-10.html">Home Option 10</a>{" "}
                              <span className="menu-label">New</span>
                            </li>
                            <li>
                              <a href="../home/index-11.html">Home Option 11</a>{" "}
                              <span className="menu-label">New</span>
                            </li>
                            <li>
                              <a href="../home/index-12.html">Home Option 12</a>{" "}
                              <span className="menu-label">New</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-md-3 col-xl-2">
                          <h6 className="sm-title-02 mb-3 fw-500">
                            Shop Option 1
                          </h6>
                          <ul className="list-unstyled link-list-style-02 mb-4">
                            <li>
                              <a href="../shop-01/shop.html">Shop Page</a>
                            </li>
                            <li>
                              <a href="../shop-01/shop-filter.html">
                                Shop Filter
                              </a>
                            </li>
                            <li>
                              <a href="../shop-01/shop-fw-left.html">
                                Shop Full Width
                              </a>
                            </li>
                            <li>
                              <a href="../shop-01/shop-fw-right.html">
                                Shop Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="../shop-01/shop-fw-without-filtres.html">
                                Shop No Sidebar
                              </a>
                            </li>
                          </ul>
                          <h6 className="sm-title-02 mb-3 fw-500">
                            Shop Option 2
                          </h6>
                          <ul className="list-unstyled link-list-style-02 m-0">
                            <li>
                              <a href="../shop-02/shop.html">Shop Page</a>{" "}
                              <span className="menu-label">New</span>
                            </li>
                            <li>
                              <a href="../shop-02/shop-fw.html">
                                Shop Full Width
                              </a>{" "}
                              <span className="menu-label">New</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-md-3 col-xl-2">
                          <h6 className="sm-title-02 mb-3 fw-500">
                            Shop Option 3
                          </h6>
                          <ul className="list-unstyled link-list-style-02 mb-4">
                            <li>
                              <a href="../shop-03/shop.html">Shop Page</a>{" "}
                              <span className="menu-label">New</span>
                            </li>
                            <li>
                              <a href="../shop-03/shop-fw.html">
                                Shop Full Width
                              </a>{" "}
                              <span className="menu-label">New</span>
                            </li>
                          </ul>
                          <h6 className="sm-title-02 mb-3 fw-500">
                            Shop Option 4
                          </h6>
                          <ul className="list-unstyled link-list-style-02 mb-4">
                            <li>
                              <a href="../shop-04/shop.html">Shop Page</a>{" "}
                              <span className="menu-label">New</span>
                            </li>
                            <li>
                              <a href="../shop-04/shop-fw.html">
                                Shop Full Width
                              </a>{" "}
                              <span className="menu-label">New</span>
                            </li>
                          </ul>
                          <h6 className="sm-title-02 mb-3 fw-500">
                            Shopping Cart
                          </h6>
                          <ul className="list-unstyled link-list-style-02 m-0">
                            <li>
                              <a href="../account/shopping-cart.html">
                                Cart Page
                              </a>
                            </li>
                            <li>
                              <a href="../account/shop-cart.html">
                                Cart Page 02
                              </a>{" "}
                              <span className="menu-label">New</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-md-3 col-xl-2">
                          <h6 className="sm-title-02 mb-3 fw-500">
                            Product Detail Page
                          </h6>
                          <ul className="list-unstyled link-list-style-02 mb-0">
                            <li>
                              <a href="../product-details/product-details.html">
                                Product Detail 01
                              </a>
                            </li>
                            <li>
                              <a href="../product-details/product-details-02.html">
                                Product Detail 01
                              </a>
                            </li>
                            <li>
                              <a href="../product-details/product-details-03.html">
                                Product Detail 03
                              </a>
                            </li>
                            <li>
                              <a href="../product-details/product-details-04.html">
                                Product Detail 04
                              </a>
                            </li>
                            <li>
                              <a href="../product-details/product-details-05.html">
                                Product Detail 05
                              </a>
                            </li>
                            <li>
                              <a href="../product-details/product-details-06.html">
                                Product Detail 06
                              </a>{" "}
                              <span className="menu-label">New</span>
                            </li>
                            <li>
                              <a href="../product-details/product-details-07.html">
                                Product Detail 07
                              </a>{" "}
                              <span className="menu-label">New</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-md-3 col-xl-2">
                          <h6 className="sm-title-02 mb-3 fw-500">
                            Account Pages
                          </h6>
                          <ul className="list-unstyled link-list-style-02 mb-0">
                            <li>
                              <a href="../account/account-address.html">
                                Address
                              </a>
                            </li>
                            <li>
                              <a href="../account/account-order.html">Order</a>
                            </li>
                            <li>
                              <a href="../account/account-payment.html">
                                Payment
                              </a>
                            </li>
                            <li>
                              <a href="../account/account-profile.html">
                                Profile
                              </a>
                            </li>
                            <li>
                              <a href="../account/account-tickets.html">
                                Tickets
                              </a>
                            </li>
                            <li>
                              <a href="../account/account-wishlist.html">
                                Wishlist
                              </a>
                            </li>
                            <li>
                              <a href="../account/wishlist.html">Wishlist 02</a>
                            </li>
                            <li>
                              <a href="../account/account-tabs.html">
                                Account Tab
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-md-3 col-xl-2">
                          <h6 className="sm-title-02 mb-3 fw-500">Login</h6>
                          <ul className="list-unstyled link-list-style-02 mb-4">
                            <li>
                              <a href="../account/login.html">Login</a>
                            </li>
                            <li>
                              <a href="../account/login-02.html">Login 02</a>{" "}
                              <span className="menu-label">New</span>
                            </li>
                            <li>
                              <a href="../account/sign-up.html">Sign Up</a>
                            </li>
                            <li>
                              <a href="../account/sign-up-02.html">
                                Sign Up 02
                              </a>{" "}
                              <span className="menu-label">New</span>
                            </li>
                            <li>
                              <a href="../account/reset-password.html">
                                Reset Password
                              </a>
                            </li>
                          </ul>
                          <h6 className="sm-title-02 mb-3 fw-500">Checkout</h6>
                          <ul className="list-unstyled link-list-style-02 m-0">
                            <li>
                              <a href="../account/checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="../account/checkout-02.html">
                                Checkout 02
                              </a>{" "}
                              <span className="menu-label">New</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Latest
                  </a>{" "}
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Collection
                  </a>
                </li>
                <li className="dropdown dropdown-full nav-item">
                  <a href="#" className="nav-link">
                    Categories
                  </a>
                  <label className="px-dropdown-toggle mob-menu" />
                  <div className="dropdown-menu dropdown-mega-menu py-0">
                    <div className="container-fluid p-3 p-lg-4">
                      <div className="row gy-4">
                        <div className="col-6 col-md-4 col-lg-2">
                          <div className="hover-scale position-relative mb-3">
                            <div className="hover-scale-in">
                              <a href="#">
                                <img
                                  src="assets/images/shop-banner-12.jpg"
                                  title=""
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                              <h5 className="m-0 h6 bg-body px-3 py-2">
                                <a className="text-reset link-effect" href="#">
                                  Living Room
                                </a>
                              </h5>
                            </div>
                          </div>
                          <ul className="list-unstyled link-list-style-02">
                            <li>
                              <a href="#">Sofa</a>
                            </li>
                            <li>
                              <a href="#">Love Seat</a>
                            </li>
                            <li>
                              <a href="#">Settee Sofa</a>
                            </li>
                            <li>
                              <a href="#">Sleeper Sofas</a>
                            </li>
                            <li>
                              <a href="#">Tuxedo</a>
                            </li>
                            <li>
                              <a href="#">Chair &amp; Ottomans</a>
                            </li>
                            <li>
                              <a href="#">Wing Chair</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                          <div className="hover-scale position-relative mb-3">
                            <div className="hover-scale-in">
                              <a href="#">
                                <img
                                  src="assets/images/shop-banner-13.jpg"
                                  title=""
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                              <h5 className="m-0 h6 bg-body px-3 py-2">
                                <a className="text-reset link-effect" href="#">
                                  Women
                                </a>
                              </h5>
                            </div>
                          </div>
                          <ul className="list-unstyled link-list-style-02">
                            <li>
                              <a href="#">Fusion Wear</a>
                            </li>
                            <li>
                              <a href="#">Dress Materials</a>
                            </li>
                            <li>
                              <a href="#">Dupattas &amp; Shawls</a>
                            </li>
                            <li>
                              <a href="#">Ethnic Dresses</a>
                            </li>
                            <li>
                              <a href="#">Jackets &amp; Waistcoats</a>
                            </li>
                            <li>
                              <a href="#">Kurtas &amp; Suits</a>
                            </li>
                            <li>
                              <a href="#">Sarees</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                          <div className="hover-scale position-relative mb-3">
                            <div className="hover-scale-in">
                              <a href="#">
                                <img
                                  src="assets/images/shop-banner-14.jpg"
                                  title=""
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                              <h5 className="m-0 h6 bg-body px-3 py-2">
                                <a className="text-reset link-effect" href="#">
                                  Western Wear
                                </a>
                              </h5>
                            </div>
                          </div>
                          <ul className="list-unstyled link-list-style-02">
                            <li>
                              <a href="#">Blazers &amp; Waistcoats</a>
                            </li>
                            <li>
                              <a href="#">Dresses</a>
                            </li>
                            <li>
                              <a href="#">Jackets &amp; Coats</a>
                            </li>
                            <li>
                              <a href="#">Jeans &amp; Jeggings</a>
                            </li>
                            <li>
                              <a href="#">Jumpsuits</a>
                            </li>
                            <li>
                              <a href="#">Shorts &amp; Skirts</a>
                            </li>
                            <li>
                              <a href="#">Shrugs</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                          <div className="hover-scale position-relative mb-3">
                            <div className="hover-scale-in">
                              <a href="#">
                                <img
                                  src="assets/images/shop-banner-15.jpg"
                                  title=""
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                              <h5 className="m-0 h6 bg-body px-3 py-2">
                                <a className="text-reset link-effect" href="#">
                                  Footwear
                                </a>
                              </h5>
                            </div>
                          </div>
                          <ul className="list-unstyled link-list-style-02">
                            <li>
                              <a href="#">Boots</a>
                            </li>
                            <li>
                              <a href="#">Casual Shoes</a>
                            </li>
                            <li>
                              <a href="#">Heels</a>
                            </li>
                            <li>
                              <a href="#">Sports Shoes</a>
                            </li>
                            <li>
                              <a href="#">Sports Wear</a>
                            </li>
                            <li>
                              <a href="#">Gym Wear</a>
                            </li>
                            <li>
                              <a href="#">Vintage</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                          <div className="hover-scale position-relative mb-3">
                            <div className="hover-scale-in">
                              <a href="#">
                                <img
                                  src="assets/images/shop-banner-16.jpg"
                                  title=""
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                              <h5 className="m-0 h6 bg-body px-3 py-2">
                                <a className="text-reset link-effect" href="#">
                                  Kids
                                </a>
                              </h5>
                            </div>
                          </div>
                          <ul className="list-unstyled link-list-style-02">
                            <li>
                              <a href="#">Boys Clothing</a>
                            </li>
                            <li>
                              <a href="#">Clothing Sets</a>
                            </li>
                            <li>
                              <a href="#">Jacket &amp; Sweater</a>
                            </li>
                            <li>
                              <a href="#">Jeans</a>
                            </li>
                            <li>
                              <a href="#">Shirts</a>
                            </li>
                            <li>
                              <a href="#">Sleepwear</a>
                            </li>
                            <li>
                              <a href="#">T-Shirts</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                          <div className="hover-scale position-relative mb-3">
                            <div className="hover-scale-in">
                              <a href="#">
                                <img
                                  src="assets/images/home-banner-6.jpg"
                                  title=""
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                              <h5 className="m-0 h6 bg-body px-3 py-2">
                                <a className="text-reset link-effect" href="#">
                                  Accessories
                                </a>
                              </h5>
                            </div>
                          </div>
                          <ul className="list-unstyled link-list-style-02">
                            <li>
                              <a href="#">Handbags</a>
                            </li>
                            <li>
                              <a href="#">Hand Purse</a>
                            </li>
                            <li>
                              <a href="#">Laptop Bag</a>
                            </li>
                            <li>
                              <a href="#">Leather Purse</a>
                            </li>
                            <li>
                              <a href="#">Saddle Cross Bag</a>
                            </li>
                            <li>
                              <a href="#">Shoulder Bag</a>
                            </li>
                            <li>
                              <a href="#">Vintage</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown nav-item">
                  <a href="#" className="nav-link">
                    Pages
                  </a>{" "}
                  <label className="px-dropdown-toggle mob-menu" />
                  <ul className="dropdown-menu left shadow-lg">
                    <li>
                      <a className="dropdown-item" href="../pages/about.html">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="../pages/faq.html">
                        FAQ's
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="../pages/policy.html">
                        Policy
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="../pages/support.html">
                        Support
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../pages/support-topic.html"
                      >
                        Support Topic
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="../pages/contact-us.html"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            {/* End Menu */}
            <div className="nav flex-nowrap align-items-center header-right">
              {/* Nav Search*/}
              <div className="nav-item">
                <a
                  className="nav-link collapsed"
                  data-bs-toggle="offcanvas"
                  href="#header_search_popup"
                  role="button"
                  aria-controls="header_search_popup"
                >
                  <i className="fi-search" />
                </a>
              </div>

              {isAuthenticated ? (
                <>
                  {/* Acount */}
                  <div className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      id="dropdown_myaccount"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fi-user" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end mt-2 shadow"
                      aria-labelledby="dropdown_myaccount"
                    >
                      {/* <a className="dropdown-item" href="#">
                    Login
                  </a>{" "} */}
                      <Link className="dropdown-item" to="/account-order">
                        My Orders
                      </Link>{" "}
                      <Link className="dropdown-item" to="/account-wishlist">
                        Wishlist
                      </Link>{" "}
                      <Link className="dropdown-item" to="/account-profile">
                        My account
                      </Link>
                    </div>
                  </div>
                  {/* Cart */}
                  <div className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="offcanvas"
                      href="#modalMiniCart"
                      role="button"
                      aria-controls="modalMiniCart"
                    >
                      <span className="" data-cart-items={8}>
                        <i className="fi-shopping-cart" />
                      </span>
                    </a>
                  </div>
                </>
              ) : (
                <>
                  {/* Login */}
                  <div className="nav-item">
                    <a
                      className="nav-link d-flex align-items-center gap-2"
                      style={{ cursor: "pointer" }}
                      onClick={() => setShowLoginModal(true)}
                    >
                      Login
                      <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>

        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="modalMiniCart"
          aria-labelledby="modalMiniCartLabel"
        >
          <div className="offcanvas-header border-bottom">
            <h6 className="offcanvas-title" id="modalMiniCartLabel">
              Your Cart (2)
            </h6>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="list-unstyled m-0 p-0">
              <li className="py-2">
                <div className="row align-items-center">
                  <div className="col-4">
                    {/* Image */}{" "}
                    <a href="#">
                      <img
                        className="img-fluid border"
                        src="assets/images/product-x-1.jpg"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-8">
                    {/* Title */}
                    <p className="mb-2">
                      <a className="text-mode fw-500" href="#">
                        Cotton floral print Dress
                      </a>{" "}
                      <span className="m-0 text-muted w-100 d-block">
                        $40.00
                      </span>
                    </p>
                    {/*Footer */}
                    <div className="d-flex align-items-center">
                      {/* Select */}
                      {/* <select className="form-select form-select-sm w-auto">
                     <option value="1">1</option>
                     <option value="1">2</option>
                     <option value="1">3</option>
                  </select> */}
                      <div className="cart-qty">
                        <div className="dec qty-btn">-</div>
                        <input
                          className="cart-qty-input form-control"
                          type="text"
                          name="qtybutton"
                          defaultValue={1}
                        />
                        <div className="inc qty-btn">+</div>
                      </div>
                      {/* Remove */}{" "}
                      <a className="small text-mode ms-auto" href="#!">
                        <i className="bi bi-x" /> Remove
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="row align-items-center">
                  <div className="col-4">
                    {/* Image */}{" "}
                    <a href="#">
                      <img
                        className="img-fluid border"
                        src="assets/images/product-x-1.jpg"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-8">
                    {/* Title */}
                    <p className="mb-2">
                      <a className="text-mode fw-500" href="#">
                        Cotton floral print Dress
                      </a>{" "}
                      <span className="m-0 text-muted w-100 d-block">
                        $40.00
                      </span>
                    </p>
                    {/*Footer */}
                    <div className="d-flex align-items-center">
                      {/* Select */}
                      {/* <select className="form-select form-select-sm w-auto">
                     <option value="1">1</option>
                     <option value="1">2</option>
                     <option value="1">3</option>
                  </select> */}
                      <div className="cart-qty">
                        <div className="dec qty-btn">-</div>
                        <input
                          className="cart-qty-input form-control"
                          type="text"
                          name="qtybutton"
                          defaultValue={1}
                        />
                        <div className="inc qty-btn">+</div>
                      </div>
                      {/* Remove */}{" "}
                      <a className="small text-mode ms-auto" href="#!">
                        <i className="bi bi-x" /> Remove
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="row align-items-center">
                  <div className="col-4">
                    {/* Image */}{" "}
                    <a href="#">
                      <img
                        className="img-fluid border"
                        src="assets/images/product-x-1.jpg"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-8">
                    {/* Title */}
                    <p className="mb-2">
                      <a className="text-mode fw-500" href="#">
                        Cotton floral print Dress
                      </a>{" "}
                      <span className="m-0 text-muted w-100 d-block">
                        $40.00
                      </span>
                    </p>
                    {/*Footer */}
                    <div className="d-flex align-items-center">
                      {/* Select */}
                      {/* <select className="form-select form-select-sm w-auto">
                     <option value="1">1</option>
                     <option value="1">2</option>
                     <option value="1">3</option>
                  </select> */}
                      <div className="cart-qty">
                        <div className="dec qty-btn">-</div>
                        <input
                          className="cart-qty-input form-control"
                          type="text"
                          name="qtybutton"
                          defaultValue={1}
                        />
                        <div className="inc qty-btn">+</div>
                      </div>
                      {/* Remove */}{" "}
                      <a className="small text-mode ms-auto" href="#!">
                        <i className="bi bi-x" /> Remove
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="row align-items-center">
                  <div className="col-4">
                    {/* Image */}{" "}
                    <a href="#">
                      <img
                        className="img-fluid border"
                        src="assets/images/product-x-1.jpg"
                        alt="..."
                      />
                    </a>
                  </div>
                  <div className="col-8">
                    {/* Title */}
                    <p className="mb-2">
                      <a className="text-mode fw-500" href="#">
                        Cotton floral print Dress
                      </a>{" "}
                      <span className="m-0 text-muted w-100 d-block">
                        $40.00
                      </span>
                    </p>
                    {/*Footer */}
                    <div className="d-flex align-items-center">
                      {/* Select */}
                      {/* <select className="form-select form-select-sm w-auto">
                     <option value="1">1</option>
                     <option value="1">2</option>
                     <option value="1">3</option>
                  </select> */}
                      <div className="cart-qty">
                        <div className="dec qty-btn">-</div>
                        <input
                          className="cart-qty-input form-control"
                          type="text"
                          name="qtybutton"
                          defaultValue={1}
                        />
                        <div className="inc qty-btn">+</div>
                      </div>
                      {/* Remove */}{" "}
                      <a className="small text-mode ms-auto" href="#!">
                        <i className="bi bi-x" /> Remove
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="offcanvas-footer ">
            <div className="card">
              <div className="card-header bg-transparent py-3">
                <h6 className="m-0 h5">Order Total</h6>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="me-2 text-body">Subtotal</h6>
                    <span className="text-end">$265.00</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center mb-2">
                    <h6 className="me-2 text-body">Taxes</h6>
                    <span className="text-end">$265.00</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                    <h6 className="me-2">Grand Total</h6>
                    <span className="text-end text-mode">$265.00</span>
                  </li>
                </ul>
                <div className="pt-2 pb-4">
                  <div className="d-flex">
                    <input
                      type="text"
                      name="promo"
                      placeholder="Apply promo code"
                      className="form-control form-control-sm"
                    />
                    <button className="btn btn-dark btn-sm ms-2">Apply</button>
                  </div>
                </div>
                <div className="d-grid gap-2 mx-auto">
                  <Link className="btn btn-primary"  to="/checkout">
                    <i className="bi-credit-card-2-back me-2" />
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-header-01 d-lg-none">
          <div className="mob-head-in">
            <div className="mob-toggle">
              <button
                className="hm-toggle-mob"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas_mobile_header_01"
                aria-controls="offcanvas_mobile_header_01"
              >
                <span />
              </button>
            </div>
            <div className="mob-logo text-center w-100 d-flex justify-content-center">
              <a href="../../index.html">
                <img
                  className="logo-dark"
                  src="assets/images/logo.svg"
                  title=""
                  alt=""
                />
                <img
                  className="logo-light"
                  src="assets/images/logo-light.svg"
                  title=""
                  alt=""
                />
              </a>
            </div>
            <div className="mob-end d-flex gap-sm-3 gap-2">
              {isAuthenticated ? (
                <>
                  {/* PROFILE */}
                  <div className="nav-item dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      id="dropdown_myaccount"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fi-user" />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end mt-2 shadow"
                      aria-labelledby="dropdown_myaccount"
                    >
                      <Link className="dropdown-item" to="/account-order">
                        My Orders
                      </Link>{" "}
                      <Link className="dropdown-item" to="/account-wishlist">
                        Wishlist
                      </Link>{" "}
                      <Link className="dropdown-item" to="/account-profile">
                        My account
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Login */}
                  <a
                    className="nav-item d-flex align-items-center gap-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowLoginModal(true)}
                  >
                    Login<i className="fa-solid fa-arrow-right-to-bracket"></i>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
        {/* End Mobile Menu */}
      </header>

      {/* Mobile  */}
      <div
        className="offcanvas-lg mobile-nav-offcanvas offcanvas-start d-lg-none @@MobExtraClass"
        tabIndex={-1}
        id="offcanvas_mobile_header_01"
        aria-labelledby="offcanvas_mobile_header_01"
      >
        <div className="offcanvas-header">
          <div className="offcanvas-header-overlay" />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvas_mobile_header_01"
            aria-label="Close"
          >
            <i className="fi-x" />
          </button>
          <div className="mob-user">
            <a href="#">
              <i className="fi-user" /> <span>Login</span>
            </a>
          </div>
          {/* <ul className="mob-extra">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fi-heart" /> <span>Wishlist</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                id="dropdown_language"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img width={20} src="assets/images/uk.svg" alt="" /> English
              </a>
              <div
                className="dropdown-menu mt-2 shadow"
                aria-labelledby="dropdown_language"
                style={{ margin: 0 }}
              >
                <div>
                  <select className="form-select form-select-sm">
                    <option value="usd">$ USD</option>
                    <option value="eur">€ EUR</option>
                    <option value="ukp">£ UKP</option>
                    <option value="jpy">¥ JPY</option>
                  </select>
                </div>
                <a className="dropdown-item" href="#">
                  <img
                    className="me-2"
                    width={20}
                    src="assets/images/sp.svg"
                    alt=""
                  />{" "}
                  Español
                </a>{" "}
                <a className="dropdown-item" href="#">
                  <img
                    className="me-2"
                    width={20}
                    src="assets/images/fr.svg"
                    alt=""
                  />{" "}
                  Français
                </a>{" "}
                <a className="dropdown-item" href="#">
                  <img
                    className="me-2"
                    width={20}
                    src="assets/images/gr.svg"
                    alt=""
                  />
                  Deutsch
                </a>
              </div>
            </li>
          </ul> */}
        </div>
        <div className="offcanvas-body">
          <MegaMenu />

          {/* <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">Latest</a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">Collection</a>
            </li>

            <li className="dropdown dropdown-full nav-item">
              <a href="#" className="nav-link">Categories</a>
              <label className="px-dropdown-toggle mob-menu"></label>
              <div className="dropdown-menu dropdown-mega-menu py-0">
                <div className="container-fluid p-3 p-lg-4">
                  <div className="row gy-4">

                    
                    <div className="col-6 col-md-4 col-lg-2">
                      <div className="hover-scale position-relative mb-3">
                        <div className="hover-scale-in">
                          <a href="#"><img src="assets/images/shop-banner-12.jpg" alt="" /></a>
                        </div>
                        <div className="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                          <h5 className="m-0 h6 bg-body px-3 py-2">
                            <a className="text-reset link-effect" href="#">Living Room</a>
                          </h5>
                        </div>
                      </div>
                      <ul className="list-unstyled link-list-style-02">
                        <li><a href="#">Sofa</a></li>
                        <li><a href="#">Love Seat</a></li>
                        <li><a href="#">Settee Sofa</a></li>
                        <li><a href="#">Sleeper Sofas</a></li>
                        <li><a href="#">Tuxedo</a></li>
                        <li><a href="#">Chair & Ottomans</a></li>
                        <li><a href="#">Wing Chair</a></li>
                      </ul>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2">
                      <div className="hover-scale position-relative mb-3">
                        <div className="hover-scale-in">
                          <a href="#"><img src="assets/images/shop-banner-13.jpg" alt="" /></a>
                        </div>
                        <div className="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                          <h5 className="m-0 h6 bg-body px-3 py-2">
                            <a className="text-reset link-effect" href="#">Women</a>
                          </h5>
                        </div>
                      </div>
                      <ul className="list-unstyled link-list-style-02">
                        <li><a href="#">Fusion Wear</a></li>
                        <li><a href="#">Dress Materials</a></li>
                        <li><a href="#">Dupattas & Shawls</a></li>
                        <li><a href="#">Ethnic Dresses</a></li>
                        <li><a href="#">Jackets & Waistcoats</a></li>
                        <li><a href="#">Kurtas & Suits</a></li>
                        <li><a href="#">Sarees</a></li>
                      </ul>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2">
                      <div className="hover-scale position-relative mb-3">
                        <div className="hover-scale-in">
                          <a href="#"><img src="assets/images/shop-banner-14.jpg" alt="" /></a>
                        </div>
                        <div className="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                          <h5 className="m-0 h6 bg-body px-3 py-2">
                            <a className="text-reset link-effect" href="#">Western Wear</a>
                          </h5>
                        </div>
                      </div>
                      <ul className="list-unstyled link-list-style-02">
                        <li><a href="#">Blazers & Waistcoats</a></li>
                        <li><a href="#">Dresses</a></li>
                        <li><a href="#">Jackets & Coats</a></li>
                        <li><a href="#">Jeans & Jeggings</a></li>
                        <li><a href="#">Jumpsuits</a></li>
                        <li><a href="#">Shorts & Skirts</a></li>
                        <li><a href="#">Shrugs</a></li>
                      </ul>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2">
                      <div className="hover-scale position-relative mb-3">
                        <div className="hover-scale-in">
                          <a href="#"><img src="assets/images/shop-banner-15.jpg" alt="" /></a>
                        </div>
                        <div className="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                          <h5 className="m-0 h6 bg-body px-3 py-2">
                            <a className="text-reset link-effect" href="#">Footwear</a>
                          </h5>
                        </div>
                      </div>
                      <ul className="list-unstyled link-list-style-02">
                        <li><a href="#">Boots</a></li>
                        <li><a href="#">Casual Shoes</a></li>
                        <li><a href="#">Heels</a></li>
                        <li><a href="#">Sports Shoes</a></li>
                        <li><a href="#">Sports Wear</a></li>
                        <li><a href="#">Gym Wear</a></li>
                        <li><a href="#">Vintage</a></li>
                      </ul>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2">
                      <div className="hover-scale position-relative mb-3">
                        <div className="hover-scale-in">
                          <a href="#"><img src="assets/images/shop-banner-16.jpg" alt="" /></a>
                        </div>
                        <div className="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                          <h5 className="m-0 h6 bg-body px-3 py-2">
                            <a className="text-reset link-effect" href="#">Kids</a>
                          </h5>
                        </div>
                      </div>
                      <ul className="list-unstyled link-list-style-02">
                        <li><a href="#">Boys Clothing</a></li>
                        <li><a href="#">Clothing Sets</a></li>
                        <li><a href="#">Jacket & Sweater</a></li>
                        <li><a href="#">Jeans</a></li>
                        <li><a href="#">Shirts</a></li>
                        <li><a href="#">Sleepwear</a></li>
                        <li><a href="#">T-Shirts</a></li>
                      </ul>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2">
                      <div className="hover-scale position-relative mb-3">
                        <div className="hover-scale-in">
                          <a href="#"><img src="assets/images/home-banner-6.jpg" alt="" /></a>
                        </div>
                        <div className="pt-2 text-center position-absolute bottom-0 start-0 mb-3">
                          <h5 className="m-0 h6 bg-body px-3 py-2">
                            <a className="text-reset link-effect" href="#">Accessories</a>
                          </h5>
                        </div>
                      </div>
                      <ul className="list-unstyled link-list-style-02">
                        <li><a href="#">Handbags</a></li>
                        <li><a href="#">Hand Purse</a></li>
                        <li><a href="#">Laptop Bag</a></li>
                        <li><a href="#">Leather Purse</a></li>
                        <li><a href="#">Saddle Cross Bag</a></li>
                        <li><a href="#">Shoulder Bag</a></li>
                        <li><a href="#">Vintage</a></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </li>

            <li className="dropdown nav-item">
              <a href="#" className="nav-link">Pages</a>
              <label className="px-dropdown-toggle mob-menu"></label>
              <ul className="dropdown-menu left shadow-lg">
                <li><a className="dropdown-item" href="../pages/about.html">About</a></li>
                <li><a className="dropdown-item" href="../pages/faq.html">FAQ's</a></li>
                <li><a className="dropdown-item" href="../pages/policy.html">Policy</a></li>
                <li><a className="dropdown-item" href="../pages/support.html">Support</a></li>
                <li><a className="dropdown-item" href="../pages/support-topic.html">Support Topic</a></li>
                <li><a className="dropdown-item" href="../pages/contact-us.html">Contact Us</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">Blog</a>
            </li>
          </ul> */}
        </div>
      </div>

      <div
        className="modal fade"
        id="loginAuthModal"
        tabIndex="-1"
        aria-labelledby="loginAuthModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <h5
                className="modal-title w-100 text-center"
                id="loginAuthModalLabel"
              >
                <img src="assets/images/logo.svg" alt="Logo"></img>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="login-authentication-form">
                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor="mobileNumber" className="form-label">
                      Enter Mobile Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="mobileNumber"
                      placeholder="Enter your mobile"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <label htmlFor="otpCode" className="form-label">
                      Enter OTP
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="otpCode"
                      placeholder="Enter OTP"
                    />
                  </div>
                </div>
                <div className="row justify-content-center ">
                  <div className="col-lg-6 col-8 text-center">
                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
