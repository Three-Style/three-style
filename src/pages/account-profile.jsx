import React from 'react'
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";

const AccountProfile = () => {
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
                        className="nav-link-style d-flex align-items-center active p-3"
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
                <div className="card mb-5">
                  <div className="card-header py-3">
                    <h5 className="m-0">Profile Update</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="formFile" className="form-label">
                          Change Profile Photo
                        </label>{" "}
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          First Name<span className="text-danger">*</span>
                        </label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          Last Name<span className="text-danger">*</span>
                        </label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          Email address<span className="text-danger">*</span>
                        </label>{" "}
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail3"
                          placeholder="E-mail"
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">
                          Mobile Number<span className="text-danger">*</span>
                        </label>{" "}
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mobile"
                        />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label className="form-label">Landline Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Landline"
                        />
                      </div>
                      <div className="col-12 pt-2">
                        <button className="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header py-3">
                    <h5 className="m-0">Change your password</h5>
                  </div>
                  <div className="card-body p-4">
                    <form>
                      <div className="row">
                        <div className="col-sm-12 mb-3">
                          <div className="form-group">
                            <label htmlFor="password_old" className="form-label">
                              Old password
                            </label>{" "}
                            <input
                              type="password"
                              id="password_old"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                          <div className="form-group">
                            <label htmlFor="password_1" className="form-label">
                              New password
                            </label>{" "}
                            <input
                              type="password"
                              id="password_1"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                          <div className="form-group">
                            <label htmlFor="password_2" className="form-label">
                              Retype new password
                            </label>
                            <input
                              type="password"
                              id="password_2"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-12 pt-2">
                          <button className="btn btn-primary">
                            Change password
                          </button>
                        </div>
                      </div>
                    </form>
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

export default AccountProfile