import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";
import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import { useCart } from "../context/CartContext";
import { Link, useLocation } from "react-router-dom";
import { axiosInstance, publicAxiosInstance } from "../assets/js/config/api";
import ProductReviews from "../components/ProductReviews";
import dayjs from "dayjs";

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
  const [selectedImage, setSelectedImage] = useState();
  const [productQuantity, setProductQuantity] = useState(1);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [starPercentages, setStarPercentages] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });
  const [reviews, setReviews] = useState([]);

  const getUserData = async () => {
    try {
      const response = await publicAxiosInstance.get(
        `/products?id=${product_id}`
      );
      const filteredData = response.data.data;
      setProductData(filteredData);
    } catch (error) {
      console.error("Error in getUserData:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    getBookFeedback();
  }, []);

  const getBookFeedback = () => {
    publicAxiosInstance
      .get(`/feedback/products?product_id=${product_id}`)
      .then((response) => {
        const { data } = response;
        if (data && data.status === 200) {
          const feedback = data.data;
          if (feedback && feedback.length > 0) {
            let totalPoints = 0;
            let feedbackCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
            feedback.forEach((feedbackItem) => {
              totalPoints += feedbackItem.feedback_point;
              feedbackCount[feedbackItem.feedback_point]++;
            });

            const averagePoints = totalPoints / feedback.length;
            setAverageRating(averagePoints.toFixed(1));
            setTotalReviews(feedback.length);

            const feedbackCountPercentage = {};
            for (let i = 1; i <= 5; i++) {
              feedbackCountPercentage[i] =
                (feedbackCount[i] / feedback.length) * 100 || 0;
            }
            setStarPercentages(feedbackCountPercentage);

            setReviews(feedback);
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching product feedback:", error);
      });
  };

  const addToCartProduct = async (data) => {
    const response = await axiosInstance.post("/order-cart/add-item", {
      item_id: data._id,
      quantity: productQuantity || 1,
      item_type: "CLOTHING_PRODUCT",
    });
    if (response.data.response === "OK") {
      localStorage.setItem('is_cart_product', true)
      openCart();
    }
  };

  return (
    <>
      <HomeHeader />

      <main>
        <section className="product-details py-6">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 lightbox-gallery product-gallery fit-height">
                <div className="swiper swiper_gallery">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="pd-gallery-slide">
                        <a
                          className="gallery-link"
                          href={`https://files.threestyle.in/${selectedImage
                            ? selectedImage
                            : productData?.display_image?.[0]
                            }`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-arrows-fullscreen" />
                        </a>
                        <img
                          src={`https://files.threestyle.in/${selectedImage
                            ? selectedImage
                            : productData?.display_image?.[0]
                            }`}
                          className="img-fluid"
                          alt="Selected"
                          width="100%"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper swiper_thumb_gallery product-thumb">
                  <div className="swiper-wrapper">
                    {productData?.display_image?.map((data, index) => (
                      <div className="swiper-slide" key={index}>
                        <div
                          className="pd-gallery-slide-thumb"
                          style={{ cursor: "pointer" }}
                          onClick={() => setSelectedImage(data)}
                        >
                          <img
                            src={`https://files.threestyle.in/${data}`}
                            className="img-fluid"
                            alt={`Thumbnail ${index + 1}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="swiper-arrow-style-03 swiper-next swiper-next-pd-details_thumb">
                    <i className="bi bi-chevron-right" />
                  </div>
                  <div className="swiper-arrow-style-03 swiper-prev swiper-prev-pd-details_thumb">
                    <i className="bi bi-chevron-left" />
                  </div>
                </div>
              </div>
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

                  <div className="product-attribute">
                    <label className="fs-6 text-mode pb-2 fw-500">Color</label>
                    <div className="nav-thumbs nav mb-3">
                      <div className="form-check radio-color large form-check-inline me-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="color_1"
                          id="color_01"
                          defaultChecked
                        />
                        <label className="radio-color-label" htmlFor="color_01">
                          <span style={{ backgroundColor: '#126532' }}></span>
                        </label>
                      </div>
                      <div className="form-check radio-color large form-check-inline me-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="color_1"
                          id="color_2"
                        />
                        <label className="radio-color-label" htmlFor="color_2">
                          <span style={{ backgroundColor: '#ff9922' }}></span>
                        </label>
                      </div>
                      <div className="form-check radio-color large form-check-inline me-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="color_1"
                          id="color_3"
                        />
                        <label className="radio-color-label" htmlFor="color_3">
                          <span style={{ backgroundColor: '#326598' }}></span>
                        </label>
                      </div>
                      <div className="form-check radio-color large form-check-inline me-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="color_1"
                          id="color_4"
                        />
                        <label className="radio-color-label" htmlFor="color_4">
                          <span style={{ backgroundColor: '#126578' }}></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="product-detail-actions d-flex flex-wrap pt-3">
                    <div className="cart-qty me-3 mb-3">
                      <div className="dec qty-btn qty_btn" onClick={() => setProductQuantity(productQuantity - 1)}>-</div>
                      <input
                        className="cart-qty-input form-control"
                        type="text"
                        name="qtybutton"
                        defaultValue={1}
                        value={productQuantity}
                      />
                      <div className="inc qty-btn qty_btn" onClick={() => setProductQuantity(productQuantity + 1)}>+</div>
                    </div>
                    <div className="cart-button mb-3 d-flex">
                      <button
                        className="btn btn-mode me-sm-3 me-2"
                        onClick={() => {
                          addToCartProduct(productData);
                        }}
                      >
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
                    {/* <a
                      href="#"
                      className="me-3"
                      data-bs-toggle="modal"
                      data-bs-target="#px_size_chart_modal"
                    >
                      <i className="bi bi-scissors" />
                      Size guide
                    </a> */}
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
                      <div className="d-flex border p-3 h-100">
                        <div className="fs-1 text-primary">
                          <i className="bi bi-truck" />
                        </div>
                        <div className="col ps-3">
                          <h6 className="mb-1">Free shipping</h6>
                          <p className="m-0">Above ₹1999 order</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 mt-0">
                      <div className="d-flex border p-3 h-100">
                        <div className="fs-1 text-primary">
                          <i className="bi bi-headphones" />
                        </div>
                        <div className="col ps-3">
                          <h6 className="mb-1">Contact us 24/7</h6>
                          <p className="m-0">We’re here anytime</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex border p-3 h-100">
                        <div className="fs-1 text-primary">
                          <i className="bi bi-box-arrow-in-left" />
                        </div>
                        <div className="col ps-3">
                          <h6 className="mb-1">7 Days Return</h6>
                          <p className="m-0">Easy return within 7 days</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex border p-3 h-100">
                        <div className="fs-1 text-primary">
                          <i className="bi bi-shield-lock" />
                        </div>
                        <div className="col ps-3">
                          <h6 className="mb-1">100% Secure Payment</h6>
                          <p className="m-0">Your payment is safe</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3 border-top mt-3 small">
                    <p className="theme-link mb-2">
                      <label className="m-0 text-mode">Categories:</label>{" "}
                      {productData?.categories?.name || "-"}
                    </p>
                    <p className="theme-link mb-2">
                      <label className="m-0 text-mode me-1">Tags:</label>
                      {productData?.tags?.map((data, index) => (
                        <span key={index}>
                          <a href={`#${data}`}>{data}</a>
                          {index !== productData.tags.length - 1 && ", "}
                        </span>
                      ))}
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
                      {reviews.map((feedback, index) => (
                        <div
                          key={index}
                          className="d-flex review-box border-top mt-4 pt-4"
                        >
                          <div>
                            <div className="review-image">
                              <img
                                className="img-fluid"
                                src={
                                  feedback?.user?.profile_image
                                    ? `https://files.threestyle.in/${feedback?.user?.profile_image}`
                                    : "assets/images/product-1.jpg"
                                }
                                title=""
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="col ps-3">
                            <h6>
                              {feedback?.user?.first_name || "TS User"}{" "}
                              {feedback?.user?.last_name || ""}
                            </h6>
                            <div className="rating-star small">
                              {[1, 2, 3, 4, 5].map((value) => (
                                <i
                                  key={value}
                                  className={`bi small ${
                                    feedback.feedback_point >= value
                                      ? "bi-star-fill active"
                                      : "bi-star"
                                  } `}
                                />
                              ))}
                              <span className="ms-1">
                                {dayjs(feedback.createdAt).format(
                                  "D MMMM YYYY"
                                )}
                              </span>
                            </div>
                            <p className="m-0 pt-3 reviews-description">
                              {feedback.feedback_comment}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
        <ProductReviews />
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
                          <a className="btn" 
                            data-bs-toggle="offcanvas"
                            href="#modalMiniCart"
                            role="button"
                            aria-controls="modalMiniCart">
                            <i className="fi-heart" />
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
                          <a className="btn" 
                            data-bs-toggle="offcanvas"
                            href="#modalMiniCart"
                            role="button"
                            aria-controls="modalMiniCart">
                            <i className="fi-heart" />
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
                          <a className="btn" 
                            data-bs-toggle="offcanvas"
                            href="#modalMiniCart"
                            role="button"
                            aria-controls="modalMiniCart">
                            <i className="fi-heart" />
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
                          <a className="btn" 
                            data-bs-toggle="offcanvas"
                            href="#modalMiniCart"
                            role="button"
                            aria-controls="modalMiniCart">
                            <i className="fi-heart" />
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
                          <a className="btn" 
                            data-bs-toggle="offcanvas"
                            href="#modalMiniCart"
                            role="button"
                            aria-controls="modalMiniCart">
                            <i className="fi-heart" />
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
      </main>

      {/* MODAL for shipping,size,Ask about product guide */}
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

      <HomeFooter />
    </>
  );
};

export default ProductDetails;
