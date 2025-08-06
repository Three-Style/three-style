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
      
      </Helmet>

      <>
        {/* <div id="loading" className="loading-preloader">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div> */}





        {/* <div
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
                  
                  <div className="col-lg-6 lightbox-gallery product-gallery">
                    <img
                      src="assets/images/product-x-1.jpg"
                      className="img-fluid"
                      title=""
                      alt=""
                    />
                  </div>
                
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

                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="wrapper">
          
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
