import React from 'react'
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";
import { Link } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
window.bootstrap = bootstrap;

const OrderView = () => {
  const openModal = () => {
    const modalEl = document.getElementById("reviewModal");
    if (modalEl) {
      const modal = new window.bootstrap.Modal(modalEl);
      modal.show();
    }
  };
  return (
    <>

      <HomeHeader />

      <main>
        {/* Breadcrumb */}
        <section className="section">
          <div className="container">
            <div className="row gy-4">
              {/* Cart Items */}
              <div className="col-lg-8">
                <div className="d-flex justify-content-between align-items-center pb-4 border-bottom mb-4">
                  <h2 className="h5 mb-0">Products</h2>
                </div>
                {/* Item*/}
                <div className="d-flex align-items-center flex-row w-100 ">
                  <a className="d-inline-block flex-shrink-0 me-3" href="#">
                    <img
                      src="assets/images/product-1.jpg"
                      width={120}
                      alt="Product"
                    />
                  </a>
                  <div className="d-flex flex-column flex-sm-row col">
                    <div className="pe-sm-2">
                      <h3 className="product-title fs-5 mb-1">
                        <a className="text-reset" href="#">
                          Fine-knit sweater
                        </a>
                      </h3>
                      <div className="small">
                        <span className="text-muted me-2">Size:</span>XL
                      </div>
                      <div className="small">
                        <span className="text-muted me-2">Color:</span>White &amp;
                        Blue
                      </div>
                      <div className="lead pt-1">$154.00</div>
                    </div>
                  </div>
                  <div className="row">
                  </div>

                </div>

                {/* Item*/}
                <div className=" hh-grayBox pt45  mb-0">
                  <div className="row justify-content-between">
                    <div className="order-tracking completed">
                      <span className="is-complete"></span>
                      <p>Ordered<br /><span>Mon, June 24</span></p>
                    </div>
                    <div className="order-tracking completed">
                      <span className="is-complete"></span>
                      <p>Shipped<br /><span>Tue, June 25</span></p>
                    </div>
                    <div className="order-tracking ">
                      <span className="is-complete"></span>
                      <p>Delivered<br /><span>Fri, June 28</span></p>
                    </div>
                  </div>
                </div>

                <div id="full-stars-example-two" className='border-bottom pb-4 text-center '>
                  <div className="rating-group m-auto">
                    <input disabled checked className="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio" />
                    <label aria-label="1 star" className="rating__label" for="rating3-1"
                      data-bs-toggle="modal"
                      data-bs-target="#reviewModal">
                      <i
                        className="rating__icon rating__icon--star fa fa-star"
                        style={{ cursor: "pointer" }}
                        onClick={() => openModal()}
                      ></i>
                    </label>
                    <input className="rating__input" name="rating3" id="rating3-1" value="1" type="radio" />
                    <label aria-label="2 stars" className="rating__label" for="rating3-2"
                      data-bs-toggle="modal"
                      data-bs-target="#reviewModal">
                      <i
                        className="rating__icon rating__icon--star fa fa-star"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </label>
                    <input className="rating__input" name="rating3" id="rating3-2" value="2" type="radio" />
                    <label aria-label="3 stars" className="rating__label" for="rating3-3"
                      data-bs-toggle="modal"
                      data-bs-target="#reviewModal"><i
                        className="rating__icon rating__icon--star fa fa-star"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </label>
                    <input className="rating__input" name="rating3" id="rating3-3" value="3" type="radio" />
                    <label aria-label="4 stars" className="rating__label" for="rating3-4"
                      data-bs-toggle="modal"
                      data-bs-target="#reviewModal"><i
                        className="rating__icon rating__icon--star fa fa-star"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </label>
                    <input className="rating__input" name="rating3" id="rating3-4" value="4" type="radio" />
                    <label aria-label="5 stars" className="rating__label" for="rating3-5"
                      data-bs-toggle="modal"
                      data-bs-target="#reviewModal"><i
                        className="rating__icon rating__icon--star fa fa-star"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </label>
                    <input className="rating__input" name="rating3" id="rating3-5" value="5" type="radio" />
                  </div>
                </div>

              </div>
              {/* Cart Sidebar */}
              <div className="col-lg-4 ps-xl-7">
                {/* Shipping estimates */}
                {/* <div className="card mb-4">
                          <div className="card-header bg-transparent py-3">
                              <h6 className="m-0 h5">Shipping estimates</h6>
                          </div>
                          <div className="card-body">
                              <div className="mb-3"><select className="form-select" required="">
                                      <option value="">Choose your country</option>
                                      <option value="Australia">Australia</option>
                                      <option value="Belgium">Belgium</option>
                                      <option value="Canada">Canada</option>
                                      <option value="Finland">Finland</option>
                                      <option value="Mexico">Mexico</option>
                                      <option value="New Zealand">New Zealand</option>
                                      <option value="Switzerland">Switzerland</option>
                                      <option value="United States">United States</option>
                                  </select>
                                  <div className="invalid-feedback">Please choose your country!</div>
                              </div>
                              <div className="mb-3"><select className="form-select" required="">
                                      <option value="">Choose your city</option>
                                      <option value="Bern">Bern</option>
                                      <option value="Brussels">Brussels</option>
                                      <option value="Canberra">Canberra</option>
                                      <option value="Helsinki">Helsinki</option>
                                      <option value="Mexico City">Mexico City</option>
                                      <option value="Ottawa">Ottawa</option>
                                      <option value="Washington D.C.">Washington D.C.</option>
                                      <option value="Wellington">Wellington</option>
                                  </select>
                                  <div className="invalid-feedback">Please choose your city!</div>
                              </div>
                              <div className="mb-3"><input className="form-control" type="text"
                                      placeholder="ZIP / Postal code" required="">
                                  <div className="invalid-feedback">Please provide a valid zip!</div>
                              </div><button className="btn btn-outline-primary d-block w-100" type="submit">Calculate
                                  shipping</button>
                          </div>
                      </div> */}
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
                        <button className="btn btn-dark btn-sm ms-2">
                          Apply
                        </button>
                      </div>
                    </div>
                    <div className="d-grid gap-2 mx-auto">
                      <Link
                        className="btn btn-primary"
                        to="checkout"
                      >
                        <i className="bi-credit-card-2-back me-2" />
                        Proceed to Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />

      {/* Review Modal */}
      <div
        className="modal fade"
        id="reviewModal"
        tabIndex="-1"
        aria-labelledby="reviewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <h5
                className="modal-title w-100 text-center"
                id="reviewModalLabel"
              >
                Write a Review
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form className="review-form">
                {/* Upload Images */}
                <div className="mb-3">
                  <label htmlFor="reviewImages" className="form-label">
                    Upload Images
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="reviewImages"
                    accept="image/*"
                    multiple
                  />

                  {/* Image Preview Example */}
                  <div className="d-flex flex-wrap gap-2 mt-3">
                    <div className="border rounded p-1">
                      <img
                        src="https://via.placeholder.com/80"
                        alt="Preview"
                        className="img-fluid rounded"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <div className="mb-3">
                  <label htmlFor="reviewText" className="form-label">
                    Your Review
                  </label>
                  <textarea
                    className="form-control"
                    id="reviewText"
                    rows="4"
                    placeholder="Write your experience..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary w-100">
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>


  )
}

export default OrderView