import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useCart } from "../../../context/CartContext";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import MegaMenu from "../../MenuItem";
import LoginModal from "../../popup/login";
import { axiosInstance } from "../../../assets/js/config/api";
window.bootstrap = bootstrap;

function HomeHeader() {
  const { openCart, setCartOpen } = useCart();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const isAuthenticated = !!localStorage.getItem(
    "three_style_user_authorization"
  );
  const [loading, setLoading] = useState(false);
  const [serverDataID, setServerDataID] = React.useState("");
  const [productDataGet, setProductDataGet] = React.useState([]);
  const [previousProductData, setPreviousProductData] = useState([]);
  const [totalMRP, setTotalMRP] = React.useState(0);
  const [totalAmount, setTotalAmount] = React.useState(0);
  const [productQuantity, setProductQuantity] = useState(1);

  const closeModal = () => {
    setShowLoginModal(false);
  };

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        "/order-cart/get-carts?item_type=CLOTHING_PRODUCT&is_purchase=true"
      );
      const serverData = response.data.data[0];
      setServerDataID(serverData._id);
      const existingData = JSON.parse(
        localStorage.getItem("addItemInCart")
      ) || { products: [] };

      const priceMap = existingData.products.reduce((map, product) => {
        map[product.product_id] = product.mrpPrice;
        return map;
      }, {});

      const itemDataForGetQty = serverData?.items || [];
      const itemDataForGetImgName = serverData?.items_details || [];

      const combinedData = itemDataForGetQty.map((item) => {
        const itemDetails = itemDataForGetImgName.find(
          (details) => details._id === item.item_id
        );
        if (!itemDetails) {
          console.warn(`No details found for item with id: ${item.item_id}`);
          return item;
        }

        return {
          ...item,
          ...itemDetails,
          items_id: item._id,
        };
      });

      const updatedServerData = combinedData.map((product) => {
        return {
          ...product,
          mrpPrice: priceMap[product.item_id] || product.mrpPrice,
        };
      });
      setPreviousProductData(updatedServerData);
      totalMRPCalculation(updatedServerData);
      setProductDataGet(updatedServerData);
      totalAmountCalculation(updatedServerData);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
    setLoading(false);
  };

  const totalMRPCalculation = (data) => {
    const totalMrp = data.map((product) => {
      const mrp = product.mrpPrice * product.quantity;
      return mrp;
    });
    const amount = totalMrp.reduce((sum, product) => sum + product, 0);
    setTotalMRP(amount || 0);
    return amount;
  };

  const totalAmountCalculation = (data) => {
    const amount = data.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
    setTotalAmount(amount || 0);
  };

  const is_cart_product = localStorage.getItem("is_cart_product");
  useEffect(() => {
    if (is_cart_product) {
      fetchProductData();
    }
  }, [is_cart_product]);

  const handleRemoveProduct = async (cart_id, product_id) => {
    try {
      await axiosInstance.delete(
        `/order-cart/remove-item?item_id=${product_id}&cart_id=${serverDataID}`
      );
      setProductDataGet((prevData) =>
        prevData.filter((product) => product._id !== cart_id)
      );
      const existingData = JSON.parse(
        localStorage.getItem("addItemInCart")
      ) || { products: [] };
      existingData.products = existingData.products.filter(
        (product) => product.product_id !== product_id
      );
      localStorage.setItem("addItemInCart", JSON.stringify(existingData));
      fetchProductData();
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  const minusQuantity = (productId) => {
    setProductDataGet((prevData) => {
      const updatedData = prevData.map((product) =>
        product._id === productId
          ? { ...product, quantity: Math.max(1, product.quantity - 1) }
          : product
      );
      const changedProducts = updatedData.filter((product) => {
        const originalProduct = prevData.find((p) => p._id === product._id);
        return originalProduct && originalProduct.quantity !== product.quantity;
      });
      totalAmountCalculation(updatedData);
      totalMRPCalculation(updatedData);
      setTimeout(async () => {
        handleUpdateCart(changedProducts);
      }, 1000);
      return updatedData;
    });
  };

  const plusQuantity = (productId) => {
    setProductDataGet((prevData) => {
      const updatedData = prevData.map((product) =>
        product._id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      const changedProducts = updatedData.filter((product) => {
        const originalProduct = prevData.find((p) => p._id === product._id);
        return originalProduct && originalProduct.quantity !== product.quantity;
      });

      totalAmountCalculation(updatedData);
      totalMRPCalculation(updatedData);

      setTimeout(() => {
        handleUpdateCart(changedProducts);
      }, 1000);

      return updatedData;
    });
  };

  const handleUpdateCart = async (updatedData) => {
    try {
      await axiosInstance.post("/order-cart/add-item", updatedData[0]);
    } catch (error) {
      console.error("Error adding to cart:", error);
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
              Your Cart ({productDataGet.length > 0 && productDataGet.length})
            </h6>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          {loading ? (
            <div className="d-flex justify-content-center align-items-center mb-4 my-7 loader-h">
              <div class="loader"></div>
            </div>
          ) : (
            productDataGet.length > 0 && (
              <>
                <div className="offcanvas-body">
                  <ul className="list-unstyled m-0 p-0">
                    {productDataGet.map((product, index) => {
                      const totalPrice = product.price * product.quantity;
                      return (
                        <li className="py-2" key={index}>
                          <div className="row align-items-center">
                            <div className="col-4">
                              <a href="#">
                                <img
                                  className="img-fluid border"
                                  src={
                                    product.display_image
                                      ? `https://files.threestyle.in/${product?.display_image?.[0]}`
                                      : "assets/images/product-x-1.jpg"
                                  }
                                  alt="..."
                                />
                              </a>
                            </div>
                            <div className="col-8">
                              <p className="mb-2">
                                <a className="text-mode fw-500" href="#">
                                  {product.name}
                                </a>{" "}
                                <span className="m-0 text-muted w-100 d-block">
                                  ₹{totalPrice.toFixed(2)}
                                </span>
                              </p>
                              <div className="d-flex align-items-center">
                                <div className="cart-qty">
                                  <div
                                    className="dec qty-btn"
                                    onClick={() => minusQuantity(product._id)}
                                  >
                                    -
                                  </div>
                                  <input
                                    className="cart-qty-input form-control"
                                    type="text"
                                    name="qtybutton"
                                    defaultValue={1}
                                    value={product.quantity}
                                  />
                                  <div
                                    className="inc qty-btn"
                                    onClick={() => plusQuantity(product._id)}
                                  >
                                    +
                                  </div>
                                </div>
                                <a
                                  className="small text-mode ms-auto"
                                  href="#!"
                                  onClick={() =>
                                    handleRemoveProduct(
                                      product._id,
                                      product.items_id
                                    )
                                  }
                                >
                                  <i className="bi bi-x" /> Remove
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
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
                          <span className="text-end">₹{totalAmount.toFixed(2)}</span>
                        </li>
                        <li className="d-flex justify-content-between align-items-center mb-2">
                          <h6 className="me-2 text-body">Taxes</h6>
                          <span className="text-end">₹0</span>
                        </li>
                        <li className="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                          <h6 className="me-2">Total Total</h6>
                          <span className="text-end text-mode">₹{totalAmount.toFixed(2)}</span>
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
                          <button className="btn btn-dark btn-sm ms-2">
                            Apply
                          </button>
                        </div>
                      </div>
                      <div className="d-grid gap-2 mx-auto">
                        <button className="btn btn-primary" onClick={() => {
                          localStorage.setItem('productsData', JSON.stringify(productDataGet))
                          window.location.href = '/checkout'
                        }}>
                          <i className="bi-credit-card-2-back me-2" />
                          Proceed to Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          )}
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

      {/* LOGIN MODAL       */}
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

      {/* SEARCH OFFCANAS */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="header_search_popup"
        aria-labelledby="header_search_popupLabel"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title" id="header_search_popupLabel">
            Search
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <form className="position-relative w-100">
            <div className="input-group">
              {/* Search input */}{" "}
              <input
                className="form-control shadow-none"
                type="text"
                name="search"
                placeholder="What are you looking for?"
              />
              {/* Search button */}{" "}
              <button type="button" className="btn btn-primary shadow-none">
                <i className="fi-search" />
              </button>
            </div>
          </form>
          <div className="pt-3">
            <div className="nav tag-cloud">
              <Link
                className="rounded-pill px-3 small font-w-500 py-1 bg-gray-200 me-1 mb-1 text-mode"
                href="shop"
              >
                Design
              </Link>{" "}
              <a
                className="rounded-pill px-3 small font-w-500 py-1 bg-gray-200 me-1 mb-1 text-mode"
                href="#"
              >
                Development
              </a>{" "}
              <a
                className="rounded-pill px-3 small font-w-500 py-1 bg-gray-200 me-1 mb-1 text-mode"
                href="#"
              >
                Travel
              </a>{" "}
              <a
                className="rounded-pill px-3 small font-w-500 py-1 bg-gray-200 me-1 mb-1 text-mode"
                href="#"
              >
                Web Design
              </a>{" "}
              <a
                className="rounded-pill px-3 small font-w-500 py-1 bg-gray-200 me-1 mb-1 text-mode"
                href="#"
              >
                Marketing
              </a>{" "}
              <a
                className="rounded-pill px-3 small font-w-500 py-1 bg-gray-200 me-1 mb-1 text-mode"
                href="#"
              >
                Research
              </a>
              <a
                className="rounded-pill px-3 small font-w-500 py-1 bg-gray-200 me-1 mb-1 text-mode"
                href="#"
              >
                Managment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM MOBILE SCREEN MENU */}
      <div className="mob-header-btn-fixed-01 d-lg-none">
        <div className="mob-hb-in">
          <div className="mob-hb-item">
            <Link className="mob-hb-link" to="shop">
              <i className="fi-grid" /> <span>Shop</span>
            </Link>
          </div>
          <div className="mob-hb-item">
            <a
              className="mob-hb-link"
              data-bs-toggle="offcanvas"
              href="#header_search_popup"
              role="button"
              aria-controls="header_search_popup"
            >
              <i className="fi-search" />
              <span>Search</span>
            </a>
          </div>

          <div className="mob-hb-item">
            <Link to="/account-wishlist" className="mob-hb-link">
              <i className="fi-heart">
                <sub>08</sub>
              </i>
              <span>Wishlist</span>
            </Link>
          </div>
          <div className="mob-hb-item">
            <a
              className="mob-hb-link"
              data-bs-toggle="offcanvas"
              href="#modalMiniCart"
              role="button"
              aria-controls="modalMiniCart"
            >
              <i className="fi-shopping-cart">
                <sub>08</sub>
              </i>
              <span>Cart</span>
            </a>
          </div>
        </div>
      </div>

    </>
  );
}

export default HomeHeader;
