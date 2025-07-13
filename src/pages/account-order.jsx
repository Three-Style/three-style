import React from 'react'
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";

const AccountOrder = () => {
  return (
    <>
      <HomeHeader />

      {/* Main */}
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
                        className="nav-link-style d-flex align-items-center active p-3"
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
                <div className="table-responsive fs-md mb-4">
                  <table className="table table-bordered table-hover mb-0">
                    <thead className="text-700 bg-gray-200">
                      <tr>
                        <th className="fw-600">Order #</th>
                        <th className="fw-600">Date Purchased</th>
                        <th className="fw-600">Status</th>
                        <th className="fw-600 text-end">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-info m-0">In Progress</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-danger m-0">Cancel</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-success m-0">Delivered</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-warning m-0">On Hold</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-info m-0">In Progress</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-info m-0">In Progress</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-info m-0">In Progress</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-danger m-0">Cancel</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-success m-0">Delivered</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <a
                            className="text-mode"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            #8560
                          </a>
                        </td>
                        <td className="p-3">May 21, 2021</td>
                        <td className="p-3">
                          <span className="badge bg-warning m-0">On Hold</span>
                        </td>
                        <td className="p-3 text-end">$150</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <div className="d-none d-lg-block">Showing: 1 - 12 of 17</div>
                  <div className="ms-lg-auto">
                    <ul className="pagination m-0">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Content */}
            </div>
          </div>
        </div>
        {/*Table */}
      </main>
      {/* End Main */}

      <HomeFooter />

    </>
  )
}

export default AccountOrder