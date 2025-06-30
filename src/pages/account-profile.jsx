import React from 'react'

const AccountProfile = () => {
  return (
    <>
    <>
  {/* metas */}
  <meta charSet="utf-8" />
  <meta name="author" content="pxdraft" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width,initial-scale=1,shrink-to-fit=no"
  />
  <meta name="keywords" content="ShopApp - eCommerce Bootstrap 5 Template" />
  <meta name="description" content="ShopApp - eCommerce Bootstrap 5 Template" />
  {/* title */}
  <title>ShopApp - eCommerce Bootstrap 5 Template</title>
  {/* Favicon */}
  <link rel="shortcut icon" href="assets/images/favicon.ico" />
  {/* CSS Template */}
  <link href="assets/css/swimwear.css" rel="stylesheet" />
  {/* Skippy & Prload */}
  {/* skippy */}{" "}
  <a
    id="skippy"
    className="skippy visually-hidden-focusable overflow-hidden"
    href="#content"
  >
    <div className="container">
      <span className="u-skiplink-text">Skip to main content</span>
    </div>
  </a>
  {/* End skippy */}
  {/* Preload */}
  <div id="loading" className="loading-preloader">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
  {/* End Preload */}
  {/* Edn Skippy & Prload */}
  {/* Size Chart  */}
  {/* Ask Form */}
  <div
    className="modal-askform-view modal fade"
    id="px_ask_modal"
    tabIndex={-1}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Ask about product</h4>
          <button
            className="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Your Name</label>{" "}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Email address</label>{" "}
                  <input
                    type="email"
                    className="form-control"
                    placeholder="E-mail"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label" htmlFor="exampleInputEmail1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label" htmlFor="exampleInputEmail1">
                    Your Message
                  </label>{" "}
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Your Message"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* End Ask Form */}
  {/* Header Search */}
  <div
    className="px-search-full collapse bg-body p-3 position-fixed w-100 top-0"
    id="search-open"
  >
    <div className="container position-relative">
      <div className="row vh-100 justify-content-center">
        <div className="col-lg-8 pt-12">
          <h2 className="h1 mb-4">
            <span className="d-block">Search</span>
          </h2>
          <form className="position-relative w-100">
            <div className="mb-3 input-group">
              {/* Search input */}{" "}
              <input
                className="form-control shadow-none"
                type="text"
                name="search"
                placeholder="What are you looking for?"
              />
              {/* Search button */}
              <button type="button" className="btn btn-primary shadow-none">
                <i className="fi-search" />
              </button>
            </div>
          </form>
          <div className="row pt-3">
            <div className="col-6 col-lg-4">
              <a className="nav-link px-0 py-1" href="#">
                <i className="bi-chevron-right me-1" /> Search Results List{" "}
              </a>
              <a className="nav-link px-0 py-1" href="#">
                <i className="bi-chevron-right me-1" /> Search Results Grid{" "}
              </a>
              <a className="nav-link px-0 py-1" href="#">
                <i className="bi-chevron-right me-1" />
                About{" "}
              </a>
              <a className="nav-link px-0 py-1" href="#">
                <i className="bi-chevron-right me-1" />
                Services{" "}
              </a>
              <a className="nav-link px-0 py-1" href="#">
                <i className="bi-chevron-right me-1" /> Invoice
              </a>
            </div>
            <div className="col-6 col-lg-4">
              <a className="nav-link px-0 py-1" href="#">
                <i className="bi-chevron-right me-1" /> Profile{" "}
              </a>
              <a className="nav-link px-0 py-1" href="#">
                <i className="bi-chevron-right me-1" /> User Contacts{" "}
              </a>
              <a className="nav-link px-0 py-1" href="#">
                <i className="bi-chevron-right me-1" /> Reviews{" "}
              </a>
              <a className="nav-link px-0 py-1" href="#">
                <i className="bi-chevron-right me-1" /> Settings
              </a>
            </div>
          </div>
        </div>
        {/* Search button close START */}{" "}
        <a
          className="search-close"
          data-bs-toggle="collapse"
          href="javascript:void(0)"
          data-bs-target="#search-open"
          aria-expanded="true"
        >
          <i className="bi bi-x p-0 lh-1" />{" "}
        </a>
        {/* Search button close END */}
      </div>
    </div>
  </div>
  {/* End Header Search */}
  {/* Header Side Search */}
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
          <a
            className="rounded-pill px-3 small font-w-500 py-1 bg-gray-200 me-1 mb-1 text-mode"
            href="#"
          >
            Design
          </a>{" "}
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
          </a>{" "}
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
  {/* End Header Side Search */}
  {/* Login Popup  */}
  <div className="modal fade" id="topbarlogin">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header bg-primary">
          <div className="modal-title p-3">
            <h5 className="m-0 text-white">Sign in to your account!</h5>
            <p className="m-0 text-white">
              Nice to see you! Please log in with your account.
            </p>
          </div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <div className="w-100 p-3">
            {/* Form START */}
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="exampleInputEmail1">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="E-mail"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="exampleInputPassword1">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="*********"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />{" "}
                <label className="form-check-label" htmlFor="exampleCheck1">
                  keep me signed in
                </label>
              </div>
              <div className="row align-items-center">
                <div className="col-sm-4">
                  <button type="submit" className="btn btn-dark">
                    Login
                  </button>
                </div>
                <div className="col-sm-8 text-sm-end">
                  <span className="text-muted">
                    Don't have an account?{" "}
                    <a href="sign-up.html">Signup here</a>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Login Popup  */}
  {/* Mini Cart  */}
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
                <span className="m-0 text-muted w-100 d-block">$40.00</span>
              </p>
              {/*Footer */}
              <div className="d-flex align-items-center">
                {/* Select */}{" "}
                <select className="form-select form-select-sm w-auto">
                  <option value={1}>1</option>
                  <option value={1}>2</option>
                  <option value={1}>3</option>
                </select>
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
                <span className="m-0 text-muted w-100 d-block">$40.00</span>
              </p>
              {/*Footer */}
              <div className="d-flex align-items-center">
                {/* Select */}{" "}
                <select className="form-select form-select-sm w-auto">
                  <option value={1}>1</option>
                  <option value={1}>2</option>
                  <option value={1}>3</option>
                </select>
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
    <div className="offcanvas-footer border-top p-3">
      <div className="row g-0 py-2">
        <div className="col-8">
          <span className="text-mode">Subtotal</span>
        </div>
        <div className="col-4 text-end">
          <span className="ml-auto">$89.00</span>
        </div>
      </div>
      <div className="row g-0 py-2">
        <div className="col-8">
          <span className="text-mode">Taxes:</span>
        </div>
        <div className="col-4 text-end">
          <span className="ml-auto">$89.00</span>
        </div>
      </div>
      <div className="row g-0 pt-2 mt-2 border-top fw-bold text-mode">
        <div className="col-8">
          <span className="text-mode">Subtotal</span>
        </div>
        <div className="col-4 text-end">
          <span className="ml-auto">$89.00</span>
        </div>
      </div>
      <div className="pt-4">
        <a className="btn btn-block btn-mode w-100 mb-3" href="#">
          Continue to Checkout
        </a>{" "}
        <a className="btn btn-block btn-outline-mode w-100" href="#">
          View Cart
        </a>
      </div>
    </div>
  </div>
  {/* End Mini Cart  */}
  {/* Quick View  */}
  <div className="modal-quick-view modal fade" id="px-quick-view" tabIndex={-1}>
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <button
          className="btn-close position-absolute end-0 top-0 me-2 mt-2 z-index-1"
          type="button"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
        <div className="modal-body p-3">
          <div className="row">
            {/* Product Gallery */}
            <div className="col-lg-6 lightbox-gallery product-gallery">
              <img
                src="assets/images/product-x-1.jpg"
                className="img-fluid"
                title=""
                alt=""
              />
            </div>
            {/* End Product Gallery */}
            {/* Product Details */}
            <div className="col-lg-6">
              <div className="product-detail pt-4">
                <div className="products-brand pb-2">
                  <span>Brand name</span>
                </div>
                <div className="products-title mb-2">
                  <h1 className="h4">Product Title Here</h1>
                </div>
                <div className="rating-star text small pb-4">
                  <i className="bi bi-star-fill active" />{" "}
                  <i className="bi bi-star-fill active" />{" "}
                  <i className="bi bi-star-fill active" />{" "}
                  <i className="bi bi-star-fill active" />{" "}
                  <i className="bi bi-star" /> <small>(4 Reviews )</small>
                </div>
                <div className="product-description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm
                    tempor incidid ut labore et dolore magna aliqua. Ut enim ad
                    minim venialo quis nostrud exercitation ullamco
                  </p>
                </div>
                <div className="product-attribute">
                  <label className="fs-6 text-mode pb-2 fw-500">Size</label>
                  <div className="nav-thumbs nav mb-3">
                    <div className="form-check radio-text form-check-inline me-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="size3"
                        id="xs2"
                        defaultChecked=""
                      />
                      <label className="radio-text-label" htmlFor="xs2">
                        XS
                      </label>
                    </div>
                    <div className="form-check radio-text form-check-inline me-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="size3"
                        id="s2"
                      />{" "}
                      <label className="radio-text-label" htmlFor="s2">
                        S
                      </label>
                    </div>
                    <div className="form-check radio-text form-check-inline me-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="size3"
                        id="m2"
                      />{" "}
                      <label className="radio-text-label" htmlFor="m2">
                        M
                      </label>
                    </div>
                    <div className="form-check radio-text form-check-inline me-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="size3"
                        id="l2"
                      />{" "}
                      <label className="radio-text-label" htmlFor="l2">
                        L
                      </label>
                    </div>
                  </div>
                  <label className="fs-6 text-mode pb-2 fw-500">Color</label>
                  <div className="nav-thumbs nav mb-3">
                    <div className="form-check radio-color large form-check-inline me-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="color1"
                        id="color1"
                        defaultChecked=""
                      />{" "}
                      <label className="radio-color-label" htmlFor="color1">
                        <span style={{ backgroundColor: "#126532" }} />
                      </label>
                    </div>
                    <div className="form-check radio-color large form-check-inline me-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="color1"
                        id="color2"
                      />{" "}
                      <label className="radio-color-label" htmlFor="color2">
                        <span style={{ backgroundColor: "#ff9922" }} />
                      </label>
                    </div>
                    <div className="form-check radio-color large form-check-inline me-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="color1"
                        id="color3"
                      />{" "}
                      <label className="radio-color-label" htmlFor="color3">
                        <span style={{ backgroundColor: "#326598" }} />
                      </label>
                    </div>
                    <div className="form-check radio-color large form-check-inline me-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="color1"
                        id="color4"
                      />{" "}
                      <label className="radio-color-label" htmlFor="color4">
                        <span style={{ backgroundColor: "#126578" }} />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="product-price fs-3 fw-500 mb-2">
                  <del className="text-muted fs-6">
                    $38.<small>50</small>
                  </del>{" "}
                  <span className="text-primary">
                    $28.<small>50</small>
                  </span>
                </div>
                <div className="product-detail-actions d-flex flex-wrap pt-3">
                  <div className="cart-qty me-3 mb-3">
                    <div className="dec qty-btn">-</div>
                    <input
                      className="cart-qty-input form-control"
                      type="text"
                      name="qtybutton"
                      defaultValue={1}
                    />
                    <div className="inc qty-btn">+</div>
                  </div>
                  <div className="cart-button mb-3 d-flex">
                    <button className="btn btn-mode me-3">
                      <i className="fi-shopping-cart" /> Add to cart
                    </button>{" "}
                    <button className="btn btn-outline-primary me-3">
                      <i className="fi-heart" />
                    </button>
                    <button className="btn btn-outline-primary">
                      <i className="fi-repeat" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* End Product Details */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Quick View  */}
  {/* Sipping Popup  */}
  <div
    className="modal-shipping-view modal fade"
    id="px_shipping_modal"
    tabIndex={-1}
  >
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Shipping Information</h4>
          <button
            className="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul className="mb-3">
            <li>Comodous in tempor ullamcorper miaculis</li>
            <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
            <li>Divamus sit amet purus justo.</li>
            <li>
              Proin molestie egestas orci ac suscipit risus posuere loremous
            </li>
          </ul>
          <h4 className="pt-4">Privacy Policy</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ul className="mb-5">
            <li>Comodous in tempor ullamcorper miaculis</li>
            <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
            <li>Divamus sit amet purus justo.</li>
            <li>
              Proin molestie egestas orci ac suscipit risus posuere loremous
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* End Sipping Popup  */}
  {/* Size Chart  */}
  <div
    className="modal-size-chart modal fade"
    id="px_size_chart_modal"
    tabIndex={-1}
  >
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Size Chart</h4>
          <button
            className="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <table className="table mb-0">
            <thead>
              <tr className="text-mode">
                <th className="border-0 bg-body">US Sizes</th>
                <th className="border-0 bg-body">Euro Sizes</th>
                <th className="border-0 bg-body">UK Sizes</th>
                <th className="border-0 bg-body">Inches</th>
                <th className="border-0 bg-body">CM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="">6</td>
                <td>39</td>
                <td>5.5</td>
                <td>9.25"</td>
                <td>23.5</td>
              </tr>
              <tr>
                <td className="">6.5</td>
                <td>39</td>
                <td>6</td>
                <td>9.5"</td>
                <td>24.1</td>
              </tr>
              <tr>
                <td className="">7</td>
                <td>40</td>
                <td>6.5</td>
                <td>9.625"</td>
                <td>24.4</td>
              </tr>
              <tr>
                <td className="">7.5</td>
                <td>40-41</td>
                <td>7</td>
                <td>9.75"</td>
                <td>24.8</td>
              </tr>
              <tr>
                <td className="">8</td>
                <td>41</td>
                <td>7.5</td>
                <td>9.9375"</td>
                <td>25.4</td>
              </tr>
              <tr>
                <td className="">8.5</td>
                <td>41-42</td>
                <td>8</td>
                <td>10.125"</td>
                <td>25.7</td>
              </tr>
              <tr>
                <td className="">9</td>
                <td>42</td>
                <td>8.5</td>
                <td>10.25"</td>
                <td>26</td>
              </tr>
              <tr>
                <td className="">9.5</td>
                <td>42-43</td>
                <td>9</td>
                <td>10.4375"</td>
                <td>26.7</td>
              </tr>
              <tr>
                <td className="">10</td>
                <td>43</td>
                <td>9.5</td>
                <td>10.5625"</td>
                <td>27</td>
              </tr>
              <tr>
                <td className="">10.5</td>
                <td>43-44</td>
                <td>10</td>
                <td>10.75"</td>
                <td>27.3</td>
              </tr>
              <tr>
                <td className="">11</td>
                <td>44</td>
                <td>10.5</td>
                <td>10.9375"</td>
                <td>27.9</td>
              </tr>
              <tr>
                <td className="">11.5</td>
                <td>44-45</td>
                <td>11</td>
                <td>11.125"</td>
                <td>28.3</td>
              </tr>
              <tr>
                <td className="">12</td>
                <td>45</td>
                <td>11.5</td>
                <td>11.25"</td>
                <td>28.6</td>
              </tr>
              <tr>
                <td className="">13</td>
                <td>46</td>
                <td>12.5</td>
                <td>11.5625"</td>
                <td>29.4</td>
              </tr>
              <tr>
                <td className="">14</td>
                <td>47</td>
                <td>13.5</td>
                <td>11.875"</td>
                <td>30.2</td>
              </tr>
              <tr>
                <td className="">15</td>
                <td>48</td>
                <td>14.5</td>
                <td>12.1875"</td>
                <td>31</td>
              </tr>
              <tr>
                <td className="">16</td>
                <td>49</td>
                <td>15.5</td>
                <td>12.5"</td>
                <td>31.8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  {/* End Size Chart  */}
  {/* End Size Chart  */}
  {/* 
    ========================
  Wrapper 
    ========================
    */}
  <div className="wrapper">
    {/* heder height */}
    <div className="header-height-bar" />
    {/* Header */}
    <header className="header-main bg-body header-light fixed-top header-height header-option-1">
      {/* Header Top */}
      <div className="header-top small bg-black small">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* Left */}
            <div className="d-flex align-items-center justify-content-center d-none d-lg-block">
              <ul className="nav white-link">
                <li className="nav-item me-3 text-white text-opacity-85">
                  <span>
                    <i className="bi bi-clock me-2" /> Visit time: Mon-Sat
                    9:00-19:00
                  </span>
                </li>
                <li className="nav-item">
                  <a href="#" className="navbar-link">
                    <i className="bi bi-headset me-2" />
                    Call us now: +01 035-477-5588
                  </a>
                </li>
              </ul>
            </div>
            {/* Right */}
            <div className="d-flex align-items-center justify-content-center w-100 w-lg-auto">
              {/* Language */}
              <div className="dropdown ms-0 ms-lg-3">
                <a
                  className="dropdown-toggle text-white"
                  href="#"
                  role="button"
                  id="dropdown_language"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    className="me-2"
                    width={20}
                    src="assets/images/uk.svg"
                    alt=""
                  />
                  English
                </a>
                <div
                  className="dropdown-menu mt-2 shadow"
                  aria-labelledby="dropdown_language"
                  style={{ margin: 0 }}
                >
                  <div className="dropdown-item">
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
                  </a>
                  <a className="dropdown-item" href="#">
                    <img
                      className="me-2"
                      width={20}
                      src="assets/images/gr.svg"
                      alt=""
                    />{" "}
                    Deutsch
                  </a>
                </div>
              </div>
              {/* Top link */}
              <ul className="nav ms-auto ms-lg-3">
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link text-white"
                    data-bs-toggle="modal"
                    data-bs-target="#topbarlogin"
                  >
                    <i className="fi-user me-2" />
                    Login
                  </a>
                </li>
              </ul>
              {/* Top social */}
              <div className="nav header-social justify-content-end d-none d-lg-block white-link">
                <a className="h-social-link" href="#">
                  <i className="bi bi-facebook" />
                </a>{" "}
                <a className="h-social-link" href="#">
                  <i className="bi bi-twitter" />
                </a>{" "}
                <a className="h-social-link" href="#">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Top */}
      <nav className="navbar navbar-expand-lg navbar-light d-none d-lg-flex">
        <div className="container">
          {/* Logo */}{" "}
          <a className="navbar-brand" href="../../index.html">
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
          </a>
          {/* Logo */}
          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="dropdown dropdown-full nav-item">
                <a href="#" className="nav-link">
                  Demos
                </a>{" "}
                <label className="px-dropdown-toggle mob-menu" />
                <div className="dropdown-menu dropdown-mega-menu py-0">
                  <div className="container p-3 p-lg-4">
                    <div className="row gy-4">
                      <div className="col-6 col-md-3 col-xl-2">
                        <h6 className="sm-title-02 mb-3 fw-500">
                          Home Options
                        </h6>
                        <ul className="list-unstyled link-list-style-02 m-0">
                          <li>
                            <a href="../home/index.html">Home Option 1</a>
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
                            <a href="../account/shop-cart.html">Cart Page 02</a>{" "}
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
                            <a href="../account/sign-up-02.html">Sign Up 02</a>{" "}
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
                </div>
              </li>
              <li className="dropdown dropdown-full nav-item">
                <a href="#" className="nav-link">
                  Latest
                </a>{" "}
                <label className="px-dropdown-toggle mob-menu" />
                <div className="dropdown-menu dropdown-mega-menu py-0">
                  <div className="container-fluid p-3 p-lg-4">
                    <div className="row gy-4">
                      <div className="col-6 col-md-3">
                        <ul className="list-unstyled link-list-style-04 m-0">
                          <li>
                            <a href="#">WHAT’S NEW</a>
                          </li>
                          <li>
                            <a href="#">BEST SELLING</a>
                          </li>
                          <li>
                            <a href="#">TOP RATED</a>
                          </li>
                          <li>
                            <a href="#">MOST POPULAR</a>
                          </li>
                          <li>
                            <a href="#">EDITOR’S PICKS</a>
                          </li>
                          <li>
                            <a href="#">ON SALE</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6 col-md-3 col-xl-2">
                        <h6 className="sm-title-05 mb-3 fw-500">Women's</h6>
                        <ul className="list-unstyled link-list-style-05 m-0">
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
                      <div className="col-6 col-md-3 col-xl-2">
                        <h6 className="sm-title-05 mb-3 fw-500">Living Room</h6>
                        <ul className="list-unstyled link-list-style-05 m-0">
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
                      <div className="col-12 col-md-3 col-xl-5 d-flex flex-row">
                        <div
                          className="min-h-200px bg-center bg-cover d-flex align-items-center justify-content-center h-100 w-100"
                          style={{
                            backgroundImage:
                              "url(assets/images/blog-home-2.jpg)"
                          }}
                        >
                          <div className="text-center px-4 py-3">
                            <h6 className="text-uppercase text-white mb-0 letter-spacing-4 fw-300">
                              NEW IN
                            </h6>
                            <h3 className="fw-600 h4 text-white">
                              2022 Collection
                            </h3>
                            <div className="pt-2">
                              <a className="btn btn-white btn-sm" href="#">
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="dropdown dropdown-full nav-item">
                <a href="#" className="nav-link">
                  Collection
                </a>
                <label className="px-dropdown-toggle mob-menu" />
                <div className="dropdown-menu dropdown-mega-menu py-0">
                  <div className="container-fluid p-3 p-lg-4">
                    <div className="row gy-4">
                      <div className="col-lg-6">
                        <div className="row gy-4">
                          <div className="col-6">
                            <h6 className="sm-title-04">
                              <a className="text-reset" href="#">
                                Harum Quidem
                              </a>
                            </h6>
                            <ul className="list-unstyled link-list-style-03">
                              <li>
                                <a href="#">All Harum Quidem</a>
                              </li>
                              <li>
                                <a href="#">Cosmopolis</a>
                              </li>
                              <li>
                                <a href="#">Suitó</a>
                              </li>
                              <li>
                                <a href="#">Milancélos</a>
                              </li>
                              <li>
                                <a href="#">Blazéro</a>
                              </li>
                              <li>
                                <a href="#">Glamos</a>
                              </li>
                              <li>
                                <a href="#">Metropolis</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <h6 className="sm-title-04">
                              <a className="text-reset" href="#">
                                Harum Quidem
                              </a>
                            </h6>
                            <ul className="list-unstyled link-list-style-03">
                              <li>
                                <a href="#">All Harum Quidem</a>
                              </li>
                              <li>
                                <a href="#">Cosmopolis</a>
                              </li>
                              <li>
                                <a href="#">Suitó</a>
                              </li>
                              <li>
                                <a href="#">Milancélos</a>
                              </li>
                              <li>
                                <a href="#">Blazéro</a>
                              </li>
                              <li>
                                <a href="#">Glamos</a>
                              </li>
                              <li>
                                <a href="#">Metropolis</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <h6 className="sm-title-04">
                              <a className="text-reset" href="#">
                                Harum Quidem
                              </a>
                            </h6>
                            <ul className="list-unstyled link-list-style-03">
                              <li>
                                <a href="#">All Harum Quidem</a>
                              </li>
                              <li>
                                <a href="#">Cosmopolis</a>
                              </li>
                              <li>
                                <a href="#">Suitó</a>
                              </li>
                              <li>
                                <a href="#">Milancélos</a>
                              </li>
                              <li>
                                <a href="#">Blazéro</a>
                              </li>
                              <li>
                                <a href="#">Glamos</a>
                              </li>
                              <li>
                                <a href="#">Metropolis</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <h6 className="sm-title-04">
                              <a className="text-reset" href="#">
                                Harum Quidem
                              </a>
                            </h6>
                            <ul className="list-unstyled link-list-style-03">
                              <li>
                                <a href="#">All Harum Quidem</a>
                              </li>
                              <li>
                                <a href="#">Cosmopolis</a>
                              </li>
                              <li>
                                <a href="#">Suitó</a>
                              </li>
                              <li>
                                <a href="#">Milancélos</a>
                              </li>
                              <li>
                                <a href="#">Blazéro</a>
                              </li>
                              <li>
                                <a href="#">Glamos</a>
                              </li>
                              <li>
                                <a href="#">Metropolis</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 d-flex flex-column">
                        <div
                          className="rounded h-100 bg-cover bg-no-repeat d-flex align-items-center justify-content-center py-8 p-xl-5"
                          style={{
                            backgroundImage:
                              "url(assets/images/blog-home-3.jpg)"
                          }}
                        >
                          <div className="w-100 text-center">
                            <h6 className="text-uppercase fw-300 text-white mb-2">
                              NEW IN
                            </h6>
                            <h3 className="fw-400 h3 text-white">
                              New Exclusive
                              <br />
                              2022 Collection
                            </h3>
                            <div className="pt-2">
                              <a className="btn btn-white btn-sm" href="#">
                                Shop Now
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
              <li className="dropdown nav-item">
                <a href="#" className="nav-link">
                  Blog
                </a>{" "}
                <label className="px-dropdown-toggle mob-menu" />
                <ul className="dropdown-menu left shadow-lg">
                  <li>
                    <a className="dropdown-item" href="../blog/blog.html">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="../blog/blog-single.html"
                    >
                      Blog Single
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* End Menu */}
          <div className="nav flex-nowrap align-items-center header-right">
            {/* Nav Search*/}
            <div className="nav-item">
              <a
                className="nav-link collapsed"
                data-bs-toggle="collapse"
                href="javascript:void(0)"
                data-bs-target="#search-open"
                aria-expanded="false"
              >
                <i className="fi-search" />
              </a>
            </div>
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
                <a className="dropdown-item" href="#">
                  Login
                </a>{" "}
                <a className="dropdown-item" href="#">
                  Register
                </a>{" "}
                <a className="dropdown-item" href="#">
                  Wishlist
                </a>{" "}
                <a className="dropdown-item" href="#">
                  My account
                </a>
              </div>
            </div>
            {/* Wishlist */}
            <div className="nav-item d-none d-xl-block">
              <a className="nav-link" href="#">
                <i className="fi-heart" />
              </a>
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
          </div>
        </div>
      </nav>
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
              />{" "}
              <img
                className="logo-light"
                src="assets/images/logo-light.svg"
                title=""
                alt=""
              />
            </a>
          </div>
          <div className="mob-end">
            {/* Cart */}
            <div className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="offcanvas"
                href="#modalMiniCart"
                role="button"
                aria-controls="modalMiniCart"
              >
                <i className="fi-shopping-cart" />
                <sub>08</sub>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End Mobile Menu */}
    </header>
    {/* Mobile Bottom */}
    {/* Header Bottom */}
    <div className="mob-header-btn-fixed-01 d-lg-none">
      <div className="mob-hb-in">
        <div className="mob-hb-item">
          <a className="mob-hb-link" href="#">
            <i className="fi-grid" /> <span>Shop</span>
          </a>
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
          <a
            href="#"
            className="mob-hb-link"
            data-bs-toggle="modal"
            data-bs-target="#topbarlogin"
          >
            <i className="fi-user" /> <span>Login</span>
          </a>
        </div>
        <div className="mob-hb-item">
          <a href="#" className="mob-hb-link">
            <i className="fi-heart">
              <sub>08</sub>
            </i>
            <span>Wishlist</span>
          </a>
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
    {/* End Header Bottom */}
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
        <ul className="mob-extra">
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
        </ul>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav mx-auto">
          {/* Cat Menu */}
          <li className="dropdown nav-item vertical-dropdown">
            <a href="index.html" className="nav-link">
              <i className="bi bi-grid-3x3-gap" /> Categories
            </a>{" "}
            <label className="px-dropdown-toggle mob-menu" />
            <ul className="vertical-dropdown-menu dropdown-menu left shadow-none">
              {/* v menu item */}
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-gift me-2" />{" "}
                  <span>Gifts &amp; Toys</span>
                </a>{" "}
                <label className="px-dropdown-toggle mob-menu" />
                <div className="vertical-mm-in">
                  <div className="row gy-4">
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Product section */}
                  <div className="row gy-4 pt-5">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <div
                        className="p-2 rounded d-flex align-items-center position-relative hover-scale"
                        style={{ backgroundColor: "#eee" }}
                      >
                        <div className="col ps-2 pe-4">
                          <h5 className="mb-0">
                            <a href="#" className="stretched-link text-reset">
                              iPhone 12
                            </a>
                          </h5>
                          <span>2 items</span>
                        </div>
                        <div className="avatar avatar-xl hover-scale-in">
                          <img
                            height={80}
                            src="assets/images/iphone_12.png"
                            title=""
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <div
                        className="p-2 rounded d-flex align-items-center position-relative hover-scale"
                        style={{ backgroundColor: "#eee" }}
                      >
                        <div className="col ps-2 pe-4">
                          <h5 className="mb-0">
                            <a href="#" className="stretched-link text-reset">
                              iPhone 13
                            </a>
                          </h5>
                          <span>2 items</span>
                        </div>
                        <div className="avatar avatar-xl hover-scale-in">
                          <img
                            height={80}
                            src="assets/images/iphone_13.png"
                            title=""
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <div
                        className="p-2 rounded d-flex align-items-center position-relative hover-scale"
                        style={{ backgroundColor: "#eee" }}
                      >
                        <div className="col ps-2 pe-4">
                          <h5 className="mb-0">
                            <a href="#" className="stretched-link text-reset">
                              iOs 15
                            </a>
                          </h5>
                          <span>2 items</span>
                        </div>
                        <div className="avatar avatar-xl hover-scale-in">
                          <img
                            height={80}
                            src="assets/images/iphone_ios.png"
                            title=""
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3">
                      <div
                        className="p-2 rounded d-flex align-items-center position-relative hover-scale"
                        style={{ backgroundColor: "#eee" }}
                      >
                        <div className="col ps-2 pe-4">
                          <h5 className="mb-0">
                            <a href="#" className="stretched-link text-reset">
                              Shop More
                            </a>
                          </h5>
                          <span>2 items</span>
                        </div>
                        <div className="avatar avatar-xl hover-scale-in">
                          <img
                            height={80}
                            src="assets/images/shop_iphone.png"
                            title=""
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Product section */}
                </div>
              </li>
              {/* End v menu item */}
              {/* v menu item */}
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-laptop me-2" />
                  <span>Electronics</span>
                </a>{" "}
                <label className="px-dropdown-toggle mob-menu" />
                <div className="vertical-mm-in">
                  <div className="row gy-4">
                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="hover-scale overflow-hidden mb-4 rounded">
                        <a href="#" className="hover-scale-in d-block">
                          <img
                            className="card-img-top"
                            src="assets/images/el-blog-1.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="hover-scale overflow-hidden mb-4 rounded">
                        <a href="#" className="hover-scale-in d-block">
                          <img
                            className="card-img-top"
                            src="assets/images/el-blog-2.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="hover-scale overflow-hidden mb-4 rounded">
                        <a href="#" className="hover-scale-in d-block">
                          <img
                            className="card-img-top"
                            src="assets/images/el-blog-3.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="hover-scale overflow-hidden mb-4 rounded">
                        <a href="#" className="hover-scale-in d-block">
                          <img
                            className="card-img-top"
                            src="assets/images/el-blog-4.jpg"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* End v menu item */}
              {/* v menu item */}
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-octagon-half me-2" />{" "}
                  <span>Fashion &amp; Accessories</span>
                </a>{" "}
                <label className="px-dropdown-toggle mob-menu" />
                <div className="vertical-mm-in">
                  <div className="row gy-4">
                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="product-card-8">
                        <div className="product-card-image">
                          <div className="badge-ribbon">
                            <span className="badge bg-danger">Sale</span>
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn btn-outline-primary"
                              tabIndex={0}
                            >
                              <i className="fi-heart" />{" "}
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-primary"
                              tabIndex={0}
                            >
                              <i className="fi-repeat" />{" "}
                            </a>
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#px-quick-view"
                              href="javascript:void(0)"
                              className="btn btn-outline-primary"
                              tabIndex={0}
                            >
                              <i className="fi-eye" />
                            </a>
                          </div>
                          <div className="product-media">
                            <a href="#" tabIndex={0}>
                              <img
                                className="img-fluid"
                                src="assets/images/air-pod.jpg"
                                title=""
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-card-info">
                          <div className="rating-star text">
                            <i className="bi bi-star-fill active" />
                            <i className="bi bi-star-fill active" />{" "}
                            <i className="bi bi-star-fill active" />{" "}
                            <i className="bi bi-star-fill active" />{" "}
                            <i className="bi bi-star" />
                          </div>
                          <h6 className="product-title">
                            <a href="#" tabIndex={0}>
                              Fine-knit sweater
                            </a>
                          </h6>
                          <div className="product-price">
                            <span className="text-primary">
                              $28.<small>50</small>
                            </span>{" "}
                            <del className="fs-sm text-muted">
                              $38.<small>50</small>
                            </del>
                          </div>
                          <div className="product-cart-btn">
                            <a
                              href="#"
                              className="btn btn-primary btn-sm w-100"
                              tabIndex={0}
                            >
                              <i className="fi-shopping-cart" /> Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="product-card-8">
                        <div className="product-card-image">
                          <div className="badge-ribbon">
                            <span className="badge bg-danger">Sale</span>
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn btn-outline-primary"
                              tabIndex={0}
                            >
                              <i className="fi-heart" />{" "}
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-primary"
                              tabIndex={0}
                            >
                              <i className="fi-repeat" />{" "}
                            </a>
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#px-quick-view"
                              href="javascript:void(0)"
                              className="btn btn-outline-primary"
                              tabIndex={0}
                            >
                              <i className="fi-eye" />
                            </a>
                          </div>
                          <div className="product-media">
                            <a href="#" tabIndex={0}>
                              <img
                                className="img-fluid"
                                src="assets/images/air-pod.jpg"
                                title=""
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-card-info">
                          <div className="rating-star text">
                            <i className="bi bi-star-fill active" />
                            <i className="bi bi-star-fill active" />{" "}
                            <i className="bi bi-star-fill active" />{" "}
                            <i className="bi bi-star-fill active" />{" "}
                            <i className="bi bi-star" />
                          </div>
                          <h6 className="product-title">
                            <a href="#" tabIndex={0}>
                              Fine-knit sweater
                            </a>
                          </h6>
                          <div className="product-price">
                            <span className="text-primary">
                              $28.<small>50</small>
                            </span>{" "}
                            <del className="fs-sm text-muted">
                              $38.<small>50</small>
                            </del>
                          </div>
                          <div className="product-cart-btn">
                            <a
                              href="#"
                              className="btn btn-primary btn-sm w-100"
                              tabIndex={0}
                            >
                              <i className="fi-shopping-cart" /> Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="product-card-8">
                        <div className="product-card-image">
                          <div className="badge-ribbon">
                            <span className="badge bg-danger">Sale</span>
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn btn-outline-primary"
                              tabIndex={0}
                            >
                              <i className="fi-heart" />{" "}
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-primary"
                              tabIndex={0}
                            >
                              <i className="fi-repeat" />{" "}
                            </a>
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#px-quick-view"
                              href="javascript:void(0)"
                              className="btn btn-outline-primary"
                              tabIndex={0}
                            >
                              <i className="fi-eye" />
                            </a>
                          </div>
                          <div className="product-media">
                            <a href="#" tabIndex={0}>
                              <img
                                className="img-fluid"
                                src="assets/images/air-pod.jpg"
                                title=""
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-card-info">
                          <div className="rating-star text">
                            <i className="bi bi-star-fill active" />
                            <i className="bi bi-star-fill active" />{" "}
                            <i className="bi bi-star-fill active" />{" "}
                            <i className="bi bi-star-fill active" />{" "}
                            <i className="bi bi-star" />
                          </div>
                          <h6 className="product-title">
                            <a href="#" tabIndex={0}>
                              Fine-knit sweater
                            </a>
                          </h6>
                          <div className="product-price">
                            <span className="text-primary">
                              $28.<small>50</small>
                            </span>{" "}
                            <del className="fs-sm text-muted">
                              $38.<small>50</small>
                            </del>
                          </div>
                          <div className="product-cart-btn">
                            <a
                              href="#"
                              className="btn btn-primary btn-sm w-100"
                              tabIndex={0}
                            >
                              <i className="fi-shopping-cart" /> Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <div className="product-card-8">
                        <div className="product-card-image">
                          <div className="badge-ribbon">
                            <span className="badge bg-danger">Sale</span>
                          </div>
                          <div className="product-action">
                            <a
                              href="#"
                              className="btn btn-outline-primary"
                              tabIndex={0}
                            >
                              <i className="fi-heart" />{" "}
                            </a>
                            <a
                              href="#"
                              className="btn btn-outline-primary"
                              tabIndex={0}
                            >
                              <i className="fi-repeat" />{" "}
                            </a>
                            <a
                              data-bs-toggle="modal"
                              data-bs-target="#px-quick-view"
                              href="javascript:void(0)"
                              className="btn btn-outline-primary"
                              tabIndex={0}
                            >
                              <i className="fi-eye" />
                            </a>
                          </div>
                          <div className="product-media">
                            <a href="#" tabIndex={0}>
                              <img
                                className="img-fluid"
                                src="assets/images/air-pod.jpg"
                                title=""
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="product-card-info">
                          <div className="rating-star text">
                            <i className="bi bi-star-fill active" />
                            <i className="bi bi-star-fill active" />{" "}
                            <i className="bi bi-star-fill active" />{" "}
                            <i className="bi bi-star-fill active" />{" "}
                            <i className="bi bi-star" />
                          </div>
                          <h6 className="product-title">
                            <a href="#" tabIndex={0}>
                              Fine-knit sweater
                            </a>
                          </h6>
                          <div className="product-price">
                            <span className="text-primary">
                              $28.<small>50</small>
                            </span>{" "}
                            <del className="fs-sm text-muted">
                              $38.<small>50</small>
                            </del>
                          </div>
                          <div className="product-cart-btn">
                            <a
                              href="#"
                              className="btn btn-primary btn-sm w-100"
                              tabIndex={0}
                            >
                              <i className="fi-shopping-cart" /> Add to cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* End v menu item */}
              {/* v menu item */}
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-bag me-2" /> <span>Bags &amp; Shoes</span>
                </a>{" "}
                <label className="px-dropdown-toggle mob-menu" />
                <div className="vertical-mm-in">
                  <div className="row gy-4">
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Smartphone
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Towels Cloud
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Electronics
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="row g-0 px-4 px-lg-5 py-3 align-items-center rounded bg-cover bg-fiex bg-center border mt-4"
                    style={{
                      backgroundImage: "url(assets/images/el-banner-6.jpg)"
                    }}
                  >
                    <div className="col-md-8 my-3 text-center text-md-start">
                      <h3 className="h3 text-white m-0">
                        Eat clean &amp; green. Eat Organic.
                      </h3>
                    </div>
                    <div className="col-md-4 my-3 text-center text-md-end">
                      <a className="btn btn-white" href="#" tabIndex={0}>
                        Discover More
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              {/* End v menu item */}
              {/* v menu item */}
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-watch me-2" />{" "}
                  <span>Optimum Electronics</span>
                </a>{" "}
                <label className="px-dropdown-toggle mob-menu" />
                <div className="vertical-mm-in">
                  <div className="row gy-4">
                    <div className="col-lg-3">
                      <div
                        className="px-4 position-relative pt-5 text-center rounded"
                        style={{ backgroundColor: "#ffe1db" }}
                      >
                        <div className="pb-1">
                          <h6 style={{ color: "#f62b22" }}>New Arrival</h6>
                          <h3 className="m-0 h5">
                            Accessories
                            <br />
                            30% off
                          </h3>
                        </div>
                        <a href="#" className="stretched-link">
                          <img
                            src="assets/images/accessories.png"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div
                        className="px-4 position-relative pt-5 text-center rounded"
                        style={{ backgroundColor: "#e6ffd6" }}
                      >
                        <div className="pb-1">
                          <h6 style={{ color: "#2e6b1c" }}>New Arrival</h6>
                          <h3 className="m-0 h5">
                            Airpods
                            <br />
                            30% off
                          </h3>
                        </div>
                        <a href="#" className="stretched-link">
                          <img
                            src="assets/images/airpods.png"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div
                        className="px-4 position-relative pt-5 text-center rounded"
                        style={{ backgroundColor: "#ffdee1" }}
                      >
                        <div className="pb-1">
                          <h6 style={{ color: "#fe0d25" }}>New Arrival</h6>
                          <h3 className="m-0 h5">
                            Airtag
                            <br />
                            30% off
                          </h3>
                        </div>
                        <a href="#" className="stretched-link">
                          <img src="assets/images/airtag.png" title="" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div
                        className="px-4 position-relative pt-5 text-center rounded"
                        style={{ backgroundColor: "#ffdee1" }}
                      >
                        <div className="pb-1">
                          <h6 style={{ color: "#fe0d25" }}>New Arrival</h6>
                          <h3 className="m-0 h5">
                            iphone
                            <br />
                            30% off
                          </h3>
                        </div>
                        <a href="#" className="stretched-link">
                          <img src="assets/images/iphone.png" title="" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div
                        className="px-4 position-relative pt-5 text-center rounded"
                        style={{ backgroundColor: "#ffe1db" }}
                      >
                        <div className="pb-1">
                          <h6 style={{ color: "#f62b22" }}>New Arrival</h6>
                          <h3 className="m-0 h5">
                            iPhone 12
                            <br />
                            30% off
                          </h3>
                        </div>
                        <a href="#" className="stretched-link">
                          <img
                            src="assets/images/iphone_12.png"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div
                        className="px-4 position-relative pt-5 text-center rounded"
                        style={{ backgroundColor: "#e6ffd6" }}
                      >
                        <div className="pb-1">
                          <h6 style={{ color: "#2e6b1c" }}>New Arrival</h6>
                          <h3 className="m-0 h5">
                            iPhone 13
                            <br />
                            30% off
                          </h3>
                        </div>
                        <a href="#" className="stretched-link">
                          <img
                            src="assets/images/iphone_13.png"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div
                        className="px-4 position-relative pt-5 text-center rounded"
                        style={{ backgroundColor: "#ffdee1" }}
                      >
                        <div className="pb-1">
                          <h6 style={{ color: "#fe0d25" }}>New Arrival</h6>
                          <h3 className="m-0 h5">
                            iphone iOs
                            <br />
                            30% off
                          </h3>
                        </div>
                        <a href="#" className="stretched-link">
                          <img
                            src="assets/images/iphone_ios.png"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div
                        className="px-4 position-relative pt-5 text-center rounded"
                        style={{ backgroundColor: "#ffdee1" }}
                      >
                        <div className="pb-1">
                          <h6 style={{ color: "#fe0d25" }}>New Arrival</h6>
                          <h3 className="m-0 h5">
                            Organic and fresh
                            <br />
                            30% off
                          </h3>
                        </div>
                        <a href="#" className="stretched-link">
                          <img
                            src="assets/images/accessories.png"
                            title=""
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* End v menu item */}
              {/* v menu item */}
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fi-heart me-2" />{" "}
                  <span>Health &amp; Beauty</span>
                </a>{" "}
                <label className="px-dropdown-toggle mob-menu" />
                <div className="vertical-mm-in">
                  <div className="row gy-4">
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* End v menu item */}
              {/* v menu item */}
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-house-door me-2" />{" "}
                  <span>Home &amp; Lights</span>
                </a>{" "}
                <label className="px-dropdown-toggle mob-menu" />
                <div className="vertical-mm-in">
                  <div className="row gy-4">
                    <div className="col-lg-6">
                      <div className="row gy-4">
                        <div className="col-6">
                          <h6 className="sm-title-04">
                            <a className="text-reset" href="#">
                              Harum Quidem
                            </a>
                          </h6>
                          <ul className="list-unstyled link-list-style-03">
                            <li>
                              <a href="#">All Harum Quidem</a>
                            </li>
                            <li>
                              <a href="#">Cosmopolis</a>
                            </li>
                            <li>
                              <a href="#">Suitó</a>
                            </li>
                            <li>
                              <a href="#">Milancélos</a>
                            </li>
                            <li>
                              <a href="#">Blazéro</a>
                            </li>
                            <li>
                              <a href="#">Glamos</a>
                            </li>
                            <li>
                              <a href="#">Metropolis</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <h6 className="sm-title-04">
                            <a className="text-reset" href="#">
                              Harum Quidem
                            </a>
                          </h6>
                          <ul className="list-unstyled link-list-style-03">
                            <li>
                              <a href="#">All Harum Quidem</a>
                            </li>
                            <li>
                              <a href="#">Cosmopolis</a>
                            </li>
                            <li>
                              <a href="#">Suitó</a>
                            </li>
                            <li>
                              <a href="#">Milancélos</a>
                            </li>
                            <li>
                              <a href="#">Blazéro</a>
                            </li>
                            <li>
                              <a href="#">Glamos</a>
                            </li>
                            <li>
                              <a href="#">Metropolis</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <h6 className="sm-title-04">
                            <a className="text-reset" href="#">
                              Harum Quidem
                            </a>
                          </h6>
                          <ul className="list-unstyled link-list-style-03">
                            <li>
                              <a href="#">All Harum Quidem</a>
                            </li>
                            <li>
                              <a href="#">Cosmopolis</a>
                            </li>
                            <li>
                              <a href="#">Suitó</a>
                            </li>
                            <li>
                              <a href="#">Milancélos</a>
                            </li>
                            <li>
                              <a href="#">Blazéro</a>
                            </li>
                            <li>
                              <a href="#">Glamos</a>
                            </li>
                            <li>
                              <a href="#">Metropolis</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <h6 className="sm-title-04">
                            <a className="text-reset" href="#">
                              Harum Quidem
                            </a>
                          </h6>
                          <ul className="list-unstyled link-list-style-03">
                            <li>
                              <a href="#">All Harum Quidem</a>
                            </li>
                            <li>
                              <a href="#">Cosmopolis</a>
                            </li>
                            <li>
                              <a href="#">Suitó</a>
                            </li>
                            <li>
                              <a href="#">Milancélos</a>
                            </li>
                            <li>
                              <a href="#">Blazéro</a>
                            </li>
                            <li>
                              <a href="#">Glamos</a>
                            </li>
                            <li>
                              <a href="#">Metropolis</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column">
                      <div
                        className="rounded h-100 bg-cover bg-no-repeat d-flex align-items-center justify-content-center py-8 p-xl-5"
                        style={{
                          backgroundImage: "url(assets/images/el-banner-2.jpg)"
                        }}
                      >
                        <div className="w-100 text-center">
                          <h6 className="text-uppercase fw-300 text-white mb-2">
                            NEW IN
                          </h6>
                          <h3 className="fw-400 h3 text-white">
                            Canyon
                            <br />
                            Star Raider
                          </h3>
                          <div className="pt-2">
                            <a className="btn btn-white btn-sm" href="#">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* End v menu item */}
              {/* v menu item */}
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-droplet me-2" />
                  <span>Metallurgy</span>
                </a>{" "}
                <label className="px-dropdown-toggle mob-menu" />
                <div className="vertical-mm-in">
                  <div className="row gy-4">
                    <div className="col-lg-6 d-flex flex-column">
                      <div
                        className="rounded h-100 bg-cover bg-no-repeat d-flex align-items-center justify-content-center py-8 p-xl-5"
                        style={{
                          backgroundImage: "url(assets/images/el-banner-1.jpg)"
                        }}
                      >
                        <div className="w-100 text-center">
                          <h6 className="text-uppercase fw-300 text-white mb-2">
                            NEW IN
                          </h6>
                          <h3 className="fw-400 h3 text-white">
                            Canyon
                            <br />
                            Star Raider
                          </h3>
                          <div className="pt-2">
                            <a className="btn btn-white btn-sm" href="#">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="row gy-4">
                        <div className="col-6">
                          <h6 className="sm-title-04">
                            <a className="text-reset" href="#">
                              Harum Quidem
                            </a>
                          </h6>
                          <ul className="list-unstyled link-list-style-03">
                            <li>
                              <a href="#">All Harum Quidem</a>
                            </li>
                            <li>
                              <a href="#">Cosmopolis</a>
                            </li>
                            <li>
                              <a href="#">Suitó</a>
                            </li>
                            <li>
                              <a href="#">Milancélos</a>
                            </li>
                            <li>
                              <a href="#">Blazéro</a>
                            </li>
                            <li>
                              <a href="#">Glamos</a>
                            </li>
                            <li>
                              <a href="#">Metropolis</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <h6 className="sm-title-04">
                            <a className="text-reset" href="#">
                              Harum Quidem
                            </a>
                          </h6>
                          <ul className="list-unstyled link-list-style-03">
                            <li>
                              <a href="#">All Harum Quidem</a>
                            </li>
                            <li>
                              <a href="#">Cosmopolis</a>
                            </li>
                            <li>
                              <a href="#">Suitó</a>
                            </li>
                            <li>
                              <a href="#">Milancélos</a>
                            </li>
                            <li>
                              <a href="#">Blazéro</a>
                            </li>
                            <li>
                              <a href="#">Glamos</a>
                            </li>
                            <li>
                              <a href="#">Metropolis</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <h6 className="sm-title-04">
                            <a className="text-reset" href="#">
                              Harum Quidem
                            </a>
                          </h6>
                          <ul className="list-unstyled link-list-style-03">
                            <li>
                              <a href="#">All Harum Quidem</a>
                            </li>
                            <li>
                              <a href="#">Cosmopolis</a>
                            </li>
                            <li>
                              <a href="#">Suitó</a>
                            </li>
                            <li>
                              <a href="#">Milancélos</a>
                            </li>
                            <li>
                              <a href="#">Blazéro</a>
                            </li>
                            <li>
                              <a href="#">Glamos</a>
                            </li>
                            <li>
                              <a href="#">Metropolis</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <h6 className="sm-title-04">
                            <a className="text-reset" href="#">
                              Harum Quidem
                            </a>
                          </h6>
                          <ul className="list-unstyled link-list-style-03">
                            <li>
                              <a href="#">All Harum Quidem</a>
                            </li>
                            <li>
                              <a href="#">Cosmopolis</a>
                            </li>
                            <li>
                              <a href="#">Suitó</a>
                            </li>
                            <li>
                              <a href="#">Milancélos</a>
                            </li>
                            <li>
                              <a href="#">Blazéro</a>
                            </li>
                            <li>
                              <a href="#">Glamos</a>
                            </li>
                            <li>
                              <a href="#">Metropolis</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* End v menu item */}
              {/* v menu item */}
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-badge-ad me-2" />
                  <span>Bedroom</span>
                </a>{" "}
                <label className="px-dropdown-toggle mob-menu" />
                <div className="vertical-mm-in">
                  <div className="row gy-4">
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                      <h6 className="sm-title-04">
                        <a className="text-reset" href="#">
                          Harum Quidem
                        </a>
                      </h6>
                      <ul className="list-unstyled link-list-style-03">
                        <li>
                          <a href="#">All Harum Quidem</a>
                        </li>
                        <li>
                          <a href="#">Cosmopolis</a>
                        </li>
                        <li>
                          <a href="#">Suitó</a>
                        </li>
                        <li>
                          <a href="#">Milancélos</a>
                        </li>
                        <li>
                          <a href="#">Blazéro</a>
                        </li>
                        <li>
                          <a href="#">Glamos</a>
                        </li>
                        <li>
                          <a href="#">Metropolis</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              {/* End v menu item */}
              {/* v menu item */}
              <li>
                <a className="dropdown-item" href="#">
                  <i className="bi bi-command me-2" />{" "}
                  <span>Industrial Parts</span>
                </a>{" "}
                <label className="px-dropdown-toggle mob-menu" />
                <div className="vertical-mm-in">
                  <div className="row g-3">
                    <div className="col-lg-4">
                      <div
                        className="min-h-250px bg-center bg-cover rounded d-flex flex-column align-items-center justify-content-center"
                        style={{
                          backgroundImage: "url(assets/images/el-banner-1.jpg)"
                        }}
                      >
                        <div className="w-100 text-center">
                          <h6 className="text-uppercase fw-300 text-white mb-2">
                            NEW IN
                          </h6>
                          <h3 className="fw-400 h3 text-white">
                            Canyon
                            <br />
                            Star Raider
                          </h3>
                          <div className="pt-2">
                            <a className="btn btn-white btn-sm" href="#">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="min-h-250px bg-center bg-cover rounded d-flex flex-column align-items-center justify-content-center"
                        style={{
                          backgroundImage: "url(assets/images/el-banner-2.jpg)"
                        }}
                      >
                        <div className="w-100 text-center">
                          <h6 className="text-uppercase fw-300 text-white mb-2">
                            NEW IN
                          </h6>
                          <h3 className="fw-400 h3 text-white">
                            Canyon
                            <br />
                            Star Raider
                          </h3>
                          <div className="pt-2">
                            <a className="btn btn-white btn-sm" href="#">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="min-h-250px bg-center bg-cover rounded d-flex flex-column align-items-center justify-content-center"
                        style={{
                          backgroundImage: "url(assets/images/el-banner-3.jpg)"
                        }}
                      >
                        <div className="w-100 text-center">
                          <h6 className="text-uppercase fw-300 text-white mb-2">
                            NEW IN
                          </h6>
                          <h3 className="fw-400 h3 text-white">
                            Canyon
                            <br />
                            Star Raider
                          </h3>
                          <div className="pt-2">
                            <a className="btn btn-white btn-sm" href="#">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="min-h-250px bg-center bg-cover rounded d-flex flex-column align-items-center justify-content-center"
                        style={{
                          backgroundImage: "url(assets/images/el-banner-4.jpg)"
                        }}
                      >
                        <div className="w-100 text-center">
                          <h6 className="text-uppercase fw-300 text-white mb-2">
                            NEW IN
                          </h6>
                          <h3 className="fw-400 h3 text-white">
                            Canyon
                            <br />
                            Star Raider
                          </h3>
                          <div className="pt-2">
                            <a className="btn btn-white btn-sm" href="#">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="min-h-250px bg-center bg-cover rounded d-flex flex-column align-items-center justify-content-center"
                        style={{
                          backgroundImage: "url(assets/images/el-banner-5.jpg)"
                        }}
                      >
                        <div className="w-100 text-center">
                          <h6 className="text-uppercase fw-300 text-white mb-2">
                            NEW IN
                          </h6>
                          <h3 className="fw-400 h3 text-white">
                            Canyon
                            <br />
                            Star Raider
                          </h3>
                          <div className="pt-2">
                            <a className="btn btn-white btn-sm" href="#">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div
                        className="min-h-250px bg-center bg-cover rounded d-flex flex-column align-items-center justify-content-center"
                        style={{
                          backgroundImage: "url(assets/images/el-banner-6.jpg)"
                        }}
                      >
                        <div className="w-100 text-center">
                          <h6 className="text-uppercase fw-300 text-white mb-2">
                            NEW IN
                          </h6>
                          <h3 className="fw-400 h3 text-white">
                            Canyon
                            <br />
                            Star Raider
                          </h3>
                          <div className="pt-2">
                            <a className="btn btn-white btn-sm" href="#">
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* End v menu item */}
            </ul>
          </li>
          <li className="dropdown dropdown-full nav-item">
            <a href="#" className="nav-link">
              Demos
            </a>{" "}
            <label className="px-dropdown-toggle mob-menu" />
            <div className="dropdown-menu dropdown-mega-menu py-0">
              <div className="container p-3 p-lg-4">
                <div className="row gy-4">
                  <div className="col-6 col-md-3 col-xl-2">
                    <h6 className="sm-title-02 mb-3 fw-500">Home Options</h6>
                    <ul className="list-unstyled link-list-style-02 m-0">
                      <li>
                        <a href="../home/index.html">Home Option 1</a>
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
                    <h6 className="sm-title-02 mb-3 fw-500">Shop Option 1</h6>
                    <ul className="list-unstyled link-list-style-02 mb-4">
                      <li>
                        <a href="../shop-01/shop.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="../shop-01/shop-filter.html">Shop Filter</a>
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
                    <h6 className="sm-title-02 mb-3 fw-500">Shop Option 2</h6>
                    <ul className="list-unstyled link-list-style-02 m-0">
                      <li>
                        <a href="../shop-02/shop.html">Shop Page</a>{" "}
                        <span className="menu-label">New</span>
                      </li>
                      <li>
                        <a href="../shop-02/shop-fw.html">Shop Full Width</a>{" "}
                        <span className="menu-label">New</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-3 col-xl-2">
                    <h6 className="sm-title-02 mb-3 fw-500">Shop Option 3</h6>
                    <ul className="list-unstyled link-list-style-02 mb-4">
                      <li>
                        <a href="../shop-03/shop.html">Shop Page</a>{" "}
                        <span className="menu-label">New</span>
                      </li>
                      <li>
                        <a href="../shop-03/shop-fw.html">Shop Full Width</a>{" "}
                        <span className="menu-label">New</span>
                      </li>
                    </ul>
                    <h6 className="sm-title-02 mb-3 fw-500">Shop Option 4</h6>
                    <ul className="list-unstyled link-list-style-02 mb-4">
                      <li>
                        <a href="../shop-04/shop.html">Shop Page</a>{" "}
                        <span className="menu-label">New</span>
                      </li>
                      <li>
                        <a href="../shop-04/shop-fw.html">Shop Full Width</a>{" "}
                        <span className="menu-label">New</span>
                      </li>
                    </ul>
                    <h6 className="sm-title-02 mb-3 fw-500">Shopping Cart</h6>
                    <ul className="list-unstyled link-list-style-02 m-0">
                      <li>
                        <a href="../account/shopping-cart.html">Cart Page</a>
                      </li>
                      <li>
                        <a href="../account/shop-cart.html">Cart Page 02</a>{" "}
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
                    <h6 className="sm-title-02 mb-3 fw-500">Account Pages</h6>
                    <ul className="list-unstyled link-list-style-02 mb-0">
                      <li>
                        <a href="../account/account-address.html">Address</a>
                      </li>
                      <li>
                        <a href="../account/account-order.html">Order</a>
                      </li>
                      <li>
                        <a href="../account/account-payment.html">Payment</a>
                      </li>
                      <li>
                        <a href="../account/account-profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="../account/account-tickets.html">Tickets</a>
                      </li>
                      <li>
                        <a href="../account/account-wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="../account/wishlist.html">Wishlist 02</a>
                      </li>
                      <li>
                        <a href="../account/account-tabs.html">Account Tab</a>
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
                        <a href="../account/sign-up-02.html">Sign Up 02</a>{" "}
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
                        <a href="../account/checkout-02.html">Checkout 02</a>{" "}
                        <span className="menu-label">New</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown dropdown-full nav-item">
            <a href="#" className="nav-link">
              Latest
            </a>{" "}
            <label className="px-dropdown-toggle mob-menu" />
            <div className="dropdown-menu dropdown-mega-menu py-0">
              <div className="container-fluid p-3 p-lg-4">
                <div className="row gy-4">
                  <div className="col-6 col-md-3">
                    <ul className="list-unstyled link-list-style-04 m-0">
                      <li>
                        <a href="#">WHAT’S NEW</a>
                      </li>
                      <li>
                        <a href="#">BEST SELLING</a>
                      </li>
                      <li>
                        <a href="#">TOP RATED</a>
                      </li>
                      <li>
                        <a href="#">MOST POPULAR</a>
                      </li>
                      <li>
                        <a href="#">EDITOR’S PICKS</a>
                      </li>
                      <li>
                        <a href="#">ON SALE</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-3 col-xl-2">
                    <h6 className="sm-title-05 mb-3 fw-500">Women's</h6>
                    <ul className="list-unstyled link-list-style-05 m-0">
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
                  <div className="col-6 col-md-3 col-xl-2">
                    <h6 className="sm-title-05 mb-3 fw-500">Living Room</h6>
                    <ul className="list-unstyled link-list-style-05 m-0">
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
                  <div className="col-12 col-md-3 col-xl-5 d-flex flex-row">
                    <div
                      className="min-h-200px bg-center bg-cover d-flex align-items-center justify-content-center h-100 w-100"
                      style={{
                        backgroundImage: "url(assets/images/blog-home-2.jpg)"
                      }}
                    >
                      <div className="text-center px-4 py-3">
                        <h6 className="text-uppercase text-white mb-0 letter-spacing-4 fw-300">
                          NEW IN
                        </h6>
                        <h3 className="fw-600 h4 text-white">
                          2022 Collection
                        </h3>
                        <div className="pt-2">
                          <a className="btn btn-white btn-sm" href="#">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown dropdown-full nav-item">
            <a href="#" className="nav-link">
              Collection
            </a>{" "}
            <label className="px-dropdown-toggle mob-menu" />
            <div className="dropdown-menu dropdown-mega-menu py-0">
              <div className="container-fluid p-3 p-lg-4">
                <div className="row gy-4">
                  <div className="col-lg-6">
                    <div className="row gy-4">
                      <div className="col-6">
                        <h6 className="sm-title-04">
                          <a className="text-reset" href="#">
                            Harum Quidem
                          </a>
                        </h6>
                        <ul className="list-unstyled link-list-style-03">
                          <li>
                            <a href="#">All Harum Quidem</a>
                          </li>
                          <li>
                            <a href="#">Cosmopolis</a>
                          </li>
                          <li>
                            <a href="#">Suitó</a>
                          </li>
                          <li>
                            <a href="#">Milancélos</a>
                          </li>
                          <li>
                            <a href="#">Blazéro</a>
                          </li>
                          <li>
                            <a href="#">Glamos</a>
                          </li>
                          <li>
                            <a href="#">Metropolis</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <h6 className="sm-title-04">
                          <a className="text-reset" href="#">
                            Harum Quidem
                          </a>
                        </h6>
                        <ul className="list-unstyled link-list-style-03">
                          <li>
                            <a href="#">All Harum Quidem</a>
                          </li>
                          <li>
                            <a href="#">Cosmopolis</a>
                          </li>
                          <li>
                            <a href="#">Suitó</a>
                          </li>
                          <li>
                            <a href="#">Milancélos</a>
                          </li>
                          <li>
                            <a href="#">Blazéro</a>
                          </li>
                          <li>
                            <a href="#">Glamos</a>
                          </li>
                          <li>
                            <a href="#">Metropolis</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <h6 className="sm-title-04">
                          <a className="text-reset" href="#">
                            Harum Quidem
                          </a>
                        </h6>
                        <ul className="list-unstyled link-list-style-03">
                          <li>
                            <a href="#">All Harum Quidem</a>
                          </li>
                          <li>
                            <a href="#">Cosmopolis</a>
                          </li>
                          <li>
                            <a href="#">Suitó</a>
                          </li>
                          <li>
                            <a href="#">Milancélos</a>
                          </li>
                          <li>
                            <a href="#">Blazéro</a>
                          </li>
                          <li>
                            <a href="#">Glamos</a>
                          </li>
                          <li>
                            <a href="#">Metropolis</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6">
                        <h6 className="sm-title-04">
                          <a className="text-reset" href="#">
                            Harum Quidem
                          </a>
                        </h6>
                        <ul className="list-unstyled link-list-style-03">
                          <li>
                            <a href="#">All Harum Quidem</a>
                          </li>
                          <li>
                            <a href="#">Cosmopolis</a>
                          </li>
                          <li>
                            <a href="#">Suitó</a>
                          </li>
                          <li>
                            <a href="#">Milancélos</a>
                          </li>
                          <li>
                            <a href="#">Blazéro</a>
                          </li>
                          <li>
                            <a href="#">Glamos</a>
                          </li>
                          <li>
                            <a href="#">Metropolis</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex flex-column">
                    <div
                      className="rounded h-100 bg-cover bg-no-repeat d-flex align-items-center justify-content-center py-8 p-xl-5"
                      style={{
                        backgroundImage: "url(assets/images/blog-home-3.jpg)"
                      }}
                    >
                      <div className="w-100 text-center">
                        <h6 className="text-uppercase fw-300 text-white mb-2">
                          NEW IN
                        </h6>
                        <h3 className="fw-400 h3 text-white">
                          New Exclusive
                          <br />
                          2022 Collection
                        </h3>
                        <div className="pt-2">
                          <a className="btn btn-white btn-sm" href="#">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown dropdown-full nav-item">
            <a href="#" className="nav-link">
              Categories
            </a>{" "}
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
                <a className="dropdown-item" href="../pages/support-topic.html">
                  Support Topic
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../pages/contact-us.html">
                  Contact Us
                </a>
              </li>
            </ul>
          </li>
          <li className="dropdown nav-item">
            <a href="#" className="nav-link">
              Blog
            </a>{" "}
            <label className="px-dropdown-toggle mob-menu" />
            <ul className="dropdown-menu left shadow-lg">
              <li>
                <a className="dropdown-item" href="../blog/blog.html">
                  Blog
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="../blog/blog-single.html">
                  Blog Single
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    {/* End Mobile Bottom */}
    {/* End Header */}
    {/* Main */}
    <main>
      {/* Breadcrumb */}
      <div className="py-6">
        <div className="container">
          <div className="row">
            {/* Profile Menu */}
            <div className="col-lg-4 pb-4 pb-lg-0 col-xxl-3 pe-xxl-5">
              <div className="bg-body border border-bottom-0 shadow-lg">
                <div className="d-flex p-3 align-items-center">
                  <div className="avatar avatar-lg rounded-circle">
                    <img src="assets/images/avatar-2.jpg" title="" alt="" />
                  </div>
                  <div className="col ps-3">
                    <h6 className="m-0">Jennifer Winget</h6>
                    <small>
                      <a href="#">your@email.com</a>
                    </small>
                  </div>
                </div>
                <div className="bg-gray-200 p-3 border-bottom border-top">
                  <h6 className="m-0">Dashboard</h6>
                </div>
                <ul className="list-unstyled mb-0 theme-link">
                  <li className="border-bottom mb-0">
                    <a
                      className="nav-link-style d-flex align-items-center p-3"
                      href="account-order.html"
                    >
                      <i className="bi bi-bag me-2" /> Order
                      <div className="ms-auto badge-pill badge bg-secondary">
                        5
                      </div>
                    </a>
                  </li>
                  <li className="border-bottom mb-0">
                    <a
                      className="nav-link-style d-flex align-items-center p-3"
                      href="account-wishlist.html"
                    >
                      <i className="fi-heart me-2" />
                      Wishlist
                      <div className="ms-auto badge-pill badge bg-secondary">
                        5
                      </div>
                    </a>
                  </li>
                  <li className="border-bottom mb-0">
                    <a
                      className="nav-link-style d-flex align-items-center p-3"
                      href="account-tickets.html"
                    >
                      <i className="bi bi-bookmark me-2" />
                      Support Tickets
                      <div className="ms-auto badge-pill badge bg-secondary">
                        0
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="bg-gray-200 p-3 border-bottom">
                  <h6 className="m-0">Account settings</h6>
                </div>
                <ul className="list-unstyled mb-0 theme-link">
                  <li className="border-bottom mb-0">
                    <a
                      className="nav-link-style d-flex align-items-center active p-3"
                      href="account-profile.html"
                    >
                      <i className="fi-user me-2" />
                      Profile info
                    </a>
                  </li>
                  <li className="border-bottom mb-0">
                    <a
                      className="nav-link-style d-flex align-items-center p-3"
                      href="account-address.html"
                    >
                      <i className="bi bi-map-fill me-2" />
                      Addresses
                    </a>
                  </li>
                  <li className="border-bottom mb-0">
                    <a
                      className="nav-link-style d-flex align-items-center p-3"
                      href="account-payment.html"
                    >
                      <i className="bi bi-credit-card me-2" />
                      Payment
                    </a>
                  </li>
                  <li className="border-bottom mb-0">
                    <a
                      className="nav-link-style d-flex align-items-center p-3"
                      href="#"
                    >
                      <i className="bi bi-box-arrow-left me-2" />
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Profile Menu */}
            {/* Content */}
            <div className="col-lg-8 col-xxl-9">
              <div className="card mb-5">
                <div className="card-header py-3">
                  <h5 className="m-0">Profile Update</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6 mb-3">
                      <label htmlFor="formFile" className="form-label">
                        Change Profile Photo
                      </label>{" "}
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                      />
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        First Name<span className="text-danger">*</span>
                      </label>{" "}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                      />
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        Last Name<span className="text-danger">*</span>
                      </label>{" "}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                      />
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        Email address<span className="text-danger">*</span>
                      </label>{" "}
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail3"
                        placeholder="E-mail"
                      />
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">
                        Mobile Number<span className="text-danger">*</span>
                      </label>{" "}
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile"
                      />
                    </div>
                    <div className="col-sm-6 mb-3">
                      <label className="form-label">Landline Number</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Landline"
                      />
                    </div>
                    <div className="col-12 pt-2">
                      <button className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header py-3">
                  <h5 className="m-0">Change your password</h5>
                </div>
                <div className="card-body p-4">
                  <form>
                    <div className="row">
                      <div className="col-sm-12 mb-3">
                        <div className="form-group">
                          <label htmlFor="password_old" className="form-label">
                            Old password
                          </label>{" "}
                          <input
                            type="password"
                            id="password_old"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 mb-3">
                        <div className="form-group">
                          <label htmlFor="password_1" className="form-label">
                            New password
                          </label>{" "}
                          <input
                            type="password"
                            id="password_1"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 mb-3">
                        <div className="form-group">
                          <label htmlFor="password_2" className="form-label">
                            Retype new password
                          </label>
                          <input
                            type="password"
                            id="password_2"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-12 pt-2">
                        <button className="btn btn-primary">
                          Change password
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* End Content */}
          </div>
        </div>
      </div>
      {/*Table */}
    </main>
    {/* End Main */}
    {/* Footer */}
    <footer className="bg-dark footer border-top">
      <div className="footer-top py-6">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4 my-3">
              <div className="pb-3">
                <img src="assets/images/logo-light.svg" title="" alt="" />
              </div>
              <address className="white-link mb-4">
                <p className="text-white text-opacity-85 mb-2">
                  301 The Greenhouse London,
                  <br />
                  E2 8DY UK
                </p>
                <p className="mb-2">
                  <a
                    className="border-bottom border-secondary"
                    href="mailto:support@domain.com"
                  >
                    support@domain.com
                  </a>
                </p>
                <p className="mb-2">
                  <a
                    className="border-bottom border-secondary"
                    href="tel:820-885-3321"
                  >
                    820-885-3321
                  </a>
                </p>
              </address>
              <div className="nav white-link fs-5">
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
              <div className="nav-item h-switch dropdown mt-4">
                <button
                  className="theme-switch btn btn-sm btn-outline-light dropdown-toggle"
                  id="bd-theme"
                  type="button"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                >
                  <span className="bi theme-icon-active">
                    <i className="bi-circle-half" />{" "}
                  </span>
                  <span className="ps-1">Theme Mode</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="bd-theme">
                  <li>
                    <button
                      type="button"
                      className="dropdown-item"
                      data-bs-theme-value="light"
                    >
                      <span className="bi me-2 opacity-50 theme-icon">
                        <i className="bi-sun-fill" />
                      </span>
                      Light{" "}
                      <span className="bi ms-auto d-none">
                        <i className="bi-check2" />
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item"
                      data-bs-theme-value="dark"
                    >
                      <span className="bi me-2 opacity-50 theme-icon">
                        <i className="bi-moon-stars-fill" />
                      </span>
                      Dark{" "}
                      <span className="bi ms-auto d-none">
                        <i className="bi-check2" />
                      </span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item active"
                      data-bs-theme-value="auto"
                    >
                      <span className="bi me-2 opacity-50 theme-icon">
                        <i className="bi-circle-half" />{" "}
                      </span>
                      Auto{" "}
                      <span className="bi ms-auto d-none">
                        <i className="bi-check2" />
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-lg-2 my-3">
              <h6 className="text-white text-uppercase mb-5">Support</h6>
              <ul className="list-unstyled white-link footer-link-1 m-0">
                <li className="pb-2">
                  <a href="#">Help</a>
                </li>
                <li className="pb-2">
                  <a href="#">Contact Us</a>
                </li>
                <li className="pb-2">
                  <a href="#">Feedback</a>
                </li>
                <li className="pb-2">
                  <a href="#">Unsubscribe</a>
                </li>
                <li className="pb-2">
                  <a href="#">Reservations</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-lg-2 my-3">
              <h6 className="text-white text-uppercase mb-5">Policies</h6>
              <ul className="list-unstyled white-link footer-link-1 m-0">
                <li className="pb-2">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="pb-2">
                  <a href="#">Terms of use</a>
                </li>
                <li className="pb-2">
                  <a href="#">Gift card conditions</a>
                </li>
                <li className="pb-2">
                  <a href="#">Shipping</a>
                </li>
                <li className="pb-2">
                  <a href="#">Return</a>
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
          <div className="row">
            <div className="col-md-6 text-center text-md-start py-1">
              <p className="m-0 text-white text-opacity-85">
                © 2024 copyright by{" "}
                <a
                  href="https://www.pxdraft.com/"
                  target="_blank"
                  className="text-reset"
                >
                  pxdraft
                </a>
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end py-1">
              <img src="assets/images/payments.png" title="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* End Footer */}
  </div>
  {/* 
    ========================
 End Wrapper 
    ========================
    */}
  {/* script start */}
  {/* jquery */}
  {/*bootstrap*/}
  {/* swiper carousel */}
  {/* magnific */}
  {/* isotope */}
  {/* count-down */}
  {/* count-down */}
  {/* Theme Js */}
  {/* End script start */}
</>

    </>
  )
}

export default AccountProfile