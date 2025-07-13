import React from 'react'
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";


const Account = () => {
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
                        className="nav-link-style d-flex align-items-center active p-3"
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
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header py-3 d-flex align-items-center">
                        <h6 className="m-0">Billing Address</h6>
                        <a
                          className="ms-auto px-1 lh-sm py-1 btn btn-sm btn-primary"
                          href="#"
                        >
                          <i className="bi bi-pencil-square" />
                        </a>
                      </div>
                      <div className="card-body">
                        <p className="m-0">
                          EDWARD JOE
                          <br />
                          301 The Greenhouse London,
                          <br />
                          E2 8DY UK
                          <br />
                          United Kingdom
                          <br />
                          (0123)-456789
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header py-3 d-flex align-items-center">
                        <h6 className="m-0">Billing Address</h6>
                        <a
                          className="ms-auto px-1 lh-sm py-1 btn btn-sm btn-primary"
                          href="#"
                        >
                          <i className="bi bi-pencil-square" />
                        </a>
                      </div>
                      <div className="card-body">
                        <p className="m-0">
                          EDWARD JOE
                          <br />
                          301 The Greenhouse London,
                          <br />
                          E2 8DY UK
                          <br />
                          United Kingdom
                          <br />
                          (0123)-456789
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mt-5">
                  <div className="card-header py-3">
                    <h6 className="m-0">Add New Address</h6>
                  </div>
                  <div className="card-body">
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="address-fn">
                          First name
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-fn"
                          required=""
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="address-ln">
                          Last name
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-ln"
                          required=""
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="address-company">
                          Company
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-company"
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="address-country">
                          Country
                        </label>{" "}
                        <select
                          className="form-select"
                          id="address-country"
                          required=""
                        >
                          <option value="">Select country</option>
                          <option value="Argentina">Argentina</option>
                          <option value="Belgium">Belgium</option>
                          <option value="France">France</option>
                          <option value="Germany">Germany</option>
                          <option value="Spain">Spain</option>
                          <option value="UK">United Kingdom</option>
                          <option value="USA">USA</option>
                        </select>
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="address-city">
                          City
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="address-city"
                          required=""
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="address-line1">
                          Line 1
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-line1"
                          required=""
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="address-line2">
                          Line 2
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-line2"
                        />
                      </div>
                      <div className="col-sm-6">
                        <label className="form-label" htmlFor="address-zip">
                          ZIP code
                        </label>{" "}
                        <input
                          className="form-control"
                          type="text"
                          id="address-zip"
                          required=""
                        />
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="address-primary"
                          />{" "}
                          <label
                            className="form-check-label"
                            htmlFor="address-primary"
                          >
                            Make this address primary
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary">
                          Add New Address
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

export default Account