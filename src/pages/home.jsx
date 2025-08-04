// import offerOne from '.../assets/';
// import offerTwo from '.../assets/images/home/offer-image-two.webp';
import HomeFooter from "../components/partials/Footer/footer";
import { Helmet } from "react-helmet";
import "react-lazy-load-image-component/src/effects/blur.css";
import HomeHeader from "../components/partials/Header/header";
import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import HomeProduct from "../components/home/HomeProduct";

function Home() {
  useEffect(() => {
    // Initialize Swiper sliders after component mounts
    const initializeSwipers = () => {
      // Initialize all swiper containers
      const swiperContainers = document.querySelectorAll(".swiper-container");

      swiperContainers.forEach((container, index) => {
        // Get data-swiper-options if available
        const dataOptions = container.getAttribute("data-swiper-options");
        let options = {
          modules: [Navigation, Pagination, Autoplay],
          slidesPerView: 1,
          spaceBetween: 0,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-next-01",
            prevEl: ".swiper-prev-01",
          },
        };

        // If data-swiper-options exists, parse and merge it
        if (dataOptions) {
          try {
            const parsedOptions = JSON.parse(dataOptions);
            options = { ...options, ...parsedOptions };
          } catch (e) {
            console.warn("Failed to parse swiper options:", e);
          }
        }

        // Create unique navigation selectors for multiple sliders
        if (swiperContainers.length > 1) {
          // Check for different navigation selectors
          const nextEl02 = container
            .closest(".swiper-hover-arrow")
            ?.querySelector(".swiper-next-02");
          const prevEl02 = container
            .closest(".swiper-hover-arrow")
            ?.querySelector(".swiper-prev-02");
          const nextEl01 = container
            .closest(".swiper-hover-arrow")
            ?.querySelector(".swiper-next-01");
          const prevEl01 = container
            .closest(".swiper-hover-arrow")
            ?.querySelector(".swiper-prev-01");
          const paginationEl = container
            .closest(".swiper-hover-arrow")
            ?.querySelector(".swiper-pagination");

          if (nextEl02 && prevEl02) {
            options.navigation = {
              nextEl: nextEl02,
              prevEl: prevEl02,
            };
          } else if (nextEl01 && prevEl01) {
            options.navigation = {
              nextEl: nextEl01,
              prevEl: prevEl01,
            };
          }

          if (paginationEl) {
            options.pagination = {
              ...options.pagination,
              el: paginationEl,
            };
          }
        }

        new Swiper(container, options);
      });
    };

    // Initialize lightbox gallery
    const initializeLightbox = () => {
      // Check if jQuery and Magnific Popup are available
      if (window.$ && window.$.fn.magnificPopup) {
        const GalleryPopup = window.$(".lightbox-gallery");
        if (GalleryPopup.length > 0) {
          window.$(".lightbox-gallery").magnificPopup({
            delegate: ".gallery-link",
            type: "image",
            tLoading: "Loading image #%curr%...",
            mainClass: "mfp-fade",
            fixedContentPos: true,
            closeBtnInside: false,
            gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0, 1],
            },
          });
        }
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      initializeSwipers();
      initializeLightbox();
    }, 100);
  }, []);

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
        <div className="wrapper">
          <div className="header-height-bar" />
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
          {/* End Header Bottom */}
          <HomeHeader />

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
                                  <a
                                    href="#"
                                    className="stretched-link text-reset"
                                  >
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
                                  <a
                                    href="#"
                                    className="stretched-link text-reset"
                                  >
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
                                  <a
                                    href="#"
                                    className="stretched-link text-reset"
                                  >
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
                                  <a
                                    href="#"
                                    className="stretched-link text-reset"
                                  >
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
                                    <i className="fi-repeat" />
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
                                  <i className="bi bi-star-fill active" />
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
                                    <i className="fi-shopping-cart" /> Add to
                                    cart
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
                                    <i className="fi-repeat" />
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
                                  <i className="bi bi-star-fill active" />
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
                                    <i className="fi-shopping-cart" /> Add to
                                    cart
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
                                    <i className="fi-repeat" />
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
                                  <i className="bi bi-star-fill active" />
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
                                    <i className="fi-shopping-cart" /> Add to
                                    cart
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
                                    <i className="fi-repeat" />
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
                                  <i className="bi bi-star-fill active" />
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
                                    <i className="fi-shopping-cart" /> Add to
                                    cart
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
                        <i className="bi bi-bag me-2" />{" "}
                        <span>Bags &amp; Shoes</span>
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
                            backgroundImage:
                              "url(assets/images/el-banner-6.jpg)",
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
                                <h6 style={{ color: "#f62b22" }}>
                                  New Arrival
                                </h6>
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
                                <h6 style={{ color: "#2e6b1c" }}>
                                  New Arrival
                                </h6>
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
                                <h6 style={{ color: "#fe0d25" }}>
                                  New Arrival
                                </h6>
                                <h3 className="m-0 h5">
                                  Airtag
                                  <br />
                                  30% off
                                </h3>
                              </div>
                              <a href="#" className="stretched-link">
                                <img
                                  src="assets/images/airtag.png"
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
                                <h6 style={{ color: "#fe0d25" }}>
                                  New Arrival
                                </h6>
                                <h3 className="m-0 h5">
                                  iphone
                                  <br />
                                  30% off
                                </h3>
                              </div>
                              <a href="#" className="stretched-link">
                                <img
                                  src="assets/images/iphone.png"
                                  title=""
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div
                              className="px-4 position-relative pt-5 text-center rounded"
                              style={{ backgroundColor: "#ffe1db" }}
                            >
                              <div className="pb-1">
                                <h6 style={{ color: "#f62b22" }}>
                                  New Arrival
                                </h6>
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
                                <h6 style={{ color: "#2e6b1c" }}>
                                  New Arrival
                                </h6>
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
                                <h6 style={{ color: "#fe0d25" }}>
                                  New Arrival
                                </h6>
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
                                <h6 style={{ color: "#fe0d25" }}>
                                  New Arrival
                                </h6>
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
                                backgroundImage:
                                  "url(assets/images/el-banner-2.jpg)",
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
                                backgroundImage:
                                  "url(assets/images/el-banner-1.jpg)",
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
                                backgroundImage:
                                  "url(assets/images/el-banner-1.jpg)",
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
                                backgroundImage:
                                  "url(assets/images/el-banner-2.jpg)",
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
                                backgroundImage:
                                  "url(assets/images/el-banner-3.jpg)",
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
                                backgroundImage:
                                  "url(assets/images/el-banner-4.jpg)",
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
                                backgroundImage:
                                  "url(assets/images/el-banner-5.jpg)",
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
                                backgroundImage:
                                  "url(assets/images/el-banner-6.jpg)",
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
                              <a href="#">WHAT'S NEW</a>
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
                              <a href="#">EDITOR'S PICKS</a>
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
                          <h6 className="sm-title-05 mb-3 fw-500">
                            Living Room
                          </h6>
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
                                "url(assets/images/blog-home-2.jpg)",
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
                              backgroundImage:
                                "url(assets/images/blog-home-3.jpg)",
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
          </div>
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
                    className="bg-no-repeat bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url(assets/images/home/banner-one.png)",
                    }}
                  >
                    <div className="container">
                      <div className="row align-items-center py-12 justify-content-lg-end text-center">
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
                    className="bg-no-repeat bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url(assets/images/home/banner-two.jpg)",
                    }}
                  >
                    <div className="container">
                      <div className="row align-items-center py-12 justify-content-lg-end text-center">
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
                {/* Slide 3 */}
                <div className="swiper-slide">
                  <div
                    className="bg-no-repeat bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url(assets/images/home/banner-three.jpg)",
                    }}
                  >
                    <div className="container">
                      <div className="row align-items-center py-12 justify-content-lg-end text-center">
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
                          <Link to="/shop">
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
                          </Link>
                        </div>
                      </div>
                      {/* End category */}
                      {/* category */}
                      <div className="swiper-slide">
                        <div className="category-card-01">
                          <Link to="/shop">
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
                          </Link>
                        </div>
                      </div>
                      {/* End category */}
                      {/* category */}
                      <div className="swiper-slide">
                        <div className="category-card-01">
                          <Link to="/shop">
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
                          </Link>
                        </div>
                      </div>
                      {/* End category */}
                      {/* category */}
                      <div className="swiper-slide">
                        <div className="category-card-01">
                          <Link to="/shop">
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
                          </Link>
                        </div>
                      </div>
                      {/* End category */}
                      {/* category */}
                      <div className="swiper-slide">
                        <div className="category-card-01">
                          <Link to="/shop">
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
                          </Link>
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

            <HomeProduct />

            <section
              className="section parallax attachment overflow-hidden position-relative"
              style={{
                backgroundImage: 'url("assets/images/parallax.png")',
                backgroundPosition: "50% 0%",
              }}
            >
              <div className="position-absolute top-0 bottom-0 end-0 start-0 bg-black opacity-3"></div>
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
                      <Link to="/shop" className="btn btn-outline-white">
                        Let's Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

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
                              <Link to="/product-details">
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
                              </Link>
                            </div>
                          </div>
                          <div className="product-card-info">
                            <h6 className="product-title">
                              <Link to="/product-details">
                                Laxmipati Cocktail K-055 Satin Silk Navy Blue
                                Saree
                              </Link>
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
                              <Link to="/product-details">
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
                              </Link>
                            </div>
                          </div>
                          <div className="product-card-info">
                            <h6 className="product-title">
                              <Link to="/product-details">
                                Laxmipati Cocktail K-055 Satin Silk Navy Blue
                                Saree
                              </Link>
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
                              <Link to="/product-details">
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
                              </Link>
                            </div>
                          </div>
                          <div className="product-card-info">
                            <h6 className="product-title">
                              <Link to="/product-details">
                                Laxmipati Cocktail K-055 Satin Silk Navy Blue
                                Saree
                              </Link>
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
                              <Link to="/product-details">
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
                              </Link>
                            </div>
                          </div>
                          <div className="product-card-info">
                            <h6 className="product-title">
                              <Link to="/product-details">
                                Laxmipati Cocktail K-055 Satin Silk Navy Blue
                                Saree
                              </Link>
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
                              <Link to="/product-details">
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
                              </Link>
                            </div>
                          </div>
                          <div className="product-card-info">
                            <h6 className="product-title">
                              <Link to="/product-details">
                                Laxmipati Cocktail K-055 Satin Silk Navy Blue
                                Saree
                              </Link>
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
                              <Link to="/product-details">
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
                              </Link>
                            </div>
                          </div>
                          <div className="product-card-info">
                            <h6 className="product-title">
                              <Link to="/product-details">
                                Laxmipati Cocktail K-055 Satin Silk Navy Blue
                                Saree
                              </Link>
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
                    {/* <div className="swiper-pagination mt-4 position-relative" /> */}
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

            <section className="under-price-section section">
              <div className="container">
                <div className="row gy-4 align-items-center">
                  <div className="col-md-6">
                    <a href="#" className="under-price-section__card">
                      <div className="under-price-section__image-container">
                        <img src="/assets/images/home/offer-image-one.webp" alt="Sarees Under ₹2000" className="img-fluid" />
                        <div className="under-price-section__text-overlay text-end">
                          <h3>Sarees</h3>
                          <p>Under ₹2000</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="#" className="under-price-section__card">
                      <div className="under-price-section__image-container">
                        <img src="/assets/images/home/offer-image-two.webp" alt="Kurtis Under ₹1500" className="img-fluid" />
                        <div className="under-price-section__text-overlay text-start">
                          <h3>Kurtis</h3>
                          <p>Under ₹1500</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>

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
                          <Link to="/product-details">
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
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <Link to="/product-details">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </Link>
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
                          <Link to="/product-details">
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
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <Link to="/product-details">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </Link>
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
                          <Link to="/product-details">
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
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <Link to="/product-details">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </Link>
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
                          <Link to="/product-details">
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
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <Link to="/product-details">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </Link>
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
                          <Link to="/product-details">
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
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <Link to="/product-details">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </Link>
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
                          <Link to="/product-details">
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
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <Link to="/product-details">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </Link>
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
                          <Link to="/product-details">
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
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <Link to="/product-details">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </Link>
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
                          <Link to="/product-details">
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
                          </Link>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <Link to="/product-details">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </Link>
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
                  <Link to="/shop" className="btn btn-outline-primary mx-auto">
                    View all
                  </Link>
                </div>
              </div>
            </section>

            <div
              className="section "
              style={{ position: "relative", zIndex: 0, overflow: "hidden" }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  minWidth: "100%",
                  minHeight: "auto",
                  zIndex: -2,
                }}
              >
                <source
                  src="/assets/images/home/brand-promotion-vd.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Overlay */}
              <div
                className="position-absolute top-0 bottom-0 end-0 start-0 bg-black opacity-3"
                style={{ zIndex: -1 }}
              />

              {/* Content */}
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
          </main>
          <HomeFooter />
        </div>
      </>
    </>
  );
}

export default Home;
