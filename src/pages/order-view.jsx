import React from 'react'
import HomeHeader from "../components/partials/Header/header";
import HomeFooter from "../components/partials/Footer/footer";
import { Link } from 'react-router-dom';

const OrderView = () => {
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
                  <div class="rating-group m-auto">
                    <input disabled checked class="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio" />
                    <label aria-label="1 star" class="rating__label" for="rating3-1"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                    <input class="rating__input" name="rating3" id="rating3-1" value="1" type="radio" />
                    <label aria-label="2 stars" class="rating__label" for="rating3-2"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                    <input class="rating__input" name="rating3" id="rating3-2" value="2" type="radio" />
                    <label aria-label="3 stars" class="rating__label" for="rating3-3"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                    <input class="rating__input" name="rating3" id="rating3-3" value="3" type="radio" />
                    <label aria-label="4 stars" class="rating__label" for="rating3-4"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                    <input class="rating__input" name="rating3" id="rating3-4" value="4" type="radio" />
                    <label aria-label="5 stars" class="rating__label" for="rating3-5"><i class="rating__icon rating__icon--star fa fa-star"></i></label>
                    <input class="rating__input" name="rating3" id="rating3-5" value="5" type="radio" />
                  </div>
                </div>

              </div>
              {/* Cart Sidebar */}
              <div className="col-lg-4 ps-xl-7">
                {/* Shipping estimates */}
                {/* <div class="card mb-4">
                          <div class="card-header bg-transparent py-3">
                              <h6 class="m-0 h5">Shipping estimates</h6>
                          </div>
                          <div class="card-body">
                              <div class="mb-3"><select class="form-select" required="">
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
                                  <div class="invalid-feedback">Please choose your country!</div>
                              </div>
                              <div class="mb-3"><select class="form-select" required="">
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
                                  <div class="invalid-feedback">Please choose your city!</div>
                              </div>
                              <div class="mb-3"><input class="form-control" type="text"
                                      placeholder="ZIP / Postal code" required="">
                                  <div class="invalid-feedback">Please provide a valid zip!</div>
                              </div><button class="btn btn-outline-primary d-block w-100" type="submit">Calculate
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
    </>
  )
}

export default OrderView