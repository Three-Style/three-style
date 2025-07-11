import HomeFooter from "../components/partials/Footer/footer";
import { Helmet } from "react-helmet";
import "react-lazy-load-image-component/src/effects/blur.css";
import HomeHeader from "../components/partials/Header/header";

function Home() {
  return (
    <>
      <Helmet>
        <title>One-Stop Solution For All Your Fitness Needs - FG Group</title>
        <meta
          name="description"
          content="FG Group Solely Works In The Health & Fitness Sector. We Provide Diet & Exercise Plans As Well As Health And Fitness Courses. We Also Offer Digital Marketing Courses For Fitness Professionals, And Ready-Made Meals For Healthy Living."
        />
        <meta
          name="keywords"
          content="best dietitian in surat, online dietitian consultation, gyms in surat, personal training gyms near me, certified nutritionist course, fitness trainer course in india, online fitness courses, nutritionist course online india, certification for fitness trainer, nutritionist online course, best digital marketing course, best digital marketing course online"
        />
        {/* <link
          rel="preload"
          href={`${process.env.PUBLIC_URL}/assets/images/img/website_intro_video1.mp4`}
          as="fetch"
          type="video/mp4"
        /> */}
      </Helmet>

      <>
        {/* metas */}
        <meta charSet="utf-8" />
        <meta name="author" content="pxdraft" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
        <meta
          name="keywords"
          content="ShopApp - eCommerce Bootstrap 5 Template"
        />
        <meta
          name="description"
          content="ShopApp - eCommerce Bootstrap 5 Template"
        />
        {/* title */}
        <title>ShopApp - eCommerce Bootstrap 5 Template</title>
        {/* Favicon */}
        <link rel="shortcut icon" href="assets/images/favicon.ico" />
        {/* CSS Template */}
        <link href="assets/css/swimwear.css" rel="stylesheet" />
        {/* Skippy & Prload */}
        {/* skippy */}
        <a
          id="skippy"
          className="skippy visually-hidden-focusable overflow-hidden"
          href="#content"
        >
          <div className="container">
            <span className="u-skiplink-text">Skip to main content</span>
          </div>
        </a>
        {/* <div id="loading" className="loading-preloader">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div> */}
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
                        <label
                          className="form-label"
                          htmlFor="exampleInputEmail1"
                        >
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
                        <label
                          className="form-label"
                          htmlFor="exampleInputEmail1"
                        >
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
                      <label
                        className="form-label"
                        htmlFor="exampleInputEmail1"
                      >
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
                      <label
                        className="form-label"
                        htmlFor="exampleInputPassword1"
                      >
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
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
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
                      <span className="m-0 text-muted w-100 d-block">
                        $40.00
                      </span>
                    </p>
                    {/*Footer */}
                    <div className="d-flex align-items-center">
                      {/* Select */}
                      {/* <select class="form-select form-select-sm w-auto">
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
                      {/* <select class="form-select form-select-sm w-auto">
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
                      {/* <select class="form-select form-select-sm w-auto">
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
                      {/* <select class="form-select form-select-sm w-auto">
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
                  <a className="btn btn-primary" href="checkout-shipping.html">
                    <i className="bi-credit-card-2-back me-2" />
                    Proceed to Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Mini Cart  */}
        {/* Quick View  */}
        <div
          className="modal-quick-view modal fade"
          id="px-quick-view"
          tabIndex={-1}
        >
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
                          Lorem ipsum dolor sit amet, consectetur adipisic elit
                          eiusm tempor incidid ut labore et dolore magna aliqua.
                          Ut enim ad minim venialo quis nostrud exercitation
                          ullamco
                        </p>
                      </div>
                      <div className="product-attribute">
                        <label className="fs-6 text-mode pb-2 fw-500">
                          Size
                        </label>
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
                        <label className="fs-6 text-mode pb-2 fw-500">
                          Color
                        </label>
                        <div className="nav-thumbs nav mb-3">
                          <div className="form-check radio-color large form-check-inline me-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="color1"
                              id="color1"
                              defaultChecked=""
                            />{" "}
                            <label
                              className="radio-color-label"
                              htmlFor="color1"
                            >
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
                            <label
                              className="radio-color-label"
                              htmlFor="color2"
                            >
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
                            <label
                              className="radio-color-label"
                              htmlFor="color3"
                            >
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
                            <label
                              className="radio-color-label"
                              htmlFor="color4"
                            >
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <ul className="mb-3">
                  <li>Comodous in tempor ullamcorper miaculis</li>
                  <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
                  <li>Divamus sit amet purus justo.</li>
                  <li>
                    Proin molestie egestas orci ac suscipit risus posuere
                    loremous
                  </li>
                </ul>
                <h4 className="pt-4">Privacy Policy</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <ul className="mb-5">
                  <li>Comodous in tempor ullamcorper miaculis</li>
                  <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
                  <li>Divamus sit amet purus justo.</li>
                  <li>
                    Proin molestie egestas orci ac suscipit risus posuere
                    loremous
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
          <div className="header-height-bar" />
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
              {/* <div class="mob-hb-item"><a href="#" class="mob-hb-link" data-bs-toggle="modal"
            data-bs-target="#topbarlogin"><i class="fi-user"></i> <span>Login</span></a></div> */}
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
          <HomeHeader />
          <main>
            {/* Home Slider */}
            <div
              className="swiper swiper-container"
              data-swiper-options='{
   "slidesPerView": 1,
   "spaceBetween": 0,
   "loop": true,
   "pagination": {
       "el": ".swiper-pagination",
       "clickable": true
   },
   "navigation": {
       "nextEl": ".swiper-next-01",
       "prevEl": ".swiper-prev-01"
   }
     }'
            >
              <div className="swiper-wrapper">
                {/* Slide 1 */}
                <div className="swiper-slide">
                  <div
                    className="bg-no-repeat bg-cover bg-center px-8"
                    style={{
                      backgroundImage:
                        "url(assets/images/goggles-home-banner-1.jpg)",
                    }}
                  >
                    <div className="container">
                      <div className="row min-vh-75 align-items-center py-12 justify-content-lg-end">
                        <div className="col-lg-6">
                          <h6 className="fw-500 text-primary mb-3 letter-spacing-2 text-white">
                            TRENDING NOW
                          </h6>
                          <h1 className="display-4 fw-600 mb-4 text-white">
                            New Trending
                            <br />
                            Goggles For Women
                          </h1>
                          <div className="h4 fw-400 text-white text-opacity-85">
                            Up To 50% Off Best Selling At $151.00
                          </div>
                          <div className="pt-3">
                            <a className="btn btn-outline-light" href="#">
                              Discover More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide 2 */}
                <div className="swiper-slide">
                  <div
                    className="bg-no-repeat bg-cover bg-center px-8"
                    style={{
                      backgroundImage:
                        "url(assets/images/goggles-home-banner-2.jpg)",
                    }}
                  >
                    <div className="container">
                      <div className="row min-vh-75 align-items-center py-12">
                        <div className="col-lg-6">
                          <h6 className="fw-500 text-primary mb-3 letter-spacing-2 text-white">
                            TRENDING NOW
                          </h6>
                          <h1 className="display-4 fw-600 mb-4 text-white">
                            New Trending
                            <br />
                            Goggles For Women
                          </h1>
                          <div className="h4 fw-400 text-white text-opacity-85">
                            Up To 50% Off Best Selling At $151.00
                          </div>
                          <div className="pt-3">
                            <a className="btn btn-outline-light" href="#">
                              Discover More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Navigation Arrows */}
              <div className="swiper-arrow-style-01 swiper-next swiper-next-01">
                <i className="bi bi-chevron-right" />
              </div>
              <div className="swiper-arrow-style-01 swiper-prev swiper-prev-01">
                <i className="bi bi-chevron-left" />
              </div>
              {/* Pagination Dots */}
              <div className="swiper-pagination swiper-pagination-white" />
            </div>
            {/* End Home Slider */}
            {/* section */}
            <section className="section pb-0">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                    <h6 className="text-uppercase letter-spacing-3 text-primary mb-3">
                      Our Category
                    </h6>
                    <h3 className="m-0 font-alt h1">Shop by Category</h3>
                  </div>
                </div>
              </div>
            </section>
            {/* End section */}
            {/* section */}
            <section className="section overflow-hidden">
              <div className="container-fluid">
                <div className="swiper-hover-arrow position-relative">
                  <div
                    className="swiper swiper-container swiper-no-scroll"
                    data-swiper-options='{
                  "slidesPerView": 2,
                  "spaceBetween": 24,
                  "pagination": {
                  "el": ".swiper-pagination",
                  "type": "progressbar"
                  },
                  "navigation": {
                  "nextEl": ".swiper-next-02",
                  "prevEl": ".swiper-prev-02"
                  },
                  "breakpoints": {
                  "600": {
                  "slidesPerView": 2
                  },
                  "991": {
                  "slidesPerView": 3
                  },
                  "1300": {
                  "slidesPerView": 5
                  }
                  }
                  }'
                  >
                    <div className="swiper-wrapper">
                      {/* category */}
                      <div className="swiper-slide">
                        <div className="category-card-01">
                          <a href="#">
                            <div className="category-card-img">
                              <img
                                src="assets/images/swimwear-cat-1.jpg"
                                title=""
                                alt=""
                              />
                            </div>
                            <div className="category-card-info">
                              <div className="small letter-spacing-2 mb-1 text-white">
                                WOMEN"S
                              </div>
                              <h5 className="font-alt h4">
                                <span className="link-effect-02 text-white">
                                  Tees &amp; Tanks
                                </span>
                              </h5>
                            </div>
                          </a>
                        </div>
                      </div>
                      {/* End category */}
                      {/* category */}
                      <div className="swiper-slide">
                        <div className="category-card-01">
                          <a href="#">
                            <div className="category-card-img">
                              <img
                                src="assets/images/swimwear-cat-2.jpg"
                                title=""
                                alt=""
                              />
                            </div>
                            <div className="category-card-info">
                              <div className="small letter-spacing-2 mb-1 text-white">
                                WOMEN"S
                              </div>
                              <h5 className="font-alt h4">
                                <span className="link-effect-02 text-white">
                                  Tees &amp; Tanks
                                </span>
                              </h5>
                            </div>
                          </a>
                        </div>
                      </div>
                      {/* End category */}
                      {/* category */}
                      <div className="swiper-slide">
                        <div className="category-card-01">
                          <a href="#">
                            <div className="category-card-img">
                              <img
                                src="assets/images/swimwear-cat-3.jpg"
                                title=""
                                alt=""
                              />
                            </div>
                            <div className="category-card-info">
                              <div className="small letter-spacing-2 mb-1 text-white">
                                WOMEN"S
                              </div>
                              <h5 className="font-alt h4">
                                <span className="link-effect-02 text-white">
                                  Tees &amp; Tanks
                                </span>
                              </h5>
                            </div>
                          </a>
                        </div>
                      </div>
                      {/* End category */}
                      {/* category */}
                      <div className="swiper-slide">
                        <div className="category-card-01">
                          <a href="#">
                            <div className="category-card-img">
                              <img
                                src="assets/images/swimwear-cat-4.jpg"
                                title=""
                                alt=""
                              />
                            </div>
                            <div className="category-card-info">
                              <div className="small letter-spacing-2 mb-1 text-white">
                                WOMEN"S
                              </div>
                              <h5 className="font-alt h4">
                                <span className="link-effect-02 text-white">
                                  Tees &amp; Tanks
                                </span>
                              </h5>
                            </div>
                          </a>
                        </div>
                      </div>
                      {/* End category */}
                      {/* category */}
                      <div className="swiper-slide">
                        <div className="category-card-01">
                          <a href="#">
                            <div className="category-card-img">
                              <img
                                src="assets/images/swimwear-cat-5.jpg"
                                title=""
                                alt=""
                              />
                            </div>
                            <div className="category-card-info">
                              <div className="small letter-spacing-2 mb-1 text-white">
                                WOMEN"S
                              </div>
                              <h5 className="font-alt h4">
                                <span className="link-effect-02 text-white">
                                  Tees &amp; Tanks
                                </span>
                              </h5>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination mt-4 position-relative" />
                  </div>
                  <div className="swiper-arrow-style-01 swiper-next swiper-next-02 d-xl-none">
                    <i className="bi bi-chevron-right" />
                  </div>
                  <div className="swiper-arrow-style-01 swiper-prev swiper-prev-02 d-xl-none">
                    <i className="bi bi-chevron-left" />
                  </div>
                </div>
              </div>
            </section>
            {/* End section */}
            {/* section */}
            <section className="section">
              <div className="container">
                <div className="row justify-content-center section-heading">
                  <div className="col-lg-6 text-center">
                    <div className="fs-6 text-uppercase letter-spacing-3 text-primary mb-2">
                      Sarees Collection
                    </div>
                    <h3 className="h1 font-alt m-0">Trending This Week</h3>
                  </div>
                </div>
                <div className="row g-3 g-lg-4 justify-content-center">
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />{" "}
                          </a>{" "}
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />{" "}
                          </a>{" "}
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />{" "}
                          </a>{" "}
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />{" "}
                          </a>{" "}
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />{" "}
                          </a>{" "}
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />{" "}
                          </a>{" "}
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />{" "}
                          </a>{" "}
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />{" "}
                          </a>{" "}
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-lg-4 mt-3">
                  <a className="btn btn-outline-primary mx-auto" href="#">
                    View all
                  </a>
                </div>
              </div>
            </section>
            {/* End section */}
            {/* section */}
            <section
              className="section parallax overflow-hidden position-relative"
              style={{
                backgroundImage: 'url("assets/images/parallax.png")',
                backgroundPosition: "50% 0%",
              }}
            >
              <div className="position-absolute top-0 bottom-0 end-0 start-0 bg-black opacity-3" />
              <div className="container position-relative section">
                <div className="row justify-content-center">
                  <div className="col-lg-6 text-center">
                    <h6 className="text-uppercase text-white letter-spacing-3">
                      Exclusive
                    </h6>
                    <h3 className="display-2 text-white font-alt mb-3">
                      Get Ready for a Bright Season
                    </h3>
                    <p className="lead text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="pt-2">
                      <a className="btn btn-outline-white" href="#">
                        Let's Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End section */}
            {/* section */}
            <section className="section overflow-hidden">
              <div className="container-fluid">
                <div className="row justify-content-center section-heading">
                  <div className="col-lg-6 text-center">
                    <div className="fs-6 text-uppercase letter-spacing-3 text-primary mb-2">
                      SHOP BY OCCASION
                    </div>
                    <h3 className="h1 font-alt m-0">New Collection</h3>
                  </div>
                </div>
                <div className="swiper-hover-arrow position-relative">
                  <div
                    className="swiper swiper-container swiper-no-scroll"
                    data-swiper-options='{
                  "slidesPerView": 2,
                  "spaceBetween": 24,
                  "pagination": {
                  "el": ".swiper-pagination",
                  "type": "progressbar"
                  },
                  "navigation": {
                  "nextEl": ".swiper-next-02",
                  "prevEl": ".swiper-prev-02"
                  },
                  "breakpoints": {
                  "600": {
                  "slidesPerView": 2
                  },
                  "991": {
                  "slidesPerView": 3
                  },
                  "1300": {
                  "slidesPerView": 5
                  }
                  }
                  }'
                  >
                    <div className="swiper-wrapper">
                      {/* Product */}
                      <div className="swiper-slide">
                        <div className="product-card-9">
                          <div className="product-card-image">
                            <div className="badge-ribbon">
                              <span>15%</span>
                            </div>
                            <div className="product-action">
                              <a href="#" className="btn">
                                <i className="fi-heart" />{" "}
                              </a>
                              <a href="#" className="btn">
                                <i className="fi-shopping-cart" />
                              </a>
                            </div>
                            <div className="product-media">
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src="assets/images/swimwear-product-2.jpg"
                                  title=""
                                  alt=""
                                />{" "}
                                <img
                                  className="product-media-hover"
                                  src="assets/images/swimwear-product-hover-2.jpg"
                                  title=""
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="product-card-info">
                            <h6 className="product-title">
                              <a href="#">
                                Laxmipati Cocktail K-055 Satin Silk Navy Blue
                                Saree
                              </a>
                            </h6>
                            <div className="product-price">
                              <span className="text-primary">$28</span>
                              <del className="small text-muted">$38</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Product */}
                      {/* Product */}
                      <div className="swiper-slide">
                        <div className="product-card-9">
                          <div className="product-card-image">
                            <div className="badge-ribbon">
                              <span>15%</span>
                            </div>
                            <div className="product-action">
                              <a href="#" className="btn">
                                <i className="fi-heart" />{" "}
                              </a>
                              <a href="#" className="btn">
                                <i className="fi-shopping-cart" />
                              </a>
                            </div>
                            <div className="product-media">
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src="assets/images/swimwear-product-2.jpg"
                                  title=""
                                  alt=""
                                />{" "}
                                <img
                                  className="product-media-hover"
                                  src="assets/images/swimwear-product-hover-2.jpg"
                                  title=""
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="product-card-info">
                            <h6 className="product-title">
                              <a href="#">
                                Laxmipati Cocktail K-055 Satin Silk Navy Blue
                                Saree
                              </a>
                            </h6>
                            <div className="product-price">
                              <span className="text-primary">$28</span>
                              <del className="small text-muted">$38</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Product */}
                      {/* Product */}
                      <div className="swiper-slide">
                        <div className="product-card-9">
                          <div className="product-card-image">
                            <div className="badge-ribbon">
                              <span>15%</span>
                            </div>
                            <div className="product-action">
                              <a href="#" className="btn">
                                <i className="fi-heart" />{" "}
                              </a>
                              <a href="#" className="btn">
                                <i className="fi-shopping-cart" />
                              </a>
                            </div>
                            <div className="product-media">
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src="assets/images/swimwear-product-2.jpg"
                                  title=""
                                  alt=""
                                />{" "}
                                <img
                                  className="product-media-hover"
                                  src="assets/images/swimwear-product-hover-2.jpg"
                                  title=""
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="product-card-info">
                            <h6 className="product-title">
                              <a href="#">
                                Laxmipati Cocktail K-055 Satin Silk Navy Blue
                                Saree
                              </a>
                            </h6>
                            <div className="product-price">
                              <span className="text-primary">$28</span>
                              <del className="small text-muted">$38</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Product */}
                      {/* Product */}
                      <div className="swiper-slide">
                        <div className="product-card-9">
                          <div className="product-card-image">
                            <div className="badge-ribbon">
                              <span>15%</span>
                            </div>
                            <div className="product-action">
                              <a href="#" className="btn">
                                <i className="fi-heart" />{" "}
                              </a>
                              <a href="#" className="btn">
                                <i className="fi-shopping-cart" />
                              </a>
                            </div>
                            <div className="product-media">
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src="assets/images/swimwear-product-2.jpg"
                                  title=""
                                  alt=""
                                />{" "}
                                <img
                                  className="product-media-hover"
                                  src="assets/images/swimwear-product-hover-2.jpg"
                                  title=""
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="product-card-info">
                            <h6 className="product-title">
                              <a href="#">
                                Laxmipati Cocktail K-055 Satin Silk Navy Blue
                                Saree
                              </a>
                            </h6>
                            <div className="product-price">
                              <span className="text-primary">$28</span>
                              <del className="small text-muted">$38</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Product */}
                      {/* Product */}
                      <div className="swiper-slide">
                        <div className="product-card-9">
                          <div className="product-card-image">
                            <div className="badge-ribbon">
                              <span>15%</span>
                            </div>
                            <div className="product-action">
                              <a href="#" className="btn">
                                <i className="fi-heart" />{" "}
                              </a>
                              <a href="#" className="btn">
                                <i className="fi-shopping-cart" />
                              </a>
                            </div>
                            <div className="product-media">
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src="assets/images/swimwear-product-2.jpg"
                                  title=""
                                  alt=""
                                />{" "}
                                <img
                                  className="product-media-hover"
                                  src="assets/images/swimwear-product-hover-2.jpg"
                                  title=""
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="product-card-info">
                            <h6 className="product-title">
                              <a href="#">
                                Laxmipati Cocktail K-055 Satin Silk Navy Blue
                                Saree
                              </a>
                            </h6>
                            <div className="product-price">
                              <span className="text-primary">$28</span>
                              <del className="small text-muted">$38</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Product */}
                      {/* Product */}
                      <div className="swiper-slide">
                        <div className="product-card-9">
                          <div className="product-card-image">
                            <div className="badge-ribbon">
                              <span>15%</span>
                            </div>
                            <div className="product-action">
                              <a href="#" className="btn">
                                <i className="fi-heart" />{" "}
                              </a>
                              <a href="#" className="btn">
                                <i className="fi-shopping-cart" />
                              </a>
                            </div>
                            <div className="product-media">
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src="assets/images/swimwear-product-2.jpg"
                                  title=""
                                  alt=""
                                />{" "}
                                <img
                                  className="product-media-hover"
                                  src="assets/images/swimwear-product-hover-2.jpg"
                                  title=""
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="product-card-info">
                            <h6 className="product-title">
                              <a href="#">
                                Laxmipati Cocktail K-055 Satin Silk Navy Blue
                                Saree
                              </a>
                            </h6>
                            <div className="product-price">
                              <span className="text-primary">$28</span>
                              <del className="small text-muted">$38</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Product */}
                    </div>
                    <div className="swiper-pagination mt-4 position-relative" />
                  </div>
                  <div className="swiper-arrow-style-01 swiper-next swiper-next-02">
                    <i className="bi bi-chevron-right" />
                  </div>
                  <div className="swiper-arrow-style-01 swiper-prev swiper-prev-02">
                    <i className="bi bi-chevron-left" />
                  </div>
                </div>
              </div>
            </section>
            {/* End section */}
            {/* section */}
            <section className="section">
              <div className="container">
                <div className="row gy-4 align-items-center">
                  <div className="col-lg-6">
                    <h6 className="letter-spacing-2 text-primary mb-2">
                      UNIQUE MATERIALS
                    </h6>
                    <h3 className="display-2 font-alt mb-3 lh-1">
                      Fashion is a dirty business.
                    </h3>
                    <p className="lead w-lg-80">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="pt-3">
                      <a className="btn btn-outline-primary" href="#">
                        Lear More About
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <img src="assets/images/cta.png" title="" alt="" />
                  </div>
                </div>
              </div>
            </section>
            {/* End section */}
            {/* section */}
            {/* <section class="section">
      <div class="container">
         <div class="row justify-content-center section-heading">
            <div class="col-lg-6 text-center">
               <div class="fs-6 text-uppercase letter-spacing-3 text-primary mb-2">Testimonials</div>
               <h3 class="h1 font-alt m-0">What Customer Says?</h3>
            </div>
         </div>
         <div class="swiper-hover-arrow position-relative">
            <div class="swiper swiper-container" data-swiper-options='{
                  "slidesPerView": 1,
                  "spaceBetween": 24,
                  "pagination": {
                  "el": ".swiper-pagination"
                  },
                  "breakpoints": {
                  "600": {
                  "slidesPerView": 1
                  },
                  "991": {
                  "slidesPerView": 2
                  }
                  }
                  }'>
               <div class="swiper-wrapper">
                  
                  <div class="swiper-slide">
                     <div class="bg-gray-200 p-4 p-lg-5">
                        <div class="row">
                           <div class="col-md-7 col-lg-8">
                              <h6 class="h5 mb-4">Awesome Products</h6>
                              <div class="fs-2 lh-sm font-alt text-mode mb-4">“I have never loved a
                                 shirt as much as this one! I've worn it with jeans and trousers, and
                                 both look great.”
                              </div>
                              <div class="rating-star text"><i class="bi bi-star-fill active"></i> <i
                                    class="bi bi-star-fill active"></i> <i class="bi bi-star-fill active"></i> <i
                                    class="bi bi-star-fill active"></i> <i class="bi bi-star-fill active"></i>
                              </div>
                              <p class="m-0">Jennifer Lawrence</p>
                           </div>
                           <div class="col-md-5 col-lg-4 d-none d-md-block"><img
                                 src="assets/images/swimwear-testimonial-1.jpg" title="" alt=""></div>
                        </div>
                     </div>
                  </div>
                  
                  <div class="swiper-slide">
                     <div class="bg-gray-200 p-4 p-lg-5">
                        <div class="row">
                           <div class="col-md-7 col-lg-8">
                              <h6 class="h5 mb-4">Awesome Products</h6>
                              <div class="fs-2 lh-sm font-alt text-mode mb-4">“I have never loved a
                                 shirt as much as this one! I've worn it with jeans and trousers, and
                                 both look great.”
                              </div>
                              <div class="rating-star text"><i class="bi bi-star-fill active"></i> <i
                                    class="bi bi-star-fill active"></i> <i class="bi bi-star-fill active"></i> <i
                                    class="bi bi-star-fill active"></i> <i class="bi bi-star-fill active"></i>
                              </div>
                              <p class="m-0">Jennifer Lawrence</p>
                           </div>
                           <div class="col-md-5 col-lg-4 d-none d-md-block"><img
                                 src="assets/images/swimwear-testimonial-2.jpg" title="" alt=""></div>
                        </div>
                     </div>
                  </div>
                  
                  <div class="swiper-slide">
                     <div class="bg-gray-200 p-4 p-lg-5">
                        <div class="row">
                           <div class="col-md-7 col-lg-8">
                              <h6 class="h5 mb-4">Awesome Products</h6>
                              <div class="fs-2 lh-sm font-alt text-mode mb-4">“I have never loved a
                                 shirt as much as this one! I've worn it with jeans and trousers, and
                                 both look great.”
                              </div>
                              <div class="rating-star text"><i class="bi bi-star-fill active"></i> <i
                                    class="bi bi-star-fill active"></i> <i class="bi bi-star-fill active"></i> <i
                                    class="bi bi-star-fill active"></i> <i class="bi bi-star-fill active"></i>
                              </div>
                              <p class="m-0">Jennifer Lawrence</p>
                           </div>
                           <div class="col-md-5 col-lg-4 d-none d-md-block"><img
                                 src="assets/images/swimwear-testimonial-3.jpg" title="" alt=""></div>
                        </div>
                     </div>
                  </div>
                  
                  <div class="swiper-slide">
                     <div class="bg-gray-200 p-4 p-lg-5">
                        <div class="row">
                           <div class="col-md-7 col-lg-8">
                              <h6 class="h5 mb-4">Awesome Products</h6>
                              <div class="fs-2 lh-sm font-alt text-mode mb-4">“I have never loved a
                                 shirt as much as this one! I've worn it with jeans and trousers, and
                                 both look great.”
                              </div>
                              <div class="rating-star text"><i class="bi bi-star-fill active"></i> <i
                                    class="bi bi-star-fill active"></i> <i class="bi bi-star-fill active"></i> <i
                                    class="bi bi-star-fill active"></i> <i class="bi bi-star-fill active"></i>
                              </div>
                              <p class="m-0">Jennifer Lawrence</p>
                           </div>
                           <div class="col-md-5 col-lg-4 d-none d-md-block"><img
                                 src="assets/images/swimwear-testimonial-4.jpg" title="" alt=""></div>
                        </div>
                     </div>
                  </div>
                  
                  <div class="swiper-slide">
                     <div class="bg-gray-200 p-4 p-lg-5">
                        <div class="row">
                           <div class="col-md-7 col-lg-8">
                              <h6 class="h5 mb-4">Awesome Products</h6>
                              <div class="fs-2 lh-sm font-alt text-mode mb-4">“I have never loved a
                                 shirt as much as this one! I've worn it with jeans and trousers, and
                                 both look great.”
                              </div>
                              <div class="rating-star text"><i class="bi bi-star-fill active"></i> <i
                                    class="bi bi-star-fill active"></i> <i class="bi bi-star-fill active"></i> <i
                                    class="bi bi-star-fill active"></i> <i class="bi bi-star-fill active"></i>
                              </div>
                              <p class="m-0">Jennifer Lawrence</p>
                           </div>
                           <div class="col-md-5 col-lg-4 d-none d-md-block"><img
                                 src="assets/images/swimwear-testimonial-5.jpg" title="" alt=""></div>
                        </div>
                     </div>
                  </div>
                  
               </div>
               <div class="swiper-pagination mt-4 position-relative"></div>
            </div>
         </div>
      </div>
   </section> */}
            {/* End section */}
            {/* section */}
            {/* End section */}
            {/* section */}
            <section className="section">
              <div className="container">
                <div className="row justify-content-center section-heading">
                  <div className="col-lg-6 text-center">
                    <div className="fs-6 text-uppercase letter-spacing-3 text-primary mb-2">
                      Kurti Collection
                    </div>
                    <h3 className="h1 font-alt m-0">Best Kurtis For You</h3>
                  </div>
                </div>
                <div className="row g-3 g-lg-4 justify-content-center">
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />{" "}
                          </a>{" "}
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />{" "}
                          </a>{" "}
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />{" "}
                          </a>{" "}
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />{" "}
                          </a>{" "}
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />{" "}
                          </a>{" "}
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />{" "}
                          </a>{" "}
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />{" "}
                          </a>{" "}
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 col-6">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="fi-heart" />{" "}
                          </a>{" "}
                          <a href="#" className="btn">
                            <i className="fi-shopping-cart" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
                            <img
                              className="img-fluid"
                              src="assets/images/swimwear-product-2.jpg"
                              title=""
                              alt=""
                            />{" "}
                            <img
                              className="product-media-hover"
                              src="assets/images/swimwear-product-hover-2.jpg"
                              title=""
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-lg-4 mt-3">
                  <a className="btn btn-outline-primary mx-auto" href="#">
                    View all
                  </a>
                </div>
              </div>
            </section>
            {/* End section */}
            {/* section */}
            <div
              className="parallax section bg-dark"
              data-jarallax=""
              data-video-src="mp4:assets/images/home/brand-promotion-vd.mp4"
            >
              <div className="position-absolute top-0 bottom-0 end-0 start-0 bg-black opacity-3 z-n1" />
              <div className="container">
                <div className="row justify-content-center py-10">
                  <div className="col-lg-6 text-center">
                    <h6 className="text-uppercase text-white letter-spacing-3">
                      Exclusive
                    </h6>
                    <h3 className="display-2 text-white font-alt mb-3">
                      Best Summer Collection
                    </h3>
                    <p className="lead text-white">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="pt-2">
                      <a className="btn btn-outline-white" href="#">
                        Let's Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End section */}
            {/* section */}
            {/* <section class="section">
      <div class="container">
         <div class="row justify-content-center section-heading">
            <div class="col-lg-6 text-center">
               <div class="fs-6 text-uppercase letter-spacing-3 text-primary mb-2">BLOG POST</div>
               <h3 class="h1 font-alt m-0">Latest News</h3>
            </div>
         </div>
         <div class="row">
            <div class="col-lg-4">
               <div class="hover-scale position-relative">
                  <div class="hover-scale-in position-relative"><img src="assets/images/swimwear-blog-1.jpg"
                        title="" alt=""> <span
                        class="position-absolute top-0 start-0 ms-3 mt-3 bg-primary px-3 py-2 text-white small rounded-3 fw-700">30
                        Aug, 2022</span>
                  </div>
                  <div class="pt-3">
                     <span class="d-block mb-2"><a class="letter-spacing-3 text-primary text-uppercase small"
                           href="#">Business</a></span>
                     <div class="fs-4 text-mode mb-2 lh-sm font-alt"><a class="text-reset stretched-link"
                           href="#">How to take beautiful photos with phone?</a></div>
                     <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt
                     </p>
                  </div>
               </div>
            </div>
            <div class="col-lg-4">
               <div class="hover-scale position-relative">
                  <div class="hover-scale-in position-relative"><img src="assets/images/swimwear-blog-2.jpg"
                        title="" alt=""> <span
                        class="position-absolute top-0 start-0 ms-3 mt-3 bg-primary px-3 py-2 text-white small rounded-3 fw-700">30
                        Aug, 2022</span>
                  </div>
                  <div class="pt-3">
                     <span class="d-block mb-2"><a class="letter-spacing-3 text-primary text-uppercase small"
                           href="#">Business</a></span>
                     <div class="fs-4 text-mode mb-2 lh-sm font-alt"><a class="text-reset stretched-link"
                           href="#">How to take beautiful photos with phone?</a></div>
                     <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt
                     </p>
                  </div>
               </div>
            </div>
            <div class="col-lg-4">
               <div class="hover-scale position-relative">
                  <div class="hover-scale-in position-relative"><img src="assets/images/swimwear-blog-3.jpg"
                        title="" alt=""> <span
                        class="position-absolute top-0 start-0 ms-3 mt-3 bg-primary px-3 py-2 text-white small rounded-3 fw-700">30
                        Aug, 2022</span>
                  </div>
                  <div class="pt-3">
                     <span class="d-block mb-2"><a class="letter-spacing-3 text-primary text-uppercase small"
                           href="#">Business</a></span>
                     <div class="fs-4 text-mode mb-2 lh-sm font-alt"><a class="text-reset stretched-link"
                           href="#">How to take beautiful photos with phone?</a></div>
                     <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section> */}
            {/* End section */}
          </main>
          {/* End Main */}
          {/* Footer */}
          <HomeFooter />

          {/* End Footer */}
        </div>
      </>
    </>
  );
}

export default Home;
