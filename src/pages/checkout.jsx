import React from 'react'
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";

const Checkout = () => {
  return (
    <>
      <HomeHeader />

      <main>
        {/* Breadcrumb */}
        <div className="py-6">
          <div className="container">
            <div className="row flex-row-reverse">
              {/* sidebar */}
              <div className="col-lg-5 ps-lg-5">
                <div className="card">
                  <div className="card-body">
                    <ul className="list-unstyled m-0 p-0">
                      <li className="pb-3 mb-3 border-bottom">
                        <div className="row align-items-center">
                          <div className="col-4 col-md-2 col-lg-2">
                            {/* Image */}{" "}
                            <a href="#">
                              <img
                                className="img-fluid border"
                                src="assets/images/product-2.jpg"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div className="col-8">
                            {/* Title */}
                            <p className="mb-1">
                              <a className="text-mode fw-500" href="#">
                                Cotton floral print Dress
                              </a>{" "}
                              <span className="m-0 text-muted w-100 d-block">
                                $40.00
                              </span>
                            </p>
                            {/* Remove */}
                            {/* <a className="small link-danger ms-auto" href="#!"><i
                                                      className="bi bi-x"></i> Remove</a> */}
                          </div>
                        </div>
                      </li>
                      <li className="pb-3 mb-3 border-bottom">
                        <div className="row align-items-center">
                          <div className="col-4 col-md-2 col-lg-2">
                            {/* Image */}{" "}
                            <a href="#">
                              <img
                                className="img-fluid border"
                                src="assets/images/product-2.jpg"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div className="col-8">
                            {/* Title */}
                            <p className="mb-1">
                              <a className="text-mode fw-500" href="#">
                                Cotton floral print Dress
                              </a>{" "}
                              <span className="m-0 text-muted w-100 d-block">
                                $40.00
                              </span>
                            </p>
                            {/* Remove */}
                            {/* <a className="small link-danger ms-auto" href="#!"><i
                                                      className="bi bi-x"></i> Remove</a> */}
                          </div>
                        </div>
                      </li>
                      <li className="pb-3 mb-3 border-bottom">
                        <div className="row align-items-center">
                          <div className="col-4 col-md-2 col-lg-2">
                            {/* Image */}{" "}
                            <a href="#">
                              <img
                                className="img-fluid border"
                                src="assets/images/product-2.jpg"
                                alt="..."
                              />
                            </a>
                          </div>
                          <div className="col-8">
                            {/* Title */}
                            <p className="mb-1">
                              <a className="text-mode fw-500" href="#">
                                Cotton floral print Dress
                              </a>{" "}
                              <span className="m-0 text-muted w-100 d-block">
                                $40.00
                              </span>
                            </p>
                            {/* Remove */}
                            {/* <a className="small link-danger ms-auto" href="#!"><i
                                                      className="bi bi-x"></i> Remove</a> */}
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul className="list-unstyled m-0">
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
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="card">
                  <div className="card-body">
                    <h5 className="border-bottom mb-4 pb-3">Shipping address</h5>
                    <form>
                      <div className="row">
                        <div className="col-sm-6 mb-3">
                          <label className="form-label">First Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-sm-6 mb-3">
                          <label className="form-label">Last Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-sm-6 mb-3">
                          <label className="form-label">Email Address</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-sm-6 mb-3">
                          <label className="form-label">Street</label>{" "}
                          <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail3"
                          />
                        </div>
                        <div className="col-sm-6 mb-3">
                          <label className="form-label">City</label>{" "}
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-sm-6 mb-3">
                          <label className="form-label">ZIP</label>{" "}
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-sm-6 mb-3">
                          <label className="form-label">State</label>{" "}
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-sm-6 mb-3">
                          <label className="form-label">Phone Number</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              id="flexCheckDefault"
                            />{" "}
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Use a different shipping address
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="pt-4">
                  <button type="submit" className="btn btn-primary w-100">
                    Place Order
                  </button>
                  <p className="m-0 pt-3">
                    By placing your order you agree to our{" "}
                    <a href="#">Terms &amp; Conditions</a>,{" "}
                    <a href="#">privacy and returns</a> policies. You also consent
                    to some of your data being stored by ShopApp, which may be
                    used to make future shopping experiences better for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Table */}
      </main>

      <HomeFooter />

    </>
  )
}

export default Checkout