import React from 'react'
import HomeFooter from "../components/partials/Footer/footer";
import HomeHeader from "../components/partials/Header/header";

const AccountWishlist = () => {
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
                        className="nav-link-style d-flex align-items-center active p-3"
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
                <div className="row g-2">
                  {/* Product */}
                  <div className="col-6 col-md-4">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="bi bi-x p-0 lh-1" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
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
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="bi bi-x p-0 lh-1" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
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
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
                        </h6>
                        <div className="product-price">
                          <span className="text-primary">$28</span>
                          <del className="small text-muted">$38</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-md-4">
                    <div className="product-card-9">
                      <div className="product-card-image">
                        <div className="badge-ribbon">
                          <span>15%</span>
                        </div>
                        <div className="product-action">
                          <a href="#" className="btn">
                            <i className="bi bi-x p-0 lh-1" />
                          </a>
                        </div>
                        <div className="product-media">
                          <a href="#">
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
                          </a>
                        </div>
                      </div>
                      <div className="product-card-info">
                        <h6 className="product-title">
                          <a href="#">
                            Laxmipati Cocktail K-055 Satin Silk Navy Blue Saree
                          </a>
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

export default AccountWishlist