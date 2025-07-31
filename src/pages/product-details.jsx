import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";
import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import { useCart } from "../context/CartContext";
import { Link, useLocation } from "react-router-dom";
import { publicAxiosInstance } from "../assets/js/config/api";

const ProductDetails = () => {
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
          slidesPerView: 2,
          spaceBetween: 24,
          pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },
          navigation: {
            nextEl: ".swiper-next-02",
            prevEl: ".swiper-prev-02",
          },
          breakpoints: {
            600: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 5,
            },
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
          const nextEl = container
            .closest(".swiper-hover-arrow")
            ?.querySelector(".swiper-next-02");
          const prevEl = container
            .closest(".swiper-hover-arrow")
            ?.querySelector(".swiper-prev-02");
          const paginationEl = container
            .closest(".swiper-hover-arrow")
            ?.querySelector(".swiper-pagination");

          if (nextEl && prevEl) {
            options.navigation = {
              nextEl: nextEl,
              prevEl: prevEl,
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

      // Initialize product gallery sliders if they exist
      const swiperGallery = document.querySelector(".swiper_gallery");
      const swiperThumbGallery = document.querySelector(
        ".swiper_thumb_gallery"
      );

      if (swiperThumbGallery && swiperGallery) {
        const swiper_gallery = new Swiper(".swiper_thumb_gallery", {
          modules: [Navigation, Thumbs],
          spaceBetween: 10,
          slidesPerView: 5,
          freeMode: true,
          watchSlidesProgress: true,
          navigation: {
            nextEl: ".swiper-next-pd-details_thumb",
            prevEl: ".swiper-prev-pd-details_thumb",
          },
        });

        const swiper2 = new Swiper(".swiper_gallery", {
          modules: [Navigation, Thumbs],
          spaceBetween: 10,
          effect: "fade",
          thumbs: {
            swiper: swiper_gallery,
          },
        });
      }
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
              preload: [0, 1], // Will preload 0 - before current, and 1 after current image
            },
          });
        }
      } else {
        // Fallback: try to load Magnific Popup dynamically
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js";
        script.onload = () => {
          if (window.$ && window.$.fn.magnificPopup) {
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
        };
        document.head.appendChild(script);
      }
    };

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      initializeSwipers();
      initializeLightbox();
    }, 100);
  }, []);
  const { openCart } = useCart();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const product_id = searchParams.get("id");
  const [productData, setProductData] = useState({});

  const getUserData = async () => {
    try {
      const response = await publicAxiosInstance.get(
        `/products?id=${product_id}`
      );
      const filteredData = response.data.data;
      setProductData(filteredData);
      console.log("filteredData :- ", filteredData);
    } catch (error) {
      console.error("Error in getUserData:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <HomeHeader />

      <main>
        {/* Breadcrumb */}
        <section className="product-details py-6">
          <div className="container">
            <div className="row">
              {/* Product Gallery */}
              <div className="col-lg-6 lightbox-gallery product-gallery sticky-top fit-height">
                <div className="swiper swiper_gallery">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="pd-gallery-slide">
                        <a
                          className="gallery-link"
                          href="assets/images/product-x-1.jpg"
                        >
                          <i className="bi bi-arrows-fullscreen" />
                        </a>{" "}
                        <img
                          src="assets/images/product-x-1.jpg"
                          className="img-fluid"
                          title=""
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="pd-gallery-slide">
                        <a
                          className="gallery-link"
                          href="assets/images/product-x-2.jpg"
                        >
                          <i className="bi bi-arrows-fullscreen" />
                        </a>{" "}
                        <img
                          src="assets/images/product-x-2.jpg"
                          className="img-fluid"
                          title=""
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="pd-gallery-slide">
                        <a
                          className="gallery-link"
                          href="assets/images/product-x-3.jpg"
                        >
                          <i className="bi bi-arrows-fullscreen" />
                        </a>{" "}
                        <img
                          src="assets/images/product-x-3.jpg"
                          className="img-fluid"
                          title=""
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="pd-gallery-slide">
                        <a
                          className="gallery-link"
                          href="assets/images/product-x-4.jpg"
                        >
                          <i className="bi bi-arrows-fullscreen" />
                        </a>{" "}
                        <img
                          src="assets/images/product-x-4.jpg"
                          className="img-fluid"
                          title=""
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="pd-gallery-slide">
                        <a
                          className="gallery-link"
                          href="assets/images/product-x-5.jpg"
                        >
                          <i className="bi bi-arrows-fullscreen" />
                        </a>{" "}
                        <img
                          src="assets/images/product-x-5.jpg"
                          className="img-fluid"
                          title=""
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="pd-gallery-slide">
                        <a
                          className="gallery-link"
                          href="assets/images/product-x-6.jpg"
                        >
                          <i className="bi bi-arrows-fullscreen" />
                        </a>{" "}
                        <img
                          src="assets/images/product-x-6.jpg"
                          className="img-fluid"
                          title=""
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper swiper_thumb_gallery product-thumb">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="pd-gallery-slide-thumb">
                        <img
                          src="assets/images/product-x-1.jpg"
                          className="img-fluid"
                          title=""
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="pd-gallery-slide-thumb">
                        <img
                          src="assets/images/product-x-2.jpg"
                          className="img-fluid
                          
                          
                          "
                          title=""
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="pd-gallery-slide-thumb">
                        <img
                          src="assets/images/product-x-3.jpg"
                          className="img-fluid"
                          title=""
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="pd-gallery-slide-thumb">
                        <img
                          src="assets/images/product-x-4.jpg"
                          className="img-fluid"
                          title=""
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="pd-gallery-slide-thumb">
                        <img
                          src="assets/images/product-x-5.jpg"
                          className="img-fluid"
                          title=""
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="pd-gallery-slide-thumb">
                        <img
                          src="assets/images/product-x-6.jpg"
                          className="img-fluid"
                          title=""
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="swiper-arrow-style-03 swiper-next swiper-next-pd-details_thumb">
                    <i className="bi bi-chevron-right" />
                  </div>
                  <div className="swiper-arrow-style-03 swiper-prev swiper-prev-pd-details_thumb">
                    <i className="bi bi-chevron-left" />
                  </div>
                </div>
              </div>
              {/* End Product Gallery */}
              {/* Product Details */}
              <div className="col-lg-6 ps-lg-5">
                <div className="product-detail pt-4 pt-lg-0">
                  <div className="products-brand pb-2">
                    <span>Brand name</span>
                  </div>
                  <div className="products-title mb-2">
                    <h4 className="h4">{productData.name}</h4>
                  </div>
                  <div className="product-description">
                    <p>{productData.short_description}</p>
                  </div>
                  <div className="product-price fs-3 fw-500 mb-2">
                    <span className="text-primary me-1">
                      ₹{productData.discount_price}
                    </span>
                    <del className="text-muted fs-6">₹{productData.price}</del>
                  </div>
                  <div
                    className="count-down count-down-02 mb-3"
                    data-countdown="January 01, 2024 15:00:00"
                  ></div>
                  <div className="product-detail-actions d-flex flex-wrap pt-3">
                    <div className="cart-qty me-3 mb-3">
                      <div className="dec qty-btn qty_btn">-</div>
                      <input
                        className="cart-qty-input form-control"
                        type="text"
                        name="qtybutton"
                        defaultValue={1}
                      />
                      <div className="inc qty-btn qty_btn">+</div>
                    </div>
                    <div className="cart-button mb-3 d-flex">
                      <button className="btn btn-mode me-3" onClick={openCart}>
                        <i className="fi-shopping-cart" /> Add to cart
                      </button>
                      <button
                        className="btn btn-mode me-3"
                        style={{ backgroundColor: "#002147" }}
                      >
                        <i className="bi bi-lightning-fill" /> Buy Now
                      </button>
                      <button className="btn btn-outline-mode me-3">
                        <i className="fi-heart" />
                      </button>
                    </div>
                  </div>
                  <div className="product-info-buttons nav pt-4">
                    <a
                      href="#"
                      className="me-3"
                      data-bs-toggle="modal"
                      data-bs-target="#px_size_chart_modal"
                    >
                      <i className="bi bi-scissors" />
                      Size guide
                    </a>{" "}
                    <a
                      href="#"
                      className=""
                      data-bs-toggle="modal"
                      data-bs-target="#px_shipping_modal"
                    >
                      <i className="bi bi-truck me-2" />
                      Shipping
                    </a>{" "}
                    <a
                      href="#"
                      className="ms-auto"
                      data-bs-toggle="modal"
                      data-bs-target="#px_ask_modal"
                    >
                      <i className="bi bi-envelope ms-auto" />
                      Ask about product
                    </a>
                  </div>
                  <div className="row g-3 pt-3 border-top mt-3">
                    <div className="col-sm-6 mt-0">
                      <div className="d-flex border p-3">
                        <div className="fs-1 text-primary">
                          <i className="bi bi-truck" />
                        </div>
                        <div className="col ps-3">
                          <h6 className="mb-1">Free shipping</h6>
                          <p className="m-0">Lorem ipsum dolor sit amet</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 mt-0">
                      <div className="d-flex border p-3">
                        <div className="fs-1 text-primary">
                          <i className="bi bi-headphones" />
                        </div>
                        <div className="col ps-3">
                          <h6 className="mb-1">Contact us 24/7</h6>
                          <p className="m-0">Lorem ipsum dolor sit amet</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex border p-3">
                        <div className="fs-1 text-primary">
                          <i className="bi bi-box-arrow-in-left" />
                        </div>
                        <div className="col ps-3">
                          <h6 className="mb-1">30 Days Return</h6>
                          <p className="m-0">Lorem ipsum dolor sit amet</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex border p-3">
                        <div className="fs-1 text-primary">
                          <i className="bi bi-shield-lock" />
                        </div>
                        <div className="col ps-3">
                          <h6 className="mb-1">100% Secure Payment</h6>
                          <p className="m-0">Lorem ipsum dolor sit amet</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3 border-top mt-3 small">
                    <p className="theme-link mb-2">
                      <label className="m-0 text-mode">Categories:</label>{" "}
                      <a href="#">Sunglasses</a>, <a href="#">Winter</a>,{" "}
                      <a href="#">Shorts</a>, <a href="#">Cool</a>
                    </p>
                    <p className="theme-link mb-2">
                      <label className="m-0 text-mode me-1">Tags:</label>
                      {productData?.tags?.map((data, index) => {
                        return (
                          <>
                            <a href={`#${data}`} key={index}>
                              {data}
                            </a>, {' '}
                          </>
                        );
                      })}
                    </p>
                    <p className="theme-link m-0">
                      <label className="m-0 text-mode">Share:</label>{" "}
                      <a className="icon icon-md icon-secondary" href="#">
                        <i className="bi bi-facebook" />{" "}
                      </a>
                      <a className="icon icon-md icon-secondary" href="#">
                        <i className="bi bi-twitter" />{" "}
                      </a>
                      <a className="icon icon-md icon-secondary" href="#">
                        <i className="bi bi-instagram" />{" "}
                      </a>
                      <a className="icon icon-md icon-secondary" href="#">
                        <i className="bi bi-linkedin" />
                      </a>
                    </p>
                  </div>
                  <div className="row mt-3">
                    <div className="col-lg-12">
                      <div className="row align-items-end">
                        <div className="col-sm-6">
                          <h5 className="m-0">Reviews</h5>
                          <div className="rating-star small">
                            <i className="bi small bi-star-fill active" />{" "}
                            <i className="bi small bi-star-fill active" />{" "}
                            <i className="bi small bi-star-fill active" />{" "}
                            <i className="bi small bi-star-fill active" />{" "}
                            <i className="bi small bi-star" />{" "}
                            <span>4.85/5 (400 Reviews)</span>
                          </div>
                        </div>
                        <div className="col-sm-6 text-sm-end">
                          <a href="#view_all_review">View all review</a>
                        </div>
                      </div>
                      <div className="d-flex review-box border-top mt-4 pt-4">
                        <div>
                          <div className="review-image">
                            <img
                              className="img-fluid"
                              src="assets/images/product-1.jpg"
                              title=""
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col ps-3">
                          <h6>Nancy Bayer</h6>
                          <div className="rating-star small">
                            <i className="bi small bi-star-fill active" />{" "}
                            <i className="bi small bi-star-fill active" />{" "}
                            <i className="bi small bi-star-fill active" />{" "}
                            <i className="bi small bi-star-fill active" />{" "}
                            <i className="bi small bi-star" />{" "}
                            <span>13 April 2012</span>
                          </div>
                          <p className="m-0 pt-3 reviews-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor
                          </p>
                        </div>
                      </div>
                      <div className="d-flex review-box border-top mt-4 pt-4">
                        <div>
                          <div className="review-image">
                            <img
                              className="img-fluid"
                              src="assets/images/product-1.jpg"
                              title=""
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col ps-3">
                          <h6>Nancy Bayer</h6>
                          <div className="rating-star small">
                            <i className="bi small bi-star-fill active" />{" "}
                            <i className="bi small bi-star-fill active" />{" "}
                            <i className="bi small bi-star-fill active" />{" "}
                            <i className="bi small bi-star-fill active" />{" "}
                            <i className="bi small bi-star" />{" "}
                            <span>13 April 2012</span>
                          </div>
                          <p className="m-0 pt-3 reviews-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Product Details */}
            </div>
          </div>
        </section>

        <section className="pb-6 py-md-6 pb-lg-8 pt-lg-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 pe-lg-10">
                <h5>Details Description</h5>
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
                <h5 className="pt-3">Sample Unordered List</h5>
                <ul className="mb-5">
                  <li>Comodous in tempor ullamcorper miaculis</li>
                  <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
                  <li>Divamus sit amet purus justo.</li>
                  <li>
                    Proin molestie egestas orci ac suscipit risus posuere
                    loremous
                  </li>
                </ul>
                <h5>Sample Ordered Lista</h5>
                <ol>
                  <li>Comodous in tempor ullamcorper miaculis</li>
                  <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
                  <li>Divamus sit amet purus justo.</li>
                  <li>
                    Proin molestie egestas orci ac suscipit risus posuere
                    loremous
                  </li>
                </ol>
                {/* <blockquote className="bg-gray-100 p-3 lead fw-400 mt-5 text-mode border-start border-primary border-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </blockquote> */}
              </div>
              <div className="col-lg-5 col-md-8 col-sm-10">
                <div className="pb-3">
                  <img
                    src="assets/images/product-6.jpg"
                    className="img-fluid"
                    title=""
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="view-all-review  py-md-3 py-lg-5
        
        
        " id="view_all_review">
          <div className="container">

            <div class="text-center section-heading">
              <h3 class="h1 font-alt">Hear From Our Happy Customers</h3>
            </div>

            <div className="all-reviews-main-wrapper">

              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>
              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>
              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>

              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>
              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>
              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>


            </div>

            <div className="all-reviews-main-wrapper ani-reverse">

              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>
              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>
              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>

              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>
              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>
              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>


            </div>

            <div className="all-reviews-main-wrapper">

              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>
              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>
              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>

              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>
              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
                </div>
              </div>
              <div className="d-flex review-box">
                <div>
                  <div className="review-image">
                    <img
                      className="img-fluid"
                      src="assets/images/product-1.jpg"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
                <div className="col ps-3">
                  <h6>Nancy Bayer</h6>
                  <div className="rating-star small">
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star-fill active" />{" "}
                    <i className="bi small bi-star" />{" "}
                    <span>13 April 2012</span>
                  </div>
                  <p className="m-0 pt-3 reviews-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor
                  </p>
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
      </main>

      <HomeFooter />
    </>
  );
};

export default ProductDetails;
