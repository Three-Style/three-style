import React from 'react'
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";

const AccountPayment = () => {
  return (
    <>
      <HomeHeader />

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
                        className="nav-link-style d-flex align-items-center p-3"
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
                        className="nav-link-style d-flex align-items-center active p-3"
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
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header py-3 d-flex align-items-center">
                        <h6 className="m-0">Visa Card</h6>
                        <span className="ms-auto">
                          <img
                            width={40}
                            src="assets/images/card-visa.png"
                            title=""
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-12">
                            <span className="small letter-spacing-2">
                              CARD NUMBER
                            </span>
                            <h6 className="m-0 mt-1">xxxx xxxx xxxx 5050</h6>
                          </div>
                          <div className="col-8">
                            <span className="small letter-spacing-2">
                              NAME OF CARD
                            </span>
                            <h6 className="m-0 mt-1">Nancy Bayers</h6>
                          </div>
                          <div className="col-4">
                            <span className="small letter-spacing-2">
                              VALIDITY
                            </span>
                            <h6 className="m-0 mt-1">xx / xx</h6>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer d-flex p-3">
                        <a className="link-mode text-uppercase fw-500" href="#">
                          Edit{" "}
                        </a>
                        <a
                          className="link-danger text-uppercase fw-500 ms-auto"
                          href="#"
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header py-3 d-flex align-items-center">
                        <h6 className="m-0">Master Card</h6>
                        <span className="ms-auto">
                          <img
                            width={40}
                            src="assets/images/card-master.png"
                            title=""
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-12">
                            <span className="small letter-spacing-2">
                              CARD NUMBER
                            </span>
                            <h6 className="m-0 mt-1">xxxx xxxx xxxx 5050</h6>
                          </div>
                          <div className="col-8">
                            <span className="small letter-spacing-2">
                              NAME OF CARD
                            </span>
                            <h6 className="m-0 mt-1">Nancy Bayers</h6>
                          </div>
                          <div className="col-4">
                            <span className="small letter-spacing-2">
                              VALIDITY
                            </span>
                            <h6 className="m-0 mt-1">xx / xx</h6>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer d-flex p-3">
                        <a className="link-mode text-uppercase fw-500" href="#">
                          Edit{" "}
                        </a>
                        <a
                          className="link-danger text-uppercase fw-500 ms-auto"
                          href="#"
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-5">
                  <div className="card-header py-3">
                    <h6 className="m-0">Add New Address</h6>
                  </div>
                  <div className="card-body p-3">
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <input
                          className="form-control"
                          type="text"
                          id="cc-number_1"
                          data-format="card"
                          placeholder="Card number"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          className="form-control"
                          type="text"
                          id="cc-number"
                          data-format="card"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="col-sm-6">
                        <div className="row">
                          <div className="col-7 form-group">
                            <input
                              className="form-control"
                              type="text"
                              id="cc-expiry"
                              data-format="date"
                              placeholder="Expiry Date"
                            />
                          </div>
                          <div className="col-5 form-group">
                            <input
                              className="form-control"
                              type="password"
                              id="cc-cvc"
                              data-format="cvc"
                              placeholder="CVC"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <button
                          className="btn btn-primary d-block w-100"
                          type="submit"
                        >
                          Register this card
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Content */}
            </div>
          </div>
        </div>
        {/*Table */}
      </main>

      <HomeFooter />

    </>

  )
}

export default AccountPayment